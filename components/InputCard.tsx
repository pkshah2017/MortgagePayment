import styles from "@styles/InputCardStyles.module.css";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@data/hooks";
import { selectLoanDetails, setLoadValues } from "@data/loanDetailsStore";

export default function InputCard() {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectLoanDetails);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const total = (event.target as HTMLFormElement).total.value as number;
        const loanLength = (event.target as HTMLFormElement).loanLength
            .value as number;
        const remaining = (event.target as HTMLFormElement).remaining
            .value as number;
        dispatch(setLoadValues({ total, loanLength, remaining }));
    };

    return (
        <form onSubmit={onSubmit} className={styles.card}>
            <div className={styles.inputRow}>
                <label htmlFor="total">Total Loan Amount </label>
                <input
                    type="number"
                    id="total"
                    name="total"
                    min={0}
                    step={0.01}
                    placeholder="65000"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor="loanLength">Loan Length (in Months) </label>
                <input
                    type="number"
                    id="loanLength"
                    name="loanLength"
                    min={0}
                    placeholder="30"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor="remaining">Principle Amount Remaining </label>
                <input
                    type="number"
                    id="remaining"
                    name="remaining"
                    min={0}
                    step={0.01}
                    placeholder="30000"
                    required
                    className={styles.numericInput}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
