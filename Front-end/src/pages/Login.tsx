import style from './pages.module.css'
import {useState} from 'react'
import { useActionUser } from '../hooks/useActionUser';
import { Button,  Form, Input, Row } from 'antd';
import { useTypeSelector } from '../hooks/useTypeSelector';
const Login : React.FC = ()=> {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {FetchUser} = useActionUser();
  const selector = useTypeSelector(state => state.user)
   

    return (
        <>
          <div className= {style.container}>
           <div className= {style.flexcontainer}>
             <div className= {style.logincontainer}>
              <h1>Авторизация</h1>
    <Form
      name="normal_login"
      className= {`login-form` + `${style.changeform}`}
      style = {{width: "90%", display: "flex", flexDirection : "column"}}
  
    >
        {selector.errors && <div style={{color: 'red'}}>
                {selector.errors}
            </div>}
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input value={email} onChange = {(e)=> setEmail(e.target.value)} placeholder = "Почта"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
       <Input value={password} onChange = {(e)=> setPassword(e.target.value)} placeholder = "Пароль" type = "password"/>
      </Form.Item>

      <Form.Item>
        <Row justify= "end">
         <Button type="primary" htmlType="submit" className="login-form-button" 
           onClick={() => FetchUser(email,password)}
         >
           Log in
         </Button>
        </Row>
      </Form.Item>
    </Form>
             </div>
           </div>
         </div>
        </>
    )
}
export default Login;