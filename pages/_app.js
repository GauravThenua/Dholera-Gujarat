import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { UserProvider } from "@/context/UserContext";
import dynamic from "next/dynamic";
import Head from "next/head";

// Load WhatsApp button only on client (avoids blocking main thread)
const WhatsAppFloatingButton = dynamic(() => import("@/components/WhatsAppFloatingButton"), {
  ssr: false,
  loading: () => null,
});

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>DholeraGujarat.in - Smart City Investment Destination</title>
        <meta
          name="description"
          content="Dholera Smart City - Explore investment, projects and growth opportunities."
        />
        <link rel="icon" href="/images/dholera_gujarat_logo.ico" />
      </Head>
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
    </UserProvider>
  );
}
