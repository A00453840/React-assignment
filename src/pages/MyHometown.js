import MyTown from './../components/MyTown'
import Footer from './../components/Footer'
import Nav from '../components/Nav'

export default function MyHometown() {
  return (
    <div className="flex flex-col w-full items-center ustify-center min-h-screen py-2">
    {/* <Nav/> */}
      <MyTown/>
      <Footer />
    </div>
  )
}
