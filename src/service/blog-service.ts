import axios from "axios";
 

export default class BlogService {
  static async getAllBlogs() {
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs?populate=*`);
    return Promise.resolve(response.data.data); ;
  }

  static async getByBlogId(id: string) {
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/${id}`);
    return Promise.resolve(response.data.data);
  }
}