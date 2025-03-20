"use client"
import Image from "next/image"
import heroImg from "../public/heroImage.png"
import styles from "./home.module.css"
import appLogo from "../public/appLogo.png"
import { Button } from "@radix-ui/themes"


export default function Home() {
  return (<><div className={styles.main}>
    <div className={styles.tabMain}>


      <div className={styles.tab}>
        <div className={styles.appLogo}>
          <Image src={appLogo} alt="" />
          <h1>AuraFit</h1>
        </div>
        <div className={styles.tabOptions}>
          <a href="" className={styles.option}>Home</a>
          <a href="" className={styles.option}>Get Started</a>
          <a href="" className={styles.option}>Features</a>
          <a href="" className={styles.option}>About Us</a>
        </div>
        <div className={styles.rightSec}>
          <Button className={styles.getStartedBtn}>Get Started</Button>
        </div>
      </div>
    </div>


    <div className={styles.heroSection}>
      <h1 className={styles.heroHeader}>Sculpt your <span>Body</span><br/>Elevate your <span>Spirit</span></h1>

      <Image className={styles.heroImg} src={heroImg} alt="" />
      <Button className={styles.getStartedBtn}>Get Started</Button>

    </div>


  </div></>)
}