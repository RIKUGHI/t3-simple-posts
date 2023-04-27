import { NextPage } from "next"
import { signIn } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Button from "~/components/atoms/Button"
import Input from "~/components/atoms/Input"
import Navbar from "~/components/atoms/NavBar"
import { api } from "~/utils/api"

const index: NextPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState("")

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email,
      password: "1234",
      redirect: false,
    })
    console.log(res)
  }
  return (
    <>
      <Head>
        <title>Simple Posts</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto max-w-4xl">
        <Navbar />
        <main className="mt-4 grid grid-cols-4 gap-4">
          <form
            className="flex flex-col items-center space-y-2"
            onSubmit={onSubmit}
          >
            <Input name="Email" value={email} onChange={(v) => setEmail(v)} />

            <Button name="Submit" />
          </form>
        </main>
      </div>
    </>
  )
}

export default index
