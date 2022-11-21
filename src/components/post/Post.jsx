import "./post.css";
import kerala1 from "./kerala.jpg"
import { Link } from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={kerala1} alt="" />
    
    <div className="postInfo">
        <div className="postCats">
        <span className="postCat">
          <Link to="/kerala">KERALA</Link>
        </span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas amet numquam recusandae beatae repellendus quia quam, libero dignissimos enim!</p>
    </div>
  );
}
