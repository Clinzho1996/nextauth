"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";
import Image from "next/image";
import Link from "next/link";
import { getProviders, signIn, useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { useRouter, useSearchParams } from "next/navigation";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
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
        <div className={styles.cards}>
          <div className={styles.card_inner}>
            <Image src={twitter} alt="twitter" width={30} />
            <h3>Twitter Account</h3>
            <p>
              Tweet, reply to tweet, manage DMs, and more in a single dashboard.
            </p>
          </div>
          <div className={styles.card_inner}>
            <Image src={instagram} alt="twitter" width={30} />
            <h3>Instagram Account</h3>
            <p>
              Tweet, reply to tweet, manage DMs, and more in a single dashboard.
            </p>
          </div>
          <div className={styles.card_inner}>
            <Image src={google} alt="twitter" width={30} />
            <h3>Google Account</h3>
            <p>
              Tweet, reply to tweet, manage DMs, and more in a single dashboard.
            </p>
          </div>
        </div>
        <div className={styles.privacy}>
          <Link href="/">Privacy Policy -</Link>
          <Link href="/"> Terms of Service</Link>
        </div>
      </div>
      <div className={styles.right_container}>
        <h2>Login</h2>
        <p>
          You can login with your registered account or quick login with your
          Google account.
        </p>
        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.button_google}
        >
          <Image src={google} alt="google" width={15} /> Login with Google
        </button>
        <div className={styles.divider}>
          <p>- or -</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button className={styles.login}>Login</button>
        </form>
        <p className={styles.reg}>
          Dont have an account? <Link href="/register">Create One</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
