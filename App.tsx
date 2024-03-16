import * as React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import AppInner from './AppInner.tsx';

// 로그인이 안 된 경우
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
