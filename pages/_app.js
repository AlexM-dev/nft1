/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Moonbeam NFT</p>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp