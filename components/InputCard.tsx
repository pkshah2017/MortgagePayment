import styles from "@styles/InputCardStyles.module.css";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@data/hooks";
import { selectLoanDetails, setLoadValues } from "@data/loanDetailsStore";

export default function InputCard() {
    const dispatch = useAppDispatch();
    const loanDetails = useAppSelector(selectLoanDetails);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const principal = (event.target as HTMLFormElement).principal
            .value as number;
        const intrestRate = (event.target as HTMLFormElement).intrestRate
            .value as number;
        const loanLength = (event.target as HTMLFormElement).loanLength
            .value as number;
        dispatch(setLoadValues({ principal, intrestRate, loanLength }));
    };

    return (
        <form onSubmit={onSubmit} className={styles.card}>
            <div className={styles.inputRow}>
                <label htmlFor="principal">Principal Loan Amount </label>
                <input
                    type="number"
                    id="principal"
                    name="principal"
                    min={0}
                    step={0.01}
                    placeholder="65000"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor="intrestRate">Annual Intrest Rate </label>
                <input
                    type="number"
                    id="intrestRate"
                    name="intrestRate"
                    min={0}
                    step={0.0001}
                    placeholder="0.05"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor="loanLength">Length of the Loan in Years </label>
                <input
                    type="number"
                    id="loanLength"
                    name="loanLength"
                    min={0}
                    step={1}
                    placeholder="30"
                    required
                    className={styles.numericInput}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
