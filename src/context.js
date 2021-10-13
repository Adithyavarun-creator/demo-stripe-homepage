import React, { useState, useContext } from 'react'
import sublinks from './data'


const Appcontext = React.createContext();

export const AppProvider = ({children})=>{

    const [issidebaropen, setissidebaropen] = useState(false)
    const [issubmenuopen, setissubmenuopen] = useState(false)
    const [location,setlocation]= useState({})
    const [page,setpage] = useState({page:'',links:[]})
    
    
        const opensidebar =()=>{
        setissidebaropen(true)
    }

    const closesidebar =()=>{
        setissidebaropen(false)
    }

    const opensubmenu =(text,coordinates)=>{
        const page= sublinks.find((link)=> link.page === text)
        setpage(page)
        setlocation(coordinates)
        setissubmenuopen(true)

    }

    const closesubmenu =()=>{
        setissubmenuopen(false)
    }


    return(
    <Appcontext.Provider 
    value = {{
                issubmenuopen,
                issidebaropen,
                opensubmenu,
                closesubmenu,
                opensidebar,
                closesidebar,
                location,
                page}}>
        {children}
    </Appcontext.Provider>
    )
}

//custom hook

export const useGlobalcontext = ()=>{
    return useContext(Appcontext)
}

