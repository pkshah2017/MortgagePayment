import { useAppSelector } from "@data/hooks";
import { selectLoanDetails } from "@data/loanDetailsStore";

export default function DisplayCards() {
    const loanDetails = useAppSelector(selectLoanDetails);

    return (
        <>
            <p>This is where Display Cards will go</p>
            <p>Loan Principal: {loanDetails.principal}</p>
            <p>Loan Intrest Rate: {loanDetails.intrestRate}</p>
            <p>Loan Length: {loanDetails.loanLength}</p>
        </>
    );
}
