import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message =(props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Sasha" id="2" />
                <DialogItem name="Victor" id="2" />
                <DialogItem name="Valera" id="4" />
            </div>
            <div className={s.messages}>
                <Message message = "Hi"/>
                <Message message = "How are you IT"/>
                <Message message = "Yo"/>
                <Message message = "You"/>
            </div>
        </div>
    )
}

export default Dialogs;