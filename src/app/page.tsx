import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <h1>Main page</h1>
      <Link href="/blog"> Go to Blog</Link>
      <Link href="/products"> Go to Product</Link>
    </main>
  );
}
