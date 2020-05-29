import React from 'react'

export default function Head({ title, icon }){
  return(
    <nav>
      <div>
        {icon}
      </div>
      <div>
        {title}
      </div>
      <div>
        ⏹
      </div>
    </nav>
  )
}