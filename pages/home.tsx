import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const home = () => {
    return (
        <div>
            <Head>
                <title>DevTwitter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid">
                <Sidebar />
                <Feed personal={undefined} />
                <Widgets />
            </div>
        </div>
    )
}

export default home