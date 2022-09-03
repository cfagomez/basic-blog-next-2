import React from 'react'
import Layout from '../components/Layout'
import ListadoEntradas from '../components/ListadoEntradas'

const blog = ({entradas}) => {
  return (
    <Layout
        pagina='Blog'
    >
        <ListadoEntradas 
          entradas={entradas}
        />
    </Layout>
  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }

}

export default blog
