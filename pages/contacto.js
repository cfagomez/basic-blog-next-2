import Layout from "../components/Layout"

const contacto = () => {
  return (
    <Layout
        pagina='Contacto'
    >
        <main className="container bg-earth padding">
          <div className="padding-x">
            <h2 className='text-center h2 padding text-black'>Contacto</h2>
            <p className="text-contact">Published by Red Flag Media</p>
            <p className="text-contact">1032 Arch Street, 3rd Floor, Philadelphia, PA 19107</p>
            <p className="text-contact">625-9850</p>
          </div>
        </main>
    </Layout>
  )
}

export default contacto
