import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../../localstorage/api';

function FormPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ message, setMessage ] = useState('');
  const [post, setPost] = useState({ title: '', content: '' });

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(id){
        post.id = id;
        const isEdited = await postApi.editPost(id, post);
        if(isEdited){
            setMessage('Chỉnh sửa bài viết thành công.');
        }
    }else{
        const isCreated = await postApi.addPost(post);
        if(isCreated){
            setMessage('Thêm bài viết thành công.');
        }
    }
    
  };

  const getDataPost = async (id) => {
    const post = await postApi.findOne(id);
    
    if(post){
        setPost(post);
    }else{
        setMessage('Bài viết không tồn tại!!!');
    }
  }

  useEffect(() => {
    if(id) {
        getDataPost(id)
    }
  }, [id])

  return (
    <div className="txt-center">
      <h1>{id ? "Chỉnh sửa bài viết" : "Thêm bài viết"}</h1>
      <button onClick={handleBack}>Quay về</button>
      <form onSubmit={handleSubmit}>
        <div className='form-post-item'>
          <input type="text" placeholder="Nhập tiêu đề" required 
            value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        </div>
        <div className='form-post-item'>
          <textarea placeholder="Nhập nội dung" rows="10" required
          value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })}/>
        </div>
        <button type="submit">{id ? "Cập nhật" : "Thêm"}</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default FormPost;
