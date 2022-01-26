import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/asterix.module.css'
import Link from 'next/link'
import Confetti from 'react-dom-confetti'

const Home: NextPage = () => {

  const [as, setAs] = useState(0) // action state: 0 -> register, 1 -> login
  const [pn, setPn] = useState('') // phone number
  const [cc, setCc] = useState('') // confirmation code
  const [hasPn, setHasPn] = useState(false) // gets phone number
  const [hasCc, setHasCc] = useState(false) // gets confirmation code
  const [cs, setCs] = useState(false) // confirmation success: confirmation code valid after registration
  const [input, setInput] = useState('') // phone number | confirmation code if rs
  const [loading, setLoading] = useState(0)

  const handleSignUp = async () => {
    // initial actions
    setInput("")
    setPn(input)
    setLoading(loading + 10) // TODO: implement
    
    // if successful
    setHasPn(true);
  }

  const handleSignIn = async () => {
    // initial actions
    setInput("")
    setPn(input)
    setLoading(loading + 10)
    
    // if successful
    setHasPn(true);
  }

  const handleConfirm = async () => {
    // initial actions
    setInput("")
    setCc(input)

    // if successful
    setCs(true)
    // -> should route to /convos

  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>hru? lmk</title>
        <meta name="description" content="how are you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bar} style={{width: `${loading}%` }}></div>

      <div className={styles.view}>
        <div className={styles.texts}>
          <div className={styles.text}>
            hru? lmk
          </div>
          <div className={styles.text}>
            journal on ur phone
          </div>
          <Link href="/about" passHref>
            <a className={styles.textLink}>
              <span style={{paddingRight: "0.5em", userSelect: "none"}}>
                <Image src="/assets/link.svg" alt="link" width={14} height={14} />
              </span>
              learn more
            </a>
          </Link>

          <div className={styles.emptySpace}></div>
          <div className={styles.text}>
            {as === 0 ? "sign up" : "sign in"} by entering your pn
          </div>
          {!hasPn && (
          <div className={styles.sub}>
            {as === 0 ? (
              <div className={styles.subtext} onClick={()=>setAs(1)}>
                sign in instead
              </div>
            ) : (
              <div className={styles.subtext} onClick={()=>setAs(0)}>
                sign up instead
              </div>
            )}
          </div>
          )}

          {hasPn && (<>
          <div className={styles.myText}>
            {pn}
          </div>
          <div className={styles.text}>
            enter your confirmation code
          </div>
          </>)}

          {hasCc && (
          <div className={styles.myText}>
            {cc}
          </div>

          )}
          {cs && (
          <div className={styles.text}>
            successfully registered!
          </div>
          )}
        </div>
        {!cs && (
        <div className={styles.input}>
          <input placeholder={hasPn ? "confirmation code" : "phone number"} className={styles.textInput} type="text" value={input} onChange={e=>setInput(e.target.value)} />
          <Confetti active={ loading === 100 } />
          {hasPn ? (
            <button className={styles.send} onClick={handleConfirm}>Send</button>
          ) : as === 0 ? (
            <button className={styles.send} onClick={handleSignUp}>Send</button>
          ) : (
            <button className={styles.send} onClick={handleSignIn}>Send</button>
          )}
        </div>
        )}
      </div>
    </div>
  )
}

export default Home
