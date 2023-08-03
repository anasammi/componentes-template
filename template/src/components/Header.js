import logo from '../img/logo.png'
import '../App.css'

export function Header() {
  return (
  <header className="header">
    <img src={logo} className="logo"/>
  </header>
  )
}
