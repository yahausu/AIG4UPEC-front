"use client"
import React, { useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validEmail = "user@example.com";
  const validPassword = "password123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if credentials match
    if (email === validEmail && password === validPassword) {
      // Save login state (using localStorage for simplicity)
      localStorage.setItem("isLoggedIn", "true");
      router.push('/home'); // Redirect to a protected page
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
