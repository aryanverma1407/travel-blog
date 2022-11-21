import './sidebar.css';
import icon2 from "./icon3.jpg"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src={icon2}></img>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nostrum est, minima dolorem ut voluptate consequatur voluptates itaque quis necessitatibus quibusdam exercitationem numquam dolore mollitia dolorum.</p>

      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES
        </span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
       <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
       </div>
        </div>
    </div>
  );
}
