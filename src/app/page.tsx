"use client";

import { useAllBlogs } from "@/hook/blog-hook";
import { IBlog } from "@/types/blogs";
import Image from "next/image";

export default function Home() {
  const {
    data: blogs,
    isLoading,
    isError,
    isSuccess,
    isFetching,
  } = useAllBlogs();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <div className="flex flex-row">
        {isSuccess &&
          blogs.map((blog: IBlog) => {
            const blogImage = blog.attributes.thumbnail.data
              ? `${process.env.STRAPI_BASE_URL}${blog.attributes.thumbnail.data.attributes.url}`
              : "https://placehold.jp/640x360.png";
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg basis-1/4 md:basis-1/3"
                key={blog.id}
              >
                <Image
                  className="w-full object-cover"
                  src={blogImage}
                  alt="Sunset in the mountains"
                  width={500}
                  height={500}
                />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {blog.attributes.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {blog.attributes.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
