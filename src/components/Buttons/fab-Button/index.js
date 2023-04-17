import { FC, PropsWithChildren, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { AiFillFileAdd, AiOutlineRadiusSetting } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import "./style.css";

// type PropsWithChildren = {
//   children: Object
// }

const Icon: FC<PropsWithChildren> = ({ children }) => {
  <span className="material-symbols-outlined">{children}</span>
};

export const Button = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={`fab ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon><AiFillFileAdd/></Icon>
      </button>
      <div className="menu">
        <button>
          <Icon><FaBeer/></Icon>
        </button>
        <button>
          <Icon><BiPhoneCall/></Icon>
            </button>
        <button>
          <Icon><AiOutlineRadiusSetting/></Icon>
        </button>
      </div>
    </div>
  );
};
export default Button