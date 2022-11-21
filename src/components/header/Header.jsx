import "./Header.css"
import mainimage from "./travelblog.jpg"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitlesSm">Travel</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img className="headerImg" src={mainimage} alt="" />
        </div>
  );
}
