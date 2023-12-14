"use client";

import { useAllBlogs } from "@/hook/blog-hook";
import { IBlog } from "@/types/blogs";

export default function Home() {
  const { data: blogs, isLoading, isError, isSuccess } = useAllBlogs();
  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess &&
        blogs.map((blog: IBlog) => (
          <p key={blog.id}>{blog.attributes.title}</p>
        ))}
    </div>
  );
}
