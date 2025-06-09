import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";
import { UserProvider } from "@/context/UserContext";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <WhatsAppFloatingButton/>
    </UserProvider>
  );
}
