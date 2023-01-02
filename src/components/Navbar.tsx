import ChangeTheme from "./ChangeTheme"
import date from "date-and-time";
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => { 
  const [now, setNow] = useState(new Date);

  useEffect(() => {
    const date = setInterval(() => {
      setNow(new Date);
    }, 1000);

    return () => {
      clearInterval(date);
    }
  }, [])
  
  
  return (
    <div>
      <header>
        <div style={{ position: 'absolute', left: '2rem' }}>
          <ChangeTheme />
        </div>
        <h1 className="text-shadow">Notebook JS</h1>
        <div style={{ position: 'absolute', right: '2rem'}} className='text-shadow'>
          <p>{date.format(now, 'YYYY/MM/DD HH:mm:ss')}</p>
        </div>
      </header>
    </div>
  )
}

export default Navbar