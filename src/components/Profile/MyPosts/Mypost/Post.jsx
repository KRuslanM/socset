import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;