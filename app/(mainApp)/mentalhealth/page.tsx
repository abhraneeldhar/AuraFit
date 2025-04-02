import { Button } from "@radix-ui/themes"
import styles from "./mental.module.css"
export default function Mentalhealth() {
    return (<>
        <div className={styles.main}>
            <div className={styles.holder}>
                <div className={styles.mentalHealthDiv}>
                    <h1>Guided meditation</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nesciunt.</p>
                    <Button>Access Meditation</Button>
                </div>
                <div className={styles.mentalHealthDiv}>
                    <h1>Guided meditation</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nesciunt.</p>
                    <Button>Access Meditation</Button>
                </div>
                <div className={styles.mentalHealthDiv}>
                    <h1>Guided meditation</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nesciunt.</p>
                    <Button>Access Meditation</Button>
                </div>
                <div className={styles.mentalHealthDiv}>
                    <h1>Guided meditation</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nesciunt.</p>
                    <Button>Access Meditation</Button>
                </div>
            </div>
        </div>
    </>)
}