import type { GridValueGetterParams } from "@mui/x-data-grid";

import { useAppSelector } from "@data/hooks";
import { selectLoanDetails } from "@data/loanDetailsStore";
import {
    DataGrid,
    GridColDef,
    GridValueFormatterParams,
} from "@mui/x-data-grid";
import Card from "@mui/material/Card";

function formatMoney(columnValue: GridValueFormatterParams<number>): string {
    const moneyValue = columnValue.value;
    if (moneyValue == null) {
        return "";
    }
    return moneyValue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}

const columns: GridColDef[] = [
    {
        field: "paymentNumber",
        headerName: "Month",
        width: 75,
        type: "number",
    },
    {
        field: "totalMonthlyPayment",
        headerName: "Monthly Payment",
        width: 125,
        type: "number",
        valueFormatter: formatMoney,
    },
    {
        field: "principalAmountPaid",
        headerName: "Principal Amount Paid",
        width: 160,
        type: "number",
        valueFormatter: formatMoney,
    },
    {
        field: "intrestAmountPaid",
        headerName: "Intrest Amount Paid",
        width: 150,
        type: "number",
        valueFormatter: formatMoney,
    },
    {
        field: "principalAmountRemaining",
        headerName: "Principal Amount Remaining",
        width: 200,
        type: "number",
        valueFormatter: formatMoney,
    },
];

export default function DisplayCards() {
    const loanDetails = useAppSelector(selectLoanDetails);

    return (
        <>
            <Card sx={{ minWidth: 750 }}>
                <DataGrid
                    rows={loanDetails.loanPaymentPlan}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    getRowId={(row) => row.paymentNumber}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Card>
        </>
    );
}
