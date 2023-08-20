import React from "react";

import { Provider } from "react-redux";
import { store } from "@data/loanDetailsStore";

export default function LoadDetailStoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
