import Event from "../pages/Event";
import Login from "../pages/Login";

interface RoutsTemplate {
    path: string,
    element : React.ReactNode,
    exact? : boolean,
}

export enum Routing {
    Login = "/Login",
    Event = "/"
}

export const PrivateRouts : RoutsTemplate[] = [
    {path : Routing.Event, element : <Event/>, exact : true}
]


export const WelcomeRouts : RoutsTemplate[] = [
    {path : Routing.Login, element : <Login/>, exact : true}
]