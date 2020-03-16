import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
import theme from '../src/theme';

const App = ({ Component, pageProps, apollo }) => { 
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
    },[])

    return (      
      <ApolloProvider client={apollo}>              
       <ThemeProvider theme={theme}>         
         <Layout>
          <Component {...pageProps} />
         </Layout>
       </ThemeProvider>
      </ApolloProvider>
    )
}

export default withData(App)