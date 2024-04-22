function NavComponent(props) {
  return (
    <div id={props.id}>
      <div className={props.className}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">feedBack</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor={props.inputId}>
          <input
            type="text"
            name=""
            id={props.inputId}
            placeholder="Cerca qualocosa..."
          />
        </label>
      </div>
    </div>
  )
}

export default NavComponent
