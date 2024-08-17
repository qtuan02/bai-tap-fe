import { useEffect, useState } from "react";
import { postApi } from "../../localstorage/api";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const [ listPost, setListPost ] = useState([]);
  const [ loadingPost, setLoadingPost ] = useState(true);

  const getPostData = async () => {
    const posts = await postApi.getAll();
    setLoadingPost(false);
    setListPost(posts);
  }

  const handleDeletePost = async (id) => {
    setLoadingPost(true);
    const isDeleted = await postApi.deletePost(id);
    if (isDeleted) {
      getPostData();
    }else{
      setLoadingPost(false);
    }
  }
  
  useEffect(() => {
    getPostData();
  }, []);

  return (
    loadingPost ? <h1>Loading...</h1> : 
    <div className="post">
      {listPost.map((post) => {
        return (
          <div className="post-item" key={post.id}>
            <div className="post-title">
              <h2>{post.title}</h2>
              <div className="post-action">
                <button onClick={() => navigate('/post/'+post.id)}>Chỉnh sửa</button>
                <button onClick={() => handleDeletePost(post.id)}>Xóa</button>
              </div>
            </div>
            <p>{post.content}</p>
            <h3>Comment</h3>
            {post.comments?.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.name}: {comment.content}</p>
                </div>
              )
            }) || []}
          </div>
        )
      }) || []}
    </div>
  );
}
  
 export default List;