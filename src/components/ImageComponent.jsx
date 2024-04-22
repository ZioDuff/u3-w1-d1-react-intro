import React from "react"

class ImageComponent extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className={this.props.className}>
        <img id={this.props.id} src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
}

export default ImageComponent
