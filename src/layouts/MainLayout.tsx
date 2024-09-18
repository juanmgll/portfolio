import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiDotnet, SiCsharp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MainLayout = () => {
  return (
    <div>
      <div className="h-screen flex mt-32 justify-center">
        <div className="mx-96">
          <p className="text-2xl font-bold">
            I'm Juan Gutierrez, a software developer dedicated to creating
            innovative and effective solutions.
          </p>
          <div className="flex flex-row mt-4">
            <IoLogoJavascript className="text-3xl mr-2 text-yellow-300" />
            <FaReact className="text-3xl mx-2 text-blue-400" />
            <SiDotnet className="text-3xl mx-2 text-purple-500" />
            <SiCsharp className="text-3xl mx-2 text-purple-500" />
            <DiMsqlServer className="text-3xl mx-2 text-red-500" />
            <GrMysql className="text-3xl mx-2 text-blue-500" />
          </div>
          <div className="flex flex-row mt-4">
            <Github className="mr-4" />
            <a
              href="https://github.com/juanmgll"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex justify-center my-4">
            <a href="#outlet-section">
              <Button>See more</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col p-4">
        <Navbar />
        <div className="m-4" id="outlet-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
