import { Post, User } from "@prisma/client"
import Link from "next/link"

interface Props {
  post: Post & {
    User: User
  }
}

const SimplePost = ({ post }: Props) => {
  return (
    <div className="flex flex-col rounded-lg border border-black p-2">
      <Link href={`/1`}>
        <h2 className="text-lg font-bold">{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <span className="text-sm text-gray-500">{post.User.name}</span>
      <div className="mt-2 flex justify-end space-x-2">
        <button className="border border-black p-1 text-sm text-red-600">
          Hapus
        </button>
      </div>
    </div>
  )
}

export default SimplePost
