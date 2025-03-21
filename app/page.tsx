import BlogList from "@/components/BlogList"
import Header from "@/components/Header"

const page = () => {
  return (
    <main className="max-w-[1900px] mx-auto">
      <Header/>
      <BlogList/>
    </main>
  )
}

export default page