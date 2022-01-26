import { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/asterix.module.css'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.view}>
                <h2>about hru? lmk</h2>
                <h3>what it does</h3>
                <p>
                    hru? lmk sends you a text message a day, asking how you are. 
                    You can use this as a journal, writing down how you feel throughout the day. 
                    Or, go in-depth about ideas you&apos;ve had throughout the day.
                    The premise is simple: express using your words more often.
                </p>
                <p>
                    You can customize the frequency of the text messages, and can send voice memos and pictures. 
                </p>
                <h3>why?</h3>
                <p>
                sometimes you just gotta express what&apos;s on your mind ASAP. 
                And, when feelings and thoughts are put into words, you give yourself a chance to sort through them.
                I hope this webapp helps you to be more introspective and mindful throughout the day.
                </p>
                <div className={styles.linkRow}>
                    <a className={styles.link}>
                        <Link href="/">
                            back home
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;