import * as React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import AppInner from './AppInner.tsx';
function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
