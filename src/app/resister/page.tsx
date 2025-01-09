import Link from "next/link";
import React from "react";

type Props = {};

function Resister({}: Props) {
  return (
    <section className="mt-7">
      <h1 className="text-center text-4xl text-red-500">resister</h1>
      <form className="flex flex-col  justify-center items-center  text-xl font-semibold  border-red-600 border-8 rounded-lg">
        <input type="email" placeholder="email" />

        <input type="password" placeholder="password" />
        <button type="submit">resister</button>
      </form>
    </section>
  );
}

export default Resister;
