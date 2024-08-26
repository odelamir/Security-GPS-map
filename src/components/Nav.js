import { Link } from "react-router-dom"

export function Nav() {

    return <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'  
      }}
    >
  
      <Link style={{ padding: '2%', backgroundColor: 'white', fontSize:'25px', color: 'rgba(0, 0, 0, 1)', textDecoration: 'none' }} to={'./HomePage'}>HomePage</Link>
      <Link style={{ padding: '2%', backgroundColor: 'white', fontSize:'25px',color: 'rgba(0, 0, 0, 1)',    textDecoration: 'none' }} to={'./LogIn'}>Log In</Link>
      
      <Link style={{  padding: '2%', backgroundColor: 'white', fontSize:'25px',color: 'rgba(0, 0, 0, 1)',  textDecoration: 'none' }} to={'./About'}>About</Link>
  
  
    </div>
  }
  
  