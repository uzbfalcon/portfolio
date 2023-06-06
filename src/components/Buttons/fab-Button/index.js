import { useState } from "react";
import {
  FaLink,
  FaLinkedinIn,
  // FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
// import { AiFillFileAdd, AiOutlineRadiusSetting } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import "./style.css";

// type PropsWithChildren = {
//   children: Object
// }

// const Icon: FC<PropsWithChildren> = ({ children }) => {
//   <span className="material-symbols-outlined">{children}</span>
// };

export const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fab ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaLink />
      </button>
      <div className="menu">
        <button>
          <a href="https://t.me/xujamov_l" target>
            <FaTelegramPlane />
          </a>
        </button>
        <button>
          <BiPhoneCall />
        </button>
        <button>
          <a href="https://www.linkedin.com/in/lochinbek-khujamov-3470a5257/" target>
            <FaLinkedinIn />
          </a>
        </button>
      </div>
    </div>
  );
};
export default Button;
