import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface LoanDetails {
    principal: number;
    intrestRate: number;
    loanLength: number;
}

interface LoanDetailsState {
    loanDetails?: LoanDetails;
}

const initialState: LoanDetailsState = {
    loanDetails: null,
};

const loanDetailSlice = createSlice({
    name: "loanDetailSlice",
    initialState: initialState,
    reducers: {
        setLoadValues: (state, action: PayloadAction<LoanDetails>) => {
            return { loanDetails: action.payload };
        },
    },
});

export const { setLoadValues } = loanDetailSlice.actions;

export const selectLoanDetails = (state: RootState) => state.loanDetails;
export const selectLoanPrincipal = (state: RootState) =>
    state.loanDetails.principal;
export const selectLoanIntrestRate = (state: RootState) =>
    state.loanDetails.intrestRate;
export const selectLoanLength = (state: RootState) =>
    state.loanDetails.loanLength;

export const store = configureStore({
    reducer: loanDetailSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
