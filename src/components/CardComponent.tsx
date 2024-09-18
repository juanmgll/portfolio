import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface CardComponentProps {
  title: string;
  description: string;
  icons: { Icon: IconType; color: string }[];
  link: string;
  linkText: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  icons,
  link,
  linkText,
}) => {
  return (
    <Card className="flex flex-col w-80 h-80 border rounded-lg shadow-lg">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between p-4 flex-grow">
        <div className="flex mt-auto">
          <CardFooter>
            <div className="flex flex-col">
            <div className="flex flex-row flex-wrap gap-2 mb-4">
              {icons.map((iconObj, index) => (
                <iconObj.Icon
                  key={index}
                  className={`text-3xl ${iconObj.color}`}
                />
              ))}
            </div>
            <div>
              <Button>
                <Link to={link} target="_blank" className="text-white">
                  {linkText}
                </Link>
              </Button>
            </div>
            </div>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
};
