import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'
import {Store} from './modal';

ReactDOM.render(
  <Hello store={new Store()}/>,
  document.body
)
