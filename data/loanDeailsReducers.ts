import type { MathType } from "mathjs";
import type { MonthlyPaymentDetails } from "@data/loanDetailsStore";

import { PayloadAction } from "@reduxjs/toolkit";
import { bignumber, chain, format } from "mathjs";

interface SetLoadValuesActionPayload {
    principal: number;
    intrestRate: number;
    loanLength: number;
}

const monthlyPaymentCalculator = (
    loanPrincipal: number,
    loanPayments: number,
    annualIntrestRate: number
): MathType => {
    const monthlyIntrestRate = chain(bignumber(annualIntrestRate))
        .divide(12)
        .done();
    const paymentFormulaNumerator = chain(monthlyIntrestRate)
        .multiply(
            chain(chain(1).add(monthlyIntrestRate).done())
                .pow(loanPayments)
                .done()
        )
        .done();
    const paymentFormulaDenom = chain(chain(1).add(monthlyIntrestRate).done())
        .pow(loanPayments)
        .subtract(1)
        .done();
    const monthlyPayment = chain(bignumber(loanPrincipal))
        .multiply(paymentFormulaNumerator)
        .divide(paymentFormulaDenom)
        .done();
    return monthlyPayment;
};

const calculatePaymentPlan = (
    loanPrincipal: MathType,
    loanPayments: MathType,
    annualIntrestRate: MathType,
    monthlyPayment: MathType
) => {
    let principalAmountRemaining = loanPrincipal;
    const monthlyIntrestRate = chain(annualIntrestRate).divide(12).done();

    const loanPaymentPlan: MonthlyPaymentDetails[] = [];
    for (let i = 0; i < Number(loanPayments); i++) {
        const intrestAmountPaid = chain(principalAmountRemaining)
            .multiply(monthlyIntrestRate)
            .done();
        const principalAmountPaid = chain(monthlyPayment)
            .subtract(intrestAmountPaid)
            .done();
        principalAmountRemaining = chain(principalAmountRemaining)
            .subtract(principalAmountPaid)
            .done();
        loanPaymentPlan.push({
            paymentNumber: i,
            intrestAmountPaid: Number(
                format(intrestAmountPaid, { notation: "fixed", precision: 7 })
            ),
            principalAmountPaid: Number(
                format(principalAmountPaid, { notation: "fixed", precision: 7 })
            ),
            principalAmountRemaining: Number(
                format(principalAmountRemaining, {
                    notation: "fixed",
                    precision: 7,
                })
            ),
            totalMonthlyPayment: Number(
                format(monthlyPayment, { notation: "fixed", precision: 7 })
            ),
        });
    }
    return loanPaymentPlan;
};

export const setLoadValuesReducer = (
    _state,
    action: PayloadAction<SetLoadValuesActionPayload>
) => {
    const loanDetails = action.payload;

    // Calculate monthly payment
    const totalPayments = loanDetails.loanLength * 12;
    const monthlyPayment = monthlyPaymentCalculator(
        loanDetails.principal,
        totalPayments,
        loanDetails.intrestRate
    );
    const loanPaymentPlan = calculatePaymentPlan(
        bignumber(loanDetails.principal),
        bignumber(totalPayments),
        bignumber(loanDetails.intrestRate),
        monthlyPayment
    );

    return {
        loanDetails: {
            ...loanDetails,
            monthlyPayment: Number(monthlyPayment),
            loanPaymentPlan,
        },
    };
};
