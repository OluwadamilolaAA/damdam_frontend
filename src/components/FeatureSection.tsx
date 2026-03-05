import { features } from "@/constants"

const FeatureSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="rounded-xl border border-slate-200 bg-white p-6 text-center"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default FeatureSection
