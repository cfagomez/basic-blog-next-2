import React from 'react'
import { formatearFecha } from '../helpers/formatFecha'

const Entrada = ({entrada}) => {

    const {title, resumen, published_at, url} = entrada

  return (
    <article className='margin-bottom'>
        <div className='margin-auto bg-liver width-50-percent border-rounded padding'>
            <h3 className='h3 text-cornsilk'>{title}</h3>
            <p className='text-article text-cornsilk'>{resumen}</p>
            <p className='text-cornsilk'>{formatearFecha(published_at)}</p>
            <a href={`/blog/${url}`} className='button margin-right'>Leer Mas</a>
        </div>
    </article>
  )
}

export default Entrada
