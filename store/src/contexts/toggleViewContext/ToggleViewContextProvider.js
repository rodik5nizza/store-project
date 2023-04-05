import { useState } from "react";
import ToggleViewContext from "./ToggleViewContext";

const ToggleViewContextProvider = ({children}) => {

    const [toggleView, setToggleView] = useState(true);
    return (
        <ToggleViewContext.Provider value= {{toggleView, setToggleView}}>
            {children}  
        </ToggleViewContext.Provider>
    )
}

export default ToggleViewContextProvider