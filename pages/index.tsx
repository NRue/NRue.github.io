import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Tile from "../components/Tile";

export default function Home() {
  const starsImage = "/images/img-stars.webp";
  const mockItems = [
    { id: 1, title: "Article 1", desc: "An article about doing great things!" },
    { id: 2, title: "Article 2", desc: "An article about doing great things!" },
    { id: 3, title: "Article 3", desc: "An article about doing great things!" },
    { id: 4, title: "Article 4", desc: "An article about doing great things!" },
    { id: 5, title: "Article 5", desc: "An article about doing great things!" },
    { id: 6, title: "Article 6", desc: "An article about doing great things!" },
  ];
  const mockParagraph = `Vehicula diam a augue. Convallis aenean praesent platea
  porttitor nostra semper platea sed. Vitae class bibendum
  penatibus diam torquent eget mi. Cum pulvinar sit dapibus eget
  in vel scelerisque nascetur dolor id. Habitant fringilla nec
  ridiculus sollicitudin felis est rutrum! Egestas eu aptent
  nascetur fermentum. Natoque nullam aliquam vivamus hac donec
  conubia lorem.`;

  const myLoader = ({ src, width, quality }) => {
    return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Developer Bio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="bg-gray-900 h-screen">
        <Navbar />
        <div className="lg:inline-flex w-screen">
          <div className="lg:w-1/2 pt-10">
            <h1 className="text-center text-white text-3xl"> Bio </h1>
            <div className="m-5 p-5 w-sm lg:w-full text-white">
              {mockItems.map(() => {
                return (
                  <p className="my-4">
                    Vehicula diam a augue. Convallis aenean praesent platea
                    porttitor nostra semper platea sed. Vitae class bibendum
                    penatibus diam torquent eget mi. Cum pulvinar sit dapibus
                    eget in vel scelerisque nascetur dolor id. Habitant
                    fringilla nec ridiculus sollicitudin felis est rutrum!
                    Egestas eu aptent nascetur fermentum. Natoque nullam aliquam
                    vivamus hac donec conubia lorem.
                  </p>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 h-screen overflow-scroll bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-400">
            <div className="absolute h-screen w-screen">
              {/* cant use image loader with static site 
              <Image
                alt="Mountains"
                src="/images/img-mountain-sky.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              */}
            </div>
            <h1 className="relative text-center text-white text-3xl mt-10">
              Articles
            </h1>
            <div className="relative grid mx-8 lg:mx-16 my-12 w-sm lg:full gap-10 grid-cols-1">
              {mockItems.map((item) => {
                return (
                  <Tile
                    key={item.id.toString()}
                    title={item.title}
                    desc={item.desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
