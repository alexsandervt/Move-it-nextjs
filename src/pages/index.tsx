import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpirienciBar } from "../components/ExpirienciBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Início | Move-It </title>
      </Head>
      <ExpirienciBar/>

      <section>
        <div >
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div></div>
      </section>
    </div>

   );
}
