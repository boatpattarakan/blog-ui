import { useAllBlogs } from "@/hook/blog-hook";
import BlogService from "@/service/blog-service";
import { IBlog } from "@/types/blogs";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
  // const blogs = await fetchBlogs();
  // const data = useQuery({
  //   queryKey: ["blogs"],
  //   queryFn: () =>
  //     fetch(`${process.env.STRAPI_BASE_URL}/api/blogs`).then((res) =>
  //       res.json()
  //     ),
  // });
  const query = useQuery(
    ["pokemon", []],
    async () => await BlogService.getAllBlogs()
  );
  const { data } = query;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
