import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"


const App = () => {

    const nombre = "Marcos";

    return (
        <>
            <NavBar/>
            <ItemListContainer nombre={nombre}/>
            <Footer/>
        </>
    )
}

export default App