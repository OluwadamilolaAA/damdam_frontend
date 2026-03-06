
import FeatureSection from "@/components/FeatureSection";
import earpod from "../assets/earpod.jfif";
import NewArrivals from "@/components/NewArrivals";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <div className=" bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6 flex ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-neutral-50 p-8 text-slate-800 md:p-12">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                New Collection
              </p>
              <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                Elevate your everyday with premium essentials
              </h1>
              <p className="max-w-xl text-sm text-slate-700 md:text-base">
                Discover a curated collection of high-quality products designed for modern living.
                From minimalist accessories to performance gear.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="rounded bg-black px-8 py-3 text-white">
                Shop Now
              </a>
              <a href="#" className="rounded border border-slate-300 px-8 py-3 text-slate-800">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl">
            <img src={earpod} alt="Premium essentials" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </main>
      <FeatureSection />
      <NewArrivals />
      <CategorySection />
    </div>
  );
}
