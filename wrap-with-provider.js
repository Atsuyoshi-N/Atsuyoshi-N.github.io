import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/store'

const store = createStore()

const wrapWithProvider = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export default wrapWithProvider
