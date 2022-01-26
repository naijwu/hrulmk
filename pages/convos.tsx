import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/asterix.module.css'

const Convos: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.view}>
                <h2>hru? lmk</h2>
                <h3>recent convos</h3>
                <div className={styles.convos}>
                    <Link href={`/convo/[ID-GOES-HERE]`} passHref>
                        <a className={styles.convo}>
                            <h4>January 10, 2022</h4>
                            <span style={{display: "flex", alignItems: "center", userSelect: "none"}}>
                                <Image src="/assets/arrow-right.svg" alt="link" width={16} height={16} />
                            </span>
                        </a>
                    </Link>
                    <Link href={`/convo/[ID-GOES-HERE]`} passHref>
                        <a className={styles.convo}>
                            <h4>January 9, 2022</h4>
                            <span style={{display: "flex", alignItems: "center", userSelect: "none"}}>
                                <Image src="/assets/arrow-right.svg" alt="link" width={16} height={16} />
                            </span>
                        </a>
                    </Link>
                    {/* map items */}
                </div>
                <div className={styles.linkRow}>
                    <a className={styles.link}>
                        <Link href="/">
                            view all entries
                        </Link>
                    </a>
                </div>
                
                <h3>settings</h3>
                <div className={styles.settings}>
                    <div className={styles.setting}>
                        <div>
                            <h5>phone number</h5>
                            <h4>778-245-3794</h4>
                        </div>
                        <span style={{display: "flex", alignItems: "center", userSelect: "none"}}>
                            <Image src="/assets/arrow-right.svg" alt="link" width={16} height={16} />
                        </span>
                    </div>
                    <div className={styles.setting}>
                        <div>
                            <h5>text frequency</h5>
                            <h4>daily @ 1 PM</h4>
                        </div>
                        <span style={{display: "flex", alignItems: "center", userSelect: "none"}}>
                            <Image src="/assets/arrow-right.svg" alt="link" width={16} height={16} />
                        </span>
                    </div>
                    <div className={styles.setting}>
                        <div>
                            <h5>advanced</h5>
                            <h4>enable questions</h4>
                        </div>
                        <span style={{display: "flex", alignItems: "center", userSelect: "none"}}>
                            <Image src="/assets/arrow-right.svg" alt="link" width={16} height={16} />
                        </span>
                    </div>
                </div>                
                <div className={styles.linkRow}>
                    <a className={styles.link}>
                        <Link href="/">
                            log out
                        </Link>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Convos;