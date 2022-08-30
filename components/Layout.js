import Head from 'next/head'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Class aptent taciti. - {pagina}</title>
            <metaname name='description' content='Lorem´s Blog'/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;300;500&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Navbar />
        {children}
        <Footer />
    </div>
    
  )
}

export default Layout
