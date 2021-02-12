import {observer} from 'mobx-react';
import React from 'react'
import {Store} from './modal';

type Props = {
  store: Store
}

function Hello({store}: Props) {
  return <div>
    <ul>
      {store.rows.map(row => <li>
        <div>
          {row.id}
          <input value={row.value} onChange={event => row.value = event.target.value}/>
          <button onClick={() => store.newRow()}>+</button>
        </div>
      </li>)}
    </ul>
  </div>
}

export default observer(Hello)
