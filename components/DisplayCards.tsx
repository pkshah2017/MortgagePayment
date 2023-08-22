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
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Monthly Payment</th>
                        <th>Principal Amount Paid</th>
                        <th>Intrest Amount Paid</th>
                        <th>Principal Amount Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {loanDetails.loanPaymentPlan.map(
                        (monthlyPaymentDetails) => {
                            return (
                                <tr key={monthlyPaymentDetails.paymentNumber}>
                                    <td>
                                        {
                                            monthlyPaymentDetails.totalMonthlyPayment
                                        }
                                    </td>
                                    <td>
                                        {
                                            monthlyPaymentDetails.principalAmountPaid
                                        }
                                    </td>
                                    <td>
                                        {
                                            monthlyPaymentDetails.intrestAmountPaid
                                        }
                                    </td>
                                    <td>
                                        {
                                            monthlyPaymentDetails.principalAmountRemaining
                                        }
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </>
    );
}
