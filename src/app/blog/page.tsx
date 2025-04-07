import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute:"Blog",
  }
}

export default async function Blog(){
  await new Promise((resolve) =>
    setTimeout (resolve, 2000));
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>My Blogz</h1>
        </main>
    )
}