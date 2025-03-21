import Image from "next/image"
import { assets } from "@/assets/assets/assets";
const Header = () => {
  return (
    <div>
      <nav className="p-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            alt="logo"
            width={180}
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid shadow-[-7px_7px_0px_#000000]">Get Started</button>
        </div>
      </nav>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
        <p className="sm:text-sm mt-10 max-w-[740px] m-auto md:text-lg lg:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas iste dolore quasi nisi enim illo repellat! Ad quia odio mollitia similique. Repellendus nisi eveniet, provident doloremque sint laudantium voluptatibus.</p>
        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-solid shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            className="pl-4 outline-none"
            placeholder="Enter your Email"
          />
          <button className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header