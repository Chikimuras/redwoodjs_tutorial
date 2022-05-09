import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticleCell id={id} rand={Math.ceil(Math.random() * 50)} />
    </>
  )
}

export default ArticlePage
