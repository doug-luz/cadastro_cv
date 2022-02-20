import { FaReact, FaJava, FaPhp } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoAngular,
  IoLogoPython,
} from "react-icons/io";

import * as C from "./style";

interface LanguageProps {
  title: string;
  icon: string;
  isSelected?: boolean | undefined;
  onClick: () => void;
}

export const Language = ({
  title,
  icon,
  isSelected,
  onClick,
}: LanguageProps) => {
  return (
    <C.Container onClick={onClick}>
      <div>
        {icon === "javascript" && <IoLogoJavascript color="#FFF" size="50px" />}
        {icon === "html" && <IoLogoCss3 color="#FFF" size="50px" />}
        {icon === "css" && <IoLogoHtml5 color="#FFF" size="50px" />}
        {icon === "react" && <FaReact color="#FFF" size="50px" />}
        {icon === "node" && <IoLogoNodejs color="#FFF" size="50px" />}
        {icon === "angular" && <IoLogoAngular color="#FFF" size="50px" />}
        {icon === "python" && <IoLogoPython color="#FFF" size="50px" />}
        {icon === "java" && <FaJava color="#FFF" size="50px" />}
        {icon === "php" && <FaPhp color="#FFF" size="50px" />}
      </div>
      <h1>{title}</h1>
    </C.Container>
  );
};
