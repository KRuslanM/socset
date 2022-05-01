import s from "./Sidebar.module.css";


const Sidebar = (props) => {

    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'/>
            <div>
                <span> {props.name}</span>
            </div>
        </div>
    )
}

export default Sidebar;