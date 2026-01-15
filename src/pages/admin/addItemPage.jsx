import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(""); // keep as string for input
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  async function handleAddItem() {
    // Validate required fields
    if (!productKey || !productName || !productPrice) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not logged in! Please login first.");
      return;
    }

    setLoading(true); // start loading

    try {
      const result = await axios.post(
        "http://localhost:3000/api/products",
        {
          Key: productKey,
          name: productName,
          price: parseFloat(productPrice),
          category: productCategory,
          dimensions: productDimensions,
          description: productDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // pass token
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result.data);
      toast.success("Product added successfully!");
      navigate("/admin/items")

      // Clear form
      setProductKey("");
      setProductName("");
      setProductPrice("");
      setProductCategory("audio");
      setProductDimensions("");
      setProductDescription("");
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized! Please log in again.");
        localStorage.removeItem("token"); // remove invalid token
      } else {
        toast.error(error.response?.data?.message || "Failed to add product");
      }
    } finally {
      setLoading(false); // stop loading
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-lg font-bold mb-4">Add Product</h1>

      <div className="w-[400px] border p-4 flex flex-col items-center gap-3 rounded-md">
        <input
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleAddItem}
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>

        <button
          onClick={() => {
            // Clear all fields on cancel
            setProductKey("");
            setProductName("");
            setProductPrice("");
            setProductCategory("audio");
            setProductDimensions("");
            setProductDescription("");
          }}
          className="w-full p-2 bg-red-900 text-white rounded hover:bg-red-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
