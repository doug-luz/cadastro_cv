import * as C from "./style";
import { Link } from "react-router-dom";
import { FaHeadSideMask, FaLinkedin, FaReact } from "react-icons/fa";
import { BsKeyboardFill } from "react-icons/bs";
interface SideProps {
  path: string;
  title: string;
  description: string;
  icon: any;
  isOn: boolean;
}
export const Side = ({ description, path, title, icon, isOn }: SideProps) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </C.Info>
        <C.Icon>
          {icon === "name" && <FaHeadSideMask color="#FFF" />}
          {icon === "languages" && <FaReact color="#FFF" />}
          {icon === "experience" && <BsKeyboardFill color="#FFF" />}
          {icon === "contact" && <FaLinkedin color="#FFF" />}
        </C.Icon>
        <C.Dot isOn={isOn}></C.Dot>
      </Link>
    </C.Container>
  );
};
