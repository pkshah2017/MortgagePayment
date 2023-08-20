import styles from "@styles/InputCardStyles.module.css";

export default function InputCard() {
    return (
        <form onSubmit={() => {}} className={styles.card}>
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
                <label htmlFor="length">Loan Length (in Months) </label>
                <input
                    type="number"
                    id="length"
                    name="length"
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
