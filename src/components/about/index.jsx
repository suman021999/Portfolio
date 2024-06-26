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
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
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
            src="https://skillicons.dev/icons?i=babel,bootstrap,css,git,github,html,js,mongodb,netlify,nextjs,nodejs,npm,ps,xd,express,react,redux,replit,sass,tailwind,threejs,postman,materialui,vercel,vite,vscode,yarn,codepen,chakraui" 
            alt="CodeBucks" loading="lazy" />
          </ItemLayout>
          
          <ItemLayout className={"col-span-full !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=suman021999&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`} 
          alt="GitHub Streak" />
          </ItemLayout>



          
          
        </div>
      </section>
    </>
  );
};

export default AboutDetails;
