import s from './MyPosts.module.css';
import Post from "./Mypost/Post";

const MyPosts = () => {
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
                <Post message='Hey, how are you?' countLike=' 1'/>
                <Post message="Hellow, i am fine" countLike=' 2'/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;