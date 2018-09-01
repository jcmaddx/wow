import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import Router from 'next/router'
import { initGA, logPageView } from '../utils/analytics'
 
const reducer = (state = {loading: true, get: true, action: "stand", text: "", hide: true, locked: false}, action) => {
  switch (action.type) {
		case 'INTRO':
      return {...state, loading: action.value};
    case 'ANIMATE':
      return {...state, action: action.value};
    case 'TALK':
      return {...state, text: action.value};
    case 'ACHIEVEMENTS':
    	return {...state, hide: action.value};
    case 'GET':
    	return {...state, get: action.value};
    case 'LOCK':
    	return {...state, locked: action.value};
    default:
      return state
  }
};
 
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};
 
class MyApp extends App {
 
  static async getInitialProps({Component, ctx}) { 
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
  }

  componentDidMount () {
    initGA()
    logPageView()
    Router.router.events.on('routeChangeComplete', logPageView)
  }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
 
}
 
export default withRedux(makeStore)(MyApp);