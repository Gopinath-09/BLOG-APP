"use client";
import { blog_data } from "@/assets/assets/assets"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import axios from "axios"
import { StaticImageData } from "next/image";
import Skeleton from "./Skeleton";
type BlogProps = {
    id : number;
    title: string;
    description: string;
    image: StaticImageData | string;
    date: number;
    category: string;
    author: string;
    author_img: StaticImageData | string;
};
const BlogList = () => {
    const [menu,setMenu] = useState("All");
    const [blogs, setBlogs] = useState<BlogProps[] | null>(null);
    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
    }

    useEffect(()=>{
        fetchBlogs();
    },[]);

    return (
      <section>
          <div className="flex justify-center gap-6 my-10">
              {
                  blogCat.map((d,i)=>(
                      <button onClick={()=>setMenu(d)} className={menu === d ? "bg-black text-white py-1 px-3" : "py-1 px-3"} key={i}>{d}</button>
                  ))
              }
          </div>
          <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-10 xl:mx-24">
            {
                blogs ? (blogs.filter((item)=> menu === 'All' ? true : item.category === menu ).map((d,i)=>(
                    <BlogCard key={i} data={d}/>
                )) )
                : 
                (
                <>
                    {Array.from({length : 6}).map((_,index)=>(
                        <Skeleton key={index}/>
                    ))}
                </>
            )
            }
          </div>
      </section>
    )
}

export default BlogList

const blogCat = ["All","Technology","Startup","Lifestyle"]