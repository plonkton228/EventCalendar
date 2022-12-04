export interface EventTemplate  {
    id: number,
    author: string,
    data : string,
    description : string,
    guest : string,
}


export interface Guests {
    id : number,
    name : string,
    lastname : string,
    password : string,
    email : string
}

export interface StateEventTemplate  {
    events : [],
    guests : Guests[] ,
    loading : boolean
}


export enum ActionsEvent {
    SET_EVENTS = "SET_EVENTS",
    SET_LOADING = "SET_LOADING",
    SET_GUESTS = "SET_GUESTS",
    GET_EVENT = "GET_EVENT",
    EDIT_EVENT = "EDIT_EVENT",
    DELETE_EVENT = "DELETE_EVENT"
}
interface ActionEventsTemplate {
    type: ActionsEvent.SET_EVENTS,
    payload : []
}
interface ActionLoadingTemplate {
    type: ActionsEvent.SET_LOADING,
    
}
interface ActionGuestsTemplate {
    type: ActionsEvent.SET_GUESTS,
    payload : []
}
interface ActionEditEventTemplate {
    type: ActionsEvent.EDIT_EVENT,
    payload : []
}
interface ActiongetEventTemplate {
    type : ActionsEvent.GET_EVENT,
    payload : {} ,
}
interface ActiongetDeleteEventTemplate {
    type : ActionsEvent.DELETE_EVENT,
    payload : [] ,
}
export type AllActionsEvents = ActionEventsTemplate | ActionGuestsTemplate | ActionLoadingTemplate | ActiongetEventTemplate | ActionEditEventTemplate | ActiongetDeleteEventTemplate;