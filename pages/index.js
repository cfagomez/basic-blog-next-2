import Layout from "../components/Layout";
import ListadoEntradas from "../components/ListadoEntradas";
import Nosotros from "../components/Nosotros";
import Contacto from "../components/Contacto"

export default function Home({entradas}) {
  return (
    <Layout
      pagina='Home'
    >
      <main className="text-center">
        <ListadoEntradas 
          entradas={entradas}
        />
        <Nosotros />
        <Contacto />        
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/blogs?_limit=2`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }

}
