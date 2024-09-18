import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutmePage } from "./pages/AboutmePage";
import { SkillsPage } from "./pages/SkillsPage";
import { MainLayout } from "./layouts/MainLayout";
import { ProjectsPage } from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Navigate to="/skills" />
      },
      {
        path: "/aboutme", // 
        element: <AboutmePage />
      },
      {
        path: "/skills",
        element: <SkillsPage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      }
    ]
  }
]);

export default router;
