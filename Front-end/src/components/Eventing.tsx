import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import {useState} from 'react'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { EventTemplate, Guests } from "../types/CalendarTypes";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { formatDate } from "../utils/transformDate";
import type { Dayjs } from 'dayjs';
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

interface Eventing {
  guests : Guests[],
  submit : (event : EventTemplate)=> void;
}
const Eventing : React.FC<Eventing> = (props)=> {
const {user} = useTypeSelector(state => state.user);
 const [event , setEvent] = useState( {
    id : 0,
   author : '',
   data :'',
   description : '',
   guest : ''
 })

  const Submit = ()=> {
      setEvent({...event, id : user.id})
      setEvent({...event, id : 2, author : "d"});

    
    
    props.submit(event);
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
            <Input value = {event.description} onChange = {(e)=> setEvent({...event, description : e.target.value})} placeholder = "Введите описание события"/>
        </Form.Item>
        
        <Form.Item
        label = "Выберите дату"
        rules={[{ required: true, message: 'Пожалуйста выберите дату' }]}
        name = "date"
        >
         <DatePicker 
          onChange={(e)=> selectDate(e)}
         defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>

      <Form.Item
        label = "Выбирете гостя"
        rules={[{ required: true, message: 'Пожалуйста выберите гостя' }]}
        name = "guest"
        >
     <Select
     onChange={(guest : string) => setEvent({...event, guest :guest })}
     >
       {props.guests.map(e => <Select.Option key={e.name} value = {e.name}>{e.name}</Select.Option>)}
     </Select>
 </Form.Item>






  <Form.Item>
    <Row justify="end">
      <Button htmlType="submit"
      >Создать</Button>
    </Row>
  </Form.Item>

      </Form>
    </>
 )
}
export default Eventing;