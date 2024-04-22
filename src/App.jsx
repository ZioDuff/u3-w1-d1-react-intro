import "./App.css"
import NavComponent from "./components/NavComponent"
// import CreateButton from "./components/CreateButton"
// import ImageComponent from "./components/ImageComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent
          id="navBar-style"
          src="https://plus.unsplash.com/premium_photo-1669839137417-caaf1a4e00a9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="galaxy"
          classImage="image-style"
          className="containerNavList"
          inputId="inputId"
        />
      </header>
    </div>
  )
}

export default App
