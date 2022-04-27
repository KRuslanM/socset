import s from './MyPosts.module.css';
import Post from "./Mypost/Post";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hey, how are you?', likesCount: 12},
        {id: '2', message: 'Hello, i am fine', likesCount: 11}
    ]
    let postsElements = posts.map(p => <Post message={p.message} countLike={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;