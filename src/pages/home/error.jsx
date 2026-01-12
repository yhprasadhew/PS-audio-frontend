import { Link } from "react-router-dom";
export default function ErrorNotFound() {
    return(
        
   
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>

      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition"
      >
        Go to Home Page
      </Link>  
  

        </div>
    )
}





  

