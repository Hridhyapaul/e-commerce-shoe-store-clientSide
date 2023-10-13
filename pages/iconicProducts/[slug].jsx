import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedIconicProducts from "@/components/RelatedIconicProducts";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* <-----Left column start-----> */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:mx-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel
              images={p.image.data}
            ></ProductDetailsCarousel>
          </div>
          {/* <-----Left column End-----> */}

          {/* <-----Right column start-----> */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] text-slate-800 font-semibold mb-2">{p.name}</div>

            {/* Product subtitle */}
            <div className="text-lg text-slate-800 font-semibold mb-5">{p.subtitle}</div>

            {/* Product Price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg text-slate-800 font-semibold">MRP : ${p.price}</p>
              {p.original_price && (
                <>
                  <p className="text-slate-800  font-medium line-through">
                    ${p.original_price}
                  </p>
                  <p className="ml-auto font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-slate-800/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-slate-800/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* Product size range start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md text-slate-800 font-semibold">Select Size</div>
                <div className="text-md font-medium text-slate-800/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}

              {/* Size Start */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-slate-800 cursor-pointer"
                        : "cursor-not-allowed bg-slate-800/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-slate-800" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* Size End */}

              {/* Show Error Start */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* Show Error End */}
            </div>
            {/* Product size range end */}

            {/* Add to cart button start */}
            <button
              className="w-full py-4 rounded-full bg-slate-800 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* Add to cart button end */}

            {/* Whishlist button start */}
            <button className="w-full py-4 rounded-full border border-slate-800 text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20}></IoMdHeartEmpty>
            </button>
            {/* Whishlist button end */}

            <div>
              <div className="text-lg text-slate-800 font-bold mb-5">Product Details</div>
              <div className="markdown text-md text-slate-800 mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* <-----Right column end-----> */}
        </div>

        <div>
          <RelatedIconicProducts products={products}></RelatedIconicProducts>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/iconic-products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/iconic-products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/iconic-products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}