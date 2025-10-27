// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Signup.module.css";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (isLogin) {
      // === LOGIN ===
      if (!email || !password) {
        setMessage("Please fill in all fields");
        setMessageType("error");
        return;
      }
      if (!isValidEmail(email)) {
        setMessage("Please enter a valid email");
        setMessageType("error");
        return;
      }

      // Simulate login success
      setMessage("Welcome back!");
      setMessageType("success");
      setTimeout(() => navigate("/dashboard"), 800);
    } else {
      // === SIGNUP ===
      if (!name || !email || !password || !confirmPassword) {
        setMessage("Please fill in all fields");
        setMessageType("error");
        return;
      }
      if (!isValidEmail(email)) {
        setMessage("Please enter a valid email");
        setMessageType("error");
        return;
      }
      if (password.length < 6) {
        setMessage("Password must be at least 6 characters");
        setMessageType("error");
        return;
      }
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        setMessageType("error");
        return;
      }

      // Simulate signup success
      setMessage(`Account created! Welcome, ${name}!`);
      setMessageType("success");
      setTimeout(() => navigate("/dashboard"), 800);
    }
  };

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles.container}>
        {/* LEFT SECTION */}
        <div className={styles["left-section"]}>
          <div className={styles.header}>
            <div className={styles.logo}>O</div>
            <div className={styles["brand-name"]}>OuterMiles</div>
          </div>

          <div className={styles.tagline}>
            <h1>
              <span className={styles.connecting}>Connecting Places</span>
              <span className={styles.creating}>Creating Stories</span>
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              
            </p>
          </div>

          <div className={styles["content-cards"]}>
            {/* Trip Card */}
            <div className={`${styles.card} ${styles["trip-card"]}`}>
              <div className={styles["trip-header"]}>
                <div className={styles["trip-icon"]}></div>
                <div className={styles["trip-title"]}>An Indian Adventure</div>
              </div>
              <div className={styles["trip-status"]}>Pending</div>
              <div className={styles["trip-price"]}>₹1.754,63</div>
              <div className={styles["trip-categories"]}>Categories</div>
            </div>

            {/* Chart Card */}
            <div className={`${styles.card} ${styles["chart-card"]}`}>
              <div className={styles.chart}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
              <div className={styles["chart-labels"]}>
                <span>Hotel</span>
                <span>Eat & Drink</span>
                <span>Transport</span>
              </div>
              <div className={styles["average-price"]}>₹ 48,80</div>
              <div className={styles["price-label"]}>Average per person/day</div>
            </div>
          </div>

          <img src="/travel-illustration.png" alt="Travel Illustration"className={styles["placeholder-image"]}
/>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles["right-section"]}>
          <div className={styles["auth-container"]}>
            <h2 className={styles["auth-title"]}>
              {isLogin ? "Login to OuterMiles" : "Create an Account"}
            </h2>

            {/* Google Button */}
            <button className={styles["google-btn"]}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M17.64 9.2045C17.64 8.5664 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.2045Z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.6559 14.4205 4.6718 12.8373 3.9641 10.71H0.9573V13.0418C2.4382 15.9832 5.4818 18 9 18Z"
                  fill="#34A853"
                />
                <path
                  d="M3.9641 10.71C3.7841 10.17 3.6818 9.5932 3.6818 9C3.6818 8.4068 3.7841 7.83 3.9641 7.29V4.9582H0.9573C0.3477 6.1732 0 7.5477 0 9C0 10.4523 0.3477 11.8268 0.9573 13.0418L3.9641 10.71Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.5795C10.3214 3.5795 11.5077 4.0336 12.4405 4.9255L15.0218 2.3441C13.4632 0.8918 11.4259 0 9 0C5.4818 0 2.4382 2.0168 0.9573 4.9582L3.9641 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795Z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* LOGIN FIELDS */}
              {isLogin && (
                <>
                  <div className={styles["form-group"]}>
                    <input
                      type="email"
                      className={styles["form-input"]}
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <input
                      type="password"
                      className={styles["form-input"]}
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <a href="#" className={styles["forgot-password"]}>
                    Forgot password?
                  </a>
                </>
              )}

              {/* SIGNUP FIELDS */}
              {!isLogin && (
                <>
                  <div className={styles["form-group"]}>
                    <input
                      type="text"
                      className={styles["form-input"]}
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <input
                      type="email"
                      className={styles["form-input"]}
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <input
                      type="password"
                      className={styles["form-input"]}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <input
                      type="password"
                      className={styles["form-input"]}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Message */}
              {message && (
                <div
                  className={`${styles.message} ${styles[messageType]}`}
                  style={{ display: "block" }}
                >
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className={styles["auth-btn"]}>
                {isLogin ? "Login" : "Create Account"}
              </button>

              {/* Toggle Link */}
              <div className={styles["auth-switch"]}>
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setMessage("");
                  }}
                >
                  {isLogin
                    ? "Create new account"
                    : "Already have an account? Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}