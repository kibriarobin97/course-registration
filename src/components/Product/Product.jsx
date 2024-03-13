import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";


const Product = ({ product, handleSelect }) => {
    const { name, description, photo, price, credit } = product;
    return (
        <div className="p-2 space-y-4 bg-gray-200 rounded-lg shadow-lg shadow-slate-400">
            <img className="w-full" src={photo} alt="" />
            <h3 className="text-1xl font-bold">{name}</h3>
            <p>{description}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-0">
                    <p><FaDollarSign /></p>
                    <p className="font-semibold"> Price: {price}</p>
                </div>
                <div className="flex items-center gap-0">
                    <p><IoBookOutline /></p>
                    <p className="font-semibold">Credit: {credit}hr</p>
                </div>
            </div>
            <div className="">
                <button onClick={()=>handleSelect(product)} className="font-bold w-full bg-purple-500 text-center text-white py-1 rounded-lg">Select</button>
            </div>
        </div>
    );
};

export default Product;