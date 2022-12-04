import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import {useState} from 'react'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { EventTemplate, Guests } from "../types/CalendarTypes";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActionEvents } from "../hooks/useActionEvents";
import { formatDate } from "../utils/transformDate";
import type { Dayjs } from 'dayjs';
import { changeData } from "../utils/changeData";
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
interface EventEditTemplate {
  event : EventTemplate,
  visible : (vis : boolean)=> void,
  visibleOuter : (visouter : boolean) => void
  
}

const EventEdit : React.FC<EventEditTemplate> = (props)=> {

const selectors = useTypeSelector(state => state.events);
const {EditEvent} = useActionEvents();
 const [event , setEvent] = useState( {
   data : props.event.data,
   description : props.event.description,
   guest : props.event.guest
 })
 const Submit = ()=> {
    EditEvent(event.guest, event.description, event.data, props.event.id);
    props.visible(false);
    props.visibleOuter(false);
    
  }
 const selectDate = (date: Dayjs | null) => {
    if (date) {
        setEvent({...event, data: formatDate(date.toDate())})
    }
}

return (
    <>
    
         <Form
      onFinish={Submit}
      >
        <Form.Item
         label = "Описание события"
         rules={[{ required: true, message: 'Пожалуйста введите описание события!' }]}
         name = "event"
        >
            <Input defaultValue={event.description} value = {event.description} onChange = {(e)=> setEvent({...event, description : e.target.value})} />
        </Form.Item>
        <Form.Item
        label = "Выберите дату"
        rules={[{ required: true, message: 'Пожалуйста выберите дату' }]}
        name = "date"
        >
         <DatePicker 
          
          onChange={(e)=> selectDate(e)}
         defaultValue={dayjs(changeData(event.data), dateFormat)} format={dateFormat} />
        </Form.Item>

        <Form.Item
        label = "Выбирете гостя"
        rules={[{ required: true, message: 'Пожалуйста выберите гостя' }]}
        name = "guest"
        >
     <Select
     defaultValue={event.guest}
     onChange={(guest : string) => setEvent({...event, guest :guest })}
     >
       {selectors.guests.map(e => <Select.Option key={e.name} value = {e.name}>{e.name}</Select.Option>)}
     </Select>
 </Form.Item>

  <Form.Item>
    <Row justify="end">
      <Button htmlType="submit"
      >Редактировать</Button>
    </Row>
  </Form.Item>
      </Form>
    </>
    
)
 
}
export default EventEdit;