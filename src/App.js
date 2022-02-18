//import React from 'react'

//const App = () => "Hola Mundo con App Importado"

//CommonJS : module.exports = App
//export default App
//import React  from 'react'

import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"


const App = () => {
    return (
        <>
            <NavBar/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App