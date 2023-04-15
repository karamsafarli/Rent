import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import route from './routes'
import ScrollToTop from './components/ScrollTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {
              route.map((el, i) => (
                <Route key={i} element={el.element} path={el.path} />
              ))
            }
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App