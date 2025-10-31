# 🎓 Alumni Chatbot — AI/ML Based Alumni Interaction System

## 👩‍💻 Role

**Developed by:** *AI/ML Engineer — Riya Sharma*

This chatbot helps students and alumni connect easily using Natural Language Processing (NLP) and a Machine Learning model. It can answer FAQs, register alumni, find alumni based on skills, and provide event details.

---

## 🧠 Project Overview

This project uses **Python, TensorFlow, and NLP techniques** to:

* Understand user queries using **intent classification**.
* Store and use pre-defined intents from `intents.json`.
* Match user-entered skills with alumni profiles using **TF-IDF + Cosine Similarity**.
* Provide an interactive **chat-based interface** to connect alumni and students.

---

## 📁 Folder Structure

```
ALUMNI_CHATBOT/
│
├── chatbot.py           # Main chatbot execution file (runs the model + matching)
├── train_chatbot.py     # Trains the model on intents.json
├── intents.json         # Contains intents, patterns, and responses
├── matching.py          # Logic for skill-based alumni matching
├── nlp_utils.py         # NLP preprocessing utilities (tokenization, stemming, etc.)
├── profiles.json        # Sample alumni data with skills and details
├── model.h5             # Trained chatbot model
├── classes.pkl          # Saved output labels
├── words.pkl            # Saved vocabulary
├── README.md            # Documentation file
└── __pycache__/         # Auto-generated cache folder
```

---

## ⚙️ Installation

### Step 1: Clone or open the folder

Open your project folder (`ALUMNI_CHATBOT`) in VS Code or terminal.

### Step 2: Install dependencies

Run this command in terminal:

```bash
pip install tensorflow nltk scikit-learn numpy
```

### Step 3: Train the chatbot

Run:

```bash
python train_chatbot.py
```

This will create:

* `model.h5`
* `words.pkl`
* `classes.pkl`

### Step 4: Run the chatbot

Run:

```bash
python chatbot.py
```

Then type messages like 👇

```
hi  
find alumni  
python  
```

---

## 🧩 Example Interaction

**User:** hi
**Bot:** Hey there! How can I help you today?

**User:** find alumni
**Bot:** Sure! Tell me the skill or field you want to find alumni in.

**User:** python
**Bot:** Best match: Rahul Sharma (Python, Django, Flask)

---

## 🧠 Model Logic Summary

* **Intent Classification:**
  Uses a neural network (TensorFlow Sequential model) trained on `intents.json` patterns.

* **Alumni Matching:**
  Uses TF-IDF vectorization and cosine similarity to find the best profile match for a user’s skill.

* **NLP Preprocessing:**
  Tokenization, stemming, and bag-of-words generation done via `nlp_utils.py`.

---

## 💬 Future Improvements

* Add GUI or Web UI for chatbot interaction.
* Integrate database for real alumni data storage.
* Enhance model accuracy with more intents and training data.

---


