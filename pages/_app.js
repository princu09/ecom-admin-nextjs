import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin")) {
    return (
      <div className="flex gap-10 max-w-[100vw] bg-accentDarkBG h-screen text-accentColor">
        <div className="min-w-[20%] min-h-screen bg-accentLightBG pt-5">
          <Sidebar className="" />
        </div>
        <div className="w-[80%] pt-5 min-h-screen mr-10">
          <Component {...pageProps} />
        </div>
      </div>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
