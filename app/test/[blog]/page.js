import { notFound } from "next/navigation";
import React from "react";

function Blog({ searchParams }) {
  if (searchParams.error === "true") {
    throw new Error("This is an error");
  } else if (searchParams.test === "true") {
    notFound();
  }

  return (
    <div>
      <h2>Blog Page</h2>
    </div>
  );
}

export default Blog;
