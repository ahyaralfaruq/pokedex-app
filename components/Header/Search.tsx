"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pocket from "@/assets/pocket.png"

const Search = () => {

  const [text, setText] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(text === "" || text.length === 0 || text.trim() === "") return
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();

      // send data here
      const pressText = text.trim();
      router.push(`/?search=${encodeURIComponent(pressText)}`, { scroll: false });
    }
  }

  return (
    <div className="w-2/3 lg:w-1/3 h-12 overflow-hidden rounded-3xl border border-secondary focus-within:border-[#1f6feb] focus-within:border-2">
      <div className="flex items-center flex-nowrap gap-2 w-full h-full">
        <label htmlFor="search" className="ml-2 h-8 lg:h-9 cursor-pointer">
          <Image src={pocket} alt="pocket monster" className="align-middle" />
        </label>

        <input 
          type="text"
          id="search"
          className="w-full h-full px-5 py-3 border-none outline-none !bg-transparent text-sm md:text-base"
          placeholder="Search pokemon by name or ID"
          value={text}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  )
}

export default Search