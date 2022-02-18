//import React from 'react'

//const App = () => "Hola Mundo con App Importado"

//CommonJS : module.exports = App
//export default App
//import React  from 'react'

import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App