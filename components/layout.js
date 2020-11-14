import Header from "./header/index";
import Footer from "./footer/index";
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Polls Project</title> 
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="main-area">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;