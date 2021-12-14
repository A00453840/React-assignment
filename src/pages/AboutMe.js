import Header from './../components/Header'
import Par from './../components/Par'
import Footer from './../components/Footer'
import Nav from '../components/Nav'

export default function AmoutMe() {
  return (
    <div className="flex flex-col w-full items-center ustify-center min-h-screen py-2">
    {/* <Nav/> */}
      <Header />
      <div style={{backgroundColor: '#2424' }}>
      <div className="mui--text-light mui--text-body2"><Par/></div>
      </div>
      <main className="items-center justify-center w-full flex-1 mt-10 text-center">
      </main>
      <Footer />
    </div>
  )
}
