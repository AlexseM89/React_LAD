import MyButton from "./components/MyButton/MyButton"
import Profile from "./components/Profile/Profile"
function App() {
 
const isLogged = true
// let content
// if(isLogged){
// content = <Profile/>
// }else{
//   content=null
// }
  return (
    <>
    Hello world
    {/* {isLogged ? <Profile/> : null} */}
    { isLogged && <Profile/> }
    <MyButton/>
    
    </>
  )
}

export default App
