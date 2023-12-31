import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const CartItem = ({ items }) => {
  const { selectedSize, attributes: p, oneQuantityPrice, quantity } = items;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: items.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b font-firstFont">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          height={120}
          width={120}
        ></Image>
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* Product Subtitle for large screen  */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* Product Price */}
          <div className="text-sm md:text-md font-semibold text-black/[0.5] mt-2">
            MRP : ${p.price}
          </div>
        </div>

        {/* Product Subtitle for mobile screen  */}
        <div className="text-md font-medium text-black/[0.5] md:block hidden">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            {/* Size Dropdown Start */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Size Dropdown End */}

            {/* Quantity Dropdown Start */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Quantity Dropdown End */}
          </div>

          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(removeFromCart({ id: items.id }));
                  Swal.fire(
                    "Deleted!",
                    "Your item has been removed.",
                    "success"
                  );
                }
              });
            }}
          ></RiDeleteBin6Line>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
