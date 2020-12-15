import React, {useContext, useState} from "react"
import BuscarTienda from '../components/BuscarTienda'


const Myprovider = (props:any) => {

    const[state, setState] = useState({});

    return(
        <div>
             <AppContext.Provider value= {[state, setState]}>
                 {props.children}

                 <BuscarTienda/>

             </AppContext.Provider>
        </div>
    )
}


export const AppContext = React.createContext({});