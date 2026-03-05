import { newArrivals } from "@/constants"

const NewArrivals = () => {
    return (
        <div className="bg-white py-12">
            <h1 className="mb-4 text-xl font-bold text-slate-900 pl-12">New Arrivals</h1>
            <div className=" mx-auto flex max-w-6xl flex-wrap justify-start gap-6">

                {newArrivals.map((item) => (
                    <div key={item.id} className="flex h-[300px] w-[200px] flex-col overflow-hidden rounded-lg border border-slate-200">
                        <div className="relative flex h-40 w-full items-center justify-center rounded-t-lg border-b border-slate-200 bg-slate-50">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            <div className="absolute top-2 left-2 rounded-xl bg-black px-2 py-1 text-xs font-semibold text-white">
                                NEW
                            </div>
                        </div>
                        <div className="flex h-full flex-col p-3">
                            <h3 className="mt-1 text-base font-semibold text-slate-900">{item.name}</h3>
                            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                            <div className="mt-auto flex items-center justify-between pt-4">
                                <p className="text-sm font-semibold text-black">${item.price}</p>
                                <div className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NewArrivals
