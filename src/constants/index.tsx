
import { RefreshCw } from "lucide-react"
import { Truck } from "lucide-react"
import { ClipboardCheck } from "lucide-react"
import { ShoppingCart } from "lucide-react"

const image1 = new URL("../assets/earpod.jfif", import.meta.url).href
const image2 = new URL("../assets/smart.jfif", import.meta.url).href
const image3 = new URL("../assets/Bagpack.jfif", import.meta.url).href

export const navItem = [
  {label: "Shop", href: "/shop"},
  {label: "New Arrivals", href: "/new-arrivals"},
  {label: "About", href: "/about"}
]


export const features = [
  {
    icon: <Truck className="h-6 w-6 text-blue-600" />,
    title: "Free Shipping",
    description: "On all orders over $100. Fast and reliable delivery worldwide."
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-green-600" />,
    title: "Secure Payment",
    description: "100% secure payment with advanced encryption technology."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-purple-600" />,
    title: "30 Days Return",
    description: "Not satisfied? Return it within 30 days for a full refund."
  }
]

export const newArrivals = [
  {
    id: 1,
    image: image1,
    name: "Modern Wireless Headphones",
    note: "Electronics",
    price: 299,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 2,
    image: image2,
    name: "Smart Fitness Watch",
    note: "Electronics",
    price: 199,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  }
]

export const categories = [
  {
    id: 1,
    image: image1,
    name: "Electronics"
  },
  {
    id: 2,
    image: image2,
    name: "Clothing"
  },
  {
    id: 3,
    image: image1,
    name: "Accessories"
  }
]

export const companyLinks = [
    { href: "#", text:"About" },
    { href: "#", text:"Careers" },
    { href: "#", text:"Blog" }
]

export const supportLinks = [
    { href: "#", text:"Contact Support" },
    { href: "#", text:"FAQ" },
    { href: "#", text:"Shipping & Returns" }
]

export const legalLinks = [
    { href: "#", text:"Privacy Policy" },
    { href: "#", text:"Terms of Service" },
]

export const subscribeLinks = [
    { href: "#", text:"The lastest news, articles, and resources, sent to your inbox weekly" }
]

export const categoryLink = [
    { href: "#", text:"Electronics" },
    { href: "#", text:"Footwear" },
    { href: "#", text:"Accessories" },
    { href: "#", text:"Clothing" }
]

export const shoppingCart = [
  {
    id: 1,
    image: image1,
    name: "Modern Wireless Headphones",
    note: "Electronics",
    price: 299,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 2,
    image: image2,
    name: "Performance Running Shoes",
    note: "Footwear",
    price: 129,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 3,
    image: image2,
    name: "Smart Fitness Watch",
    note: "Electronics",
    price: 199,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 4,
    image: image3,
    name: "Urban Commuter Backpack",
    note: "Accessories",
    price: 89,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 5,
    image: image2,
    name: "Classic Aviator Sunglasses",
    note: "Accessories",
    price: 149,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  },
  {
    id: 6,
    image: image2,
    name: "Premium Cotton T-Shirt",
    note: "Clothing",
    price: 35,
    icon: <ShoppingCart className="h-5 w-5 text-slate-700" />
  }
]
