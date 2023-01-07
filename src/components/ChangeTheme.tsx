import React from 'react'
import { useState, useEffect } from 'react';

const ChangeTheme: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem('theme-color') || 'dark');
  
  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = "var(--color-light)";
      localStorage.setItem('theme-color', 'light');
    } else {
      document.body.style.backgroundColor = "var(--color-dark)";
      localStorage.setItem('theme-color', 'dark');
    }
  }, [theme])
  
  return (
    <div className='changetheme'>
      <button onClick={onChange}>
        <span className={theme === 'light' ? 'ball-light-mode' : 'ball-dark-mode'}></span>
        <i className='fa fa-sun-o'></i>
        <i className='fa fa-moon-o'></i>
      </button>
    </div>
  )
}

export default ChangeTheme