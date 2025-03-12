import Link from "next/link";

export default function Home() {
  return (
    <main className="welcomeMain">
      <h1>Merhaba, sayfama hoşgeldiniz.</h1>
      <p>Ben Furkan Demirtaş</p>
      <p>Bu benim ilk Next JS projem.</p>
      <p>
        Kim olduğumu merak ediyorsan <Link href="/about">Hakkımda</Link> sayfasına bakabilirsin
      </p>
    </main>
  );
}
