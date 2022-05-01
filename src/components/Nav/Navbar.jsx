import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";



const Navbar = (props) => {

    let sidebarElements = props.state.friends.map(d => <Sidebar name={d.name} id={d.id}/>);
    return(

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData=>navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData=>navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData=>navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData=>navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData=>navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>

            <h3>Friends</h3>
            <div className={s.sidebar}>{sidebarElements}</div>

        </nav>


    )
}

export default Navbar;