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
      link: "#features"
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

  const handleClick = () => {
    setIsMenuOpen(false)
  }

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
      className="bg-black sticky top-0 z-50"
    >

      <Navbar
        className="py-3"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred
        isBordered
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
            <IButton buttonText='Sign Up' className="w-60 max-[1026px]:w-40 transform rounded-lg bg-white px-6 py-2 font-medium !text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:!text-white border-1 hover:border-white" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-black-gray py-16 text-white pointer-events-auto">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <div onClickCapture={handleClick}>
                <Link
                  className="w-full text-2xl"
                  color={"success"}
                  href={item.link}
                  size="lg"
                >
                  {item.item}
                </Link>
              </div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

    </motion.div>

  );
}
