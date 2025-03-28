import { assets } from "@/assets/assets/assets"
import SideBar from "@/components/admin/SideBar"
import Image from "next/image"
import { Space_Mono } from "next/font/google";
import { Toaster } from "sonner";

const space = Space_Mono({
    subsets: ['latin'],
    weight: ['400','700']
})

export default function Layout({children}:{
    children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${space.className} ` }>
        <div className="flex max-w-[2000px] mx-auto">
            <SideBar/>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                    <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.profile_icon} alt="profile" width={40}/>
                </div>
                {children}
                <Toaster position="top-right"/>
            </div>
        </div>
    </body>
    </html>
  )
}