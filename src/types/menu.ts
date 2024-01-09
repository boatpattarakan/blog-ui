import type { MenuProps } from "antd";

export interface IMenu {
  name: string,
  link: string,
  type: string,
}


export type IPropMenu = {
  listMenus: MenuProps["items"];
  text: string;
};