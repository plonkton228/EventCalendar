import { Button,  Row, Modal } from "antd"
import { EventTemplate } from "../types/CalendarTypes"
import style from './SoloEvent.module.css'
import {useState} from 'react'
import EventEdit from "./EventEdit"
import { useActionEvents } from "../hooks/useActionEvents"
interface SoloEventTemplate {
  event : EventTemplate,
  vis : (vis: boolean)=>void
}
const SoloEvent : React.FC<SoloEventTemplate> = (props)=> {
  const [visible,setVisible] = useState<boolean>(false);
  const {DeleteEvent} = useActionEvents();
  const Delete = ()=> {  
    DeleteEvent(props.event.id);
  }
 
    return (
        <>
          <div className= {style.containerflex}>
              <div className= {style.container}>
                   <h1>Основное: </h1>
                    <div style={{display:"flex", color:"black", alignItems: "center"}}><h3>Описание: </h3><div className= {style.changecontainer}>{props.event.description}</div></div> 
                    <div style={{display:"flex", color:"black", alignItems: "center"}}><h3>Автор: </h3><div className= {style.changecontainer}>{props.event.author}</div></div> 
                    <div style={{display:"flex", color:"black", alignItems: "center"}}><div className= {style.changecontainerv2}><h3>Дата: </h3><p>{props.event.data}</p> <h3>Гость: </h3><div className= {style.changecontainer}>{props.event.guest}</div></div></div>
                    <div style = {{display : "flex", justifyContent : "space-between"}}>
                    
              <Button onClick={()=> setVisible(true)}>Редактировать событие</Button>
            
         
              <Button onClick={()=> {Delete(); props.vis(false)}}>Удалить</Button>
          
                    </div>
                
         <Modal 
         title = "Добавить событие"
         visible = {visible}
         onCancel = {() =>setVisible(false)}
         footer = {null}
         >
           <EventEdit  event = {props.event} visibleOuter = {props.vis} visible = {setVisible}/>
         </Modal>
              </div>
          </div>
        </>
    )
}
export default SoloEvent;