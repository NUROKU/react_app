import Link from "next/link"

const BlogPage = () => {
  return (
    <div className="container mx-auto py-[50px]">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4 border border-black rounded p-5">
                <Link href="/blog/1">Nextjsに入門しました!</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogPage