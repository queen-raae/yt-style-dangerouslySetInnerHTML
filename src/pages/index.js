import React, { useState } from "react";
import useSiteMetadata from "../useSiteMetadata";
import SearchResults from "../components/search-results";

export function Head() {
  const { title } = useSiteMetadata();
  return (
    <>
      <title>{title}</title>
    </>
  );
}

export default function IndexPage() {
  const { title, description, emoji } = useSiteMetadata();
  const [term, setTerm] = useState("");

  return (
    <main className="space-y-4">
      <header className="space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {title} {emoji}
        </h1>
        <p>{description}</p>
      </header>

      <form className="space-x-2">
        <span>Search for:</span>
        {["olso", "alez"].map((item) => {
          return (
            <button
              type="button"
              key={item}
              disabled={item === term}
              className={item === term ? "bg-yellow-300" : "underline"}
              onClick={() => setTerm(item)}
            >
              {item}
            </button>
          );
        })}
      </form>

      <SearchResults term={term} />
    </main>
  );
}
