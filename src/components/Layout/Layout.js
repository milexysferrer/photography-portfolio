import Header from '../Header/Header'
import { LayoutMain } from './Layout.style'
//import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <LayoutMain>
          {children}
        </LayoutMain>
      {/* <Footer /> */}
    </>
  )
}