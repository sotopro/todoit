import { store } from './store';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
