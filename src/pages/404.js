import React from "react";
import { Link } from "gatsby";
import useSiteMetadata from "../useSiteMetadata";

export function Head() {
  const { title } = useSiteMetadata();
  return (
    <>
      <title>Page not found | {title}</title>
    </>
  );
}

export default function NotFoundPage() {
  return (
    <main className="space-y-4">
      <header className="space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </p>
      </header>
      <p>
        <Link className="underline text-purple-800" to="/">
          Go home
        </Link>
      </p>
    </main>
  );
}
