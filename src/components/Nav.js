import React, {useState, useEffect} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import oyat from '../image/oyat.jpg'

export default function Nav() {

  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      console.log('window.scrollY', window.scrollY)

      if (window.scrollY > 50) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
  
    return () => {
      window.removeEventListener('scroll', ()=>{})
    }
  }, [])
  
  const handelChange = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img 
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            className='nav_logo'
            onClick={() => window.location.reload()}
        />

        <input 
          value={searchValue}
          onChange={handelChange}
          className="nav__input"
          type="text"
          placeholder='영화를 검색해주세요.'
        />

        <img 
            alt='User logged'
            src={oyat}
            className='nav_avatar'
        />
    </nav>
  )
}
