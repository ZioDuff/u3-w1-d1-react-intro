import logo from "../logo.svg"
const NavBar = (props) => {
  console.log(props)
  return (
    <div className="navBar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="React-logo" />
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FeedBack</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
