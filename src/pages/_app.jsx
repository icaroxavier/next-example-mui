import '../styles/global.css'
import { wrapper } from '../redux/store'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { clearMessage, stopRedirecting } from "../redux/utils/actions";
import { AuthProvider } from '../contexts/AuthContext';
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { loadingGlobal, redirectTo, messageObject } = useAppSelector(store => store.utils)
  const [loadingRouteState, setLoadingRouteState] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = () => {
      setLoadingRouteState(true);
    };

    Router.onRouteChangeComplete = () => {
      setLoadingRouteState(false);
    };

    Router.onRouteChangeError = () => {
      setLoadingRouteState(false);
    };
  }, []);

  useEffect(() => {
    if(redirectTo){
      console.log('trigou redirect')
      dispatch(stopRedirecting())
      router.push(redirectTo).then(r => false)
    }
  }, [redirectTo, dispatch, router])

  useEffect(() => {
    // if(messageObject.message){
    //   dispatch(clearMessage())
    //   notification[messageObject.type || 'warning']({
    //     message: messageObject.title || '',
    //     description: messageObject.message
    //   })
    // }

  }, [messageObject])


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearMessage())
  }


  return (
    <AuthProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loadingGlobal || loadingRouteState}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={!!messageObject.message} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: "top", horizontal: "right"}}>
              <Alert severity={messageObject.type || 'info'} sx={{ width: '100%', backgroundColor: '#333336' }} onClose={handleCloseSnackbar}>
                {messageObject.message}
              </Alert>
            </Snackbar>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
    </AuthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp)
