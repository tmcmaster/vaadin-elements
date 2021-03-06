/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/custom-style.js";
import { TextFieldElement } from './vaadin-text-field.js';
/**
 * `<vaadin-email-field>` is a Web Component for email field control in forms.
 *
 * ```html
 * <vaadin-email-field label="Email">
 * </vaadin-email-field>
 * ```
 *
 * ### Styling
 *
 * See vaadin-text-field.html for the styling documentation
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @demo demo/index.html
 */

class EmailFieldElement extends TextFieldElement {
  static get is() {
    return 'vaadin-email-field';
  }

  static get version() {
    return '2.4.14';
  }

  ready() {
    super.ready();
    this.inputElement.type = 'email';
    this.inputElement.autocapitalize = 'off';
  }

  _createConstraintsObserver() {
    // NOTE: pattern needs to be set before constraints observer is initialized
    this.pattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

    super._createConstraintsObserver();
  }

}

customElements.define(EmailFieldElement.is, EmailFieldElement);
export { EmailFieldElement };