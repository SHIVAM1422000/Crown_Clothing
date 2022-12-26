import React from 'react'
import CategoryItem from '../category-item/category-item.component'

const Directory = ({category})  => {
  return (
    <div className='categories-container'>
       {category.map((category)=>{
         return <CategoryItem key={category.id} category={category} />
       })}
    </div>
  )
}

export default Directory 