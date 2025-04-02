"use client"

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/ui/resizable-navbar";
import { motion } from "motion/react"


export default function NavBar() {

  const navItems = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "Feature",
      link: "#features"
    },
    {
      name: "Testimonials",
      link: "#testimonial"
    },
    {
      name: "Contact",
      link: "#"
    },
    {
      name: "Download App",
      link: "#"
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="bg-transparent sticky top-0 z-50 py-3"
    >

      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="dark">Book a call</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="dark"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

    </motion.div>

  );
}
