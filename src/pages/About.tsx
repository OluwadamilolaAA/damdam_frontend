
export default function About() {
    return (
        <div className="mx-auto flex min-h-svh w-full max-w-4xl flex-col gap-6 p-6 md:p-10">
            <div className="w-full max-w-md mb-1 text-center">
                <h1 className="text-2xl font-bold mb-4">About Us</h1>
                <p className="text-sm text-gray-600 mb-6">
                    We are Luxe, a brand dedicated to providing high-quality essentials for modern living.
                </p>
            </div>
            <div className="w-full rounded-2xl bg-gray-50 p-8">
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-sm text-gray-600">
                    To simplify your life with products that blend form and function seamlessly. We believe in quality over quantity, and sustainability in everything we do.
                </p>
            </div>
        </div>
    )
}
  
