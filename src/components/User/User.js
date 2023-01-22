import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

const User = ({user}) => {

 const {id, name, surname, email} = user;

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
            postService.getPostsByUserId(id).then(({data}) => setPosts([...data]))
    }

 return (
  <div style={{border: '1px solid red', marginBottom: '10px'}}>
   <div>id: {id}</div>
   <div>name: {name}</div>
   <div>surname: {surname}</div>
   <div>email: {email}</div>
      {!posts.length && <button onClick={() => getPosts()}>Posts</button>}
      {posts.map(post=><Post key={post.id} post={post}/>)}
  </div>
 );
};

export {User};