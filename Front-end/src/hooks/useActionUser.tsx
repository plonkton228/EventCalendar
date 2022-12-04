import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import allActions from "../store/actionCreators/userCreators/index";

export const useActionUser = ()=> {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
}