import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/home'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default hot(App)
