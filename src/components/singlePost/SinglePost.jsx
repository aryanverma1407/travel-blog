import './singlePost.css';
import image1 from "./kashmir.jpg"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper"></div>
      <img src={image1} alt="" className="singlePostImg" />
      <h1 className="singlePostTitle">Lorem ipsum dolor sit amet 
      <div className="singlePostEdit">
      <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
      <i className="singlePostIcon fa-regular fa-trash"></i>
      </div>
      </h1>
      <div className="singlePostInfo">
        <span className='singlePostAuthor'>Author: <b>Safak</b></span>
        <span className='singlePostDate'> 1 hour ago </span>
      </div>
      <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt magnam consectetur id adipisci atque cum maxime, doloribus similique tempore culpa aliquid vel.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt magnam consectetur id adipisci atque cum maxime, doloribus similique tempore culpa aliquid vel.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt magnam consectetur id adipisci atque cum maxime, doloribus similique tempore culpa aliquid vel.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt magnam consectetur id adipisci atque cum maxime, doloribus similique tempore culpa aliquid vel.
      </p>
    </div>
  );
}
