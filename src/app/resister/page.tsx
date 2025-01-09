"use client";
import DropdownMenuDemo from "@/components/dropdownmenu/Menu";
import HoverCardDemo from "@/components/hovercard/HoverC";
import Link from "next/link";
import React from "react";

type Props = {};

function Resister({}: Props) {
  return (
    <section className="mt-7 flex justify-center">
      {/* <HoverCardDemo /> */}
      <DropdownMenuDemo />
    </section>
  );
}

export default Resister;
