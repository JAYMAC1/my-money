// Required react components
import { Link } from 'react-router-dom'

// styles
import styles from './Navbar.module.css'

// app components/pages
import useLogout from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>SignUp</Link>
        </li>
        <li>
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
