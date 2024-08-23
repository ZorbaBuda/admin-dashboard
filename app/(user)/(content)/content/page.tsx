import {pagesLinks} from "@/lib/data"
import Link from "next/link"

const PagesPage = () => {
  return (
    <div>
      <h2 className="text-2xl mb-10">Select the content type you want to edit:</h2>
    <div className="flex flex-col gap-5">
      {pagesLinks.map(link => (
        <Link key={link.link} href={link.link} className="text-lg hover:underline">{link.name}</Link>
      ))}
    </div>
    </div>
  )
}

export default PagesPage