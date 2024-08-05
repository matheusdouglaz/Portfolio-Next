import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left">
            <span className="text-xl">Desenvolvedor Front-End</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/> <span className="text-accent">Matheus Alves</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programing lenguages and technologies.</p>
            {/*button and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div>Socials</div>
            </div>
          </div>
          {/*photo*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;