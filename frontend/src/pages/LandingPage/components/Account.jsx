export default function Account() {
    return (
        <section className="account">
            <div className="acc-box">
                <div className="acc-glow"></div>
                <h2 className="acctext">Ready to reconnect with your roots?</h2>
                <p className="accdetail">Join thousands of students and alumni already on AlumSync. Free forever for students.</p>
                <button className="acc-btn" onClick={() => {
                    document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" });
                    window.location.hash = "auth?mode=signup";
                }}>Create Free Account</button>
            </div>
        </section>
    );
}