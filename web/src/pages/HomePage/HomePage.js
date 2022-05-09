import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h2>This is the home page</h2>
      <ArticlesCell />
    </>
  )
}

export default HomePage
