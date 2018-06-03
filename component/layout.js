import NavBar from '../component/nav';
import Head from 'next/head';

const Layout = (props) => (

    <div>
        <Head>
            <title>Amaz Coin Price</title>
            <link rel="stylesheet" href='../static/style/bootswatch/cerulean.css' />
        </Head>
        <NavBar/>
        <div className="container">
        {   props.children}
        </div>
    </div>
)

export default Layout;