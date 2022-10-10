import { FiHeart } from "react-icons/fi";

export const ProductCard = ({
  productId,
  productImage,
  productTitle,
  productPrice,
  addItemToCart,
}) => {
  const _addItemInCart = () => {
    addItemToCart({
      productId: productId,
      productImage: productImage,
      productTitle: productTitle,
      productPrice: productPrice,
    });
  };

  return (
    <div className="product-card inline-block my-4 transform transition hover:scale-105 ease-out duration-150">
      <div className="group max-h-80 h-80 product-card__image cursor-pointer relative w-52 rounded overflow-hidden flex justify-center">
        <img className="w-full" src={productImage} alt="product-image" />
        <div className="absolute bottom-0 transform origin-bottom scale-y-0 transition ease-out duration-100 group-hover:transform group-hover:scale-y-full flex items-center justify-center bg-white border-b-2 border-green-400 text-center rounded-tl rounded-tr text-xl overflow-hidden">
          <span className="p-3 border-r border-gray-200 hover:text-red-400">
            <FiHeart />
          </span>
          <p className="p-3 text-sm hover:bg-gray-200" onClick={_addItemInCart}>
            ADD TO CART
          </p>
        </div>
      </div>
      <p className="product-card__title text-sm mt-4 text-gray-500">
        {productTitle}
      </p>
      <p className="product-card__price mt-2 text-gray-800 font-bold">
        $ {productPrice}
      </p>
    </div>
  );
};
