import {  Calendar, Modal } from "antd";
import { EventTemplate } from "../types/CalendarTypes";
import type { Dayjs } from 'dayjs';
import { formatDate } from "../utils/transformDate";
import fetchEvent from "../utils/fetchEvent";
import {useState} from 'react'
import SoloEvent from "./SoloEvent";
interface CalendarTemp  {
    evenst : EventTemplate[]
}

const EventCalendar : React.FC<CalendarTemp> = (props)=> {
   const [visible , setVisible] = useState<boolean>(false);
   const [event ,setEvent] = useState<EventTemplate | null>(null);
   const onSubmit = async(id: number)=> {
    setVisible(true);
    setEvent(await fetchEvent(id))

   }
   const Cancel = ()=> {
    setEvent(null)
    setVisible(false)
   }
   
    const dateCellRender = (value: Dayjs) => {
      const date = formatDate(value.toDate());
      const currentDaysEvents = props.evenst.filter((ev)=>  ev.data === date)
        return (
          <div >
             {
                currentDaysEvents.map(e => <div >
               <div onClick={()=> onSubmit(e.id)}>{e.description}</div>
             <Modal 
             visible = {visible}
             onCancel = {() => {Cancel()}}
             title = "Событие"
             footer = {null}
             >
               {event ? <SoloEvent vis={setVisible} event={event} />: <div>Загрузка...</div>}
             </Modal>
                </div>)
             }
           
          </div>
        );
      };
   return (
    <>
        <Calendar
        dateCellRender={dateCellRender}
       
        />
         
    </>
   )
}
export default EventCalendar;