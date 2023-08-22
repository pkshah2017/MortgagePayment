import LoadDetailStoreProvider from "@components/LoadDetailStoreProvider";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <LoadDetailStoreProvider>
            <Component {...pageProps} />
        </LoadDetailStoreProvider>
    );
}
