import { useAppSelector } from "@data/hooks";
import { selectLoanDetails } from "@data/loanDetailsStore";

export default function DisplayCards() {
    const loanDetails = useAppSelector(selectLoanDetails);

    return (
        <>
            <p>This is where Display Cards will go</p>
            <p>Loan Total: {loanDetails.total}</p>
            <p>Loan Length: {loanDetails.loanLength}</p>
            <p>Loan Remainiing: {loanDetails.remaining}</p>
        </>
    );
}
