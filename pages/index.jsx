import Featured from "@/components/Featured";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Trending from "@/components/Trending";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main>
      <HeroBanner></HeroBanner>
      <Wrapper>
        <Featured></Featured>
        <Trending></Trending>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] font-firstFont">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-slate-900">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl text-slate-900">
            A lightweight Smart ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products.data.map((product) => (
            <ProductCard key={product?.id} product={product}></ProductCard>
          ))}
        </div>

        
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { products },
  };
}
