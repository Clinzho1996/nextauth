"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Carousel from "@/components/carousel/Carousel";

import google from "../assets/google.png";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login?success=Account has been created successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.header}>
          <p>Dev-Clinton</p>
          <h2>
            Manage multiple <br /> accounts in one place!
          </h2>
        </div>
        <Carousel />
        <div className={styles.privacy}>
          <Link href="/">Privacy Policy -</Link>
          <Link href="/"> Terms of Service</Link>
        </div>
      </div>
      <div className={styles.right_container}>
        <h2>Register</h2>
        <p>Enter your user details below</p>
        <div className={styles.divider}>
          <p>- or -</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="name"
            placeholder=" Full Name"
            required
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            placeholder="email-address"
            required
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            required
          />
          <button className={styles.login}>Register</button>
        </form>
        <p className={styles.reg}>
          Already have an account? <Link href="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
