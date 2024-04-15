import Join from "@/components/shared/Join";
import CustomButton from "@/components/shared/CustomButton";
import MaxWrapper from "@/components/shared/MaxWrapper";
import { Building2, Calendar, GraduationCap, MoveRight } from "lucide-react";
import Image from "next/image";
import Pill from "@/components/shared/pill";
import { Button } from "@/components/ui/button";

const details = [
  {
    desc: "Scholarship Placements For Web 3.0 Students",
    icon: GraduationCap,
  },
  {
    desc: "Free Accommodation and feeding for onsite Students",
    icon: Building2,
  },
  {
    desc: "Web3 Community Exposure  and Hackathons  For Students",
    icon: Building2,
  },
];

export default function Trainings() {
  return (
    <div className="flex flex-col">
      <MaxWrapper className="py-10 md:py-20 lg:py-40 w-full flex flex-col xl:flex-row lg:justify-between gap-4 relative">
        <div className="w-full max-w-full xl:max-w-[754px] text-center flex flex-col items-center justify-center xl:justify-start xl:items-start xl:text-start">
          <Pill text="Web 3.0 Made Easy" />
          <div className="flex flex-col my-2 gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] font-semibold">
              Join 2,000+ students Becoming Web3 Developers.
            </h1>
            <p className="w-full max-w-full xl:max-w-[581px] text-sm md:text-base lg:text-xl font-normal">
              We are supporting web3 developers and startups, and lowering
              barriers of entry into the Web3 ecosystem.
            </p>
          </div>

          <div className="w-full aspect-video flex xl:hidden z-10 rounded-[30px] mt-6 mb-3 bg-[#FB8888]/50 p-3">
            <Image
              priority
              src="/trainings/b-3.jpeg"
              alt="banner-img"
              width={536}
              height={536}
              quality={100}
              className="w-full h-full object-cover rounded-[26px]"
            />
          </div>

          <ul className="list-item space-y-2 my-5 md:my-10">
            {details.map((item) => (
              <li key={item.desc} className="flex items-center">
                <item.icon className="w-4 h-4 mr-2 text-red-500" />
                <p className="text-sm md:text-base font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>

          <Button className="h-14 px-6 mt-12 md:mt-16 rounded-full border-2 ring-2 ring-red-500 border-red-300 bg-transparent text-primary hover:bg-transparent">
            Join The next Cohort <MoveRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="h-[536px] w-full max-w-[506px] relative hidden xl:flex justify-center mt-20">
          <div className="h-full w-full z-10 rounded-r-none rounded-[48px] bg-[#FB8888]/50 p-3 pr-0">
            <Image
              priority
              src="/trainings/b-3.jpeg"
              alt="banner-img"
              width={536}
              height={536}
              quality={100}
              className="w-full h-full object-cover rounded-[40px] rounded-r-none"
            />
          </div>
          <div className="absolute h-[341px] top-24 -left-36 w-[464px] rounded-r-none rounded-[48px] bg-[#FB8888]/50 p-3 pr-0">
            <Image
              priority
              src="/trainings/b-2.jpeg"
              alt="banner-img"
              width={536}
              height={536}
              quality={100}
              className="w-full h-full object-cover rounded-[40px] rounded-r-none"
            />
          </div>
          <div className="absolute max-w-[376px] w-full h-[250.7px] -top-24 right-0 rounded-r-none rounded-[48px] bg-[#FB8888]/50 p-3 pr-0">
            <Image
              priority
              src="/trainings/b-1.jpeg"
              alt="banner-img"
              width={536}
              height={536}
              quality={100}
              className="w-full h-full object-cover rounded-[40px] rounded-r-none"
            />
          </div>
        </div>
      </MaxWrapper>
      <MaxWrapper>
        {Array.from({ length: 5 }).map((_, _key) => (
          <section
            key={_key}
            className="py-10 md:py-20 flex flex-col gap-5 lg:gap-10 items-center justify-center md:max-w-[727px] mx-auto w-full lg:max-w-[926px]">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Beginner’s Software Development
            </h1>

            <div className="w-full border rounded-lg p-[2px] bg-gradient-to-b from-[#FFB5B5] to-[#FB888842]">
              <div className="w-full h-full bg-background p-6 rounded-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full h-full lg:max-w-[416px] flex flex-col justify-between gap-5">
                  <p className="font-normal text-base sm:text-lg">
                    We are working on building sustainable Web3 economy in
                    Africa through remote and onsite Web3 development training,
                    supporting web3 developers and startups, and lowering
                    barriers of entry into the Web3 ecosystem.
                  </p>
                  <p className="flex items-center gap-3 text-base font-semibold">
                    <Calendar className="w-4 h-4" /> 26th August 2024
                  </p>

                  <div className="flex items-center gap-3">
                    <Pill text="Online" />
                    <Pill text="Online" />
                  </div>

                  <div className="flex items-center flex-col md:flex-row gap-4">
                    <CustomButton
                      variant="default"
                      className="bg-[#FB8888]/10 dark:bg-[#FB8888]/5 hover:bg-[#FB8888]/20 hover:dark:bg-[#FB8888]/10 w-full md:w-max">
                      Register For Training{" "}
                      <MoveRight className="w-5 h-5 ml-2" />
                    </CustomButton>
                    <CustomButton
                      variant="outline"
                      className="bg-[#FB8888]/10 dark:bg-[#FB8888]/5 hover:bg-[#FB8888]/20 hover:dark:bg-[#FB8888]/10 w-full md:w-max">
                      Learn More
                    </CustomButton>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-[424px] mx-auto lg:mx-0 aspect-[1.3] gap-4 mt-4 md:mt-0 relative">
                  <div className="rounded-full h-48 w-48 md:w-64 md:h-64 absolute bg-background top-0 right-5 z-10 overflow-hidden">
                    <Image
                      src="/trainings/1.png"
                      alt="trainings"
                      className="w-full h-full"
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                  <div className="rounded-full h-48 w-48 md:w-64 md:h-64 absolute bg-background bottom-0 left-5 overflow-hidden">
                    <Image
                      src="/trainings/2.png"
                      alt="trainings"
                      className="w-full h-full"
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </MaxWrapper>
      <Join />
    </div>
  );
}
