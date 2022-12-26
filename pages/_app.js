import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }) {
  const [sidebar, setSidebar] = useState(true);

  if (router.pathname.startsWith("/admin")) {
    return (
      <>
        <div className="px-5 min-h-screen">
          <Navbar menu={sidebar} setMenu={setSidebar} />
          <div className="flex gap-5 relative min-h-screen">
            <MobileView className="">
              <Sidebar
                className={`${
                  sidebar
                    ? "translate-x-0 w-[300px] visible"
                    : "translate-x-[-300px] w-0 invisible"
                } absolute  ease-in-out duration-500 bg-white bottom-0 top-0 pr-10`}
              />
            </MobileView>
            <BrowserView>
              <Sidebar
                className={`${
                  sidebar
                    ? "translate-x-0 w-[230px] mr-[20px] visible"
                    : "translate-x-[-230px] w-0 invisible"
                } ease-in-out duration-500`}
              />
            </BrowserView>

            <div className={`mainBG p-5 rounded-lg w-full -ml-[20px]`}>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
