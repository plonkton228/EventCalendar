import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { PrivateRouts, Routing, WelcomeRouts } from "./routs";

const AppRouts : React.FC = () => {
    const selector = useTypeSelector(state => state.user)
    const auth: boolean = selector.IsAuth;
     return(
        <>
            {
                auth ? 
                 <Routes>
                     {PrivateRouts.map(e => <Route path= {e.path}  element = {e.element}/>)}
                     <Route path = "*" element = {<Navigate replace to = {Routing.Event}/>}/>
                 </Routes>

                :
                <Routes>
                       {WelcomeRouts.map(e => <Route path= {e.path}  element = {e.element}/>)}
                       <Route path = "*" element = {<Navigate replace to = {Routing.Login}/>}/>
                </Routes>
            }
        </>
     )
}
export default AppRouts;