import List from "./post/List";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  return (
    <div className="txt-center">
        <h1>Danh sách bài viết</h1>
        <button onClick={() => navigate('/post')}>Thêm bài viết</button>
        <List />
    </div>
  );
}

export default Post;