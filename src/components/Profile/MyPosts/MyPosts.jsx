import s from './MyPosts.module.css';
import Post from "./Mypost/Post";

const MyPosts = () => {

    let postData = [
        {id:'1', message:'Hey, how are you?', likesCount: 12},
        {id:'2', message:'Hello, i am fine', likesCount: 11}
    ]

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
                <Post message={postData[0].message} countLike={postData[0].likesCount} />
                <Post message={postData[1].message} countLike={postData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;