// Required react components
import styles from './Navbar.module.css'

// styles
import { Link } from 'react-router-dom'

// app components/pages

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>SignUp</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
