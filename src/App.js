import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";


const App = () => {

    return (
        <BrowserRouter>
            <CartContext>
                <Header/>
                <Main/>
            </CartContext>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App