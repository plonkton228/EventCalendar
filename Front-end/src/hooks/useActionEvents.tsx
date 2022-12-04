import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import AllActions from '../store/actionEvents/index'
export const useActionEvents = ()=> {
    const dispatch = useDispatch();
    return bindActionCreators(AllActions, dispatch);
}