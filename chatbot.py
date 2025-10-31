import json, random
from matching import find_best_match, profiles

from nlp_utils import preprocess

# Load intents
with open('intents.json') as f:
    intents = json.load(f)['intents']

def get_intent(user_input):
    user_tokens = preprocess(user_input).split()
    best_tag = "unknown"
    best_score = 0

    for intent in intents:
        for pattern in intent["patterns"]:
            pattern_tokens = preprocess(pattern).split()
            score = len(set(user_tokens) & set(pattern_tokens))
            if score > best_score:
                best_score = score
                best_tag = intent["tag"]
    return best_tag

def get_response(tag):
    for intent in intents:
        if intent["tag"] == tag:
            return random.choice(intent["responses"])
    return "Sorry, I didn’t get that."

# Interactive chat loop
if __name__ == "__main__":
    print("🤖 Chatbot is running! Type 'exit' to stop.\n")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Bot: Bye! Have a nice day!")
            break
        intent = get_intent(user_input)
        response = get_response(intent)
        if intent == "find_alumni":
            print("Bot:", response)
            user_skills = input("Please enter the skills you’re looking for: ")
            best_match = find_best_match(user_skills, profiles)
            print(f"Bot: Best match found — {best_match['name']} ({best_match['skills']})")
        else:
            print("Bot:", response)


def chatbot_response(user_input):
    """
    Takes user input, predicts intent, and returns chatbot's response.
    """
    tag = get_intent(user_input)
    return get_response(tag)
