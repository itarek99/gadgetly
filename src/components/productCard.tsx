import { StarIcon } from '@heroicons/react/24/solid';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount_price: number | null;
  rating: number;
  brand: string;
  category: number;
}

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white flex justify-between flex-col h-full">
      <div>
        <img
          className="aspect-square object-cover"
          src={product.images[Math.floor(Math.random() * 2)]}
          alt={product.title}
        />
        <div className="">
          <div className="px-3 py-2">
            <p className="text-sm font-medium text-gray-400 mb-1">{product.brand}</p>
            <h3 className="font-normal">{product.title}</h3>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex gap-0.5 items-center mb-3 px-2">
          {new Array(5).fill('Star').map((_, index) => (
            <StarIcon
              key={index}
              className={`h-4 w-4 ${index < Math.round(product.rating) ? 'text-orange-500' : 'text-gray-400'}`}
            />
          ))}
        </div>
        <div className="w-full text-center py-2 bg-dark text-white font-medium text-sm">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
