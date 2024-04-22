const Card = (props) => {
  return (
    <>
      <div className="card-style">
        <img src={props.src} alt={props.title} />
        <div className="card-body">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <button className="btnBuy">Compra Ora!</button>
        </div>
      </div>
    </>
  )
}
export default Card
