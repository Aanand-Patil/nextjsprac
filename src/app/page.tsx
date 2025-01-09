import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[300px] w-full border"></div>
      <div className="relative">
        <div className="absolute left-0 right-0">
          <div className="absolute -top-[100px] -left-[50px]">A</div>
          <div className="absolute -top-[200px] right-0">B</div>
        </div>
        <div className="grid place-items-center">
          <h2 className="text-4xl">anand</h2>
          <button className="bg-red-600 text-white text-xl px-8 py-2 rounded-full uppercase font-bold ">
            anand
          </button>
        </div>
      </div>
    </div>
  );
}
