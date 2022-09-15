import '../styles/global.css'
import Layout from '../components/layout'
import Styles from '../styles/animation.module.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}