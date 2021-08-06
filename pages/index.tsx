import Typewriter from "typewriter-effect";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Tile from "../components/Tile";
import Footer from "../components/Footer";

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
    <div className="w-auto h-auto overflow-y-scroll overflow-x-hidden">
      <Head>
        <title>Developer Bio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="bg-gray-900 h-screen">
        <Navbar />
        <div className="lg:inline-flex w-screen">
          <div
            className="bg-fixed bg-cover rounded-2xl lg:w-1/2 pt-10"
            style={{ backgroundImage: `url(/images/img-mountain-sky.jpg)` }}
          >
            <h1 className="text-center text-white text-3xl">Bio</h1>
            <div className="h-auto w-auto m-5 p-5 pr-12 w-sm lg:w-full text-white">
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
            {/*
              <img
                className="abosulte flex h-auto w-auto"
                alt="Mountains"
                src="/images/img-mountain-sky.jpg"
                max-width="100%"
                max-height="100%"
              />
            */}
          </div>
          <div className="lg:w-1/2 h-screen overflow-y-scroll rounded-2xl scrollbar-hide bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-400">
            <div className="absolute h-auto w-auto">
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
      <Footer></Footer>
    </div>
  );
}
