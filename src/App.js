import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Listcategory from './components/listcategory'



class App extends React.Component {
    render (){
        return(
            <BrowserRouter>
            <Listcategory/>
            </BrowserRouter>
        )
        
    }
}

export default App;