import "./App.css"
import Card from "./components/Card"
import NavBar from "./components/NavBar"
import Container from "./components/container"

// import CreateButton from "./components/CreateButton"
// import ImageComponent from "./components/ImageComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <container className="container">
          <Card
            src="https://www.smartworld.it/wp-content/uploads/2019/06/Star-Wars-Jedi-Fallen-Order-2-1280x1595.jpg"
            title="Star wars Jedi Fallen Order"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcB5rrEgC1biqcl2Barffq8dAgwI2vFiCxGV37i9PeKw&s"
            title="Watch Dogs Legion"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://www.luemm.it/lm/wp-content/uploads/2023/05/s-l1600-2020-09-11T154110.417_uWtLQhvC2qNm_large.jpg"
            title="NBA2K20"
            description="Gioco di sport"
          />
        </container>
        <container className="container">
          <Card
            src="https://www.smartworld.it/wp-content/uploads/2019/06/Star-Wars-Jedi-Fallen-Order-2-1280x1595.jpg"
            title="Star wars Jedi Fallen Order"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcB5rrEgC1biqcl2Barffq8dAgwI2vFiCxGV37i9PeKw&s"
            title="Watch Dogs Legion"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://www.luemm.it/lm/wp-content/uploads/2023/05/s-l1600-2020-09-11T154110.417_uWtLQhvC2qNm_large.jpg"
            title="NBA2K20"
            description="Gioco di sport"
          />
          <Card
            src="https://www.smartworld.it/wp-content/uploads/2019/06/Star-Wars-Jedi-Fallen-Order-2-1280x1595.jpg"
            title="Star wars Jedi Fallen Order"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcB5rrEgC1biqcl2Barffq8dAgwI2vFiCxGV37i9PeKw&s"
            title="Watch Dogs Legion"
            description="Gioco di avventura e azione"
          />
          <Card
            src="https://www.luemm.it/lm/wp-content/uploads/2023/05/s-l1600-2020-09-11T154110.417_uWtLQhvC2qNm_large.jpg"
            title="NBA2K20"
            description="Gioco di sport"
          />
        </container>
      </header>
    </div>
  )
}

export default App
