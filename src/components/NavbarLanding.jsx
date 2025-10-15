import { Link } from 'react-router-dom';
import logo from '../assets/W4LLET_LOGO.png';
const Navigation = () => {
  return (
    <div className="navbar flex-wrap shrink bg-black shadow-sm text-white padding">
      <div className="flex-1 flex items-center justify-start md:justify-start px-10 py-2">
        <button>
          <img src={logo} alt="W4LLET Logo" className="h-8" />
        </button>
      </div>

      <div className="flex-none gap-2 flex">
        <ul className="menu flex gap-4 menu-horizontal px-1">
            <button className="px-4 py-2 border rounded" style={{ backgroundColor: '#F0E7A1', color: '#000000' }}>Sign in</button>
            <button className="px-4 py-2 border rounded" style={{ backgroundColor: '#000000', color: '#F0E7A1' }}>Register</button>
        </ul>
      </div>
    </div>
  )
};

export default Navigation;  