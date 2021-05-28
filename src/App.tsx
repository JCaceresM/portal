

import "./App.less";
// import 'antd/dist/antd.css'
// import './css/index.css'
import React from 'react'
import { Provider } from 'react-redux'
// import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'
import store from './store'
import Routes from './routes'
// import { defaultTheme } from './themes'
import Spanish from 'antd/lib/locale/es_ES'
function App() {
  return (
    <Provider store={store}>
    {/* <ThemeProvider > */}
      <ConfigProvider locale={Spanish}>
        <Routes />
      </ConfigProvider>
    {/* </ThemeProvider> */}
  </Provider>
    
  );
}

export default App;
