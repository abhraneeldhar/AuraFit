"use client"
import { Button } from "@radix-ui/themes"
import styles from "./dashboard.module.css"
import { AppleIcon, Book, Brain, Dumbbell, Footprints, GlassWater, Heart, Moon } from "lucide-react"
import Apple from "next-auth/providers/apple"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
export default function Dashboard() {
    const{data:session}=useSession();
    
    return (
        <div className={styles.main}>
            <h1 className={styles.welcomeH1}>Welcome {session?.user.name}</h1>
            <div className={styles.feelingDiv}>
                <h2>How are you feeling today</h2>
                <div className={styles.emojiHolder}>
                    <div className={styles.emojiItem}><p>😊</p><h3>Happy</h3></div>
                    <div className={styles.emojiItem}><p>😌</p><h3>Calm</h3></div>
                    <div className={styles.emojiItem}><p>😐</p><h3>Neutral</h3></div>
                    <div className={styles.emojiItem}><p>😔</p><h3>Sad</h3></div>
                    <div className={styles.emojiItem}><p>😩</p><h3>Stressed</h3></div>
                </div>
                <Button>Save</Button>
            </div>


            <div className={styles.progressMain}>
                <h2>Today's progress</h2>
                <div className={styles.dailyProgressHolder}>
                    <div className={styles.progressDiv}>
                        <p>Step count <Footprints /></p>
                        <h2>6000 steps</h2>
                        <h3>50% of daily progress</h3>
                    </div>
                    <div className={styles.progressDiv}>
                        <p>Water intake <GlassWater /></p>
                        <h2>4 glasses</h2>
                        <h3>50% of daily progress</h3>
                    </div>
                    <div className={styles.progressDiv}>
                        <p>Heart rate <Heart /></p>
                        <h2>80 bpm</h2>
                        <h3>Healthy</h3>
                    </div>
                    <div className={styles.progressDiv}>
                        <p>Sleep <Moon /></p>
                        <h2>7 hours</h2>
                        <h3>80% of daily progress</h3>
                    </div>
                </div>
            </div>


            <div className={styles.wellnessDiv}>
                <h2>Wellness Categories</h2>
                <div className={styles.categoryHolder}>
                    <div className={styles.categoryDiv}>
                        <Brain/>
                        <h3>Mental Health</h3>
                        <p>Meditations, breathing exercises, and mindfulness practices</p>
                    </div>
                    <div className={styles.categoryDiv}>
                        <Dumbbell/>
                        <h3>Physical Fitness</h3>
                        <p>Workouts, yoga, and exercise routines</p>
                    </div>
                    <div className={styles.categoryDiv}>
                        <AppleIcon/>
                        <h3>Nutrition</h3>
                        <p>Healthy recipes and eating guidance</p>
                    </div>
                    <div className={styles.categoryDiv}>
                        <Book/>
                        <h3>Journal</h3>
                        <p>Track thoughts, feelings, and gratitude</p>
                    </div>
                </div>
            </div>
        </div>)
}