import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mortgage Payment Calculator</title>
            </Head>

            <main>
                <h1 className={styles.title}>Mortgage Payment Calculator</h1>
            </main>

            <footer>
                <a href="https://www.linkedin.com/in/pkshah2017/">
                    Parshva Shah
                </a>
            </footer>
        </div>
    );
}
