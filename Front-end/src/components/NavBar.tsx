import { Link, useNavigate } from 'react-router-dom';
import { useActionUser } from '../hooks/useActionUser';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { Routing } from '../routs/routs';
import style from './NavBar.module.css'
const NavBar : React.FC = ()=> {
    const navigate = useNavigate();
    const selector = useTypeSelector(state => state.user)
    const {LogOutUser} = useActionUser()
    const auth: boolean = selector.IsAuth;
   return(
    <>
      <header className= {style.head}>
        <div className= {style.container}>
            {
                auth ? 
           <nav className= {style.nav}>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </button>
                <ul className="dropdown-menu">
                 <li><Link className="dropdown-item" to="#">Action</Link></li>
                 <li><Link className="dropdown-item" to="#">Another action</Link></li>
                 <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
            </div>
            <ul>
                <li><Link to = {Routing.Login} className =" btn btn-primary" onClick={() => {LogOutUser(); navigate(Routing.Login)}}>Log out</Link></li>
              </ul>
            </nav>
                :
                <nav className= {style.nav}>
            <ul>
                <li><Link to = {Routing.Login} className =" btn btn-primary" onClick={() => console.log('Войти')}>Log in</Link></li>
              </ul>
            </nav>
                
            }
        </div>
      </header>
      
    </>
   )
}
export default NavBar;