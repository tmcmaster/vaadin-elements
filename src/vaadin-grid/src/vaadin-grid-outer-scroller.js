/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { html } from "@polymer/polymer/lib/utils/html-tag.js";
/**
 * This Element is used internally by vaadin-grid.
 *
 * @private
 */

class GridOuterScrollerElement extends class extends PolymerElement {} {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`;
  }

  static get is() {
    return 'vaadin-grid-outer-scroller';
  }

  static get properties() {
    return {
      scrollTarget: {
        type: Object
      },
      scrollHandler: {
        type: Object
      },
      passthrough: {
        type: Boolean,
        reflectToAttribute: true,
        value: true
      },
      outerScrolling: Boolean,
      noScrollbars: Boolean,
      _touchDevice: Boolean
    };
  }

  ready() {
    super.ready();
    this.addEventListener('scroll', () => this._syncScrollTarget());
    this.parentElement.addEventListener('mousemove', this._onMouseMove.bind(this)); // for some reason scroll bars are hidden in iOS if this style is
    // added in stylesheets or before attaching.

    this.style.webkitOverflowScrolling = 'touch';
    this.addEventListener('mousedown', _ => this.outerScrolling = true);
    this.addEventListener('mouseup', _ => {
      this.outerScrolling = false;

      this.scrollHandler._scrollHandler();
    });
  }

  _onMouseMove(e) {
    // Ignore mousemove events on touch devices
    if (!this._touchDevice) {
      if (this.noScrollbars && this.parentElement.hasAttribute('scroll-period')) {
        this.passthrough = e.offsetY <= this.clientHeight - 20 && e.offsetX <= this.clientWidth - 20;
      } else {
        this.passthrough = e.offsetY <= this.clientHeight && e.offsetX <= this.clientWidth;
      }
    }
  }

  syncOuterScroller() {
    this.scrollTop = this.scrollTarget.scrollTop;
    this.scrollLeft = this.scrollTarget.scrollLeft;
  }

  _syncScrollTarget() {
    requestAnimationFrame(() => {
      this.scrollTarget.scrollTop = this.scrollTop;
      this.scrollTarget.scrollLeft = this.scrollLeft;

      this.scrollHandler._scrollHandler();
    });
  }

}

customElements.define(GridOuterScrollerElement.is, GridOuterScrollerElement);