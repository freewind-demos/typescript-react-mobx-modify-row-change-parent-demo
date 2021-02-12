import {action, observable} from 'mobx';

let rowId = 0;

function newRowId() {
  return rowId++;
}

// Notice: should be a class, not a normal object
class Row {
  @observable id: number = newRowId();
  @observable value: string = '';
}

export class Store {
  @observable rows: Row [] = [new Row()]

  @action newRow() {
    this.rows.push(new Row())
  }
}
