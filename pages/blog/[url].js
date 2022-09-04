import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers/formatFecha'

const PaginaEntrada = ({entrada}) => {

    const {title, descripcion, published_at} = entrada

  return (
    <Layout>
        <main className='container padding text-center bg-earth'>
            <h2 className='h2'>{title}</h2>
            <p className='text-black font-small'>{formatearFecha(published_at)}</p>
            <p className='padding text-black font-small'>{descripcion}</p>
        </main>
    </Layout>
  )
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({

            params: {
                url: entrada.url
            }

    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params:{url}}) {

    const urlEntrada = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlEntrada)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada: entrada[0]
        }
    }

}


export default PaginaEntrada
