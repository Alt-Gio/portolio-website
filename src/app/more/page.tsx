import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, Users, Camera } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

// Define the job type
type JobType = "Business" | "Government" | "Freelance" | "Creative";

const morePage = () => {
  // Function to get icon based on job type
  const getJobTypeIcon = (type: JobType) => {
    switch (type) {
      case "Business":
        return <Briefcase className="h-4 w-4" />;
      case "Government":
        return <Building className="h-4 w-4" />;
      case "Freelance":
        return <Users className="h-4 w-4" />;
      case "Creative":
        return <Camera className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  // Function to get badge color based on job type
  const getBadgeColor = (type: JobType) => {
    switch (type) {
      case "Business":
        return "bg-green-100 text-green-800";
      case "Government":
        return "bg-blue-100 text-blue-800";
      case "Freelance":
        return "bg-purple-100 text-purple-800";
      case "Creative":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    // WORK EXPERIENCE PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        Work Experience
      </Badge>
      
      <div className="flex flex-col gap-3">
        <Heading>Professional Experience</Heading>
        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          My journey through various roles in technology, government service, and creative industries.
        </p>
      </div>

      <div className="h-auto w-full flex flex-wrap gap-4 p-2">
        {portfolioConfig.workExperience.map((job, indx) => {
          return (
            <FramerWrapper
              key={indx}
              className="max-w-[48%] max-lg:max-w-full"
              y={0}
              scale={0.8}
              delay={indx / 4}
              duration={0.15}
            >
              <Card className="w-full h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(job.type as JobType)}`}>
                      {getJobTypeIcon(job.type as JobType)}
                      {job.type}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.duration}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-sm font-poppins text-muted-foreground mb-3">
                    {job.description}
                  </p>
                </CardContent>

                <CardFooter>
                  <div className="w-full">
                    <p className="text-xs font-medium mb-2 text-muted-foreground">
                      Key Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;