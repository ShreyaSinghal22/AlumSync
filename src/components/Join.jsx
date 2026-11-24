import { useState, useEffect } from "react";
export default function Join () {

    const [role, setRole] = useState("Student");
    const [activeTab, setActiveTab] = useState('login');
    function switchTab(tab) {
        setActiveTab(tab);
    }
    useEffect(() => {
    const handleHashChange = () => {
    const hash = window.location.hash;

    if (hash.includes("signup")) setActiveTab("signup");
    else if (hash.includes("login")) setActiveTab("login");
  };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

  return () => window.removeEventListener("hashchange", handleHashChange);
}, []);
    const [loginData, setLoginData] = useState({
    email: "",
    password: "",
});

const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
});
    const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const handleSignup = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...signupData, role }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

    return (
        <section id="auth" className="join">
            <div className="join-blob"></div>
            <div className="join-wrapper">
                <div className="join-header">
                    <span className="eyebrow">Join AlumSync</span>
                    <h2 className="join-title">{activeTab === "login" ? "Welcome Back👋" : "Let’s get you in🚀"}</h2>
                    <p className="join-sub">{activeTab === "login" ? "Log in to your account in seconds." : "Create your free account in seconds."}</p>
                </div>
                <div className="join-card">
                    <div className="join-tabs">
                        <button className={`join-tab ${activeTab === "login" ? "active" : ""}`} id="tab-login" onClick={() => switchTab('login')}>Log In</button>
                        <button className={`join-tab ${activeTab === "signup" ? "active" : ""}`} id="tab-signup" onClick={() => switchTab('signup')}>Sign Up</button>
                    </div>

                    {/* LOGIN FORM */}
                    {activeTab === 'login' && (
                    <div className="join-form-visible" id="form-login">
                        <div className="social-btns">
                            <button className="soc-btn">🔵 Google</button>
                            <button className="soc-btn">⬛Github</button>
                        </div>
                        <div className="divider-row">
                            <div className="div-line"></div>
                            <div className="div-text">{activeTab ==="login" 
                        ? "or log in with email" : "or sign up with email"}
                        </div>
                            <div className="div-line"></div>
                        </div>
                        <div className="field">
                            <label>Email Address</label>
                            <input className="field"
                            type="email" placeholder="you@institution.edu" name="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value})} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input className="field" type="password" placeholder="Enter your password" name="password"value={loginData.password}  onChange={(e) =>setLoginData({ ...loginData, password: e.target.value })
                            }/>
                        </div>
                        <div className="forgot">
                            <a href="#auth">Forgot password?</a>
                        </div>
                        <button className="submit-btn" onClick={handleLogin}>Log In to AlumSync</button>
                        <div className="form-footer">Don't have an account? <a onClick={() => switchTab('signup')}>Sign up free</a></div>
                    </div>
                    )}
                    {/* SIGNUP FORM */}
                    {activeTab === "signup" && (
                    <div className="join-form-visible" id="form-signup">
                        <div className="social-btns">
                            <button className="soc-btn">🔵 Google</button>
                            <button className="soc-btn">⬛Github</button>
                        </div>
                        <div className="divider-row">
                            <div className="div-line"></div>
                            <div className="div-text">or sign up with email</div>
                            <div className="div-line"></div>
                        </div>
                        <div className="form-row">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" placeholder="Aditya" name="firstName" value={signupData.firstName} onChange={(e) =>setSignupData({ ...signupData, firstName: e.target.value })
                                }/>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Mehra" name="lastName" value={signupData.lastName}
                                onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })
                                }/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Institutional Email</label>
                            <input type="email" placeholder="you@institution.edu" name="email"
                            value={signupData.email} onChange={(e) =>
                            setSignupData({ ...signupData, email: e.target.value })}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" placeholder="Create a strong password" name="password" value={signupData.password} onChange={(e) =>
                            setSignupData({ ...signupData, password: e.target.value })}/>
                        </div>
                        <div>
                            <div className="role-label">I am joining as a...</div>
                            <div className="role-select-wrap">
                                <button className={`role-btn ${role === "Student" ? "selected" : ""}`}onClick={() => setRole("Student")}>🎓 Student</button>
                                <button className={`role-btn ${role === "Alumni" ? "selected" : ""}`}onClick={() => setRole("Alumni")}>🏢 Alumni</button> <button className={`role-btn ${role === "Admin" ? "selected" : ""}`}onClick={() => setRole("Admin")}>⚙️ Admin</button>
                            </div>
                        </div>
                        <button className="submit-btn" onClick={handleSignup}>Create My Account →</button>
                        <div className="form-footer">
                            Already have an account? 
                            <a onClick={() => switchTab('login')}> Log in</a>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}