import { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="min-h-screen bg-black text-white text-[1.5rem]" style={{ fontFamily: '"Spartan Regular", sans-serif' }}>
            <Component {...pageProps} />
        </div>
    )
}

export default App