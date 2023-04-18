import '@/components/styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  // Wrapping components within the Layout component so that the same layout appears on every page - in this case, the navbar and footer
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}
