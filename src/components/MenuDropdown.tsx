import { IPropMenu } from "@/types/menu";
import { Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";

const MenuDropdown = ({ listMenus, text }: IPropMenu) => {
  return (
    <Dropdown
      menu={{ items: listMenus }}
      overlayClassName="header-dropdown"
      className="menu-pc"
    >
      <a
        href=""
        onClick={(e) => e.preventDefault()}
        className="!flex items-center"
      >
        {text}
        <IoIosArrowDown size={20} className="ml-1" />
      </a>
    </Dropdown>
  );
};

export default MenuDropdown;
