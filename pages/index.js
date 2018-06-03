import Fetch from 'isomorphic-unfetch';
import Layout from '../component/layout';
import Prices from '../component/prices';

const index = (props) => (
    <Layout>
        <div>
        <h1>Welcome to Amaz CoinPrice</h1>
        <p>Check your current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>
        </div>
    </Layout>
)

index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi : data.bpi
    }
}

export default index