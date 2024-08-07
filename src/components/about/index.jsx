import React from "react";
import ItemLayout from "./ItemLayout";



const AboutDetails = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">


          <ItemLayout className={" col-span-full  row-span-2 flex-col items-start"}>

          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
          Architect of Enchantment
          </h2>

          <p className="font-light  text-xs sm:text-sm md:text-base">
          I wield JavaScript and frameworks like React.js and Next.js to craft seamless, dynamic, and secure web experiences. With the power of Jamstack and a keen design eye, I create captivating portals that connect users across the digital universe. Join me in exploring new technologies to shape the future of the web.
          </p>
          </ItemLayout>



          <ItemLayout 
          className={"col-span-full  sm:col-span-12 md:col-span-4 !p-0"}
          >
            <img 
             className="w-full h-auto"

            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=suman021999&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&ring=FEFE5B&icon_color=FEFE5B&text_bold=false`} 
            alt="suman021999" loading="lazy" />
          </ItemLayout>

          <ItemLayout
            className={"col-span-full md:col-span-8 !p-0"}
           >
            <img 
             className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=suman021999&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&ring=FEFE5B&icon_color=FEFE5B&text_bold=false`} 
            alt="CodeBucks" loading="lazy" />
          </ItemLayout>

          <ItemLayout className={"col-span-full"}>
            <img 
             className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,git,github,html,js,mongodb,netlify,nextjs,nodejs,npm,ps,express,react,redux,sass,tailwind,threejs,postman,materialui,vercel,vite,vscode,codepen" 
            alt="CodeBucks" loading="lazy" />
          </ItemLayout>
          
          
          
        </div>
      </section>
    </>
  );
};

export default AboutDetails;
