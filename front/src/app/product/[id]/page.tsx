import { mocksProducts } from "@/components/mockProduct";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductPageProps {
  params: {
    id: string; 
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = mocksProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center px-4 mt-16">
      <section className="relative w-full max-w-4xl flex flex-col sm:flex-row lg:flex-row lg:items-center lg:space-x-1 py-8 sm:py-12 lg:py-16">
      <div className="relative w-full sm:w-1/2 mt-6 sm:mt-0">
          <Image
            src={product?.img}
            alt={product?.name}
            width={350}
            height={200}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-left py-6 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-500 mb-6">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <p className="text-xl font-semibold text-teal-500">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Vendedor:{" "}
              <a href="#" className="text-tertiary underline">
                {product.seller}
              </a>
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg text-lg transition"
          >
            Comprar
          </button>
        </div>

        
        
      </section>
    </div>
  );
}
