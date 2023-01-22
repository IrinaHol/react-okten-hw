import {postService} from "../../services";
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
 console.log(userId)
 // const [posts, setPosts] = useState([]);
 //
 // useEffect(() => {
 //  postService.getPostsByUserId(userId).then(({data}) => setPosts([...data]))
 // }, [userId])

 return (
     <div>
      {/*{posts.map(post => <Post key={post.id} post={post}/>)}*/}
     </div>
 );
};

export {Posts};