"use client"
import Image from "next/image"
import heroImg from "../public/heroImage.png"
import heroBale from "../public/heroBale.png"

import styles from "./home.module.css"
import appLogo from "../public/appLogo.png"
import { Button } from "@radix-ui/themes"
import { Activity, Brain, Clock, Dumbbell, Flame, Footprints, Lightbulb, NotebookPen } from "lucide-react"
import picph from "../public/teamPic/picph.jpg"
import { useEffect, useState } from "react"


export default function Home() {

  const heroImageList = [heroImg, heroBale];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImageList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


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
      <h1 className={styles.heroHeader}>Sculpt your <span>Body</span><br />Elevate your <span>Spirit</span></h1>

      {currentIndex == 0 && <><div className={`${styles.heroStats} ${styles.heroStat1}`}>
        <Clock color="#a5cd04" size={30} />
        <p>Hours</p>
        <h1>1.5</h1>
      </div>
        <div className={`${styles.heroStats} ${styles.heroStat2}`}>
          <Footprints color="#a5cd04" size={30} />
          <p>Steps</p>
          <h1>5k</h1>
        </div>
        <div className={`${styles.heroStats} ${styles.heroStat3}`}>
          <Flame color="#a5cd04" size={30} />
          <p>Cal</p>
          <h1>500</h1>
        </div>
        <div className={`${styles.heroStats} ${styles.heroStat4}`}>
          <Dumbbell color="#a5cd04" size={30} />
          <p>Sets</p>
          <h1>5</h1>
        </div></>}
        {currentIndex == 1 && <><div className={`${styles.heroStats} ${styles.heroStat1}`}>
        <Brain color="#a5cd04" size={30} />
        <p>Meditate</p>
        <h1>1.5</h1>
      </div>
        <div className={`${styles.heroStats} ${styles.heroStat2}`}>
          <Activity color="#a5cd04" size={30} />
          <p>BPM</p>
          <h1>80</h1>
        </div>
        <div className={`${styles.heroStats} ${styles.heroStat3}`}>
          <Lightbulb color="#a5cd04" size={30} />
          <p>Ideas</p>
          <h1>15</h1>
        </div>
        <div className={`${styles.heroStats} ${styles.heroStat4}`}>
          <NotebookPen color="#a5cd04" size={30} />
          <p>Journal</p>
          <h1>2</h1>
        </div></>}




      {currentIndex == 0 &&
        <Image className={styles.heroImg} src={heroImg} alt="" />
      }
      {currentIndex == 1 &&
        <Image className={styles.heroImg} src={heroBale} alt="" />
      }

      <Button className={styles.getStartedBtn}>Get Started</Button>

    </div>


    <div className={styles.aboutSection}>
      <h1 className={styles.secitonHeading}>About Us</h1>
      <p className={styles.sectionPara}>We created AuraFit as a way for people to take care of their body and mind. To teach people about the importance of physical and mental health.</p>

      <div className={styles.profileCardHolder}>

        <div className={styles.profileCard}>
          <Image src={picph} alt="" />
          <h1>Abhraneel Dhar</h1>
          <p>Front-End Dev</p>
        </div>
        <div className={styles.profileCard}>
          <Image src={picph} alt="" />
          <h1>Abhraneel Dhar</h1>
          <p>Front-End Dev</p>
        </div>
        <div className={styles.profileCard}>
          <Image src={picph} alt="" />
          <h1>Abhraneel Dhar</h1>
          <p>Front-End Dev</p>
        </div>
        <div className={styles.profileCard}>
          <Image src={picph} alt="" />
          <h1>Abhraneel Dhar</h1>
          <p>Front-End Dev</p>
        </div>
        <div className={styles.profileCard}>
          <Image src={picph} alt="" />
          <h1>Abhraneel Dhar</h1>
          <p>Front-End Dev</p>
        </div>
      </div>


    </div>


  </div></>)
}