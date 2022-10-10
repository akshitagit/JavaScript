import { FiX } from "react-icons/fi";

export const CartItem = ({ productId, image, title, price, removeItem }) => {
  const removeItemFromCart = () => {
    removeItem(productId);
  };
  return (
    <div className="cart-item items-center mx-2 my-3 cursor-pointer">
      <div className="cart-item__image group relative w-40 rounded-3xl max-h-52 overflow-hidden">
        <div
          className="inline-block absolute top-0 right-0 text-2xl bg-white text-red-500 
                        hover:bg-red-500 hover:text-white rounded-bl-xl p-1 transform origin-top-right
                           group-hover:transform scale-0 group-hover:scale-full transition duration-100"
          onClick={removeItemFromCart}
        >
          <FiX />
        </div>
        <img className="block w-full h-52" src={image} alt="cart-item" />
      </div>
      <div className="cart-item__details pl-4 pt-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-md">$ {price}</p>
      </div>
    </div>
  );
};
