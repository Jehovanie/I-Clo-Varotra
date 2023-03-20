import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOME, TEST } from "../redux/@shared/constant";

const Home = () => {
    const dispatch = useDispatch();
    const globalAction = useSelector((state) => state.globalActions)
    console.log(globalAction)

    const handleClick = () => {
        dispatch({ "type": TEST })
    }

    return (
        <div>
            <h4>{globalAction?.message}</h4>
            <button onClick={handleClick}> next</button>
        </div>
    );
};

export default Home;