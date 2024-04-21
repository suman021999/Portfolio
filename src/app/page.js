import Image from "next/image";
import bg from "../../public/background/home-background.png";

import { Wizard } from "@/components/models/Wizard";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        fill
        // priority
        // sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        alt="background-image"
      />
      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </>
  );
}
