"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Router from "next/router";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Profile",
    url: "/profile",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Clintons World
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
        {session.status !== "authenticated" && (
          <div className="btn">
            <Link href="/login">
              <button className={styles.logout}>Login</button>
            </Link>
            <Link href="/register">
              <button className={styles.register}>Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
