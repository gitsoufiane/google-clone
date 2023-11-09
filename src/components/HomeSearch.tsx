"use client";

import React from "react";
import { Search, Mic, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export function HomeSearch() {
  const [query, setQuery] = React.useState("");
  const [randomLoading, setRandomLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search/web?searchTerm=${query}`);
  };

  const randomSearch = async () => {
    setRandomLoading(true);
    const res = await fetch("http://random-word-api.herokuapp.com/word");
    if (!res.ok) return;
    const [data] = await res.json();
    if (!data) return;
    router.push(`/search/web?searchTerm=${data}`);
    setRandomLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <Search className="text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Mic />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomLoading ? (
            <RotateCcw className="animate-spin" />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
