import { useQuery } from "@tanstack/react-query";
import BlogService from "@/service/blog-service";

const useAllBlogs = () => {
  return useQuery(
    {
      queryKey: ["blogs"],
      queryFn: () => BlogService.getAllBlogs(),
    }
  );
}

const useBlogById = (id : string) => {
  return useQuery(
    {
      queryKey: ["blogs", id],
      queryFn: () => BlogService.getByBlogId(id),
    }
  );
}


export { 
  useAllBlogs,
  useBlogById  
};