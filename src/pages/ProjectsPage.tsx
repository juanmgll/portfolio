import { CardComponent } from "@/components/CardComponent";
import { DiMsqlServer } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp, SiDotnet } from "react-icons/si";

const icons1 = [
  { Icon: IoLogoJavascript, color: "text-yellow-300" },
  { Icon: FaReact, color: "text-blue-400" },
  { Icon: SiDotnet, color: "text-purple-500" },
  { Icon: SiCsharp, color: "text-purple-500" },
  { Icon: DiMsqlServer, color: "text-red-500" },
];

const icons2 = [
  { Icon: IoLogoJavascript, color: "text-yellow-300" },
  { Icon: FaReact, color: "text-blue-400" },
];

export const ProjectsPage = () => {
  return (
    <div className="flex flex-row">
      <div className="m-4">
        <CardComponent
          title="Quiz-app"
          description="Quiz app featuring multiple categories for questions and answers. Built with React for the frontend and .NET for the backend, this application stores questions, answers, and categories. Designed for simplicity, it avoids complex architectures like Clean Architecture."
          icons={icons1}
          link="https://github.com/juanmgll/quiz-app"
          linkText="View more"
        />
      </div>

      <div className="m-4">
        <CardComponent
          title="Portfolio"
          description="Showcasing my personal portfolio built with Shadcn and Tailwind CSS"
          icons={icons2}
          link="https://github.com/juanmgll/portfolio"
          linkText="View more"
        />
      </div>
    </div>
  );
};
