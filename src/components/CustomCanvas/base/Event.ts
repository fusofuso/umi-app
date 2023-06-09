import { EventEnum } from '../enum';
class Event {
  eventListeners: { [propsName: string]: Array<(event: PointerEvent) => void> };

  constructor() {
    this.eventListeners = {};
  }

  /**
   * 监听
   * @param {string} type
   * @param {function} handler
   * @memberof Event
   */
  on(type: EventEnum, handler: (event: PointerEvent) => void) {
    if (!this.eventListeners[type]) {
      this.eventListeners[type] = [];
    }

    this.eventListeners[type].push(handler);
  }

  /**
   *触发
   */
  emit(type: EventEnum, event: PointerEvent) {
    if (event == null || event.type == null) {
      return;
    }
    const typeListeners = this.eventListeners[type];
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
      this.eventListeners[type] = [];
      return;
    }

    if (this.eventListeners[type]) {
      const listeners = this.eventListeners[type];
      for (let i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i] === handler) {
          listeners.splice(i, 1);
        }
      }
    }
  }
  
}

export default Event;
