import json
import random
import numpy as np
import nltk
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import SGD
import pickle
import glob

lemmatizer = WordNetLemmatizer()

# --------------------------------------------------------
# LOAD + MERGE ALL INTENTS (your structure -> model format)
# --------------------------------------------------------
def load_all_intents():
    merged = {"intents": []}

    for file in glob.glob("ames_intents_json_files/*.json"):
        try:
            with open(file, "r", encoding="utf-8") as f:
                data = json.load(f)

            if "intents" not in data:
                print(f"⚠ Skipped {file}: missing 'intents'")
                continue

            for intent in data["intents"]:
                # Validate your keys
                if "intent" not in intent or "samples" not in intent or "responses" not in intent:
                    print(f"⚠ Skipped invalid intent in {file}: {intent}")
                    continue

                # Convert your structure to the expected one
                merged["intents"].append({
                    "tag": intent["intent"],
                    "patterns": intent["samples"],
                    "responses": intent["responses"]
                })

        except Exception as e:
            print(f"❌ Error loading {file}: {e}")

    print("✨ Total intents loaded:", len(merged["intents"]))
    return merged


intents = load_all_intents()

# ----------------------------
# REST OF YOUR ORIGINAL LOGIC
# ----------------------------

words = []
classes = []
documents = []
ignore_letters = ['?', '!', '.', ',']

for intent in intents["intents"]:
    for pattern in intent["patterns"]:
        word_list = nltk.word_tokenize(pattern)
        words.extend(word_list)
        documents.append((word_list, intent["tag"]))
        if intent["tag"] not in classes:
            classes.append(intent["tag"])

words = [lemmatizer.lemmatize(w.lower()) for w in words if w not in ignore_letters]
words = sorted(list(set(words)))
classes = sorted(list(set(classes)))

pickle.dump(words, open("words.pkl", "wb"))
pickle.dump(classes, open("classes.pkl", "wb"))

training = []
output_empty = [0] * len(classes)

for document in documents:
    bag = []
    word_patterns = [lemmatizer.lemmatize(w.lower()) for w in document[0]]
    for w in words:
        bag.append(1 if w in word_patterns else 0)

    output_row = output_empty[:]
    output_row[classes.index(document[1])] = 1

    training.append([bag, output_row])

random.shuffle(training)
training = np.array(training, dtype=object)

train_x = np.array(list(training[:, 0]))
train_y = np.array(list(training[:, 1]))

# Build model
model = Sequential()
model.add(Dense(128, input_shape=(len(train_x[0]),), activation="relu"))
model.add(Dropout(0.5))
model.add(Dense(64, activation="relu"))
model.add(Dropout(0.5))
model.add(Dense(len(train_y[0]), activation="softmax"))

sgd = SGD(learning_rate=0.01, momentum=0.9, nesterov=True)
model.compile(loss="categorical_crossentropy", optimizer=sgd, metrics=["accuracy"])

model.fit(train_x, train_y, epochs=200, batch_size=5, verbose=1)
model.save("model.h5")

print("🎉 Model trained and saved successfully!")
