import {  useState, useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import EventCalendar from '../components/EventCalendar';
import {  Layout, Modal, Row } from 'antd';
import { Button } from 'antd/es/radio';
import Eventing from '../components/Eventing';
import { useActionEvents } from '../hooks/useActionEvents';
import { EventTemplate } from '../types/CalendarTypes';
const Event : React.FC = ()=> {
  const [visible , setVisible] = useState<boolean>(false);
  const {FetchGuests,FetchEvents,createEvents} = useActionEvents();
  const event = useTypeSelector(state => state.events)
  const user = useTypeSelector(state => state.user)
  useEffect(()=> {
    FetchGuests();
    FetchEvents(user.user.name);
  },[])
  const OnSubmit = (event : EventTemplate)=> {
      setVisible(false);
      createEvents(event);
      FetchEvents(user.user.name);
  }

    return (
        <>
         <Layout >
 
          <EventCalendar evenst={event.events} />
          
           <Row justify= "center">
              <Button onClick={()=> setVisible(true)}>Добавить событие</Button>
            </Row>
         <Modal 
         title = "Добавить событие"
         visible = {visible}
         onCancel = {() =>setVisible(false)}
         footer = {null}
         >
           <Eventing submit={OnSubmit} guests={event.guests}/>
         </Modal>
            
        
         </Layout>
           
         
         
        </>
    )
}
export default Event;