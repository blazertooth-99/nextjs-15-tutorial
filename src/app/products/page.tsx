import Link from "next/link"

export default function ProductList(){
  const productId = 100;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Link href="/">Home</Link>
          <h1>Product List</h1>
          <h2>
            <Link href="products/1">Product 1</Link>
          </h2>
          <h2>
            <Link href="products/2">Product 2</Link>
          </h2>
          <h2>
            <Link href="products/2" replace>Product 3</Link>
          </h2>
          <h2>
            <Link href={`products/${productId}`}>Product {productId}</Link>
          </h2>
        </main>
    )
}