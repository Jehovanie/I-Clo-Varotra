import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOME, TEST } from "../redux/@shared/constant";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Home = () => {
    const dispatch = useDispatch();
    const globalAction = useSelector((state) => state.globalActions)
    console.log(globalAction)

    const handleClick = () => {
        dispatch({ "type": TEST })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            {globalAction?.message}
            </h1>
            <button className="rounded-full" onClick={handleClick}>
                next
                <FaBeer />
            </button>
        </div>
    );
};

export default Home;