import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/calendar.css"
import Provider from './Provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barber App",
  description: "Aplicación para generar citas de barbería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
