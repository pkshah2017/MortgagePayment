import styles from "@styles/InputCardStyles.module.css";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@data/hooks";
import { selectLoanDetails, setLoadValues } from "@data/loanDetailsStore";

export const PRINCIPAL_INPUT_NAME = "principal";
export const INTREST_RATE_INPUT_NAME = "intrest-rate";
export const LOAN_LENGTH_INPUT_NAME = "loan-length";

export default function InputCard() {
    const dispatch = useAppDispatch();
    const loanDetails = useAppSelector(selectLoanDetails);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);

        const principal = Number(data.get(PRINCIPAL_INPUT_NAME));
        const intrestRate = Number(data.get(INTREST_RATE_INPUT_NAME));
        const loanLength = Number(data.get(LOAN_LENGTH_INPUT_NAME));
        dispatch(setLoadValues({ principal, intrestRate, loanLength }));
    };

    return (
        <form onSubmit={onSubmit} className={styles.card} id="input-card">
            <div className={styles.inputRow}>
                <label htmlFor={PRINCIPAL_INPUT_NAME}>
                    Principal Loan Amount{" "}
                </label>
                <input
                    type="number"
                    id={PRINCIPAL_INPUT_NAME}
                    name={PRINCIPAL_INPUT_NAME}
                    min={0}
                    step={0.01}
                    placeholder="65000"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor={INTREST_RATE_INPUT_NAME}>
                    Annual Intrest Rate{" "}
                </label>
                <input
                    type="number"
                    id={INTREST_RATE_INPUT_NAME}
                    name={INTREST_RATE_INPUT_NAME}
                    min={0}
                    step={0.0001}
                    placeholder="0.05"
                    required
                    className={styles.numericInput}
                />
            </div>

            <div className={styles.inputRow}>
                <label htmlFor={LOAN_LENGTH_INPUT_NAME}>
                    Length of the Loan in Years
                </label>
                <input
                    type="number"
                    id={LOAN_LENGTH_INPUT_NAME}
                    name={LOAN_LENGTH_INPUT_NAME}
                    min={0}
                    step={1}
                    placeholder="30"
                    required
                    className={styles.numericInput}
                />
            </div>

            <button type="submit" id="input-card-submit">
                Submit
            </button>
        </form>
    );
}
