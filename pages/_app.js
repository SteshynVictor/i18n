import { Layaut } from '@/components/Layout'
import '@/styles/globals.scss'

import { Provider } from 'react-redux';
import store from '../redux/store';

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config'

const App =({ Component, pageProps }) => {
  return <Provider store={store}>
      <Layaut>
        <Component {...pageProps} />
      </Layaut>
  </Provider>
}

export default appWithTranslation(App,nextI18NextConfig)