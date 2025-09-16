import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience & Skills.</Heading>
        
        <FramerWrapper y={0} x={200}>
        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
        &quot;I'm a full-stack developer with solid experience in modern web technologies. I specialize in building scalable web applications using JavaScript, TypeScript, React, and Next.js for frontend development, along with backend frameworks like Express.js, FastAPI, and Spring Boot. I also have hands-on experience with networking infrastructure including MikroTik, Cisco, and TP-Link equipment.&quot;
        </p>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Frameworks & Libraries
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={100} delay={0.36}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Networking & Infrastructure
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.networking} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;