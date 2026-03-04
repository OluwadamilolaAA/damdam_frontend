import earpiece from "../assets/earpiece.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
        <div className="h-full rounded-2xl bg-neutral-50 p-8 text-slate-800 md:p-12">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Elevate your everyday with premium essentials</h1>
          <p className="max-w-2xl text-sm text-slate-800 md:text-base">
            Discover a curated collection of high-quality products designed for modern living. From minimalist accessories to performance gear.
          </p>
          <div className='space-x-6 mt-16'>
          <a href='#' className='bg-black text-white px-8 py-3 rounded'>Shop Now</a>
          <a href='#' className=' border border-slate-300 px-8 py-3 rounded'>Learn More</a>
        </div>
        </div>
        <div className="h-full">
            <img src={earpiece} alt="" className="h-full w-full rounded-2xl object-cover" />
        </div>
        </div>
      </main>
    </div>
  );
}
