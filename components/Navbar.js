import React from 'react'

const Navbar = () => {
  return (
    <nav className='container bg-liver padding text-center'>
        <a href='/' className='button margin-right'>Inicio</a>
        <div className='d-inline'>
            <a href='/blog'className='button margin-right'>Blog</a>
            <a href='/nosotros' className='button margin-right'>Nosotros</a>
            <a href='/contacto' className='button margin-right'>Contacto</a>
        </div>
    </nav>
  )
}

export default Navbar
