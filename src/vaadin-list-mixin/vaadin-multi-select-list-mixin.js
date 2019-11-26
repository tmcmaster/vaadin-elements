/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import { ListMixin } from './vaadin-list-mixin.js';
/**
 * A mixin for `nav` elements, facilitating multiple selection of childNodes.
 *
 * @polymerMixin
 * @mixes Vaadin.ListMixin
 */

export const MultiSelectListMixin = superClass => class VaadinMultiSelectListMixin extends ListMixin(superClass) {
  static get properties() {
    return {
      /**
       * Specifies that multiple options can be selected at once.
       */
      multiple: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_multipleChanged'
      },

      /**
       * Array of indexes of the items selected in the items array
       * Note: Not updated when used in single selection mode.
       */
      selectedValues: {
        type: Array,
        notify: true,
        value: function () {
          return [];
        }
      }
    };
  }

  static get observers() {
    return [`_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)`];
  }

  ready() {
    // Should be attached before click listener in list-mixin
    this.addEventListener('click', e => this._onMultipleClick(e));
    super.ready();
  }

  _enhanceMultipleItems(items, multiple, selected, selectedValues) {
    if (!items || !multiple) {
      return;
    }

    if (selectedValues) {
      const selectedItems = selectedValues.map(selectedId => items[selectedId]);
      items.forEach(item => item.selected = selectedItems.indexOf(item) !== -1);
    }

    const lastSelectedItem = this.selectedValues.slice(-1)[0];

    if (lastSelectedItem && !lastSelectedItem.disabled) {
      this._scrollToItem(lastSelectedItem);
    }
  }

  _onMultipleClick(event) {
    const item = this._filterItems(event.composedPath())[0];

    const idx = item && !item.disabled ? this.items.indexOf(item) : -1;

    if (idx < 0 || !this.multiple) {
      return;
    }

    event.preventDefault();

    if (this.selectedValues.indexOf(idx) !== -1) {
      this.selectedValues = this.selectedValues.filter(v => v !== idx);
    } else {
      this.selectedValues = this.selectedValues.concat(idx);
    }
  }

  _multipleChanged(value, oldValue) {
    // Changing from multiple to single selection, clear selection.
    if (!value && oldValue) {
      this.selectedValues = [];
      this.items.forEach(item => item.selected = false);
    } // Changing from single to multiple selection, add selected to selectedValues.


    if (value && !oldValue && this.selected !== undefined) {
      this.push('selectedValues', this.selected);
      this.selected = undefined;
    }
  }
  /**
   * Fired when the selection is changed.
   * Not fired in single selection mode.
   *
   * @event selected-values-changed
   * @param {Object} detail
   * @param {Object} detail.value the array of indexes of the items selected in the items array.
   */


};