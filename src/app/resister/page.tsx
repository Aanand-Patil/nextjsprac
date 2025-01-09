import Link from "next/link";
import React from "react";

type Props = {};

function Resister({}: Props) {
  return (
    <section className="mt-7">
      <h1 className="text-center text-4xl text-red-500">resister</h1>
      <form className="block max-w-sm mx-auto">
        <input type="email" placeholder="email" />

        <input type="password" placeholder="password" />
        <button type="submit">resister</button>
      </form>
    </section>
  );
}

export default Resister;
