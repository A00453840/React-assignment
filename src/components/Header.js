import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
    return (
        <>
        
            <Head >
                <title>Hi, I'm Nikhil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="mt-10 grid grid-cols-3 gap-0 w-1/3">
                <div className="col-start-1 col-end-2">
                    <Image src="/favicon1.png" alt="Avatar" width={110} height={110} />
                </div>
                <div className="col-start-2 col-end-4">
                    <h1 className="text-4xl font-bold">Hi, I'm Nikhil</h1>
                    <p className="text-xl mt-2">A Graduate student at Saint Mary's University.</p>
                    <br/><br/><br/>
                </div>
            </header>
        </>
    )
}

export default Header