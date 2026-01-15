import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

const sampleArr = [
  {
    Key: "AUDIO-001",
    name: "Wireless Bluetooth Speaker",
    price: 12999,
    category: "audio",
    dimensions: "20cm x 10cm x 8cm",
    description: "High-quality wireless Bluetooth speaker",
    availability: true,
    image: ["https://example.com/speaker.jpg"],
  },
  {
    Key: "LIGHT-001",
    name: "Smart LED Light Bulb",
    price: 3499,
    category: "lights",
    dimensions: "6cm x 6cm x 12cm",
    description: "Smart LED bulb",
    availability: true,
    image: ["https://example.com/bulb.jpg"],
  },
  {
    Key: "AUDIO-002",
    name: "Over-Ear Headphones",
    price: 18999,
    category: "audio",
    dimensions: "25cm x 20cm x 10cm",
    description: "Noise cancelling headphones",
    availability: false,
    image: ["https://example.com/headphones.jpg"],
  },
];

export default function AdminItemPage() {
  const [items, setItems] = useState(sampleArr);

  return (
    <div className="w-full h-full p-6 relative text-black">
      <h1 className="text-xl font-bold mb-4 text-black">Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm text-black">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Key</th>
              <th className="border px-3 py-2 text-left">Price</th>
              <th className="border px-3 py-2 text-left">Category</th>
              <th className="border px-3 py-2 text-left">Dimensions</th>
              <th className="border px-3 py-2 text-center">Availability</th>
            </tr>
          </thead>

          <tbody className="text-black">
            {items.map((item) => (
              <tr key={item.Key} className="hover:bg-gray-100">
                <td className="border px-3 py-2">{item.name}</td>
                <td className="border px-3 py-2">{item.Key}</td>
                <td className="border px-3 py-2">Rs. {item.price}</td>
                <td className="border px-3 py-2 capitalize">{item.category}</td>
                <td className="border px-3 py-2">{item.dimensions}</td>
                <td className="border px-3 py-2 text-center">
                  {item.availability ? (
                    <span className="font-semibold text-black">Available</span>
                  ) : (
                    <span className="font-semibold text-black">Out of stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add button */}
      <Link to="add">
        <CiCirclePlus
          size={60}
          className="fixed right-6 bottom-6 text-black cursor-pointer hover:scale-110 transition"
        />
      </Link>
    </div>
  );
}