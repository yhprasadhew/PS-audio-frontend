import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="w-full h-[100px] shadow-x1 bg-slate-200 flex items-center justify-center gap-5 relative">
            <img src="/logo.png" alt="logo" className="h-[100px]  w-[100px] object-cover border-[3px] absolute left-1"/>
           <Link to ="/" className = " text-[25px] font-bold m-1"> Home </Link>
           <Link to ="/contact" className = " text-[25px] font-bold m-1"> Contact </Link>
            <Link to ="/gallery" className = " text-[25px] font-bold m-1"> Gallery </Link>
            <Link to ="/items" className = " text-[25px] font-bold m-1"> Items </Link>

        </header>


    )
}