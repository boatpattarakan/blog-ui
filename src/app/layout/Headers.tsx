"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import "./headers.scss";
import { RiGlobalLine } from "react-icons/ri";
import type { MenuProps } from "antd";
import MenuDropdown from "@/components/MenuDropdown";
import MenuCollapse from "@/components/MenuCollapse";
import { log } from "console";

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
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="bg-secondary">
        <div className="title-header lg:container">
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
        <div className="lg:container navigation">
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
          <div className={`menu ${navbarOpen ? "active" : ""}`}>
            <div className="menu-scope">
              <ul>
                {headerMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.type === "dropdown" ? (
                        <>
                          <MenuDropdown listMenus={items} text={item.name} />
                          <MenuCollapse listMenus={items} text={item.name} />
                        </>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </li>
                  );
                })}
                <li>
                  <button className="btn-lang">
                    <RiGlobalLine size={30} className="mr-1" />
                    EN
                  </button>
                </li>
                <li>
                  <Link href={"/"} className="btn-yellow-outline">
                    Get FREE Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button
            className={`hamburger ${navbarOpen ? "active" : ""}`}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`menu-overlay ${navbarOpen ? "active" : ""}`}></div>
    </div>
  );
};

export default Headers;
