import { categories, shoppingCart } from "@/constants";
import { ChevronDown } from "lucide-react";

const ShopSection = () => {
  return (
    <div className="bg-white mx-auto max-w-7xl px-4 md:px-6">
      <div className="sticky top-16 z-50 border-b border-slate-50 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 px-4 md:px-6">
          <h1 className="text-xl font-bold text-slate-900">Shop</h1>
          <div className="flex items-center gap-3">
            <p className="text-sm text-slate-500 font-medium">sort by</p>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center gap-6">
        <div className="flex flex-col w-[200px] h-[200px] bg-white border border-slate-100 backdrop-blur p-4 rounded-lg shadow-sm">
          <p className="text-sm text-slate-700 font-bold mb-2">Categories</p>
          <p className="text-sm text-slate-700 font-bold mb-2">All</p>
          {categories.map((link, index) => (
            <p key={index} className="text-sm text-slate-500 font-medium mb-1">
              {link.name}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {shoppingCart.map((item) => (
            <div
              key={item.id}
              className="flex h-[300px] w-[200px] flex-col overflow-hidden rounded-lg border border-slate-200"
            >
              <div className="relative flex h-40 w-full items-center justify-center rounded-t-lg border-b border-slate-200 bg-slate-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
                {(item.id === 1 || item.id === 3) && (
                  <div className="absolute top-2 left-2 rounded-xl bg-black px-2 py-1 text-xs font-semibold text-white">
                    NEW
                  </div>
                )}
              </div>
              <div className="flex h-full flex-col p-3">
                <h3 className="mt-1 text-base font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                <div className="mt-auto flex h-10 items-center justify-between pt-4">
                  <p className="text-sm font-semibold text-black">
                    ${item.price}
                  </p>
                  <div className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50 hover:bg-slate-200">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopSection;
