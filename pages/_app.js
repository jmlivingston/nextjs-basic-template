import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { StrictMode, useEffect, useState } from 'react';
import ErrorBoundary from '../components/core/ErrorBoundary';
import Layout from '../components/core/Layout';
import Loader from '../components/core/Loader';
import Login from '../components/core/Login';
import APP from '../constants/APP';
import { logIn } from '../services/authService';
import './index.css';

export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const authJson = window.localStorage.getItem(APP.LOCAL_STORAGE_KEYS.AUTH);
      if (authJson) {
        const response = await logIn(JSON.parse(authJson));
        if (response.ok) {
          setIsLoggedIn(true);
        }
        setIsLoaded(true);
      }
    })();
  }, []);

  return (
    <StrictMode>
      <ErrorBoundary>
        {loggedIn ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : isLoaded ? (
          <Login />
        ) : (
          <div className="text-center">
            <Loader />
          </div>
        )}
      </ErrorBoundary>
    </StrictMode>
  );
}
