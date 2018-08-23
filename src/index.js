import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';
// import { observable, computed, useStrict, action } from 'mobx';
import { observer, inject, Provider } from 'mobx-react';

@inject('store')// 接收Privide提供的store，并最为组件的props
@observer// 将react组件转变成响应式组件；
class App extends Component {
  render() {
    const { store: { firstName, lastName, fullName, counter, setValue, doReset, increase, decrease } } = this.props;
    return (
      <div>
        <h1>This is mobx-react!</h1>
        <p>First name: <input type="text" value={firstName} onChange={e => setValue('firstName', e)} /></p>
        <p>Last name: <input type="text" value={lastName} onChange={e => setValue('lastName', e)} /></p>
        <p>Full name: {fullName}</p>
        <p><button onClick={doReset}>Reset</button></p>
        <p>
            {`${counter} `}
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </p>
      </div>
    );
  }
}
 
ReactDOM.render(
    <Provider store={new Store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
