import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";
export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB clone',
  
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>
      <Header />
        
        

        <Navbar />

        < SearchBox />

        {children}
      </Providers>
      
      </body>
    </html>
  );
}
