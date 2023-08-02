import { useState, createContext, useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

//custom hook


const Navbar = () => {

  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }


  return <NavbarContext.Provider value={{ user, logout, }}>
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks />
    </nav>
  </NavbarContext.Provider>
}

export const useAppContext = () => useContext(NavbarContext)

export default Navbar
