import LoadDetailStoreProvider from "@components/LoadDetailStoreProvider";

export default function MyApp({ Component, pageProps }) {
    return (
        <LoadDetailStoreProvider>
            <Component {...pageProps} />
        </LoadDetailStoreProvider>
    );
}
