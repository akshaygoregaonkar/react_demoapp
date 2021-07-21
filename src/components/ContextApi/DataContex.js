import  React,{ createContext,useState} from "react"
export const DataContex = createContext()

const DataProvider=({children})=>{
    const[state,setState]=useState({
        name:'peter',age:79
    })
    const [another,setAnother]=useState({name:'jacky',age:24})
    return(
        <DataContex.Provider value={{state,another,setAnother,setAnother}}> 
        {children}

        </DataContex.Provider>
    )
}

export default DataProvider