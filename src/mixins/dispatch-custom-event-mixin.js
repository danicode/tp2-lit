export const DispatchCustomEventMixin = (superclass) => class extends superclass {
  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
};