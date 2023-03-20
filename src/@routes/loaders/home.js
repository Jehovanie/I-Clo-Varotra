import { useDispatch } from "react-redux"
import { HOME } from "../../redux/@shared/constant";

const home = () => {
    const dispatch = useDispatch();
    dispatch({ "type": HOME, "payload": {} })
}

export default home;

