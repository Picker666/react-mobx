import { observable, computed, useStrict, action } from 'mobx';

// useStrict(true);

class Store {
  @observable firstName = 'Hello';
  @observable lastName = 'World';
  @observable counter = 0;
 
  @computed get fullName() {
    const { firstName, lastName } = this;
    if (!firstName && !lastName) {
      return 'Please input your name!'
    } else {
      return firstName + ' ' + lastName;
    }
  };
 
  @action.bound
  setValue(key, event) {
    this[key] = event.target.value;
  }
  @action.bound
  doReset() {
    this.firstName = 'Hello';
    this.lastName = 'World';
  }

  @action.bound
  increase() {
    this.counter ++;
  }

  @action.bound
  decrease() {
    this.counter --;
  }
}

export default Store;