import Entrada from './Entrada'

const ListadoEntradas = ({entradas}) => {
  return (
    <main className='container text-center bg-earth padding'>
        <h2 className='margin-0 padding'>Articulos Destacados</h2>
        <div>
            {
                entradas.map(entrada => (
                    <Entrada 
                        entrada={entrada}
                    />
                ))
            }
        </div>
    </main>
  )
}

export default ListadoEntradas
