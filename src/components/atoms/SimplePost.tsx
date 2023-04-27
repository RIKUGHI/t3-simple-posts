import { Post, User } from "@prisma/client"
import Link from "next/link"
import { useRouter } from "next/router"
import { api, type RouterOutputs } from "~/utils/api"

interface Props {
  post: Post & {
    User: User
  }
  onSuccess: () => void
}

const SimplePost = ({ post, onSuccess }: Props) => {
  const router = useRouter()

  const { mutate } = api.post.delete.useMutation({
    onSuccess: (data) => {
      // router.reload()
      onSuccess()
    },
  })

  const onDelete = () => {
    mutate({
      id: post.id,
    })
  }

  return (
    <div className="flex flex-col rounded-lg border border-black p-2">
      <Link href={`/${post.id}`}>
        <h2 className="text-lg font-bold">{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <span className="text-sm text-gray-500">{post.User.name}</span>
      <div className="mt-2 flex justify-end space-x-2">
        <button
          className="border border-black p-1 text-sm text-red-600"
          onClick={onDelete}
        >
          Hapus
        </button>
      </div>
    </div>
  )
}

export default SimplePost
