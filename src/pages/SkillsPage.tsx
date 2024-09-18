import { DiMsqlServer } from "react-icons/di";
import { FaReact, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import {
  SiCsharp,
  SiDotnet,
  SiFastapi,
  SiTailwindcss,
  SiMicrosoftazure,
} from "react-icons/si";

export const SkillsPage = () => {
  return (
    <div className="p-4">
      <p className="mb-4 text-center">All my skills</p>
      <div className="relative w-full h-[400px]">
        <IoLogoJavascript
          title="JavaScript"
          className="absolute text-7xl text-yellow-300 hover:text-yellow-500 hover:scale-110 transition-transform duration-300"
          style={{ top: "10%", left: "20%" }}
        />
        <FaReact
          title="React"
          className="absolute text-7xl text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-300"
          style={{ top: "25%", left: "55%" }}
        />
        <SiDotnet
          title=".NET"
          className="absolute text-7xl text-purple-500 hover:text-purple-700 hover:scale-110 transition-transform duration-300"
          style={{ top: "60%", left: "30%" }}
        />
        <SiCsharp
          title="C#"
          className="absolute text-7xl text-purple-500 hover:text-purple-700 hover:scale-110 transition-transform duration-300"
          style={{ top: "70%", left: "70%" }}
        />
        <DiMsqlServer
          title="MS SQL Server"
          className="absolute text-7xl text-red-500 hover:text-red-700 hover:scale-110 transition-transform duration-300"
          style={{ top: "40%", left: "80%" }}
        />
        <GrMysql
          title="MySQL"
          className="absolute text-7xl text-blue-500 hover:text-blue-700 hover:scale-110 transition-transform duration-300"
          style={{ top: "90%", left: "15%" }}
        />

        <img
          src="src/assets/icons8-python.svg"
          title="Python"
          className="absolute text-4xl text-yellow-400 hover:text-yellow-600 hover:scale-110 transition-transform duration-300"
          style={{ top: "50%", left: "20%" }}
        />

        <SiFastapi
          title="FastAPI"
          className="absolute text-4xl text-green-500 hover:text-green-700 hover:scale-110 transition-transform duration-300"
          style={{ top: "70%", left: "50%" }}
        />
        <SiTailwindcss
          title="Tailwind CSS"
          className="absolute text-4xl text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-300"
          style={{ top: "80%", left: "60%" }}
        />
      </div>
      <div>
        <p className="font-bold m-2">Learning</p>
        <div className="flex flex-row">
          <SiMicrosoftazure
            title="Azure"
            className="m-1 text-3xl text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-300"
          />
          <FaAngular
            title="Angular"
            className="m-1 text-3xl text-red-600 hover:text-red-700 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};
