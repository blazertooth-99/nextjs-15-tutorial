import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute:"Blog",
  }
}

export default function Blog(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>My Blog</h1>
        </main>
    )
}