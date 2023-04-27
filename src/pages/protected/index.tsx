import { useSession } from "next-auth/react"

const index = () => {
  const session = useSession()
  console.log(session)

  return <h1>Logged in</h1>
}

export default index
