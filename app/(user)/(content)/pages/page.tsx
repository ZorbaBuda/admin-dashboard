import {pagesLinks} from "@/lib/data"
import Link from "next/link"

const PagesPage = () => {
  return (
    <div>
      {pagesLinks.map(link => (
        <Link key={link.link} href={link.link} className="underline">{link.name}</Link>
      ))}
    </div>
  )
}

export default PagesPage