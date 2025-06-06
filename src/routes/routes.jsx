import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Items from '../pages/Items'
import Category from '../pages/Category'
import Item_Page from '../pages/Item_Page'
import NotFound from '../pages/PageNotFound'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items/:name?" element={<Items />} />
        <Route path="/item/:id" element={<Item_Page />} />
        <Route path="/category" element={<Category />} />
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesComponent
