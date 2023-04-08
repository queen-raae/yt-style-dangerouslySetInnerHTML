import React from "react";
import useSiteMetadata from "../useSiteMetadata";

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
  return (
    <main className="space-y-4">
      <header className="space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {title} {emoji}
        </h1>
        <p>{description}</p>
      </header>
      <p>
        <a className="underline text-purple-800" href="/api/hello">
          Go to Gatsby Function `hello`
        </a>
      </p>
    </main>
  );
}
