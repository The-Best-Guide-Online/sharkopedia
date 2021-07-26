import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className=''>
        <Header></Header>
        <main className=''>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
