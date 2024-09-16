import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

interface propsType{
    img: string,
    username: string,
    avatar: string
}

const FeedPost = ({img, username, avatar}: propsType) => {
    return (
        <>
            <PostHeader username={username} avatar = {avatar}/>
            <PostFooter image = {img} username={username}/>
        </>
    );
};



export default FeedPost;
