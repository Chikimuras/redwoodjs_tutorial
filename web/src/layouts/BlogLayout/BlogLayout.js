import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <div id="logo">
          <Link to={routes.home()}>Redwood Blog</Link>
        </div>
        <nav className="nav-bar flex-center gap-1">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
