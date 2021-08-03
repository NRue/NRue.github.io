import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developer Bio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Hello World!!!.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
