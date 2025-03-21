import { assets } from "@/assets/assets/assets";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

type DataProps = {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData,
    date: number;
    category: string;
    author: string;
    author_img: string | StaticImageData;
}

const BlogCard = ({data} : {data: DataProps}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border bg-white border-black hover:shadow-[-7px_7px_0px_#000000] transition-all">
      <Image src={data.image} alt={data.title} width={400} height={400}/>
      <p className="ml-5 mt-5 text-2xl inline-block bg-black text-white">{data.category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{data.title}</h5>
        <p className="mb-3 text-sm -tracking-tight text-gray-700">{data.description.slice(0,100)}...</p>
        <Link href={`/blog/${data.id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read More
          <Image
            src={assets.arrow}
            alt="arrow"
            width={12}
            className="ml-2 mt-1"
          />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard