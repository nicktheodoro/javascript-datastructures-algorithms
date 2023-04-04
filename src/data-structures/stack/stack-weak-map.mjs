const _items = new WeakMap();

export default class StackWeakMap {
  constructor() {
    _items.set(this, [])
  }

  push(element) {
    _items.get(this).push(element);
  }

  pop() {
    return _items.get(this).pop();
  }

  peek() {
    return _items.get(this)[_items.get(this).length - 1];
  }

  isEmpty() {
    return _items.get(this).length === 0;
  }

  size() {
    return _items.get(this).length;
  }

  clear() {
    _items.get(this) = [];
  }

  toArray() {
    return _items.get(this);
  }

  toString() {
    return _items.get(this).toString();
  }
}