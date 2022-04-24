import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <main styles={styles.main}>
        <button>
          <Link href={"/type/csr"}>Client Side Render</Link>
        </button>
        <button>
          <Link href={"/type/ssr"}>Server Side Render (ssr)</Link>
        </button>
        <button>
          <Link href={"/type/ssg"}>Server Side Render (ssg)</Link>
        </button>
      </main>
    </nav>
  );
}

export default Nav;
