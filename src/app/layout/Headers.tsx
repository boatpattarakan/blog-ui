"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoMdArrowForward, IoIosArrowDown } from "react-icons/io";
import "./headers.scss";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

const headerMenu = [
  {
    name: "WORKS",
    link: "/",
    type: "link",
  },
  {
    name: "SERVICES",
    link: "/",
    type: "dropdown",
  },
  {
    name: "ABOUT US",
    link: "/",
    type: "link",
  },
  {
    name: "JOIN OUR TEAM",
    link: "/",
    type: "link",
  },
  {
    name: "ARTICLES",
    link: "/",
    type: "link",
  },
  {
    name: "CONTACT",
    link: "/",
    type: "link",
  },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href={"/"} className="dropdown-menu">
        All Services
      </Link>
    ),
  },
  {
    type: "divider",
    className: "dropdown-divider",
  },
  {
    key: "2",
    label: (
      <Link href={"/"} className="dropdown-menu">
        Digital Marketing
      </Link>
    ),
  },
  {
    type: "divider",
    className: "dropdown-divider",
  },
  {
    key: "3",
    label: (
      <Link href={"/"} className="dropdown-menu">
        Strategic Development
      </Link>
    ),
  },
  {
    type: "divider",
    className: "dropdown-divider",
  },
  {
    key: "4",
    label: (
      <Link href={"/"} className="dropdown-menu">
        Creative Production
      </Link>
    ),
  },
  {
    type: "divider",
    className: "dropdown-divider",
  },
  {
    key: "5",
    label: (
      <Link href={"/"} className="dropdown-menu">
        Data Analysis & Insight
      </Link>
    ),
  },
  {
    type: "divider",
    className: "dropdown-divider",
  },
  {
    key: "6",
    label: (
      <Link href={"/"} className="dropdown-menu">
        UX/UI Design
      </Link>
    ),
  },
];

const Headers = () => {
  return (
    <div>
      <div className="bg-secondary">
        <div className="title-header container">
          <h2>
            You are processing your <strong>DIY-Service Package.</strong>
            Continue to complete and get the digital marketing strategy of your
            own. - <strong>FREE!</strong>
          </h2>
          <Link href={""}>
            Continue <IoMdArrowForward />
          </Link>
        </div>
      </div>
      <div className="hearder-menu">
        <div className="container navigation">
          <div className="logo">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width="120"
                height="60"
              />
            </Link>
          </div>
          <div className="menu">
            <ul>
              {headerMenu.map((item, index) => {
                return (
                  <li key={index}>
                    {item.type === "dropdown" ? (
                      <Dropdown
                        menu={{ items }}
                        overlayClassName="header-dropdown"
                      >
                        <a
                          href=""
                          onClick={(e) => e.preventDefault()}
                          className="!flex items-center"
                        >
                          {item.name}
                          <IoIosArrowDown size={20} className="ml-1" />
                        </a>
                      </Dropdown>
                    ) : (
                      <Link href={item.link}>{item.name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
