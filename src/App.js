import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";




const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App