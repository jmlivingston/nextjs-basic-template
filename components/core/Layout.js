import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { logOut } from '../../services/authService';

export default withRouter(function Layout({ children, router }) {
  return (
    <>
      <Head>
        <title>Spike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />>
      </Head>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
          <Link href="/">
            <a className="navbar-brand">Spike</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                <Link href="/">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${router.pathname === '/Todo' ? 'active' : ''}`}>
                <Link href="/Todo">
                  <a className="nav-link">Todo</a>
                </Link>
              </li>
            </ul>
            <div className="form-inline">
              <button className="btn btn-link text-light" onClick={logOut}>
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main role="main" className="main flex-shrink-0">
        <div className="container">{children}</div>
      </main>
      <footer className="footer mt-auto py-3 bg-secondary text-white">
        <div className="container-fluid">&copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  );
});
