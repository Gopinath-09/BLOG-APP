'use client'
import { blog_data } from "@/assets/assets/assets"
import { useState } from "react"
import BlogCard from "./BlogCard"

const BlogList = () => {
    const [menu,setMenu] = useState("All")
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
                blog_data.filter((item)=> menu === 'All' ? true : item.category === menu ).map((d,i)=>(
                    <BlogCard key={i} data={d}/>
                ))
            }
          </div>
      </section>
    )
}

export default BlogList

const blogCat = ["All","Technology","Startup","Lifestyle"]