import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalcontext } from './context'


const Sidebar = () => {
  const {issidebaropen,closesidebar} = useGlobalcontext()

  return (
    <aside className={`${issidebaropen ?
     'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <div className="sidebar">
        <button className="close-btn"
        onClick={closesidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
        {sublinks.map((item,index)=>{
          const {links,page} = item;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
              {links.map((link,index)=>{
                const {url,icon,label} = link;
                return <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              })}
              </div>
            </article>
          )
        })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
