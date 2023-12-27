import React from "react";
import App from "next/app";
import Router from 'next/router'
import { Provider } from "../utils/appContext";

import styles from './global.scss'
  
class MyApp extends App {
 
  static async getInitialProps({Component, ctx}) { 
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    );
  }
 
}
 
export default MyApp;