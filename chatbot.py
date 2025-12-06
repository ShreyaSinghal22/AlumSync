import json, random, os
from matching import find_best_match, profiles
from nlp_utils import preprocess

# -----------------------------------------
# Load all intents from the folder
# -----------------------------------------
INTENTS_DIR = "ames_intents_json_files"

all_intents = []

for file in os.listdir(INTENTS_DIR):
    if file.endswith(".json"):
        with open(os.path.join(INTENTS_DIR, file), "r", encoding="utf-8") as f:
            data = json.load(f)
            all_intents.extend(data["intents"])

print(f"✨ Loaded {len(all_intents)} intents from '{INTENTS_DIR}'")


# -----------------------------------------
# Intent detection
# -----------------------------------------
def get_intent(user_input):
    user_tokens = preprocess(user_input).split()
    best_tag = "unknown"
    best_score = 0

    for intent in all_intents:
        for pattern in intent["samples"]:     # updated key
            pattern_tokens = preprocess(pattern).split()
            score = len(set(user_tokens) & set(pattern_tokens))
            if score > best_score:
                best_score = score
                best_tag = intent["intent"]    # updated key

    return best_tag


# -----------------------------------------
# Response selection
# -----------------------------------------
def get_response(tag):
    for intent in all_intents:
        if intent["intent"] == tag:
            return random.choice(intent["responses"])
    return "Sorry, I didn’t get that."


# -----------------------------------------
# Chat loop (for testing)
# -----------------------------------------
if __name__ == "__main__":
    print("🤖 Chatbot is running! Type 'exit' to stop.\n")
    while True:
        user_input = input("You: ")

        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Bot: Bye! Have a nice day!")
            break

        tag = get_intent(user_input)
        response = get_response(tag)

        # alumni matching intent
        if tag == "find_alumni":
            print("Bot:", response)
            user_skills = input("Please enter the skills you’re looking for: ")
            best_match = find_best_match(user_skills, profiles)
            print(f"Bot: Best match found — {best_match['name']} ({best_match['skills']})")
        else:
            print("Bot:", response)


# -----------------------------------------
# For Flask / web use
# -----------------------------------------
def chatbot_response(user_input):
    tag = get_intent(user_input)
    return get_response(tag)
