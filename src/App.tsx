import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import store from './store';

import { client } from './graphql-client';
import Root from './pages';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#22afcb',
      },
      secondary: {
        main: '#f8401b',
      },
    },
    typography: {
      fontFamily: [
        'Google Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Root />
          </CssBaseline>
        </ThemeProvider>
      </ApolloProvider>
    </Provider >
  );
}

export default App;
