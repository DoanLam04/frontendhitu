import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa"; // Import FontAwesome icons
import NewArrivals from "../layout/NewArrivals";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import News from "./News";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "£9.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img26_thumb_500.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "£14.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img24_thumb_500.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "£19.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/toy-1_thumb_500.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: "£24.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img1-1_thumb_500.png",
  },
  {
    id: 5,
    name: "Product 5",
    price: "£29.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img27_thumb_500.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "£34.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img9_thumb_500.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: "£39.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img13_thumb_500.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: "£44.99",
    imageUrl:
      "https://cdn1864.cdn-template-4s.com/thumbs/product/shop-img7_thumb_500.jpg",
  },
];

function ProductHome() {
  return (
    <div>
      <NewArrivals />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <Link
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              to="#"
            >
              Store
            </Link>
            <div className="flex items-center" id="store-nav-content">
              <Link
                className="pl-3 inline-block no-underline hover:text-black"
                to="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </Link>
              <Link
                className="pl-3 inline-block no-underline hover:text-black"
                to="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        {/* Product List */}
        <div className="flex flex-wrap">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-96 md:w-96 xl:w-1/4 p-6 flex flex-col relative"
            >
              {/* Icon Buttons */}
              <div className="absolute top-6.5 right-6 flex space-x-2">
                <button className="p-1 bg-white-200  hover:bg-[#000044]">
                  <CiHeart className="w-6 h-6 text-black hover:text-white" />
                </button>
                <button className="p-1 bg-white-200  hover:bg-[#000044]">
                  <CiShoppingCart className="w-6 h-6 text-black hover:text-white" />{" "}
                </button>
                <button className="p-1 bg-white-200  hover:bg-[#000044]">
                  <IoEyeOutline className="w-6 h-6 text-black hover:text-white" />{" "}
                </button>
              </div>

              {/* Product Details */}
              <Link to="#" className="block">
                <img
                  className="hover:grow hover:shadow-lg"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="pt-3 flex items-center justify-between">
                  <p>{product.name}</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.353,2.353-6.049-0.002-8.412C18.582,3.672,15.329,3.671,12.954,4.918L12,5.866L11.046,4.92 C11.022,4.896,11.008,4.865,10.999,4.833C10.99,4.801,10.982,4.768,10.978,4.735C10.966,4.675,10.952,4.616,10.932,4.558 c-0.04-0.117-0.091-0.233-0.142-0.346c-0.101-0.229-0.214-0.451-0.342-0.667c-0.027-0.046-0.049-0.094-0.076-0.139 C10.263,3.372,11.174,3.438,12,4.595z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
