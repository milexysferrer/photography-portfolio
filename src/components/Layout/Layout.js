import Header from '../Header/Header';
import { LayoutMain } from './Layout.style';

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <LayoutMain>
          {children}
        </LayoutMain>
    </>
  )
}