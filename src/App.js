import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main";




const App = () => {

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </>
    )
}

export default App