from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample profiles (demo data)
profiles = [
    {"name": "Riya", "skills": "Python, Machine Learning, Data Science"},
    {"name": "Amit", "skills": "Web Development, JavaScript, React"},
    {"name": "Kunal", "skills": "Data Analysis, Python, SQL"},
    {"name": "Tanya", "skills": "Artificial Intelligence, Deep Learning, Python"}
]

def find_best_match(user_skills, profiles):
    """
    Returns best matching profile using TF-IDF cosine similarity.
    """
    # Convert all skills into text list
    texts = [p["skills"] for p in profiles]

    # Convert words into numeric vectors
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform(texts)

    # Transform user input into same vector space
    user_vector = vectorizer.transform([user_skills])

    # Compare user with all profiles
    similarities = cosine_similarity(user_vector, vectors)

    # Return profile with highest similarity
    return profiles[similarities.argmax()]

# --- Main execution ---
if __name__ == "__main__":
    user_input = input("Enter your skills: ")
    best_match = find_best_match(user_input, profiles)
    print(f"\nBest match for you: {best_match['name']} ({best_match['skills']})")
