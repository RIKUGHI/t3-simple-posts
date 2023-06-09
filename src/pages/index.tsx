import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { api } from "~/utils/api"
import Navbar from "~/components/atoms/NavBar"
import SimplePost from "~/components/atoms/SimplePost"
import Button from "~/components/atoms/Button"

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" })
  const posts = api.post.all.useQuery()

  return (
    <>
      <Head>
        <title>Simple Posts</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto max-w-4xl">
        <Navbar />
        <Link
          href="/create"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Create
        </Link>
        <Button name="Login" onClick={() => signIn()} />
        <main className="mt-4 grid grid-cols-4 gap-4">
          {posts.isLoading
            ? "Loading..."
            : posts.data?.map((post, i) => (
                <SimplePost
                  key={post.id}
                  post={post}
                  onSuccess={() => posts.refetch()}
                />
              ))}
        </main>
        <div className="flex flex-col items-center gap-2 bg-black py-2">
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <AuthShowcase />
        </div>
      </div>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()
  console.log(sessionData)

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  )
}
