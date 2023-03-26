import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMdb Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header></Header>

          <Navbar />

          <SearchBox />
          <div className="mt-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
