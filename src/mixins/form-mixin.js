export const FormMixin = (superclass) => class extends superclass {
  constructor() {
    super();
    this.initProperties();
  }

  initProperties() {
    this.formData = {
      email: '',
      password: ''
    };
  }

  validateField(field, value) {
    const validation = this.validationSchema[field];
    if (validation) {
      return validation(value);
    }
    return '';
  }

  validateForm() {
    let message = '';
    for (const field in this.validationSchema) {
      if (this.validationSchema.hasOwnProperty(field)) {
        const value = this.formData[field];
        message += this.validateField(field, value);
      }
    }
    return message;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSubmit(event) {
    event.preventDefault();
  }
};