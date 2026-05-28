import Navbar from './component/Navbar'
import "./component/Navbar.css"
import UserCard from './component/UserCard'
import "./component/UserCard.css"

function App() {
  return (
    <div>
      <Navbar/>
      <UserCard name='Shashidhar' email='shashidhar@gmail' userRole='SDE2' />

    </div>
  )
}

export default App
