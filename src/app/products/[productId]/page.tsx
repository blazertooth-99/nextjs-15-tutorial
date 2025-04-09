import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ 
  params ,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Detail about Product {params.productId}</h1>
    </main>
  );
}
