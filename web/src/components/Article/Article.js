import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="article-body">
        <p>{article.body}</p>
      </div>
      <div className="article-footer">
        <p>Posted at : {article.createdAt}</p>
      </div>
    </article>
  )
}

export default Article
