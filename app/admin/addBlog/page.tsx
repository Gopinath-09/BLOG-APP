'use client'
import { assets } from "@/assets/assets/assets"
import axios from "axios"
import Image from "next/image"
import React , { useState } from "react"
import { toast } from "sonner"

const Page = () => {
    const [image, setImage] = useState<File | null>(null); 
    const [data,setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex",
        authorImg: '/author_img.png',
    })
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setImage(event.target.files[0]);
        }
    };
    const onChangeHandle = (
        e:React.ChangeEvent<HTMLInputElement> 
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data)=>({...data, [name]: value}))
    }
    const onSubmitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //console.log(data);
        //console.log(image);

        if(!image){
            return;
        }

        const formData = new FormData();
        formData.append("title",data.title);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("author",data.author);
        formData.append("authorImg",data.authorImg);
        formData.append("image",image);
        /* console.log(formData);
        formData.forEach((v,k)=>{
            console.log(`${k}: ${v}`);
        }) */
        const respone = await axios.post("/api/blog", formData);
        if(respone.data.success){
            toast.success(respone.data.message);
        }else{
            toast.error(respone.data.error);
        }
    }
  return (
    <>
        <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl font-medium">Upload Thumbnail</p>
            <label htmlFor="image">
                <Image
                    src={image ? URL.createObjectURL(image) : assets.upload_area}
                    alt="upload_icon"
                    width={140}
                    height={70}
                    className="mt-4"
                />
            </label>
            <input type="file" name="image" id="image" onChange={handleImageChange} hidden required/>
            <p className="text-xl mt-4">Blog Title</p>
            <input
                onChange={onChangeHandle}
                type="text"
                placeholder="Type Title Here"
                required
                name="title"
                className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
            />
            <p className="text-xl mt-4">Blog Title</p>
            <textarea
                onChange={onChangeHandle}
                rows={6}
                placeholder="Type Description Here"
                required
                name="description"
                className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
            />
            <p className="text-xl mt-4">Blog Category</p>
            <select
                name="category"
                className="w-40 mt-4 px-4 py-3 border
                border-gray-500"
                onChange={onChangeHandle}
            >
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br />
            <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">Add</button>
        </form>
    </>
  )
}

export default Page