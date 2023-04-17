import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SearchResults({ term }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("/api/search", {
        params: {
          term: term,
        },
      })
      .then(({ data }) => setResults(data));
  }, [term]);

  return (
    <ul className="space-y-3 [&_em]:bg-yellow-300">
      {results.map((item) => {
        return (
          <li key={item.name}>
            <strong
              className="block"
              dangerouslySetInnerHTML={{ __html: item.name }}
            />
            <span
              className="block"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </li>
        );
      })}
    </ul>
  );
}
