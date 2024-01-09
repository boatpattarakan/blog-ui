import { IPropMenu } from "@/types/menu";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const MenuCollapse = ({ listMenus, text }: IPropMenu) => {
  const fadeInUp = () => {
    const collapse = document.querySelector(".menu-collapse");
    if (collapse) {
      if (collapse.classList.contains("fadeInUp")) {
        collapse.classList.remove("fadeInUp");
      } else {
        collapse.classList.add("fadeInUp");
      }
    }
  };

  const menuCollapse: any = [];
  if (listMenus) {
    listMenus.map((item: any, index) => {
      if (item.label) {
        menuCollapse.push(item.label);
      }
    });
  }

  return (
    <div className="menu-mobile">
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          fadeInUp();
        }}
        className="!flex items-center"
      >
        {text}
        <IoIosArrowDown size={20} className="ml-1" />
      </a>
      <ul className="!p-0 menu-collapse">
        {menuCollapse.map((item: any, index: number) => {
          return (
            <li key={index} className="!border-0">
              <a href="">{item.props.children}</a>
            </li>
          );
        })}
        <li className="!border-0">
          <a href="">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuCollapse;
