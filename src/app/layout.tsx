import "./reset.css";
import "./global.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <h1>Furkan Demirtaş</h1>
            <nav>
              <ul>
                <li>
                  <Link href="/">Anasayfa</Link>
                </li>
                <li>
                  <Link href="/about">Hakkımda</Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
