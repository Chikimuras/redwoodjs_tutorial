import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <div id="logo">
          <Link to={routes.home()}>Rewood Blog</Link>
        </div>
        <nav>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
