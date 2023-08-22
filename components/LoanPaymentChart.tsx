import type { GridValueGetterParams } from "@mui/x-data-grid";

import { useAppSelector } from "@data/hooks";
import { selectLoanDetails } from "@data/loanDetailsStore";
import Card from "@mui/material/Card";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

export const LOAN_PAYMENT_CHART_ID = "loan-payment-chart";

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Loan Payment Over Time",
        },
    },
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LoanPaymentChart() {
    const loanDetails = useAppSelector(selectLoanDetails);

    const chartData = useMemo(() => {
        const principalAmountPaidDataSet = [];
        const intrestAmountPaidDataSet = [];
        const principalAmountRemainingDataSet = [];
        const paymentNumberDataSet = [];
        loanDetails.loanPaymentPlan.map((datum) => {
            principalAmountPaidDataSet.push(datum.principalAmountPaid);
            intrestAmountPaidDataSet.push(datum.intrestAmountPaid);
            principalAmountRemainingDataSet.push(
                datum.principalAmountRemaining
            );
            paymentNumberDataSet.push(datum.paymentNumber);
        });
        return {
            labels: paymentNumberDataSet,
            datasets: [
                {
                    label: "Principal Amount Paid",
                    data: principalAmountPaidDataSet,
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Intrest Amount Paid",
                    data: intrestAmountPaidDataSet,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
                {
                    label: "Principal Amount Remaining",
                    data: intrestAmountPaidDataSet,
                    borderColor: "rgb(128, 23, 3)",
                    backgroundColor: "rgba(128, 23, 3, 0.5)",
                },
            ],
        };
    }, [loanDetails]);

    return (
        <Card sx={{ minWidth: 750 }}>
            <Line
                id={LOAN_PAYMENT_CHART_ID}
                options={chartOptions}
                data={chartData}
            />
        </Card>
    );
}
