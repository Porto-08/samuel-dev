import { GlobalContextProvider } from "../context/DarkModeContext";
import "../styles/globals.scss";
import "../styles/reset.scss";
import "../styles/animations.scss";
import Sidenav from "@/components/Sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GlobalContextProvider>
          <div className="container">
            <aside className="fadeInLeft">
              <Sidenav />
            </aside>

            <div className="content">{children}</div>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
