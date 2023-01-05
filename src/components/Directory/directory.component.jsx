import React from 'react'
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss'

const Directory = ({category})  => {
  return (
    <div className='directory-container'>
       {category.map((category)=>{
         return <DirectoryItem key={category.id} category={category} />
       })}
    </div>
  )
}

export default Directory 