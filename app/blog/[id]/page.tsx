'use client'

import { assets, blog_data } from "@/assets/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type propParams = {
  params: {
    id: string;
  }
}

const page = ({params}:propParams) => {
  const blog = blog_data.filter((item)=> item.id === Number(params.id))[0];
  if(!blog) redirect("/");
  return (
    <>
      {blog && (
        <>
          <div className="bg-gray-200 py-5 md:px-12 lg:px-28 max-w-[1900px] mx-auto">
            <div className="flex justify-between items-center">
              <Link href={'/'}>
                <Image src={assets.logo} alt="logo" width={180} className="w-[130px0 sm:w-auto]"/>
              </Link>
              <button className="flex items-center gap-2 font-medium py-1 px-3 border border-black shadow-[-7px_7px_0px_#000000]">
                Get Started <Image src={assets.arrow} alt="arrow "/>
              </button>
            </div>
            <div className="text-center my-24">
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{blog.title}</h1>
              <Image
                src={blog.author_img}
                alt="author_img"
                width={60}
                height={60}
                className="mx-auto mt-6 border border-white rounded-full"
              />
              <p className="mt-2 pb-2 text-lg max-w-[740px] mx-auto">{blog.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          <Image
            src={blog.image}
            alt="blog img"
            width={1280}
            height={720}
            className="border border-white"
          />
          <h1 className="my-8 text-2xl font-semibold">Introduction</h1>
          <p className="my-3 text-lg">{blog.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta magnam animi illum repellendus sunt asperiores dolorum! Dicta esse minus facilis, nobis dolorum, et quasi inventore officiis culpa eius aperiam.</p>
          <div className="my-24">
            <p className="font-semibold my-4 text-black">Share this Article on social media</p>
            <div className="flex">
              <Image src={assets.facebook_icon} alt="facebook" width={50}/>
              <Image src={assets.twitter_icon} alt="twitter" width={50}/>
              <Image src={assets.googleplus_icon} alt="google" width={50}/>
            </div>
          </div>
        </div>
        </>
      ) }   
    </>
  )
}

export default page