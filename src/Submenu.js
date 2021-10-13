import React, { useState, useRef, useEffect } from 'react'
import { useGlobalcontext } from './context'

const Submenu = () => {
//because page is an object
  const {issubmenuopen, location, page:{page,links}} = useGlobalcontext() 
  const container = useRef(null)
  const [columns,setcolumns] = useState('col-2')

  useEffect(()=>{
    setcolumns('col-2')
    const submenu = container.current;
    console.log(submenu)
    const {center,bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3){
      setcolumns('col-3')
    }

    if(links.length>3){
      setcolumns('col-4')
    }
  },[location,links])

  return (
    <aside className={`${issubmenuopen ?
     'submenu show' : 'submenu'}`}
     ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link,index)=>{
            const {label,icon,url} = link;
            return <a key={index} href={url}>
              {icon}
              {label}
            </a>
          })}
        </div>
    </aside>
  )
}

export default Submenu
