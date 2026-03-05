import { categories } from "@/constants"

const CategorySection = () => {
    return (
        <div className="bg-white py-12 mb-10">
            <h1 className="mb-4 text-xl font-bold text-slate-900 pl-20">Shop by Category</h1>
            <div className=" mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative flex h-[200px] w-[300px] items-center justify-center overflow-hidden rounded-lg border border-slate-200"
                    >
                        <img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                        <h3 className="relative z-10 text-center text-lg font-semibold text-white">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CategorySection
