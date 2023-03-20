import { EventEnum } from '../enum';
class Event {
  _listener: { [propsName: string]: Function[] };

  constructor() {
    this._listener = {};
  }

  /**
   * 监听
   * @param {string} type
   * @param {function} handler
   * @memberof Event
   */
  on(type: EventEnum, handler: Function) {
    if (!this._listener[type]) {
      this._listener[type] = [];
    }

    this._listener[type].push(handler);
  }

  /**
   *触发
   */
  emit(type: EventEnum, event: PointerEvent) {
    if (event == null || event.type == null) {
      return;
    }
    const typeListeners = this._listener[type];
    if (!typeListeners) return;
    for (let index = 0; index < typeListeners.length; index++) {
      const handler = typeListeners[index];
      handler(event);
    }
  }

  /**
   * 删除
   *
   */
  remove(type: EventEnum, handler: Function) {
    if (!handler) {
      this._listener[type] = [];
      return;
    }

    if (this._listener[type]) {
      const listeners = this._listener[type];
      for (let i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i] === handler) {
          listeners.splice(i, 1);
        }
      }
    }
  }
}

export default Event;
