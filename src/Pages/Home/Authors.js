import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import AuthorsCard from "./AuthorsCard";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-cozy-library-server.vercel.app/authors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAuthors(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {loading? <Spinner></Spinner> : authors.map((author) => (
          <AuthorsCard key={author._id} author={author}></AuthorsCard>
        ))}
      </div>
    </section>
  );
};

export default Authors;
