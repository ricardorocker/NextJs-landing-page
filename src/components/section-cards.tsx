import Image from "next/image";

import Mockup from "public/mockup-main.png";
import Card01 from "public/image-01.png";
import Card02 from "public/image-02.png";
import Card03 from "public/image-03.png";
import Card04 from "public/image-04.png";
import Card05 from "public/image-05.png";
import Card06 from "public/image-06.png";

export function SectionCards() {
  return (
    <>
      <section className="w-full pb-20">
        <Image
          src={Mockup}
          alt="Mockup main"
          className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-16"
        ></Image>

        <h2 className="text-center text-7xl font-semibold text-black mb-56">
          Faça <span className="text-green-title-card">você</span> mesmo de casa
        </h2>

        <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
          <Image
            src={Card01}
            className="absolute top-8 left-44"
            alt="Card 01"
          ></Image>
          <Image
            src={Card02}
            className="absolute left-0 bottom-32"
            alt="Card 02"
          ></Image>
          <Image
            src={Card03}
            className="absolute bottom-0 left-80"
            alt="Card 03"
          ></Image>
          <Image
            src={Card04}
            className="absolute top-0 right-32"
            alt="Card 04"
          ></Image>
          <Image
            src={Card05}
            className="absolute right-0 bottom-28"
            alt="Card 05"
          ></Image>
          <Image
            src={Card06}
            className="absolute bottom-0 right-80"
            alt="Card 06"
          ></Image>
        </div>
      </section>
    </>
  );
}
