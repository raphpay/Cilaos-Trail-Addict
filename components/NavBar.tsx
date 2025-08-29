"use client";

import { MenuIcon, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface NavigationButtonProps {
  title: string;
  href: string;
  verticalSeparator?: boolean;
  horizontalSeparator?: boolean;
  setIsOpen: (value: boolean) => void;
}

function NavigationButton({
  title,
  href,
  verticalSeparator = false,
  horizontalSeparator = false,
  setIsOpen,
}: NavigationButtonProps) {
  return (
    <>
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" onClick={() => setIsOpen(false)} href={href}>
            {title}
          </a>
        </li>
      </ul>
      {verticalSeparator && (
        <p className="text-neutral-400 dark:text-neutral-200">|</p>
      )}
      {horizontalSeparator && (
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      )}
    </>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg">
      <div className="mx-2 my-2">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="text-xl font-bold transition-colors  ">
            <img
              src="/assets/Twinpaw-Logo.png"
              className="h-10 object-contain"
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer   focus:outline-none sm:hidden"
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>

          <nav className="hidden sm:flex gap-2 items-center">
            <NavigationButton
              title="Home"
              href="/"
              verticalSeparator={true}
              setIsOpen={setIsOpen}
            />
            <NavigationButton
              title="Espace Admin"
              href="/login"
              setIsOpen={setIsOpen}
            />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <NavigationButton
              title="Home"
              href="/"
              horizontalSeparator={true}
              setIsOpen={setIsOpen}
            />
            <NavigationButton
              title="Espace Admin"
              href="/login"
              horizontalSeparator={true}
              setIsOpen={setIsOpen}
            />
          </nav>
        </motion.div>
      )}
    </div>
  );
}
