'use client'
import Image from "next/image"
import banner from "../../../public/home/banner.png";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";


const Banner = () => {
    return (
        <section className="w-full h-auto my-24">
            <main className="flex w-full flex-col gap-6 items-center">
                <Fade direction="up" className="w-full md:h-[600px] h-[350px]">
                    <Image src={banner} alt="Banner" className="w-full h-full object-cover" />
                </Fade>
                <div className="flex flex-col items-center gap-5 px-3 lg:px-0">
                    <Fade direction="up" className="font-semibold text-center">You never can tell, your true life’s compass might be - becoming a blockchain developer</Fade>
                    <Button className="rounded-full px-12 py-6 border-2 ring-2 ring-red-300 dark:ring-red-500 border-red-500 dark:border-red-300 bg-red-500/10 text-bridgeRed capitalize hover:bg-bridgeRed hover:text-red-100">
                        Join the next cohort <MoveRight className="w-5 h-5 ml-2 " />
                    </Button>
                </div>
            </main>
        </section>
    )
}

export default Banner