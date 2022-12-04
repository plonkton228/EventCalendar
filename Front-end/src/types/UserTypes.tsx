export interface User {
    id : number,
    name : string,
    lastname : string,
    password : string,
    email : string
}


export interface StateTemplate {
    IsAuth : boolean,
    user : User,
    errors : string | null,
    access_token : string
}



export enum Actions {
    AUTH_USER = "AUTH_USER",
    LOGOUT_USER = "LOGOUT_USER",
    SET_ERRORS = "SET_ERRORS",
}



interface ActionTemplateUser {
    type : Actions.AUTH_USER ,
    payload : User
}

interface ActionTemplateLogOut {
    type : Actions.LOGOUT_USER ,
    payload : User
}

interface ActionTemplateErrors {
    type : Actions.SET_ERRORS ,
    payload : string
}

export type AllActionTemplate =  ActionTemplateUser | ActionTemplateErrors | ActionTemplateLogOut;