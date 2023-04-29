import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import ProfileFeed from '../components/ProfileFeed'
import Widgets from '../components/Widgets'

const profile = () => {
  return (
    <div>
            <Head>
                <title>DevTwitter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid">
                <Sidebar />
                <ProfileFeed  />
                <Widgets />
            </div>
        </div>
  )
}

export default profile