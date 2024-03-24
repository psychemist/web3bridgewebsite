import Image, { StaticImageData } from "next/image";

import { Button } from "../ui/button";

export default function DappCard({
  description,
  buttonText,
  image,
}: {
  description: string;
  buttonText: string;
  image: StaticImageData;
}) {
  return (
    <div className=" w-[405px]">
      <div className="rounded-xl">
        <Image
          priority
          src={image}
          alt="Story image"
          className="rounded-2xl"
          width={405}
          height={405}
        />
      </div>
      <div className="mt-3 light:text-[#313131]">
        <p className="text-lg leading-7 mb-4 font-light">{description}</p>
        <Button className="rounded-full px-12 py-6 border-2 ring-2 ring-red-300 dark:ring-red-500 border-red-500 dark:border-red-300 bg-red-500/10 text-bridgeRed hover:bg-transparent">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
