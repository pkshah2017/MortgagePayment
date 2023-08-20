import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface LoanDetails {
    total: number;
    loanLength: number;
    remaining: number;
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
export const selectLoanTotal = (state: RootState) => state.loanDetails.total;
export const selectLoanLoanLength = (state: RootState) =>
    state.loanDetails.loanLength;
export const selectLoanRemaining = (state: RootState) =>
    state.loanDetails.remaining;

export const store = configureStore({
    reducer: loanDetailSlice.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
