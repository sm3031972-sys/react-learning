import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Card from "./component/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="card">
        <Card title="Card 1" description="card 1 desc" />
        <Card title="Card 2" description="card 2 desc" />
        <Card title="Card 3" description="card 3 desc" />
        <Card title="Card 4" description="card 4 desc" />
      </div>

      <Footer />

    </>
  )
}

export default App
