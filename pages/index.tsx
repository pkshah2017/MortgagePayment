import Head from "next/head";
import styles from "@styles/Home.module.css";
import InputCard from "@components/InputCard";
import { useAppSelector } from "@data/hooks";
import { selectLoanDetails } from "@data/loanDetailsStore";
import DisplayCards from "@components/DisplayCards";

export default function Home() {
    const loanDetails = useAppSelector(selectLoanDetails);

    return (
        <div className={styles.container}>
            <Head>
                <title>Mortgage Payment Calculator</title>
            </Head>

            <main>
                <h1 className={styles.title}>Mortgage Payment Calculator</h1>
                {loanDetails == null ? <InputCard /> : <DisplayCards />}
            </main>

            <footer>
                <a href="https://www.linkedin.com/in/pkshah2017/">
                    Parshva Shah
                </a>
            </footer>
        </div>
    );
}
