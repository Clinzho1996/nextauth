"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.profile_cont}>
      {session?.user ? (
        <Link href="/profile">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className={styles.profile}
            alt="profile"
          />
          <p>{session?.user?.name}</p>
        </Link>
      ) : (
        <div>
          <p>{session?.user?.name}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
