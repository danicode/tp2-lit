export const LoadingMixin = (superclass) => class extends superclass {
  static properties = {
    loading: { type: Boolean }
  };

  constructor() {
    super();
    this.loading = false;
  }

  showLoading() {
    this.loading = true;
  }

  hideLoading() {
    this.loading = false;
  }
};
