"use client"

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import Logo from "../Logo";
import IButton from "../IButton";
import { motion } from "motion/react"


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      item: "Home",
      link: "#home"
    },
    {
      item: "Feature",
      link: "#feature"
    },
    {
      item: "Testimonials",
      link: "#testimonial"
    },
    {
      item: "Contact",
      link: "#"
    },
    {
      item: "Download App",
      link: "#"
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      id="home"
    >

      <Navbar
        className="py-3"
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="flex flex-row-reverse" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />

          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link className="text-gray-500" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#features">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#testimonial">
              Testimonials
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="end">
          <NavbarItem>
            <IButton buttonText='Sign Up' className="w-60 max-[1026px]:w-40 transform rounded-lg bg-white px-6 py-2 font-medium !text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:!text-white border-1 hover:border-white dark:bg-white dark:text-black dark:hover:bg-gray-200" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-black-gray py-5 text-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 1 ? "primary" : "success"
                }
                href={item.link}
                size="lg"
              >
                {item.item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

    </motion.div>

  );
}
