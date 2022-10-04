import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ErrorComponents from '../../components/ErrorComponents/ErrorComponents'

export default function Error() {
  return (
    <div>
      <Header/>
      <ErrorComponents/>
      <Footer/>
    </div>
  )
}
