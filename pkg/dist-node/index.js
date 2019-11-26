'use strict';

require('@polymer/polymer/lib/elements/custom-style.js');
var domModule_js = require('@polymer/polymer/lib/elements/dom-module.js');
var htmlTag_js = require('@polymer/polymer/lib/utils/html-tag.js');
var polymerElement_js = require('@polymer/polymer/polymer-element.js');
var gestureEventListeners_js = require('@polymer/polymer/lib/mixins/gesture-event-listeners.js');
var async_js = require('@polymer/polymer/lib/utils/async.js');
var debounce_js = require('@polymer/polymer/lib/utils/debounce.js');
var flush_js = require('@polymer/polymer/lib/utils/flush.js');
var gestures_js = require('@polymer/polymer/lib/utils/gestures.js');
var templatize_js = require('@polymer/polymer/lib/utils/templatize.js');
var renderStatus_js = require('@polymer/polymer/lib/utils/render-status.js');
var flattenedNodesObserver_js = require('@polymer/polymer/lib/utils/flattened-nodes-observer.js');
var ironA11yAnnouncer_js = require('@polymer/iron-a11y-announcer/iron-a11y-announcer.js');
var ironA11yKeysBehavior_js = require('@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js');
require('@polymer/iron-list/iron-list.js');
var disableUpgradeMixin_js = require('@polymer/polymer/lib/mixins/disable-upgrade-mixin.js');
var ironResizableBehavior_js = require('@polymer/iron-resizable-behavior/iron-resizable-behavior.js');
var class_js = require('@polymer/polymer/lib/legacy/class.js');
require('@polymer/iron-media-query/iron-media-query.js');
require('@polymer/polymer/lib/elements/dom-repeat.js');
var polymerLegacy_js = require('@polymer/polymer/polymer-legacy.js');
var ironScrollTargetBehavior_js = require('@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js');
var polymer_dom_js = require('@polymer/polymer/lib/legacy/polymer.dom.js');
var settings_js = require('@polymer/polymer/lib/utils/settings.js');

class Lumo extends HTMLElement {
  static get version() {
    return '1.5.0';
  }

}

customElements.define('vaadin-lumo-styles', Lumo);

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style>
  <style>
    html {
      /* Base (background) */
      --lumo-base-color: #FFF;

      /* Tint */
      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
      --lumo-tint: #FFF;

      /* Shade */
      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
      --lumo-shade: hsl(214, 35%, 15%);

      /* Contrast */
      --lumo-contrast-5pct: var(--lumo-shade-5pct);
      --lumo-contrast-10pct: var(--lumo-shade-10pct);
      --lumo-contrast-20pct: var(--lumo-shade-20pct);
      --lumo-contrast-30pct: var(--lumo-shade-30pct);
      --lumo-contrast-40pct: var(--lumo-shade-40pct);
      --lumo-contrast-50pct: var(--lumo-shade-50pct);
      --lumo-contrast-60pct: var(--lumo-shade-60pct);
      --lumo-contrast-70pct: var(--lumo-shade-70pct);
      --lumo-contrast-80pct: var(--lumo-shade-80pct);
      --lumo-contrast-90pct: var(--lumo-shade-90pct);
      --lumo-contrast: var(--lumo-shade);

      /* Text */
      --lumo-header-text-color: var(--lumo-contrast);
      --lumo-body-text-color: var(--lumo-contrast-90pct);
      --lumo-secondary-text-color: var(--lumo-contrast-70pct);
      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
      --lumo-disabled-text-color: var(--lumo-contrast-30pct);

      /* Primary */
      --lumo-primary-color: hsl(214, 90%, 52%);
      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
      --lumo-primary-text-color: var(--lumo-primary-color);
      --lumo-primary-contrast-color: #FFF;

      /* Error */
      --lumo-error-color: hsl(3, 100%, 61%);
      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
      --lumo-error-text-color: hsl(3, 92%, 53%);
      --lumo-error-contrast-color: #FFF;

      /* Success */
      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
      --lumo-success-text-color: hsl(145, 100%, 32%);
      --lumo-success-contrast-color: #FFF;
    }
  </style>
</custom-style><dom-module id="lumo-color">
  <template>
    <style>
      [theme~="dark"] {
        /* Base (background) */
        --lumo-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --lumo-tint: hsl(214, 100%, 98%);

        /* Shade */
        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --lumo-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --lumo-contrast-5pct: var(--lumo-tint-5pct);
        --lumo-contrast-10pct: var(--lumo-tint-10pct);
        --lumo-contrast-20pct: var(--lumo-tint-20pct);
        --lumo-contrast-30pct: var(--lumo-tint-30pct);
        --lumo-contrast-40pct: var(--lumo-tint-40pct);
        --lumo-contrast-50pct: var(--lumo-tint-50pct);
        --lumo-contrast-60pct: var(--lumo-tint-60pct);
        --lumo-contrast-70pct: var(--lumo-tint-70pct);
        --lumo-contrast-80pct: var(--lumo-tint-80pct);
        --lumo-contrast-90pct: var(--lumo-tint-90pct);
        --lumo-contrast: var(--lumo-tint);

        /* Text */
        --lumo-header-text-color: var(--lumo-contrast);
        --lumo-body-text-color: var(--lumo-contrast-90pct);
        --lumo-secondary-text-color: var(--lumo-contrast-70pct);
        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
        --lumo-disabled-text-color: var(--lumo-contrast-30pct);

        /* Primary */
        --lumo-primary-color: hsl(214, 86%, 55%);
        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --lumo-primary-text-color: hsl(214, 100%, 70%);
        --lumo-primary-contrast-color: #FFF;

        /* Error */
        --lumo-error-color: hsl(3, 90%, 63%);
        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --lumo-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --lumo-success-color: hsl(145, 65%, 42%);
        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --lumo-success-text-color: hsl(145, 85%, 47%);
      }

      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      [theme~="dark"] {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }

      a {
        color: var(--lumo-primary-text-color);
      }

      blockquote {
        color: var(--lumo-secondary-text-color);
      }

      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-color-legacy">
  <template>
    <style include="lumo-color">
      :host {
        color: var(--lumo-body-text-color) !important;
        background-color: var(--lumo-base-color) !important;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

const $_documentContainer$1 = document.createElement('template');
$_documentContainer$1.innerHTML = `<custom-style>
  <style>
    html {
      --lumo-size-xs: 1.625rem;
      --lumo-size-s: 1.875rem;
      --lumo-size-m: 2.25rem;
      --lumo-size-l: 2.75rem;
      --lumo-size-xl: 3.5rem;

      /* Icons */
      --lumo-icon-size-s: 1.25em;
      --lumo-icon-size-m: 1.5em;
      --lumo-icon-size-l: 2.25em;
      /* For backwards compatibility */
      --lumo-icon-size: var(--lumo-icon-size-m);
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer$1.content);

const $_documentContainer$2 = document.createElement('template');
$_documentContainer$2.innerHTML = `<custom-style>
  <style>
    html {
      /* Square */
      --lumo-space-xs: 0.25rem;
      --lumo-space-s: 0.5rem;
      --lumo-space-m: 1rem;
      --lumo-space-l: 1.5rem;
      --lumo-space-xl: 2.5rem;

      /* Wide */
      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

      /* Tall */
      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer$2.content);

const $_documentContainer$3 = document.createElement('template');
$_documentContainer$3.innerHTML = `<custom-style>
  <style>
    html {
      /* Border radius */
      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --lumo-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --lumo-clickable-cursor: default;
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer$3.content);

const $_documentContainer$4 = document.createElement('template');
$_documentContainer$4.innerHTML = `<custom-style>
  <style>
    html {
      /* Font families */
      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --lumo-font-size-xxs: .75rem;
      --lumo-font-size-xs: .8125rem;
      --lumo-font-size-s: .875rem;
      --lumo-font-size-m: 1rem;
      --lumo-font-size-l: 1.125rem;
      --lumo-font-size-xl: 1.375rem;
      --lumo-font-size-xxl: 1.75rem;
      --lumo-font-size-xxxl: 2.5rem;

      /* Line heights */
      --lumo-line-height-xs: 1.25;
      --lumo-line-height-s: 1.375;
      --lumo-line-height-m: 1.625;
    }

  </style>
</custom-style><dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$4.content);

const $_documentContainer$5 = htmlTag_js.html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$5.content);

/**
 * @polymerMixin
 */
const ThemePropertyMixin = superClass => class VaadinThemePropertyMixin extends superClass {
  static get properties() {
    return {
      /**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the subcomponents in Shadow DOM by binding
       * the subcomponent’s "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
       * page for more information.
       *
       * @protected
       */
      theme: {
        type: String,
        readOnly: true
      }
    };
  }
  /** @protected */


  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === 'theme') {
      this._setTheme(newValue);
    }
  }

};

/**
 * @polymerMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

const ThemableMixin = superClass => class VaadinThemableMixin extends ThemePropertyMixin(superClass) {
  /** @protected */
  static finalize() {
    super.finalize();
    const template = this.prototype._template;
    const hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;

    const inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;

    if (inheritedTemplate && !hasOwnTemplate) {
      // The element doesn't define its own template -> include the theme modules from the inherited template
      Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(s => {
        this._includeStyle(s.getAttribute('include'), template);
      });
    }

    this._includeMatchingThemes(template);
  }
  /** @protected */


  static _includeMatchingThemes(template) {
    const domModule = domModule_js.DomModule;
    const modules = domModule.prototype.modules;
    let hasThemes = false;
    const defaultModuleName = this.is + '-default-theme';
    Object.keys(modules).sort((moduleNameA, moduleNameB) => {
      const vaadinA = moduleNameA.indexOf('vaadin-') === 0;
      const vaadinB = moduleNameB.indexOf('vaadin-') === 0;
      const vaadinThemePrefixes = ['lumo-', 'material-'];
      const vaadinThemeA = vaadinThemePrefixes.filter(prefix => moduleNameA.indexOf(prefix) === 0).length > 0;
      const vaadinThemeB = vaadinThemePrefixes.filter(prefix => moduleNameB.indexOf(prefix) === 0).length > 0;

      if (vaadinA !== vaadinB) {
        // Include vaadin core styles first
        return vaadinA ? -1 : 1;
      } else if (vaadinThemeA !== vaadinThemeB) {
        // Include vaadin theme styles after that
        return vaadinThemeA ? -1 : 1;
      } else {
        // Lastly include custom styles so they override all vaadin styles
        return 0;
      }
    }).forEach(moduleName => {
      if (moduleName !== defaultModuleName) {
        const themeFor = modules[moduleName].getAttribute('theme-for');

        if (themeFor) {
          themeFor.split(' ').forEach(themeForToken => {
            if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(this.is)) {
              hasThemes = true;

              this._includeStyle(moduleName, template);
            }
          });
        }
      }
    });

    if (!hasThemes && modules[defaultModuleName]) {
      // No theme modules found, include the default module if it exists
      this._includeStyle(defaultModuleName, template);
    }
  }
  /** @private */


  static _includeStyle(moduleName, template) {
    if (template && !template.content.querySelector(`style[include="${moduleName}"]`)) {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('include', moduleName);
      template.content.appendChild(styleEl);
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 */
const TabIndexMixin = superClass => class VaadinTabIndexMixin extends superClass {
  static get properties() {
    var properties = {
      /**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
        observer: '_tabindexChanged'
      }
    };

    if (window.ShadyDOM) {
      // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
      properties['tabIndex'] = properties.tabindex;
    }

    return properties;
  }

};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


const ControlStateMixin = superClass => class VaadinControlStateMixin extends TabIndexMixin(superClass) {
  static get properties() {
    return {
      /**
       * Specify that this control should have input focus when the page loads.
       */
      autofocus: {
        type: Boolean
      },

      /**
       * Stores the previous value of tabindex attribute of the disabled element
       */
      _previousTabIndex: {
        type: Number
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },
      _isShiftTabbing: {
        type: Boolean
      }
    };
  }

  ready() {
    this.addEventListener('focusin', e => {
      if (e.composedPath()[0] === this) {
        this._focus(e);
      } else if (e.composedPath().indexOf(this.focusElement) !== -1 && !this.disabled) {
        this._setFocused(true);
      }
    });
    this.addEventListener('focusout', e => this._setFocused(false)); // In super.ready() other 'focusin' and 'focusout' listeners might be
    // added, so we call it after our own ones to ensure they execute first.
    // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
    // input field on iOS after “Done” is pressed.

    super.ready(); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
    // where focusout event does not go out of shady DOM because composed property in the event is not true

    const ensureEventComposed = e => {
      if (!e.composed) {
        e.target.dispatchEvent(new CustomEvent(e.type, {
          bubbles: true,
          composed: true,
          cancelable: false
        }));
      }
    };

    this.shadowRoot.addEventListener('focusin', ensureEventComposed);
    this.shadowRoot.addEventListener('focusout', ensureEventComposed);
    this.addEventListener('keydown', e => {
      if (!e.defaultPrevented && e.keyCode === 9) {
        if (e.shiftKey) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);

          this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


          setTimeout(() => this._isShiftTabbing = false, 0);
        } else {
          // Workaround for FF63-65 bug that causes the focus to get lost when
          // blurring a slotted component with focusable shadow root content
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
          // TODO: Remove when safe
          const firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

          if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && this.parentNode && this.nextSibling) {
            const fakeTarget = document.createElement('input');
            fakeTarget.style.position = 'absolute';
            fakeTarget.style.opacity = 0;
            fakeTarget.tabIndex = this.tabIndex;
            this.parentNode.insertBefore(fakeTarget, this.nextSibling);
            fakeTarget.focus();
            fakeTarget.addEventListener('focusout', () => this.parentNode.removeChild(fakeTarget));
          }
        }
      }
    });

    if (this.autofocus && !this.focused && !this.disabled) {
      window.requestAnimationFrame(() => {
        this._focus();

        this._setFocused(true);

        this.setAttribute('focus-ring', '');
      });
    }

    this._boundKeydownListener = this._bodyKeydownListener.bind(this);
    this._boundKeyupListener = this._bodyKeyupListener.bind(this);
  }
  /**
   * @protected
   */


  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener('keydown', this._boundKeydownListener, true);
    document.body.addEventListener('keyup', this._boundKeyupListener, true);
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener('keydown', this._boundKeydownListener, true);
    document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('focused')) {
      this._setFocused(false);
    }
  }

  _setFocused(focused) {
    if (focused) {
      this.setAttribute('focused', '');
    } else {
      this.removeAttribute('focused');
    } // focus-ring is true when the element was focused from the keyboard.
    // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI


    if (focused && this._tabPressed) {
      this.setAttribute('focus-ring', '');
    } else {
      this.removeAttribute('focus-ring');
    }
  }

  _bodyKeydownListener(e) {
    this._tabPressed = e.keyCode === 9;
  }

  _bodyKeyupListener() {
    this._tabPressed = false;
  }
  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the actual focusable element in the component.
   */


  get focusElement() {
    window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
    return this;
  }

  _focus(e) {
    if (this._isShiftTabbing) {
      return;
    }

    this.focusElement.focus();

    this._setFocused(true);
  }
  /**
   * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
   * @private
   */


  focus() {
    if (!this.focusElement || this.disabled) {
      return;
    }

    this.focusElement.focus();

    this._setFocused(true);
  }
  /**
   * Native bluring in the host element does nothing because it does not have the focus.
   * In chrome it works, but not in FF.
   * @private
   */


  blur() {
    this.focusElement.blur();

    this._setFocused(false);
  }

  _disabledChanged(disabled) {
    this.focusElement.disabled = disabled;

    if (disabled) {
      this.blur();
      this._previousTabIndex = this.tabindex;
      this.tabindex = -1;
      this.setAttribute('aria-disabled', 'true');
    } else {
      if (typeof this._previousTabIndex !== 'undefined') {
        this.tabindex = this._previousTabIndex;
      }

      this.removeAttribute('aria-disabled');
    }
  }

  _tabindexChanged(tabindex) {
    if (tabindex !== undefined) {
      this.focusElement.tabIndex = tabindex;
    }

    if (this.disabled && this.tabindex) {
      // If tabindex attribute was changed while checkbox was disabled
      if (this.tabindex !== -1) {
        this._previousTabIndex = this.tabindex;
      }

      this.tabindex = tabindex = undefined;
    }

    if (window.ShadyDOM) {
      this.setProperties({
        tabIndex: tabindex,
        tabindex: tabindex
      });
    }
  }
  /**
   * @protected
   */


  click() {
    if (!this.disabled) {
      super.click();
    }
  }

};

const DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }

  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }

    if (!isLocalhost()) {
      return false;
    }

    if (FlowClients) {
      return !isFlowProductionMode();
    }

    return !isMinified();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}

function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients).map(key => FlowClients[key]).filter(client => client.productionMode);

    if (productionModeApps.length > 0) {
      return true;
    }
  }

  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
} // A guard against polymer-modulizer removing the window.Vaadin
// initialization above.


window['Vaadin'] = window['Vaadin'] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */

const runIfDevelopmentMode = function (callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **/
}

const usageStatistics = function () {
  if (typeof runIfDevelopmentMode === 'function') {
    return runIfDevelopmentMode(maybeGatherAndSendStats);
  }
};

if (!window.Vaadin) {
  window['Vaadin'] = {};
}
/**
 * Array of Vaadin custom element classes that have been finalized.
 */


window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
  if (usageStatistics) {
    usageStatistics();
  }
};

let statsJob;
const registered = new Set();
/**
 * @polymerMixin
 */

const ElementMixin = superClass => class VaadinElementMixin extends superClass {
  /** @protected */
  static finalize() {
    super.finalize();
    const {
      is
    } = this; // Registers a class prototype for telemetry purposes.

    if (is && !registered.has(is)) {
      window.Vaadin.registrations.push(this);
      registered.add(is);

      if (window.Vaadin.developmentModeCallback) {
        statsJob = debounce_js.Debouncer.debounce(statsJob, async_js.idlePeriod, () => {
          window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
        });
        flush_js.enqueueDebouncer(statsJob);
      }
    }
  }

  constructor() {
    super();

    if (document.doctype === null) {
      console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class ButtonElement extends ElementMixin(ControlStateMixin(ThemableMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement)))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`;
  }

  static get is() {
    return 'vaadin-button';
  }

  static get version() {
    return '2.2.1';
  }

  ready() {
    super.ready(); // Leaving default role in the native button, makes navigation announcement
    // being different when using focus navigation (tab) versus using normal
    // navigation (arrows). The first way announces the label on a button
    // since the focus is moved programmatically, and the second on a group.

    this.setAttribute('role', 'button');
    this.$.button.setAttribute('role', 'presentation');

    this._addActiveListeners();
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback(); // `active` state is preserved when the element is disconnected between keydown and keyup events.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('active')) {
      this.removeAttribute('active');
    }
  }

  _addActiveListeners() {
    gestures_js.addListener(this, 'down', () => !this.disabled && this.setAttribute('active', ''));
    gestures_js.addListener(this, 'up', () => this.removeAttribute('active'));
    this.addEventListener('keydown', e => !this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && this.setAttribute('active', ''));
    this.addEventListener('keyup', () => this.removeAttribute('active'));
    this.addEventListener('blur', () => this.removeAttribute('active'));
  }
  /**
   * @protected
   */


  get focusElement() {
    return this.$.button;
  }

}

customElements.define(ButtonElement.is, ButtonElement);

const $_documentContainer$6 = htmlTag_js.html`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$6.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-checkbox>` is a Web Component for customized checkboxes.
 *
 * ```html
 * <vaadin-checkbox>
 *   Make my profile visible
 * </vaadin-checkbox>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `checkbox`        | The checkbox element
 * `label`           | The label content element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|--------------
 * `active`     | Set when the checkbox is pressed down, either with mouse, touch or the keyboard. | `:host`
 * `disabled`   | Set when the checkbox is disabled. | `:host`
 * `focus-ring` | Set when the checkbox is focused using the keyboard. | `:host`
 * `focused`    | Set when the checkbox is focused. | `:host`
 * `indeterminate` | Set when the checkbox is in indeterminate mode. | `:host`
 * `checked` | Set when the checkbox is checked. | `:host`
 * `empty` | Set when there is no label provided. | `label`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class CheckboxElement extends ElementMixin(ControlStateMixin(ThemableMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement)))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`;
  }

  static get is() {
    return 'vaadin-checkbox';
  }

  static get version() {
    return '2.2.10';
  }

  static get properties() {
    return {
      /**
       * True if the checkbox is checked.
       */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_checkedChanged',
        reflectToAttribute: true
      },

      /**
       * Indeterminate state of the checkbox when it's neither checked nor unchecked, but undetermined.
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       */
      indeterminate: {
        type: Boolean,
        notify: true,
        observer: '_indeterminateChanged',
        reflectToAttribute: true,
        value: false
      },

      /**
       * The value given to the data submitted with the checkbox's name to the server when the control is inside a form.
       */
      value: {
        type: String,
        value: 'on'
      },
      _nativeCheckbox: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     * Name of the element.
     */

    this.name;
  }

  get name() {
    return this.checked ? this._storedName : '';
  }

  set name(name) {
    this._storedName = name;
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'checkbox');
    this._nativeCheckbox = this.shadowRoot.querySelector('input[type="checkbox"]');
    this.addEventListener('click', this._handleClick.bind(this));

    this._addActiveListeners();

    const attrName = this.getAttribute('name');

    if (attrName) {
      this.name = attrName;
    }

    this.shadowRoot.querySelector('[part~="label"]').querySelector('slot').addEventListener('slotchange', this._updateLabelAttribute.bind(this));

    this._updateLabelAttribute();
  }

  _updateLabelAttribute() {
    const label = this.shadowRoot.querySelector('[part~="label"]');
    const assignedNodes = label.firstElementChild.assignedNodes();

    if (this._isAssignedNodesEmpty(assignedNodes)) {
      label.setAttribute('empty', '');
    } else {
      label.removeAttribute('empty');
    }
  }

  _isAssignedNodesEmpty(nodes) {
    // The assigned nodes considered to be empty if there is no slotted content or only one empty text node
    return nodes.length === 0 || nodes.length == 1 && nodes[0].nodeType == Node.TEXT_NODE && nodes[0].textContent.trim() === '';
  }

  _checkedChanged(checked) {
    if (this.indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', checked);
    }
  }

  _indeterminateChanged(indeterminate) {
    if (indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', this.checked);
    }
  }

  _addActiveListeners() {
    // DOWN
    this._addEventListenerToNode(this, 'down', e => {
      if (this.__interactionsAllowed(e)) {
        this.setAttribute('active', '');
      }
    }); // UP


    this._addEventListenerToNode(this, 'up', () => this.removeAttribute('active')); // KEYDOWN


    this.addEventListener('keydown', e => {
      if (this.__interactionsAllowed(e) && e.keyCode === 32) {
        e.preventDefault();
        this.setAttribute('active', '');
      }
    }); // KEYUP

    this.addEventListener('keyup', e => {
      if (this.__interactionsAllowed(e) && e.keyCode === 32) {
        e.preventDefault();

        this._toggleChecked();

        this.removeAttribute('active');

        if (this.indeterminate) {
          this.indeterminate = false;
        }
      }
    });
  }
  /** @protected */


  get focusElement() {
    return this.shadowRoot.querySelector('input');
  }
  /**
   * True if users' interactions (mouse or keyboard)
   * should toggle the checkbox
   */


  __interactionsAllowed(e) {
    if (this.disabled) {
      return false;
    } // https://github.com/vaadin/vaadin-checkbox/issues/63


    if (e.target.localName === 'a') {
      return false;
    }

    return true;
  }

  _handleClick(e) {
    if (this.__interactionsAllowed(e)) {
      if (!this.indeterminate) {
        if (e.composedPath()[0] !== this._nativeCheckbox) {
          e.preventDefault();

          this._toggleChecked();
        }
      } else {
        /*
         * Required for IE 11 and Edge.
         * See issue here: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7344418/
         */
        this.indeterminate = false;
        e.preventDefault();

        this._toggleChecked();
      }
    }
  }

  _toggleChecked() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {
      composed: false,
      bubbles: true
    }));
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


}

customElements.define(CheckboxElement.is, CheckboxElement);

const $_documentContainer$7 = document.createElement('template');
$_documentContainer$7.innerHTML = `<dom-module id="lumo-overlay">
  <template>
    <style>
      :host {
        top: var(--lumo-space-m);
        right: var(--lumo-space-m);
        bottom: var(--lumo-space-m);
        left: var(--lumo-space-m);
        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
        /* stylelint-disable-next-line */
        outline: 0px solid transparent;
      }

      [part="overlay"] {
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-xs);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
      }

      @keyframes lumo-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part="backdrop"] {
        animation: 0.2s lumo-overlay-backdrop-exit both;
      }

      @keyframes lumo-overlay-backdrop-exit {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-overlay-dummy-animation {
        0% { opacity: 1; }
        100% { opacity: 1; }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$7.content);

const $_documentContainer$8 = htmlTag_js.html`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$8.content);

const p = Element.prototype;
const matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
/**
 * `Polymer.IronFocusablesHelper` relies on some Polymer-specific legacy API,
 * especially the `root` property which does not exist for native shadow DOM.
 * That's why we have this helper here.
 * See https://github.com/PolymerElements/iron-overlay-behavior/issues/282
 */

const FocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    const result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    const needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function (element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function (element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function (element) {
    if (this.isFocusable(element)) {
      const tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    const element =
    /** @type {!HTMLElement} */
    node;

    const tabIndex = this._normalizedTabIndex(element);

    let needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distribution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distribution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>


    let children;

    if (element.localName === 'slot') {
      children = element.assignedNodes({
        flatten: true
      });
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = (element.shadowRoot || element).children;
    }

    if (children) {
      for (let i = 0; i < children.length; i++) {
        // Ensure method is always invoked to collect tabbable children.
        needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
      }
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function (element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    let style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function (tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    const pivot = Math.ceil(len / 2);

    const left = this._sortByTabIndex(tabbables.slice(0, pivot));

    const right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function (left, right) {
    const result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function (a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    const ati = Math.max(a.tabIndex, 0);
    const bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};

/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const PositionMixin = superClass => class PositionMixin extends superClass {
  static get properties() {
    return {
      /**
       * The element next to which this overlay should be aligned.
       * The position of the overlay relative to the positionTarget can be adjusted
       * with properties `horizontalAlign`, `verticalAlign`, `noHorizontalOverlap`
       * and `noVerticalOverlap`.
       */
      positionTarget: {
        type: Object,
        value: null
      },

      /**
       * When `positionTarget` is set, this property defines whether to align the overlay's
       * left or right side to the target element by default.
       * Possible values are `start` and `end`.
       * RTL is taken into account when interpreting the value.
       * The overlay is automatically flipped to the opposite side when it doesn't fit into
       * the default side defined by this property.
       */
      horizontalAlign: {
        type: String,
        value: 'start'
      },

      /**
       * When `positionTarget` is set, this property defines whether to align the overlay's
       * top or bottom side to the target element by default.
       * Possible values are `top` and `bottom`.
       * The overlay is automatically flipped to the opposite side when it doesn't fit into
       * the default side defined by this property.
       */
      verticalAlign: {
        type: String,
        value: 'top'
      },

      /**
       * When `positionTarget` is set, this property defines whether the overlay should overlap
       * the target element in the x-axis, or be positioned right next to it.
       */
      noHorizontalOverlap: {
        type: Boolean,
        value: false
      },

      /**
       * When `positionTarget` is set, this property defines whether the overlay should overlap
       * the target element in the y-axis, or be positioned right above/below it.
       */
      noVerticalOverlap: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return [`__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign,
      noHorizontalOverlap, noVerticalOverlap)`];
  }

  constructor() {
    super();

    const boundUpdatePosition = this._updatePosition.bind(this);

    this.addEventListener('opened-changed', e => {
      const func = e.detail.value ? 'addEventListener' : 'removeEventListener';
      window[func]('scroll', boundUpdatePosition);
      window[func]('resize', boundUpdatePosition);

      if (e.detail.value) {
        this._updatePosition();
      }
    });
  }

  __positionSettingsChanged() {
    this._updatePosition();
  }

  _updatePosition() {
    if (!this.positionTarget) {
      return;
    }

    const computedStyle = getComputedStyle(this);

    if (!this.__margins) {
      this.__margins = {};
      ['top', 'bottom', 'left', 'right'].forEach(propName => {
        this.__margins[propName] = parseInt(computedStyle[propName], 10);
      });
    }

    const rtl = computedStyle.direction === 'rtl';
    const targetRect = this.positionTarget.getBoundingClientRect();

    const horizontalProps = this.__calculateHorizontalPosition(targetRect, rtl);

    const verticalProps = this.__calculateVerticalPosition(targetRect);

    const positionProps = Object.assign({}, horizontalProps, verticalProps);

    this.__doSetPosition(positionProps, rtl);
  }

  __calculateHorizontalPosition(targetRect, rtl) {
    const propNames = {
      start: 'left',
      end: 'right'
    }; // Using previous size to fix a case where window resize may cause the overlay to be squeezed
    // smaller than its current space before the fit-calculations.

    const contentWidth = Math.max(this.__oldContentWidth || 0, this.$.overlay.offsetWidth);
    this.__oldContentWidth = this.$.overlay.offsetWidth;
    const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    const defaultAlignLeft = !rtl && this.horizontalAlign === 'start' || rtl && this.horizontalAlign === 'end';
    const currentAlignLeft = !!this.style.left;
    return PositionMixin.__calculatePositionInOneDimension(targetRect, contentWidth, viewportWidth, this.__margins, defaultAlignLeft, currentAlignLeft, this.noHorizontalOverlap, propNames);
  }

  __calculateVerticalPosition(targetRect) {
    const propNames = {
      start: 'top',
      end: 'bottom'
    }; // Using previous size to fix a case where window resize may cause the overlay to be squeezed
    // smaller than its current space before the fit-calculations.

    const contentHeight = Math.max(this.__oldContentHeight || 0, this.$.overlay.offsetHeight);
    this.__oldContentHeight = this.$.overlay.offsetHeight;
    const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
    const defaultAlignTop = this.verticalAlign === 'top';
    const currentAlignTop = !!this.style.top;
    return PositionMixin.__calculatePositionInOneDimension(targetRect, contentHeight, viewportHeight, this.__margins, defaultAlignTop, currentAlignTop, this.noVerticalOverlap, propNames);
  }
  /**
   * Returns an object with CSS position properties to set,
   * e.g. { top: "100px", bottom: "" }
   */


  static __calculatePositionInOneDimension(targetRect, contentSize, viewportSize, margins, defaultAlignStart, currentAlignStart, noOverlap, propNames) {
    const spaceForStartAlignment = viewportSize - targetRect[noOverlap ? propNames.end : propNames.start] - margins[propNames.end];
    const spaceForEndAlignment = targetRect[noOverlap ? propNames.start : propNames.end] - margins[propNames.start];
    const spaceForDefaultAlignment = defaultAlignStart ? spaceForStartAlignment : spaceForEndAlignment;
    const spaceForOtherAlignment = defaultAlignStart ? spaceForEndAlignment : spaceForStartAlignment;
    const shouldGoToDefaultSide = spaceForDefaultAlignment > spaceForOtherAlignment || spaceForDefaultAlignment > contentSize;
    const shouldAlignStart = defaultAlignStart === shouldGoToDefaultSide;
    const cssPropNameToSet = shouldAlignStart ? propNames.start : propNames.end;
    const cssPropNameToClear = shouldAlignStart ? propNames.end : propNames.start;
    const cssPropValueToSet = (shouldAlignStart ? targetRect[noOverlap ? propNames.end : propNames.start] : viewportSize - targetRect[noOverlap ? propNames.start : propNames.end]) + 'px';
    const props = {};
    props[cssPropNameToSet] = cssPropValueToSet;
    props[cssPropNameToClear] = '';
    return props;
  }

  __doSetPosition(cssProps, rtl) {
    Object.assign(this.style, cssProps);
    const alignStart = !rtl && cssProps.left || rtl && cssProps.right;
    this.style.alignItems = alignStart ? 'flex-start' : 'flex-end';
    this.style.justifyContent = cssProps.top ? 'flex-start' : 'flex-end';
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let overlayContentCounter = 0;
const overlayContentCache = {};

const createOverlayContent = cssText => {
  const is = overlayContentCache[cssText] || processOverlayStyles(cssText);
  return document.createElement(is);
};

const processOverlayStyles = cssText => {
  overlayContentCounter++;
  const is = `vaadin-overlay-content-${overlayContentCounter}`;
  const styledTemplate = document.createElement('template');
  const style = document.createElement('style');
  style.textContent = ':host { display: block; }' + cssText;
  styledTemplate.content.appendChild(style);

  if (window.ShadyCSS) {
    window.ShadyCSS.prepareTemplate(styledTemplate, is);
  } // NOTE(platosha): Have to use an awkward IIFE returning class here
  // to prevent this class from showing up in analysis.json & API docs.

  /** @private */


  const klass = (() => class extends HTMLElement {
    static get is() {
      return is;
    }

    constructor() {
      super();

      if (!this.shadowRoot) {
        this.attachShadow({
          mode: 'open'
        });
        this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
      }
    }

    connectedCallback() {
      if (window.ShadyCSS) {
        window.ShadyCSS.styleElement(this);
      }
    }

  })();

  customElements.define(klass.is, klass);
  overlayContentCache[cssText] = is;
  return is;
};
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.  You can also pass
 * custom `instanceProps` object using the `instanceProps` property.
 *
 * ```html
 * <vaadin-overlay>
 *   <template>Overlay content</template>
 * </vaadin-overlay>
 * ```
 *
 * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
 * every template can only be templatized once, so it is important
 * to set `instanceProps` before the `template` is assigned to the overlay.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.Overlay.PositionMixin
 * @demo demo/index.html
 */


class OverlayElement extends ThemableMixin(PositionMixin(polymerElement_js.PolymerElement)) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-overlay';
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        notify: true,
        observer: '_openedChanged',
        reflectToAttribute: true
      },

      /**
       * Owner element passed with renderer function
       */
      owner: Element,

      /**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */
      renderer: Function,

      /**
       * The template of the overlay content.
       */
      template: {
        type: Object,
        notify: true
      },

      /**
       * Optional argument for `Polymer.Templatize.templatize`.
       */
      instanceProps: {
        type: Object
      },

      /**
       * References the content container after the template is stamped.
       */
      content: {
        type: Object,
        notify: true
      },
      withBackdrop: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Object with properties that is passed to `renderer` function
       */
      model: Object,

      /**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */
      modeless: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_modelessChanged'
      },

      /**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */
      hidden: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_hiddenChanged'
      },

      /**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */
      focusTrap: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to enable restoring of focus when overlay is closed.
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },
      _mouseDownInside: {
        type: Boolean
      },
      _mouseUpInside: {
        type: Boolean
      },
      _instance: {
        type: Object
      },
      _originalContentPart: Object,
      _contentNodes: Array,
      _oldOwner: Element,
      _oldModel: Object,
      _oldTemplate: Object,
      _oldInstanceProps: Object,
      _oldRenderer: Object,
      _oldOpened: Boolean
    };
  }

  static get observers() {
    return ['_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)'];
  }

  constructor() {
    super();
    this._boundMouseDownListener = this._mouseDownListener.bind(this);
    this._boundMouseUpListener = this._mouseUpListener.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
    this._boundKeydownListener = this._keydownListener.bind(this);
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    this._boundIronOverlayCanceledListener = this._ironOverlayCanceled.bind(this);

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this._boundIosResizeListener = () => this._detectIosNavbar();
    }
  }

  ready() {
    super.ready();

    this._observer.flush(); // Need to add dummy click listeners to this and the backdrop or else
    // the document click event listener (_outsideClickListener) may never
    // get invoked on iOS Safari (reproducible in <vaadin-dialog>
    // and <vaadin-context-menu>).


    this.addEventListener('click', () => {});
    this.$.backdrop.addEventListener('click', () => {});
  }

  _detectIosNavbar() {
    if (!this.opened) {
      return;
    }

    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const landscape = innerWidth > innerHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (landscape && clientHeight > innerHeight) {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', clientHeight - innerHeight + 'px');
    } else {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', '0');
    }
  }

  _setTemplateFromNodes(nodes) {
    this.template = nodes.filter(node => node.localName && node.localName === 'template')[0] || this.template;
  }
  /**
   * @event vaadin-overlay-close
   * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
   */


  close(sourceEvent) {
    var evt = new CustomEvent('vaadin-overlay-close', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: sourceEvent
      }
    });
    this.dispatchEvent(evt);

    if (!evt.defaultPrevented) {
      this.opened = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (this._boundIosResizeListener) {
      this._detectIosNavbar();

      window.addEventListener('resize', this._boundIosResizeListener);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._boundIosResizeListener && window.removeEventListener('resize', this._boundIosResizeListener);
  }

  _ironOverlayCanceled(event) {
    event.preventDefault();
  }

  _mouseDownListener(event) {
    this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }

  _mouseUpListener(event) {
    this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }
  /**
   * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
   * propagating the event to the listener in the button. Otherwise, if the clicked button would call
   * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
   *
   * @event vaadin-overlay-outside-click
   * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
   */


  _outsideClickListener(event) {
    if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
      this._mouseDownInside = false;
      this._mouseUpInside = false;
      return;
    }

    if (!this._last) {
      return;
    }

    const evt = new CustomEvent('vaadin-overlay-outside-click', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: event
      }
    });
    this.dispatchEvent(evt);

    if (this.opened && !evt.defaultPrevented) {
      this.close(event);
    }
  }
  /**
   * @event vaadin-overlay-escape-press
   * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
   */


  _keydownListener(event) {
    if (!this._last) {
      return;
    } // TAB


    if (event.key === 'Tab' && this.focusTrap && !event.defaultPrevented) {
      // if only tab key is pressed, cycle forward, else cycle backwards.
      this._cycleTab(event.shiftKey ? -1 : 1);

      event.preventDefault(); // ESC
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      const evt = new CustomEvent('vaadin-overlay-escape-press', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);

      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
  }

  _ensureTemplatized() {
    this._setTemplateFromNodes(Array.from(this.children));
  }
  /**
   * @event vaadin-overlay-open
   * fired after the `vaadin-overlay` is opened.
   */


  _openedChanged(opened, wasOpened) {
    if (!this._instance) {
      this._ensureTemplatized();
    }

    if (opened) {
      // Store focused node.
      this.__restoreFocusNode = this._getActiveElement();

      this._animatedOpening();

      renderStatus_js.afterNextRender(this, () => {
        if (this.focusTrap && !this.contains(document._activeElement || document.activeElement)) {
          this._cycleTab(0, 0);
        }

        const evt = new CustomEvent('vaadin-overlay-open', {
          bubbles: true
        });
        this.dispatchEvent(evt);
      });

      if (!this.modeless) {
        this._addGlobalListeners();
      }
    } else if (wasOpened) {
      this._animatedClosing();

      if (!this.modeless) {
        this._removeGlobalListeners();
      }
    }
  }

  _hiddenChanged(hidden) {
    if (hidden && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }
  }

  _shouldAnimate() {
    const name = getComputedStyle(this).getPropertyValue('animation-name');
    const hidden = getComputedStyle(this).getPropertyValue('display') === 'none';
    return !hidden && name && name != 'none';
  }

  _enqueueAnimation(type, callback) {
    const handler = `__${type}Handler`;

    const listener = () => {
      callback();
      this.removeEventListener('animationend', listener);
      delete this[handler];
    };

    this[handler] = listener;
    this.addEventListener('animationend', listener);
  }

  _flushAnimation(type) {
    const handler = `__${type}Handler`;

    if (typeof this[handler] === 'function') {
      this[handler]();
    }
  }

  _animatedOpening() {
    if (this.parentNode === document.body && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }

    this._attachOverlay();

    this.setAttribute('opening', '');

    const finishOpening = () => {
      this.removeAttribute('opening');
      document.addEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

      if (!this.modeless) {
        this._enterModalState();
      }
    };

    if (this._shouldAnimate()) {
      this._enqueueAnimation('opening', finishOpening);
    } else {
      finishOpening();
    }
  }

  _attachOverlay() {
    this._placeholder = document.createComment('vaadin-overlay-placeholder');
    this.parentNode.insertBefore(this._placeholder, this);
    document.body.appendChild(this);
  }

  _animatedClosing() {
    if (this.hasAttribute('opening')) {
      this._flushAnimation('opening');
    }

    if (this._placeholder) {
      this.setAttribute('closing', '');

      const finishClosing = () => {
        this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

        this._exitModalState();

        document.removeEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

        this._detachOverlay();

        this.removeAttribute('closing');

        if (this.restoreFocusOnClose && this.__restoreFocusNode) {
          // If the activeElement is `<body>` or inside the overlay,
          // we are allowed to restore the focus. In all the other
          // cases focus might have been moved elsewhere by another
          // component or by the user interaction (e.g. click on a
          // button outside the overlay).
          const activeElement = this._getActiveElement();

          if (activeElement === document.body || this._deepContains(activeElement)) {
            this.__restoreFocusNode.focus();
          }

          this.__restoreFocusNode = null;
        }
      };

      if (this._shouldAnimate()) {
        this._enqueueAnimation('closing', finishClosing);
      } else {
        finishClosing();
      }
    }
  }

  _detachOverlay() {
    this._placeholder.parentNode.insertBefore(this, this._placeholder);

    this._placeholder.parentNode.removeChild(this._placeholder);
  }
  /**
   * Returns all attached overlays.
   */


  static get __attachedInstances() {
    return Array.from(document.body.children).filter(el => el instanceof OverlayElement);
  }
  /**
   * returns true if this is the last one in the opened overlays stack
   */


  get _last() {
    return this === OverlayElement.__attachedInstances.pop();
  }

  _modelessChanged(modeless) {
    if (!modeless) {
      if (this.opened) {
        this._addGlobalListeners();

        this._enterModalState();
      }
    } else {
      this._removeGlobalListeners();

      this._exitModalState();
    }
  }

  _addGlobalListeners() {
    document.addEventListener('mousedown', this._boundMouseDownListener);
    document.addEventListener('mouseup', this._boundMouseUpListener); // Firefox leaks click to document on contextmenu even if prevented
    // https://bugzilla.mozilla.org/show_bug.cgi?id=990614

    document.documentElement.addEventListener('click', this._boundOutsideClickListener, true);
    document.addEventListener('keydown', this._boundKeydownListener);
  }

  _enterModalState() {
    if (document.body.style.pointerEvents !== 'none') {
      // Set body pointer-events to 'none' to disable mouse interactions with
      // other document nodes.
      this._previousDocumentPointerEvents = document.body.style.pointerEvents;
      document.body.style.pointerEvents = 'none';
    } // Disable pointer events in other attached overlays


    OverlayElement.__attachedInstances.forEach(el => {
      if (el !== this && !el.hasAttribute('opening') && !el.hasAttribute('closing')) {
        el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
      }
    });
  }

  _removeGlobalListeners() {
    document.removeEventListener('mousedown', this._boundMouseDownListener);
    document.removeEventListener('mouseup', this._boundMouseUpListener);
    document.documentElement.removeEventListener('click', this._boundOutsideClickListener, true);
    document.removeEventListener('keydown', this._boundKeydownListener);
  }

  _exitModalState() {
    if (this._previousDocumentPointerEvents !== undefined) {
      // Restore body pointer-events
      document.body.style.pointerEvents = this._previousDocumentPointerEvents;
      delete this._previousDocumentPointerEvents;
    } // Restore pointer events in the previous overlay(s)


    const instances = OverlayElement.__attachedInstances;
    let el; // Use instances.pop() to ensure the reverse order

    while (el = instances.pop()) {
      if (el === this) {
        // Skip the current instance
        continue;
      }

      el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

      if (!el.modeless) {
        // Stop after the last modal
        break;
      }
    }
  }

  _removeOldContent() {
    if (!this.content || !this._contentNodes) {
      return;
    }

    this._observer.disconnect();

    this._contentNodes.forEach(node => {
      if (node.parentNode === this.content) {
        this.content.removeChild(node);
      }
    });

    if (this._originalContentPart) {
      // Restore the original <div part="content">
      this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
      this.$.content = this._originalContentPart;
      this._originalContentPart = undefined;
    }

    this._observer.connect();

    this._contentNodes = undefined;
    this.content = undefined;
  }

  _stampOverlayTemplate(template, instanceProps) {
    this._removeOldContent();

    if (!template._Templatizer) {
      template._Templatizer = templatize_js.templatize(template, this, {
        instanceProps: instanceProps,
        forwardHostProp: function (prop, value) {
          if (this._instance) {
            this._instance.forwardHostProp(prop, value);
          }
        }
      });
    }

    this._instance = new template._Templatizer({});
    this._contentNodes = Array.from(this._instance.root.childNodes);
    const templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());

    const _isScoped = templateRoot !== document;

    if (_isScoped) {
      const isShady = window.ShadyCSS && !window.ShadyCSS.nativeShadow;

      if (!this.$.content.shadowRoot) {
        this.$.content.attachShadow({
          mode: 'open'
        });
      }

      let scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce((result, style) => result + style.textContent, '');

      if (isShady) {
        // NOTE(platosha): ShadyCSS removes <style>’s from templates, so
        // we have to use these protected APIs to get their contents back
        const styleInfo = window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);

        if (styleInfo) {
          scopeCssText += styleInfo._getStyleRules().parsedCssText;
          scopeCssText += '}';
        }
      } // The overlay root’s :host styles should not apply inside the overlay


      scopeCssText = scopeCssText.replace(/:host/g, ':host-nomatch');

      if (scopeCssText) {
        if (isShady) {
          // ShadyDOM: replace the <div part="content"> with a generated
          // styled custom element
          const contentPart = createOverlayContent(scopeCssText);
          contentPart.id = 'content';
          contentPart.setAttribute('part', 'content');
          this.$.content.parentNode.replaceChild(contentPart, this.$.content); // NOTE(platosha): carry the style scope of the content part

          contentPart.className = this.$.content.className;
          this._originalContentPart = this.$.content;
          this.$.content = contentPart;
        } else {
          // Shadow DOM: append a style to the content shadowRoot
          const style = document.createElement('style');
          style.textContent = scopeCssText;
          this.$.content.shadowRoot.appendChild(style);

          this._contentNodes.unshift(style);
        }
      }

      this.$.content.shadowRoot.appendChild(this._instance.root);
      this.content = this.$.content.shadowRoot;
    } else {
      this.appendChild(this._instance.root);
      this.content = this;
    }
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this.template = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (this.renderer) {
      this.renderer.call(this.owner, this.content, this.owner, this.model);
    }
  }

  _templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for overlay content');
    }

    const ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
    this._oldModel = model;
    this._oldOwner = owner;
    const templateOrInstancePropsChanged = this._oldInstanceProps !== instanceProps || this._oldTemplate !== template;
    this._oldInstanceProps = instanceProps;
    this._oldTemplate = template;
    const rendererChanged = this._oldRenderer !== renderer;
    this._oldRenderer = renderer;
    const openedChanged = this._oldOpened !== opened;
    this._oldOpened = opened;

    if (template && templateOrInstancePropsChanged) {
      this._stampOverlayTemplate(template, instanceProps);
    } else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
      this.content = this;

      if (rendererChanged) {
        while (this.content.firstChild) {
          this.content.removeChild(this.content.firstChild);
        }
      }

      if (opened) {
        this.render();
      }
    }
  }

  _isFocused(element) {
    return element && element.getRootNode().activeElement === element;
  }

  _focusedIndex(elements) {
    elements = elements || this._getFocusableElements();
    return elements.indexOf(elements.filter(this._isFocused).pop());
  }

  _cycleTab(increment, index) {
    const focusableElements = this._getFocusableElements();

    if (index === undefined) {
      index = this._focusedIndex(focusableElements);
    }

    index += increment; // rollover to first item

    if (index >= focusableElements.length) {
      index = 0; // go to last item
    } else if (index < 0) {
      index = focusableElements.length - 1;
    }

    focusableElements[index].focus();
  }

  _getFocusableElements() {
    // collect all focusable elements
    return FocusablesHelper.getTabbableNodes(this.$.overlay);
  }

  _getActiveElement() {
    let active = document._activeElement || document.activeElement; // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes
    // or document.documentElement (when overlay closed on outside click).
    // In these cases, default it to document.body.

    if (!active || active === document.documentElement || active instanceof Element === false) {
      active = document.body;
    }

    while (active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }

    return active;
  }

  _deepContains(node) {
    if (this.contains(node)) {
      return true;
    }

    let n = node;
    const doc = node.ownerDocument; // walk from node to `this` or `document`

    while (n && n !== doc && n !== this) {
      n = n.parentNode || n.host;
    }

    return n === this;
  }

}

customElements.define(OverlayElement.is, OverlayElement);

const $_documentContainer$9 = document.createElement('template');
$_documentContainer$9.innerHTML = `<dom-module id="lumo-menu-overlay-core">
  <template>
    <style>
      :host([opening]),
      :host([closing]) {
        animation: 0.14s lumo-overlay-dummy-animation;
      }

      [part="overlay"] {
        will-change: opacity, transform;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-enter ease-out both;
      }

      @keyframes lumo-menu-overlay-enter {
        0% {
          opacity: 0;
          transform: translateY(-4px);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-exit both;
      }

      @keyframes lumo-menu-overlay-exit {
        100% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-menu-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      /* Small viewport (bottom sheet) styles */
      /* Use direct media queries instead of the state attributes (\`[phone]\` and \`[fullscreen]\`) provided by the elements */
      @media (max-width: 420px), (max-height: 420px) {
        :host {
          top: 0 !important;
          right: 0 !important;
          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
          left: 0 !important;
          align-items: stretch !important;
          justify-content: flex-end !important;
        }

        [part="overlay"] {
          max-height: 50vh;
          width: 100vw;
          border-radius: 0;
          box-shadow: var(--lumo-box-shadow-xl);
        }

        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
        [part="content"] {
          padding: 30px var(--lumo-space-m);
          max-height: inherit;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }

        [part="backdrop"] {
          display: block;
        }

        /* Animations */

        :host([opening]) [part="overlay"] {
          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;
        }

        :host([closing]),
        :host([closing]) [part="backdrop"] {
          animation-delay: 0.14s;
        }

        :host([closing]) [part="overlay"] {
          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;
        }
      }

      @keyframes lumo-mobile-menu-overlay-enter {
        0% {
          transform: translateY(150%);
        }
      }

      @keyframes lumo-mobile-menu-overlay-exit {
        100% {
          transform: translateY(150%);
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$9.content);

const $_documentContainer$a = htmlTag_js.html`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$a.content);

const $_documentContainer$b = document.createElement('template');
$_documentContainer$b.innerHTML = `<custom-style>
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer$b.content);

const $_documentContainer$c = htmlTag_js.html`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$c.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
 *
 * `focused`, `active` and `focus-ring` are set as only as attributes.
 * @polymerMixin
 */
const ItemMixin = superClass => class VaadinItemMixin extends superClass {
  static get properties() {
    return {
      /**
       * Used for mixin detection because `instanceof` does not work with mixins.
       * e.g. in VaadinListMixin it filters items by using the
       * `element._hasVaadinItemMixin` condition.
       */
      _hasVaadinItemMixin: {
        value: true
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },

      /**
       * If true, the item is in selected state.
       */
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_selectedChanged'
      },
      _value: String
    };
  }

  get value() {
    return this._value !== undefined ? this._value : this.textContent.trim();
  }

  set value(value) {
    this._value = value;
  }

  ready() {
    super.ready();
    const attrValue = this.getAttribute('value');

    if (attrValue !== null) {
      this.value = attrValue;
    }

    this.addEventListener('focus', e => this._setFocused(true), true);
    this.addEventListener('blur', e => this._setFocused(false), true);
    this.addEventListener('mousedown', e => {
      this._setActive(this._mousedown = true);

      const mouseUpListener = () => {
        this._setActive(this._mousedown = false);

        document.removeEventListener('mouseup', mouseUpListener);
      };

      document.addEventListener('mouseup', mouseUpListener);
    });
    this.addEventListener('keydown', e => this._onKeydown(e));
    this.addEventListener('keyup', e => this._onKeyup(e));
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback(); // in Firefox and Safari, blur does not fire on the element when it is removed,
    // especially between keydown and keyup events, being active at the same time.
    // reproducible in `<vaadin-select>` when closing overlay on select.

    if (this.hasAttribute('active')) {
      this._setFocused(false);
    }
  }

  _selectedChanged(selected) {
    this.setAttribute('aria-selected', selected);
  }

  _disabledChanged(disabled) {
    if (disabled) {
      this.selected = false;
      this.setAttribute('aria-disabled', 'true');
      this.blur();
    } else {
      this.removeAttribute('aria-disabled');
    }
  }

  _setFocused(focused) {
    if (focused) {
      this.setAttribute('focused', '');

      if (!this._mousedown) {
        this.setAttribute('focus-ring', '');
      }
    } else {
      this.removeAttribute('focused');
      this.removeAttribute('focus-ring');

      this._setActive(false);
    }
  }

  _setActive(active) {
    if (active) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }

  _onKeydown(event) {
    if (/^( |SpaceBar|Enter)$/.test(event.key) && !event.defaultPrevented) {
      event.preventDefault();

      this._setActive(true);
    }
  }

  _onKeyup(event) {
    if (this.hasAttribute('active')) {
      this._setActive(false);

      this.click();
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <vaadin-item>
 *     Item content
 *   </vaadin-item>
 * ```
 *
 * ### Selectable
 *
 * `<vaadin-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<vaadin-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<vaadin-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ThemableMixin
 */

class ItemElement extends ItemMixin(ThemableMixin(polymerElement_js.PolymerElement)) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`;
  }

  static get is() {
    return 'vaadin-item';
  }

  static get version() {
    return '2.1.1';
  }

  constructor() {
    super();
    /**
     * Submittable string value. The default value is the trimmed text content of the element.
     * @type {string}
     */

    this.value;
  }

}

customElements.define(ItemElement.is, ItemElement);

const $_documentContainer$d = htmlTag_js.html`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$d.content);

const $_documentContainer$e = document.createElement('template');
$_documentContainer$e.innerHTML = `<dom-module id="lumo-field-button">
  <template>
    <style>
      [part\$="button"] {
        flex: none;
        width: 1em;
        height: 1em;
        line-height: 1;
        font-size: var(--lumo-icon-size-m);
        text-align: center;
        color: var(--lumo-contrast-60pct);
        transition: 0.2s color;
        cursor: var(--lumo-clickable-cursor);
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--lumo-contrast-90pct);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--lumo-contrast-20pct);
      }

      [part\$="button"]::before {
        font-family: "lumo-icons";
        display: block;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$e.content);

const $_documentContainer$f = document.createElement('template');
$_documentContainer$f.innerHTML = `<dom-module id="lumo-required-field">
  <template>
    <style>
      [part="label"] {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        padding-bottom: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([has-label])::before {
        margin-top: calc(var(--lumo-font-size-s) * 1.5);
      }

      :host([has-label]) {
        padding-top: var(--lumo-space-m);
      }

      :host([required]) [part="label"] {
        padding-right: 1em;
      }

      [part="label"]::after {
        content: var(--lumo-required-field-indicator, "•");
        transition: opacity 0.2s;
        opacity: 0;
        color: var(--lumo-primary-text-color);
        position: absolute;
        right: 0;
        width: 1em;
        text-align: center;
      }

      :host([required]:not([has-value])) [part="label"]::after {
        opacity: 1;
      }

      :host([invalid]) [part="label"]::after {
        color: var(--lumo-error-text-color);
      }

      [part="error-message"] {
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-error-text-color);
        will-change: max-height;
        transition: 0.4s max-height;
        max-height: 5em;
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before,
      [part="error-message"]:not(:empty)::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host(:not([invalid])) [part="error-message"] {
        max-height: 0;
        overflow: hidden;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$f.content);

const $_documentContainer$g = htmlTag_js.html`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$g.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const $_documentContainer$h = document.createElement('template');
$_documentContainer$h.innerHTML = `<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$h.content);
const HOST_PROPS = {
  default: ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

const TextFieldMixin = subclass => class VaadinTextFieldMixin extends ControlStateMixin(subclass) {
  static get properties() {
    return {
      /**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */
      autocomplete: {
        type: String
      },

      /**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */
      autocorrect: {
        type: String
      },

      /**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */
      autocapitalize: {
        type: String
      },

      /**
       * Specify that the value should be automatically selected when the field gains focus.
       */
      autoselect: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Error to show when the input value is invalid.
       */
      errorMessage: {
        type: String,
        value: ''
      },

      /**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            clear: 'Clear'
          };
        }
      },

      /**
       * String used for the label element.
       */
      label: {
        type: String,
        value: '',
        observer: '_labelChanged'
      },

      /**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */
      maxlength: {
        type: Number
      },

      /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */
      minlength: {
        type: Number
      },

      /**
       * The name of the control, which is submitted with the form data.
       */
      name: {
        type: String
      },

      /**
       * A hint to the user of what can be entered in the control.
       */
      placeholder: {
        type: String
      },

      /**
       * This attribute indicates that the user cannot modify the value of the control.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */
      value: {
        type: String,
        value: '',
        observer: '_valueChanged',
        notify: true
      },

      /**
       * This property is set to true when the control value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Specifies that the text field has value.
       */
      hasValue: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */
      preventInvalidInput: {
        type: Boolean
      },
      _labelId: String,
      _errorId: String,
      _inputId: String
    };
  }

  static get observers() {
    return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS.default.join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label)'];
  }

  get focusElement() {
    if (!this.shadowRoot) {
      return;
    }

    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (slotted) {
      return slotted;
    }

    return this.shadowRoot.querySelector('[part="value"]');
  }
  /**
   * @private
   */


  get inputElement() {
    return this.focusElement;
  }

  get _slottedTagName() {
    return 'input';
  }

  _createConstraintsObserver() {
    // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
    // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
    // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
    // the `inputElement` when this runs.
    this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
  }

  _onInput(e) {
    if (this.__preventInput) {
      e.stopImmediatePropagation();
      this.__preventInput = false;
      return;
    }

    if (this.preventInvalidInput) {
      const input = this.inputElement;

      if (input.value.length > 0 && !this.checkValidity()) {
        input.value = this.value || ''; // add input-prevented attribute for 200ms

        this.setAttribute('input-prevented', '');
        this._inputDebouncer = debounce_js.Debouncer.debounce(this._inputDebouncer, async_js.timeOut.after(200), () => {
          this.removeAttribute('input-prevented');
        });
        return;
      }
    }

    if (!e.__fromClearButton) {
      this.__userInput = true;
    }

    this.value = e.target.value;
  } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
  // of the clear button instead of setting display property for it depending on state.


  _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
    if (!disabled && !readonly && clearButtonVisible && hasValue) {
      this.$.clearButton.removeAttribute('hidden');
    } else {
      this.$.clearButton.setAttribute('hidden', true);
    }
  }

  _onChange(e) {
    if (this._valueClearing) {
      return;
    } // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.


    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }

  _valueChanged(newVal, oldVal) {
    // setting initial value to empty string, skip validation
    if (newVal === '' && oldVal === undefined) {
      return;
    }

    if (newVal !== '' && newVal != null) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }

    if (this.__userInput) {
      this.__userInput = false;
      return;
    } else if (newVal !== undefined) {
      this.inputElement.value = newVal;
    } else {
      this.value = this.inputElement.value = '';
    }

    if (this.invalid) {
      this.validate();
    }
  }

  _labelChanged(label) {
    if (label !== '' && label != null) {
      this.setAttribute('has-label', '');
    } else {
      this.removeAttribute('has-label');
    }
  }

  _onSlotChange() {
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (this.value) {
      this.inputElement.value = this.value;
      this.validate();
    }

    if (slotted && !this._slottedInput) {
      this._validateSlottedValue(slotted);

      this._addInputListeners(slotted);

      this._addIEListeners(slotted);

      this._slottedInput = slotted;
    } else if (!slotted && this._slottedInput) {
      this._removeInputListeners(this._slottedInput);

      this._removeIEListeners(this._slottedInput);

      this._slottedInput = undefined;
    }

    Object.keys(PROP_TYPE).map(key => PROP_TYPE[key]).forEach(type => this._propagateHostAttributes(HOST_PROPS[type].map(attr => this[attr]), type));
  }

  _hostPropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
  }

  _hostAccessiblePropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
  }

  _validateSlottedValue(slotted) {
    if (slotted.value !== this.value) {
      console.warn('Please define value on the vaadin-text-field component!');
      slotted.value = '';
    }
  }

  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === 'accessible') {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);

        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index], input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  _setOrToggleAttribute(name, value, node) {
    if (!name || !node) {
      return;
    }

    if (value) {
      node.setAttribute(name, typeof value === 'boolean' ? '' : value);
    } else {
      node.removeAttribute(name);
    }
  }

  _constraintsChanged(required, minlength, maxlength, pattern) {
    if (!this.invalid) {
      return;
    }

    if (!required && !minlength && !maxlength && !pattern) {
      this.invalid = false;
    } else {
      this.validate();
    }
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   * @returns {boolean}
   */


  checkValidity() {
    if (this.required || this.pattern || this.maxlength || this.minlength) {
      return this.inputElement.checkValidity();
    } else {
      return !this.invalid;
    }
  }

  _addInputListeners(node) {
    node.addEventListener('input', this._boundOnInput);
    node.addEventListener('change', this._boundOnChange);
    node.addEventListener('blur', this._boundOnBlur);
    node.addEventListener('focus', this._boundOnFocus);
  }

  _removeInputListeners(node) {
    node.removeEventListener('input', this._boundOnInput);
    node.removeEventListener('change', this._boundOnChange);
    node.removeEventListener('blur', this._boundOnBlur);
    node.removeEventListener('focus', this._boundOnFocus);
  }

  ready() {
    super.ready();

    this._createConstraintsObserver();

    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
    const defaultInput = this.shadowRoot.querySelector('[part="value"]');
    this._slottedInput = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    this._addInputListeners(defaultInput);

    this._addIEListeners(defaultInput);

    if (this._slottedInput) {
      this._addIEListeners(this._slottedInput);

      this._addInputListeners(this._slottedInput);
    }

    this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
      this.updateStyles();
    }

    this.$.clearButton.addEventListener('mousedown', () => this._valueClearing = true);
    this.$.clearButton.addEventListener('mouseleave', () => this._valueClearing = false);
    this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));
    var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
    this._labelId = `${this.constructor.is}-label-${uniqueId}`;
    this._inputId = `${this.constructor.is}-input-${uniqueId}`; // Lumo theme defines a max-height transition for the "error-message"
    // part on invalid state change.

    this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', () => {
      this.__observeOffsetHeight();
    });
  }
  /**
   * Returns true if `value` is valid.
   * `<iron-form>` uses this to check the validity for all its elements.
   *
   * @return {boolean} True if the value is valid.
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }

  clear() {
    this.value = '';
  }

  _onBlur() {
    this.validate();
  }

  _onFocus() {
    if (this.autoselect) {
      this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

      setTimeout(() => {
        try {
          this.inputElement.setSelectionRange(0, 9999);
        } catch (e) {// The workaround may cause errors on different input types.
          // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
        }
      });
    }
  }

  _onClearButtonClick(e) {
    e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

    this.inputElement.focus();
    this.clear();
    this._valueClearing = false;

    if (navigator.userAgent.match(/Trident/)) {
      // Disable IE input" event prevention here, we want the input event from
      // below to propagate normally.
      this.__preventInput = false;
    }

    const inputEvent = new Event('input', {
      bubbles: true,
      composed: true
    });
    inputEvent.__fromClearButton = true;
    const changeEvent = new Event('change', {
      bubbles: !this._slottedInput
    });
    changeEvent.__fromClearButton = true;
    this.inputElement.dispatchEvent(inputEvent);
    this.inputElement.dispatchEvent(changeEvent);
  }

  _onKeyDown(e) {
    if (e.keyCode === 27 && this.clearButtonVisible) {
      const dispatchChange = !!this.value;
      this.clear();
      dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
        bubbles: !this._slottedInput
      }));
    }
  }

  _addIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      // IE11 dispatches `input` event in following cases:
      // - focus or blur, when placeholder attribute is set
      // - placeholder attribute value changed
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
      this._shouldPreventInput = () => {
        this.__preventInput = true;
        requestAnimationFrame(() => {
          this.__preventInput = false;
        });
      };

      node.addEventListener('focusin', this._shouldPreventInput);
      node.addEventListener('focusout', this._shouldPreventInput);

      this._createPropertyObserver('placeholder', this._shouldPreventInput);
    }
  }

  _removeIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      node.removeEventListener('focusin', this._shouldPreventInput);
      node.removeEventListener('focusout', this._shouldPreventInput);
    }
  }

  _getActiveErrorId(invalid, errorMessage, errorId) {
    this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.focusElement);
  }

  _getActiveLabelId(label, _labelId, _inputId) {
    let ids = _inputId;

    if (label) {
      ids = `${_labelId} ${_inputId}`;
    }

    this.focusElement.setAttribute('aria-labelledby', ids);
  }

  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!(errorMessage && invalid ? errorId : undefined)).toString();
  }

  _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
    const previousSizePropertyName = '__previous' + sizePropertyName;

    if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
      this.dispatchEvent(new CustomEvent('iron-resize', {
        bubbles: true
      }));
    }

    this[previousSizePropertyName] = value;
  }

  __observeOffsetHeight() {
    this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
  }
  /**
   * @protected
   */


  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

    /* istanbul ignore if */

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
      this.updateStyles();
    } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    /* istanbul ignore if */

    if (isSafari && this.root) {
      const WEBKIT_PROPERTY = '-webkit-backface-visibility';
      this.root.querySelectorAll('*').forEach(el => {
        el.style[WEBKIT_PROPERTY] = 'visible';
        el.style[WEBKIT_PROPERTY] = '';
      });
    }
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */

  /**
   * Fired when the value is changed by the user: on every typing keystroke,
   * and the value is cleared using the clear button.
   *
   * @event input
   */

  /**
   * Fired when the size of the element changes.
   *
   * @event iron-resize
   */


};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class TextFieldElement extends ElementMixin(TextFieldMixin(ThemableMixin(polymerElement_js.PolymerElement))) {
  static get template() {
    return htmlTag_js.html`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`;
  }

  static get is() {
    return 'vaadin-text-field';
  }

  static get version() {
    return '2.4.14';
  }

  static get properties() {
    return {
      /**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */
      list: {
        type: String
      },

      /**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */
      pattern: {
        type: String
      },

      /**
       * Message to show to the user when validation fails.
       */
      title: {
        type: String
      }
    };
  }

}

customElements.define(TextFieldElement.is, TextFieldElement);

const $_documentContainer$i = htmlTag_js.html`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$i.content);

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */
const ComboBoxPlaceholder = class ComboBoxPlaceholder {
  toString() {
    return '';
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ComboBoxMixin = subclass => class VaadinComboBoxMixinElement extends subclass {
  static get properties() {
    return {
      /**
       * True if the dropdown is open, false otherwise.
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
        observer: '_openedChanged'
      },

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * When present, it specifies that the element field is read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       */
      renderer: Function,

      /**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       */
      items: {
        type: Array,
        observer: '_itemsChanged'
      },

      /**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       */
      allowCustomValue: {
        type: Boolean,
        value: false
      },

      /**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       */
      filteredItems: {
        type: Array
      },

      /**
       * The `String` value for the selected item of the combo box. Provides
       * the value for `iron-form`.
       *
       * When there’s no item selected, the value is an empty string.
       *
       * Use `selectedItem` property to get the raw selected item from
       * the `items` array.
       */
      value: {
        type: String,
        observer: '_valueChanged',
        notify: true,
        value: ''
      },

      /**
       * Used to detect user value changes and fire `change` events.
       */
      _lastCommittedValue: String,

      /*
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       */
      loading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      _focusedIndex: {
        type: Number,
        value: -1
      },

      /**
       * Filtering string the user has typed into the input field.
       */
      filter: {
        type: String,
        value: '',
        notify: true
      },

      /**
       * The selected item from the `items` array.
       */
      selectedItem: {
        type: Object,
        notify: true
      },

      /**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       *
       * When using item templates, the property is still needed because it is used
       * for filtering, and for displaying the selected item value in the input box.
       */
      itemLabelPath: {
        type: String,
        value: 'label',
        observer: '_itemLabelPathChanged'
      },

      /**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       */
      itemValuePath: {
        type: String,
        value: 'value'
      },

      /**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       */
      itemIdPath: String,

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * Set to true if the value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },
      _toggleElement: Object,
      _clearElement: Object,
      _inputElementValue: String,
      _closeOnBlurIsPrevented: Boolean,
      _previousDocumentPointerEvents: String,
      _itemTemplate: Object
    };
  }

  static get observers() {
    return ['_filterChanged(filter, itemValuePath, itemLabelPath)', '_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)', '_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)', '_templateOrRendererChanged(_itemTemplate, renderer)', '_loadingChanged(loading)', '_selectedItemChanged(selectedItem, itemLabelPath)', '_toggleElementChanged(_toggleElement)'];
  }

  constructor() {
    super();
    this._boundOnFocusout = this._onFocusout.bind(this);
    this._boundOverlaySelectedItemChanged = this._overlaySelectedItemChanged.bind(this);
    this._boundClose = this.close.bind(this);
    this._boundOnOpened = this._onOpened.bind(this);
    this._boundOnKeyDown = this._onKeyDown.bind(this);
    this._boundOnClick = this._onClick.bind(this);
    this._boundOnOverlayTouchAction = this._onOverlayTouchAction.bind(this);
    this._boundOnTouchend = this._onTouchend.bind(this);
  }

  ready() {
    super.ready();
    this.addEventListener('focusout', this._boundOnFocusout);
    this._lastCommittedValue = this.value;
    ironA11yAnnouncer_js.IronA11yAnnouncer.requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

    this.$.overlay.addEventListener('selection-changed', this._boundOverlaySelectedItemChanged);
    this.addEventListener('vaadin-combo-box-dropdown-closed', this._boundClose);
    this.addEventListener('vaadin-combo-box-dropdown-opened', this._boundOnOpened);
    this.addEventListener('keydown', this._boundOnKeyDown);
    this.addEventListener('click', this._boundOnClick);
    this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._boundOnOverlayTouchAction);
    this.addEventListener('touchend', this._boundOnTouchend);
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (this.$.overlay._selector) {
      this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item').forEach(item => item._render());
    }
  }

  _setTemplateFromNodes(nodes) {
    this._itemTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._itemTemplate;
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._itemTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }

  _templateOrRendererChanged(template, renderer) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for combo box items');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;
  }
  /**
   * Opens the dropdown list.
   */


  open() {
    // Prevent _open() being called when input is disabled or read-only
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }
  /**
   * Closes the dropdown list.
   */


  close() {
    this.opened = false;
  }

  _openedChanged(value, old) {
    // Prevent _close() being called when opened is set to its default value (false).
    if (old === undefined) {
      return;
    }

    if (this.opened) {
      this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.

      if (!this.hasAttribute('focused') && !this.$.overlay.touchDevice) {
        this.focus();
      }
    } else {
      this._onClosed();

      if (this._openedWithFocusRing && this.hasAttribute('focused')) {
        this.focusElement.setAttribute('focus-ring', '');
      }
    }
  }

  _onOverlayTouchAction(event) {
    // On touch devices, blur the input on touch start inside the overlay, in order to hide
    // the virtual keyboard. But don't close the overlay on this blur.
    this._closeOnBlurIsPrevented = true;
    this.inputElement.blur();
    this._closeOnBlurIsPrevented = false;
  }

  _onClick(e) {
    this._closeOnBlurIsPrevented = true;
    const path = e.composedPath();
    const isClearElement = path.indexOf(this._clearElement) !== -1 || path[0].getAttribute('part') === 'clear-button';

    if (isClearElement) {
      this._clear();

      this.focus();
    } else if (path.indexOf(this.inputElement) !== -1) {
      if (path.indexOf(this._toggleElement) > -1 && this.opened) {
        this.close();
      } else {
        this.open();
      }
    }

    this._closeOnBlurIsPrevented = false;
  }
  /**
   * Keyboard navigation
   */


  _onKeyDown(e) {
    if (this._isEventKey(e, 'down')) {
      this._closeOnBlurIsPrevented = true;

      this._onArrowDown();

      this._closeOnBlurIsPrevented = false; // prevent caret from moving

      e.preventDefault();
    } else if (this._isEventKey(e, 'up')) {
      this._closeOnBlurIsPrevented = true;

      this._onArrowUp();

      this._closeOnBlurIsPrevented = false; // prevent caret from moving

      e.preventDefault();
    } else if (this._isEventKey(e, 'enter')) {
      this._onEnter(e);
    } else if (this._isEventKey(e, 'esc')) {
      this._onEscape(e);
    }
  }

  _isEventKey(e, k) {
    return ironA11yKeysBehavior_js.IronA11yKeysBehavior.keyboardEventMatchesKeys(e, k);
  }

  _getItemLabel(item) {
    return this.$.overlay.getItemLabel(item);
  }

  _getItemValue(item) {
    let value = item && this.itemValuePath ? this.get(this.itemValuePath, item) : undefined;

    if (value === undefined) {
      value = item ? item.toString() : '';
    }

    return value;
  }

  _onArrowDown() {
    if (this.opened) {
      if (this.$.overlay._items) {
        this._focusedIndex = Math.min(this.$.overlay._items.length - 1, this._focusedIndex + 1);

        this._prefillFocusedItemLabel();
      }
    } else {
      this.open();
    }
  }

  _onArrowUp() {
    if (this.opened) {
      if (this._focusedIndex > -1) {
        this._focusedIndex = Math.max(0, this._focusedIndex - 1);
      } else {
        if (this.$.overlay._items) {
          this._focusedIndex = this.$.overlay._items.length - 1;
        }
      }

      this._prefillFocusedItemLabel();
    } else {
      this.open();
    }
  }

  _prefillFocusedItemLabel() {
    if (this._focusedIndex > -1) {
      // Reset the input value asyncronously to prevent partial value changes
      // announce. Makes OSX VoiceOver to announce the complete value instead.
      this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

      setTimeout(() => {
        this._inputElementValue = this._getItemLabel(this.$.overlay._focusedItem);

        this._markAllSelectionRange();
      }, 1);
    }
  }

  _setSelectionRange(start, end) {
    // vaadin-text-field does not implement setSelectionRange, hence we need the native input
    const input = this._nativeInput || this.inputElement; // Setting selection range focuses and/or moves the caret in some browsers,
    // and there's no need to modify the selection range if the input isn't focused anyway.
    // This affects Safari. When the overlay is open, and then hiting tab, browser should focus
    // the next focusable element instead of the combo-box itself.
    // Checking the focused property here is enough instead of checking the activeElement.

    if (this.hasAttribute('focused') && input && input.setSelectionRange) {
      try {
        input.setSelectionRange(start, end);
      } catch (ignore) {// IE11 randomly fails when running tests in Sauce.
      }
    }
  }

  _markAllSelectionRange() {
    if (this._inputElementValue !== undefined) {
      this._setSelectionRange(0, this._inputElementValue.length);
    }
  }

  _clearSelectionRange() {
    if (this._inputElementValue !== undefined) {
      const pos = this._inputElementValue ? this._inputElementValue.length : 0;

      this._setSelectionRange(pos, pos);
    }
  }

  _onEnter(e) {
    // should close on enter when custom values are allowed, input field is cleared, or when an existing
    // item is focused with keyboard.
    if (this.opened && (this.allowCustomValue || this._inputElementValue === '' || this._focusedIndex > -1)) {
      this.close(); // Do not submit the surrounding form.

      e.preventDefault(); // Do not trigger global listeners

      e.stopPropagation();
    }
  }

  _onEscape(e) {
    if (this.opened) {
      this._stopPropagation(e);

      if (this._focusedIndex > -1) {
        this._focusedIndex = -1;

        this._revertInputValue();
      } else {
        this.cancel();
      }
    }
  }

  _toggleElementChanged(toggleElement) {
    if (toggleElement) {
      // Don't blur the input on toggle mousedown
      toggleElement.addEventListener('mousedown', e => e.preventDefault()); // Unfocus previously focused element if focus is not inside combo box (on touch devices)

      toggleElement.addEventListener('click', e => {
        if (this.$.overlay.touchDevice && !this.hasAttribute('focused')) {
          document.activeElement.blur();
        }
      });
    }
  }
  /**
   * Clears the current value.
   */


  _clear() {
    this.selectedItem = null;

    if (this.allowCustomValue) {
      this.value = '';
    }

    this._detectAndDispatchChange();
  }
  /**
   * Reverts back to original value.
   */


  cancel() {
    this._revertInputValueToValue(); // In the next _detectAndDispatchChange() call, the change detection should not pass


    this._lastCommittedValue = this.value;
    this.close();
  }

  _onOpened() {
    // Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
    // we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
    // because that will cause problems to say the least.
    flush_js.flush(); // With iron-list v1.3.9, calling `notifyResize()` no longer renders
    // the items synchronously. It is required to have the items rendered
    // before we update the overlay and the list positions and sizes.

    this.$.overlay.ensureItemsRendered();

    this.$.overlay._selector.toggleScrollListener(true); // Ensure metrics are up-to-date


    this.$.overlay.updateViewportBoundaries(); // Force iron-list to create reusable nodes. Otherwise it will only start
    // doing that in scroll listener, which is especially slow in Edge.

    this.$.overlay._selector._increasePoolIfNeeded();

    setTimeout(() => this._resizeDropdown(), 1); // Defer scroll position adjustment to prevent freeze in Edge

    window.requestAnimationFrame(() => this.$.overlay.adjustScrollPosition()); // _detectAndDispatchChange() should not consider value changes done before opening

    this._lastCommittedValue = this.value;
  }

  _onClosed() {
    // Happens when the overlay is closed by clicking outside
    if (this.opened) {
      this.close();
    }

    if (this.$.overlay._items && this._focusedIndex > -1) {
      const focusedItem = this.$.overlay._items[this._focusedIndex];

      if (this.selectedItem !== focusedItem) {
        this.selectedItem = focusedItem;
      } // make sure input field is updated in case value doesn't change (i.e. FOO -> foo)


      this._inputElementValue = this._getItemLabel(this.selectedItem);
    } else if (this._inputElementValue === '' || this._inputElementValue === undefined) {
      this.selectedItem = null;

      if (this.allowCustomValue) {
        this.value = '';
      }
    } else {
      if (this.allowCustomValue // to prevent a repetitive input value being saved after pressing ESC and Tab.
      && !(this.filteredItems && this.filteredItems.filter(item => this._getItemLabel(item) === this._inputElementValue).length)) {
        const e = new CustomEvent('custom-value-set', {
          detail: this._inputElementValue,
          composed: true,
          cancelable: true,
          bubbles: true
        });
        this.dispatchEvent(e);

        if (!e.defaultPrevented) {
          const customValue = this._inputElementValue;

          this._selectItemForValue(customValue);

          this.value = customValue;
        }
      } else {
        this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : this.value || '';
      }
    }

    this._detectAndDispatchChange();

    this._clearSelectionRange();

    if (!this.dataProvider) {
      this.filter = '';
    }
  }

  get _propertyForValue() {
    return 'value';
  }
  /**
   *  Filtering and items handling
   */


  _inputValueChanged(e) {
    // Handle only input events from our inputElement.
    if (e.composedPath().indexOf(this.inputElement) !== -1) {
      this._inputElementValue = this.inputElement[this._propertyForValue];

      this._filterFromInput(e);
    }
  }

  _filterFromInput(e) {
    if (!this.opened && !e.__fromClearButton) {
      this.open();
    }

    if (this.filter === this._inputElementValue) {
      // Filter and input value might get out of sync, while keyboard navigating for example.
      // Afterwards, input value might be changed to the same value as used in filtering.
      // In situation like these, we need to make sure all the filter changes handlers are run.
      this._filterChanged(this.filter, this.itemValuePath, this.itemLabelPath);
    } else {
      this.filter = this._inputElementValue;
    }
  }

  _itemLabelPathChanged(itemLabelPath, oldItemLabelPath) {
    if (typeof itemLabelPath !== 'string') {
      console.error('You should set itemLabelPath to a valid string');
    }
  }

  _filterChanged(filter, itemValuePath, itemLabelPath) {
    if (filter === undefined) {
      return;
    }

    if (this.items) {
      this.filteredItems = this._filterItems(this.items, filter);
    } else {
      // With certain use cases (e. g., external filtering), `items` are
      // undefined. Filtering is unnecessary per se, but the filteredItems
      // observer should still be invoked to update focused item.
      this._filteredItemsChanged({
        path: 'filteredItems',
        value: this.filteredItems
      }, itemValuePath, itemLabelPath);
    }
  }

  _loadingChanged(loading) {
    if (loading) {
      this._focusedIndex = -1;
    }
  }

  _revertInputValue() {
    if (this.filter !== '') {
      this._inputElementValue = this.filter;
    } else {
      this._revertInputValueToValue();
    }

    this._clearSelectionRange();
  }

  _revertInputValueToValue() {
    if (this.allowCustomValue && !this.selectedItem) {
      this._inputElementValue = this.value;
    } else {
      this._inputElementValue = this._getItemLabel(this.selectedItem);
    }
  }

  _resizeDropdown() {
    this.$.overlay.$.dropdown.notifyResize();
  }

  _updateHasValue(hasValue) {
    if (hasValue) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  _selectedItemChanged(selectedItem, itemLabelPath) {
    if (selectedItem === null || selectedItem === undefined) {
      if (this.filteredItems) {
        if (!this.allowCustomValue) {
          this.value = '';
        }

        this._updateHasValue(this.value !== '');

        this._inputElementValue = this.value;
      }
    } else {
      const value = this._getItemValue(selectedItem);

      if (this.value !== value) {
        this.value = value;

        if (this.value !== value) {
          // The value was changed to something else in value-changed listener,
          // so prevent from resetting it to the previous value.
          return;
        }
      }

      this._updateHasValue(true);

      this._inputElementValue = this._getItemLabel(selectedItem); // Could not be defined in 1.x because ready is called after all prop-setters

      if (this.inputElement) {
        this.inputElement[this._propertyForValue] = this._inputElementValue;
      }
    }

    this.$.overlay._selectedItem = selectedItem;

    if (this.filteredItems && this.$.overlay._items) {
      this._focusedIndex = this.filteredItems.indexOf(selectedItem);
    }
  }

  _valueChanged(value, oldVal) {
    if (value === '' && oldVal === undefined) {
      // initializing, no need to do anything (#554)
      return;
    }

    if (this._isValidValue(value)) {
      let item;

      if (this._getItemValue(this.selectedItem) !== value) {
        this._selectItemForValue(value);
      } else {
        item = this.selectedItem;
      }

      if (!item && this.allowCustomValue) {
        this._inputElementValue = value;
      }

      this._updateHasValue(this.value !== '');
    } else {
      this.selectedItem = null;
    } // In the next _detectAndDispatchChange() call, the change detection should pass


    this._lastCommittedValue = undefined;
  }

  _detectAndDispatchChange() {
    if (this.value !== this._lastCommittedValue) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
      this._lastCommittedValue = this.value;
    }
  }

  _itemsChanged(items, oldItems) {
    this._ensureItemsOrDataProvider(() => {
      this.items = oldItems;
    });
  }

  _itemsOrPathsChanged(e, itemValuePath, itemLabelPath) {
    if (e.value === undefined) {
      return;
    }

    if (e.path === 'items' || e.path === 'items.splices') {
      this.filteredItems = this.items ? this.items.slice(0) : this.items;

      const valueIndex = this._indexOfValue(this.value, this.items);

      this._focusedIndex = valueIndex;
      const item = valueIndex > -1 && this.items[valueIndex];

      if (item) {
        this.selectedItem = item;
      }
    }
  }

  _filteredItemsChanged(e, itemValuePath, itemLabelPath) {
    if (e.value === undefined) {
      return;
    }

    if (e.path === 'filteredItems' || e.path === 'filteredItems.splices') {
      this._setOverlayItems(this.filteredItems);

      this._focusedIndex = this.opened ? this.$.overlay.indexOfLabel(this.filter) : this._indexOfValue(this.value, this.filteredItems);

      if (this.opened) {
        this._repositionOverlay();
      }
    }
  }

  _filterItems(arr, filter) {
    if (!arr) {
      return arr;
    }

    return arr.filter(item => {
      filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

      return this._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
    });
  }

  _selectItemForValue(value) {
    const valueIndex = this._indexOfValue(value, this.filteredItems);

    const previouslySelectedItem = this.selectedItem;
    this.selectedItem = valueIndex >= 0 ? this.filteredItems[valueIndex] : this.dataProvider && this.selectedItem === undefined ? undefined : null;

    if (this.selectedItem === null && previouslySelectedItem === null) {
      this._selectedItemChanged(this.selectedItem);
    }
  }

  _setOverlayItems(items) {
    this.$.overlay.set('_items', items);
  }

  _repositionOverlay() {
    // async needed to reposition correctly after filtering
    // (especially when aligned on top of input)
    this.__repositionOverlayDebouncer = debounce_js.Debouncer.debounce(this.__repositionOverlayDebouncer, // Long debounce: sizing updates invoke multiple styling rounds,
    // which is very slow in Edge
    async_js.timeOut.after(500), () => {
      const selector = this.$.overlay._selector;

      if (!selector._isClientFull()) {
        // Due to the mismatch of the Y position of the item rendered
        // at the top of the scrolling list with some specific scroll
        // position values (2324, 3486, 6972, 60972, 95757 etc.)
        // iron-list loops the increasing of the pool and adds
        // too many items to the DOM.
        // Adjusting scroll position to equal the current scrollTop value
        // to avoid looping.
        selector._resetScrollPosition(selector._physicalTop);
      }

      this._resizeDropdown();

      this.$.overlay.updateViewportBoundaries();
      this.$.overlay.ensureItemsRendered();
      selector.notifyResize();
      flush_js.flush();
    });
  }

  _indexOfValue(value, items) {
    if (items && this._isValidValue(value)) {
      for (let i = 0; i < items.length; i++) {
        if (this._getItemValue(items[i]) === value) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * Checks if the value is supported as an item value in this control.
   *
   * @return {boolean}
   */


  _isValidValue(value) {
    return value !== undefined && value !== null;
  }

  _overlaySelectedItemChanged(e) {
    // stop this private event from leaking outside.
    e.stopPropagation();

    if (e.detail.item instanceof ComboBoxPlaceholder) {
      // Placeholder items should not be selectable.
      return;
    }

    if (this.opened) {
      this._focusedIndex = this.filteredItems.indexOf(e.detail.item);
      this.close();
    } else if (this.selectedItem !== e.detail.item) {
      this.selectedItem = e.detail.item;

      this._detectAndDispatchChange();
    }
  }

  _onFocusout(event) {
    // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
    const dropdown = this.$.overlay.$.dropdown;

    if (dropdown && dropdown.$ && event.relatedTarget === dropdown.$.overlay) {
      event.composedPath()[0].focus();
      return;
    }

    if (!this._closeOnBlurIsPrevented) {
      this.close();
    }
  }

  _onTouchend(event) {
    if (!this._clearElement || event.composedPath()[0] !== this._clearElement) {
      return;
    }

    event.preventDefault();

    this._clear();
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * You can override the `checkValidity` method for custom validations.
   */


  checkValidity() {
    if (this.inputElement.validate) {
      return this.inputElement.validate();
    }
  }

  get _instanceProps() {
    return {
      item: true,
      index: true,
      selected: true,
      focused: true
    };
  }

  _ensureTemplatized() {
    if (!this._TemplateClass) {
      const tpl = this._itemTemplate || this._getRootTemplate();

      if (tpl) {
        this._TemplateClass = templatize_js.templatize(tpl, this, {
          instanceProps: this._instanceProps,
          forwardHostProp: function (prop, value) {
            const items = this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item');

            Array.prototype.forEach.call(items, item => {
              if (item._itemTemplateInstance) {
                item._itemTemplateInstance.set(prop, value);

                item._itemTemplateInstance.notifyPath(prop, value, true);
              }
            });
          }
        });
      }
    }
  }

  _getRootTemplate() {
    return Array.prototype.filter.call(this.children, elem => elem.tagName === 'TEMPLATE')[0];
  }

  _preventInputBlur() {
    if (this._toggleElement) {
      this._toggleElement.addEventListener('click', this._preventDefault);
    }

    if (this._clearElement) {
      this._clearElement.addEventListener('click', this._preventDefault);
    }
  }

  _restoreInputBlur() {
    if (this._toggleElement) {
      this._toggleElement.removeEventListener('click', this._preventDefault);
    }

    if (this._clearElement) {
      this._clearElement.removeEventListener('click', this._preventDefault);
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }
  /**
   * Fired when the value changes.
   *
   * @event value-changed
   * @param {Object} detail
   *  @param {String} detail.value the combobox value
   */

  /**
   * Fired when selected item changes.
   *
   * @event selected-item-changed
   * @param {Object} detail
   *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
   */

  /**
   * Fired when the user sets a custom value.
   * @event custom-value-set
   * @param {String} detail the custom value
   */

  /**
   * Fired when value changes.
   * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
   * @event change
   */


};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * The default element used for items in the vaadin-combo-box.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the item label or template content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `selected` | Set when the item is selected | :host
 * `focused` | Set when the item is focused | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @private
 */

class ComboBoxItemElement extends ThemableMixin(polymerElement_js.PolymerElement) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`;
  }

  static get is() {
    return 'vaadin-combo-box-item';
  }

  static get properties() {
    return {
      /**
       * The index of the item
       */
      index: Number,

      /**
       * The item to render
       * @type {(String|Object)}
       */
      item: Object,

      /**
       * The text label corresponding to the item
       */
      label: String,

      /**
       * True when item is selected
       */
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * True when item is focused
       */
      focused: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The template instance corresponding to the item
       */
      _itemTemplateInstance: Object,

      /**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */
      renderer: Function,

      /**
       * Saved instance of a custom renderer function.
       */
      _oldRenderer: Function
    };
  }

  static get observers() {
    return ['_rendererOrItemChanged(renderer, index, item.*)', '_updateLabel(label, _itemTemplateInstance)', '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)', '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)', '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)'];
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this._itemTemplateInstance) {
      // 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
      const overlay = this.getRootNode().host.getRootNode().host;
      const dropdown = overlay.__dataHost;
      const comboBoxOverlay = dropdown.getRootNode().host;
      this._comboBox = comboBoxOverlay.getRootNode().host;

      this._comboBox._ensureTemplatized();

      if (this._comboBox._TemplateClass) {
        this._itemTemplateInstance = new this._comboBox._TemplateClass({});
        this.$.content.textContent = '';
        this.$.content.appendChild(this._itemTemplateInstance.root);
      }
    }
  }

  _render() {
    if (!this.renderer) {
      return;
    }

    const model = {
      index: this.index,
      item: this.item
    };
    this.renderer(this.$.content, this._comboBox, model);
  }

  _rendererOrItemChanged(renderer, index, item) {
    if (item === undefined || index === undefined) {
      return;
    }

    if (this._oldRenderer !== renderer) {
      this.$.content.innerHTML = '';
    }

    if (renderer) {
      this._oldRenderer = renderer;

      this._render();
    }
  }

  _updateLabel(label, _itemTemplateInstance) {
    if (_itemTemplateInstance === undefined && this.$.content && !this.renderer) {
      // Only set label to textContent no template
      this.$.content.textContent = label;
    }
  }

  _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
    if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
      return;
    }

    _itemTemplateInstance[variable] = value;
  }

}

customElements.define(ComboBoxItemElement.is, ComboBoxItemElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

class ComboBoxOverlayElement extends OverlayElement {
  static get is() {
    return 'vaadin-combo-box-overlay';
  }

  ready() {
    super.ready();
    const loader = document.createElement('div');
    loader.setAttribute('part', 'loader');
    const content = this.shadowRoot.querySelector('[part~="content"]');
    content.parentNode.insertBefore(loader, content);
  }

}

customElements.define(ComboBoxOverlayElement.is, ComboBoxOverlayElement);
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

class ComboBoxDropdownElement extends disableUpgradeMixin_js.DisableUpgradeMixin(class_js.mixinBehaviors(ironResizableBehavior_js.IronResizableBehavior, polymerElement_js.PolymerElement)) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`;
  }

  static get is() {
    return 'vaadin-combo-box-dropdown';
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        observer: '_openedChanged'
      },
      template: {
        type: Object,
        notify: true
      },

      /**
       * The element to position/align the dropdown by.
       */
      positionTarget: {
        type: Object
      },

      /**
       * If `true`, overlay is aligned above the `positionTarget`
       */
      alignedAbove: {
        type: Boolean,
        value: false
      },

      /**
       * Used to propagate the `theme` attribute from the host element.
       */
      theme: String
    };
  }

  constructor() {
    super();
    this._boundSetPosition = this._setPosition.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', this._boundSetPosition);
  }

  ready() {
    super.ready(); // Preventing the default modal behaviour of the overlay on input clicking

    this.$.overlay.addEventListener('vaadin-overlay-outside-click', e => {
      e.preventDefault();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the overlay is closed and removed from DOM after detaching the dropdown.

    this.opened = false;
  }

  notifyResize() {
    super.notifyResize();

    if (this.positionTarget && this.opened) {
      this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


      requestAnimationFrame(this._setPosition.bind(this));
    }
  }
  /**
   * Fired after the `vaadin-combo-box-dropdown` opens.
   *
   * @event vaadin-combo-box-dropdown-opened
   */

  /**
   * Fired after the `vaadin-combo-box-dropdown` closes.
   *
   * @event vaadin-combo-box-dropdown-closed
   */


  _openedChanged(opened, oldValue) {
    if (!!opened === !!oldValue) {
      return;
    }

    if (opened) {
      this.$.overlay.style.position = this._isPositionFixed(this.positionTarget) ? 'fixed' : 'absolute';

      this._setPosition();

      window.addEventListener('scroll', this._boundSetPosition, true);
      document.addEventListener('click', this._boundOutsideClickListener, true);
      this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened', {
        bubbles: true,
        composed: true
      }));
    } else {
      window.removeEventListener('scroll', this._boundSetPosition, true);
      document.removeEventListener('click', this._boundOutsideClickListener, true);
      this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed', {
        bubbles: true,
        composed: true
      }));
    }
  } // We need to listen on 'click' event and capture it and close the overlay before
  // propagating the event to the listener in the button. Otherwise, if the clicked button would call
  // open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4


  _outsideClickListener(event) {
    const eventPath = event.composedPath();

    if (eventPath.indexOf(this.positionTarget) < 0 && eventPath.indexOf(this.$.overlay) < 0) {
      this.opened = false;
    }
  }

  _isPositionFixed(element) {
    const offsetParent = this._getOffsetParent(element);

    return window.getComputedStyle(element).position === 'fixed' || offsetParent && this._isPositionFixed(offsetParent);
  }

  _getOffsetParent(element) {
    if (element.assignedSlot) {
      return element.assignedSlot.parentElement;
    } else if (element.parentElement) {
      return element.offsetParent;
    }

    const parent = element.parentNode;

    if (parent && parent.nodeType === 11 && parent.host) {
      return parent.host; // parent is #shadowRoot
    }
  }

  _verticalOffset(overlayRect, targetRect) {
    return this.alignedAbove ? -overlayRect.height : targetRect.height;
  }

  _shouldAlignAbove(targetRect) {
    const spaceBelow = (window.innerHeight - targetRect.bottom - Math.min(document.body.scrollTop, 0)) / window.innerHeight;
    return spaceBelow < 0.30;
  }

  _setPosition(e) {
    if (this.hidden) {
      return;
    }

    if (e && e.target) {
      const target = e.target === document ? document.body : e.target;
      const parent = this.$.overlay.parentElement;

      if (!(target.contains(this.$.overlay) || target.contains(this.positionTarget)) || parent !== document.body) {
        return;
      }
    }

    const targetRect = this.positionTarget.getBoundingClientRect();
    this.alignedAbove = this._shouldAlignAbove(targetRect);
    const overlayRect = this.$.overlay.getBoundingClientRect();
    this._translateX = targetRect.left - overlayRect.left + (this._translateX || 0);
    this._translateY = targetRect.top - overlayRect.top + (this._translateY || 0) + this._verticalOffset(overlayRect, targetRect);

    const _devicePixelRatio = window.devicePixelRatio || 1;

    this._translateX = Math.round(this._translateX * _devicePixelRatio) / _devicePixelRatio;
    this._translateY = Math.round(this._translateY * _devicePixelRatio) / _devicePixelRatio;
    this.$.overlay.style.transform = `translate3d(${this._translateX}px, ${this._translateY}px, 0)`;
    this.$.overlay.style.width = this.positionTarget.clientWidth + 'px';
    this.$.overlay.style.justifyContent = this.alignedAbove ? 'flex-end' : 'flex-start'; // TODO: fire only when position actually changes changes

    this.dispatchEvent(new CustomEvent('position-changed'));
  }

}

customElements.define(ComboBoxDropdownElement.is, ComboBoxDropdownElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

const TOUCH_DEVICE = (() => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
})();
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */


class ComboBoxDropdownWrapperElement extends class extends polymerElement_js.PolymerElement {} {
  static get template() {
    return htmlTag_js.html`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`;
  }

  static get is() {
    return 'vaadin-combo-box-dropdown-wrapper';
  }

  static get properties() {
    return {
      /**
       * True if the device supports touch events.
       */
      touchDevice: {
        type: Boolean,
        value: TOUCH_DEVICE
      },
      opened: Boolean,

      /**
       * The element to position/align the dropdown by.
       */
      positionTarget: {
        type: Object
      },

      /**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */
      renderer: Function,

      /**
       * `true` when new items are being loaded.
       */
      loading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_setOverlayHeight'
      },

      /**
       * Used to propagate the `theme` attribute from the host element.
       */
      theme: String,
      _selectedItem: {
        type: Object
      },
      _items: {
        type: Object
      },
      _focusedIndex: {
        type: Number,
        value: -1,
        observer: '_focusedIndexChanged'
      },
      _focusedItem: {
        type: String,
        computed: '_getFocusedItem(_focusedIndex)'
      },
      _itemLabelPath: {
        type: String,
        value: 'label'
      },
      _itemValuePath: {
        type: String,
        value: 'value'
      },
      _selector: Object,
      _itemIdPath: String
    };
  }

  static get observers() {
    return ['_selectorChanged(_selector)', '_loadingChanged(loading)', '_openedChanged(opened, _items, loading)'];
  }

  _fireTouchAction(sourceEvent) {
    this.dispatchEvent(new CustomEvent('vaadin-overlay-touch-action', {
      detail: {
        sourceEvent: sourceEvent
      }
    }));
  }

  _getItems(opened, items) {
    return opened ? items : [];
  }

  _openedChanged(opened, items, loading) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      if (!opened) {
        return;
      } else {
        this._initDropdown();
      }
    } // Do not attach if no items
    // Do not dettach if opened but user types an invalid search


    this.$.dropdown.opened = !!(opened && (loading || this.$.dropdown.opened || items && items.length));
  }

  _initDropdown() {
    this.$.dropdown.removeAttribute('disable-upgrade');

    this._templateChanged();

    this._loadingChanged(this.loading);

    this.$.dropdown.$.overlay.addEventListener('touchend', e => this._fireTouchAction(e));
    this.$.dropdown.$.overlay.addEventListener('touchmove', e => this._fireTouchAction(e)); // Prevent blurring the input when clicking inside the overlay.

    this.$.dropdown.$.overlay.addEventListener('mousedown', e => e.preventDefault()); // IE11: when scrolling with mouse, the focus goes to the scroller.
    // This causes the overlay closing due to defocusing the input field.
    // Prevent focusing the scroller by setting `unselectable="on"`.

    if (/Trident/.test(navigator.userAgent)) {
      this._scroller.setAttribute('unselectable', 'on');
    }
  }

  _templateChanged(e) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      return;
    }

    this._selector = this.$.dropdown.$.overlay.content.querySelector('#selector');
    this._scroller = this.$.dropdown.$.overlay.content.querySelector('#scroller');
  }

  _loadingChanged(loading) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      return;
    }

    if (loading) {
      this.$.dropdown.$.overlay.setAttribute('loading', '');
    } else {
      this.$.dropdown.$.overlay.removeAttribute('loading');
    }
  }

  _selectorChanged(selector) {
    this._patchWheelOverScrolling();
  }

  _setOverlayHeight() {
    if (!this.opened || !this.positionTarget || !this._selector) {
      return;
    }

    const targetRect = this.positionTarget.getBoundingClientRect();
    this._scroller.style.maxHeight = (window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-combo-box-overlay-max-height') : getComputedStyle(this).getPropertyValue('--vaadin-combo-box-overlay-max-height')) || '65vh';

    const maxHeight = this._maxOverlayHeight(targetRect); // overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.


    this.$.dropdown.$.overlay.style.maxHeight = maxHeight; // we need to set height for iron-list to make its `firstVisibleIndex` work correctly.

    this._selector.style.maxHeight = maxHeight;
    this.updateViewportBoundaries();
  }

  _maxOverlayHeight(targetRect) {
    const margin = 8;
    const minHeight = 116; // Height of two items in combo-box

    const bottom = Math.min(window.innerHeight, document.body.scrollHeight - document.body.scrollTop);

    if (this.$.dropdown.alignedAbove) {
      return Math.max(targetRect.top - margin + Math.min(document.body.scrollTop, 0), minHeight) + 'px';
    } else {
      return Math.max(bottom - targetRect.bottom - margin, minHeight) + 'px';
    }
  }

  _getFocusedItem(focusedIndex) {
    if (focusedIndex >= 0) {
      return this._items[focusedIndex];
    }
  }

  _isItemSelected(item, selectedItem, itemIdPath) {
    if (item instanceof ComboBoxPlaceholder) {
      return false;
    } else if (itemIdPath && item !== undefined && selectedItem !== undefined) {
      return this.get(itemIdPath, item) === this.get(itemIdPath, selectedItem);
    } else {
      return item === selectedItem;
    }
  }

  _onItemClick(e) {
    if (e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation) {
      this._stopPropagation(e.detail.sourceEvent);
    }

    this.dispatchEvent(new CustomEvent('selection-changed', {
      detail: {
        item: e.model.item
      }
    }));
  }
  /**
   * Gets the index of the item with the provided label.
   * @return {Number}
   */


  indexOfLabel(label) {
    if (this._items && label) {
      for (let i = 0; i < this._items.length; i++) {
        if (this.getItemLabel(this._items[i]).toString().toLowerCase() === label.toString().toLowerCase()) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * If dataProvider is used, dispatch a request for the item’s index if
   * the item is a placeholder object.
   *
   * @return {Number}
   */


  __requestItemByIndex(item, index) {
    if (item instanceof ComboBoxPlaceholder && index !== undefined) {
      this.dispatchEvent(new CustomEvent('index-requested', {
        detail: {
          index
        }
      }));
    }

    return index;
  }
  /**
   * Gets the label string for the item based on the `_itemLabelPath`.
   * @return {String}
   */


  getItemLabel(item, itemLabelPath) {
    itemLabelPath = itemLabelPath || this._itemLabelPath;
    let label = item && itemLabelPath ? this.get(itemLabelPath, item) : undefined;

    if (label === undefined || label === null) {
      label = item ? item.toString() : '';
    }

    return label;
  }

  _isItemFocused(focusedIndex, itemIndex) {
    return focusedIndex == itemIndex;
  }

  _getAriaSelected(focusedIndex, itemIndex) {
    return this._isItemFocused(focusedIndex, itemIndex).toString();
  }

  _getAriaRole(itemIndex) {
    return itemIndex !== undefined ? 'option' : false;
  }

  _focusedIndexChanged(index) {
    if (index >= 0) {
      this._scrollIntoView(index);
    }
  }

  _scrollIntoView(index) {
    if (!(this.opened && index >= 0)) {
      return;
    }

    const visibleItemsCount = this._visibleItemsCount();

    if (visibleItemsCount === undefined) {
      // Scroller is not visible. Moving is unnecessary.
      return;
    }

    let targetIndex = index;

    if (index > this._selector.lastVisibleIndex - 1) {
      // Index is below the bottom, scrolling down. Make the item appear at the bottom.
      // First scroll to target (will be at the top of the scroller) to make sure it's rendered.
      this._selector.scrollToIndex(index); // Then calculate the index for the following scroll (to get the target to bottom of the scroller).


      targetIndex = index - visibleItemsCount + 1;
    } else if (index > this._selector.firstVisibleIndex) {
      // The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
      // the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
      targetIndex = this._selector.firstVisibleIndex;
    }

    this._selector.scrollToIndex(Math.max(0, targetIndex)); // Sometimes the item is partly below the bottom edge, detect and adjust.


    const pidx = this._selector._getPhysicalIndex(index),
          physicalItem = this._selector._physicalItems[pidx];

    if (!physicalItem) {
      return;
    }

    const physicalItemRect = physicalItem.getBoundingClientRect(),
          scrollerRect = this._scroller.getBoundingClientRect(),
          scrollTopAdjust = physicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;

    if (scrollTopAdjust > 0) {
      this._scroller.scrollTop += scrollTopAdjust;
    }
  }

  ensureItemsRendered() {
    this._selector._render();
  }

  adjustScrollPosition() {
    if (this.opened && this._items) {
      this._scrollIntoView(this._focusedIndex);
    }
  }
  /**
   * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
   * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
   * scrolling the parent similarly to touch scrolling.
   */


  _patchWheelOverScrolling() {
    const selector = this._selector;
    selector.addEventListener('wheel', e => {
      const scroller = selector._scroller || selector.scrollTarget;
      const scrolledToTop = scroller.scrollTop === 0;
      const scrolledToBottom = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 1;

      if (scrolledToTop && e.deltaY < 0) {
        e.preventDefault();
      } else if (scrolledToBottom && e.deltaY > 0) {
        e.preventDefault();
      }
    });
  }

  updateViewportBoundaries() {
    this._cachedViewportTotalPaddingBottom = undefined;

    this._selector.updateViewportBoundaries();
  }

  get _viewportTotalPaddingBottom() {
    if (this._cachedViewportTotalPaddingBottom === undefined) {
      const itemsStyle = window.getComputedStyle(this._selector.$.items);
      this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map(v => {
        return parseInt(v, 10);
      }).reduce((sum, v) => {
        return sum + v;
      });
    }

    return this._cachedViewportTotalPaddingBottom;
  }

  _visibleItemsCount() {
    if (!this._selector) {
      return;
    } // Ensure items are rendered


    this._selector.flushDebouncer('_debounceTemplate'); // Ensure items are positioned


    this._selector.scrollToIndex(this._selector.firstVisibleIndex); // Ensure viewport boundaries are up-to-date


    this.updateViewportBoundaries();
    return this._selector.lastVisibleIndex - this._selector.firstVisibleIndex + 1;
  }

  _selectItem(item) {
    item = typeof item === 'number' ? this._items[item] : item;

    if (this._selector.selectedItem !== item) {
      this._selector.selectItem(item);
    }
  }

  _preventDefault(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

  _hidden(itemsChange) {
    return !this.loading && (!this._items || !this._items.length);
  }

}

customElements.define(ComboBoxDropdownWrapperElement.is, ComboBoxDropdownWrapperElement);

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ComboBoxDataProviderMixin = superClass => class DataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * Number of items fetched at a time from the dataprovider.
       */
      pageSize: {
        type: Number,
        value: 50,
        observer: '_pageSizeChanged'
      },

      /**
       * Total number of items.
       */
      size: {
        type: Number,
        observer: '_sizeChanged'
      },

      /**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filter` Currently applied filter
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items.
       */
      dataProvider: {
        type: Object,
        observer: '_dataProviderChanged'
      },
      _pendingRequests: {
        value: () => {
          return {};
        }
      },
      __placeHolder: {
        value: new ComboBoxPlaceholder()
      }
    };
  }

  static get observers() {
    return ['_dataProviderFilterChanged(filter, dataProvider)', '_dataProviderClearFilter(dataProvider, opened, value)', '_warnDataProviderValue(dataProvider, value)', '_ensureFirstPage(opened)'];
  }

  _dataProviderClearFilter(dataProvider, opened, value) {
    // Can't depend on filter in this obsever as we don't want
    // to clear the filter whenever it's set
    if (dataProvider && this.filter) {
      this.size = undefined;
      this._pendingRequests = {};
      this.filter = '';
      this.clearCache();
    }
  }

  ready() {
    super.ready();
    this.clearCache();
    this.$.overlay.addEventListener('index-requested', e => {
      const index = e.detail.index;

      if (index !== undefined) {
        const page = this._getPageForIndex(index);

        if (this._shouldLoadPage(page)) {
          this._loadPage(page);
        }
      }
    });
  }

  _dataProviderFilterChanged() {
    if (this.dataProvider && this.opened) {
      this.size = undefined;
      this._pendingRequests = {};
      this.clearCache();
    }
  }

  _ensureFirstPage(opened) {
    if (opened && this._shouldLoadPage(0)) {
      this._loadPage(0);
    }
  }

  _shouldLoadPage(page) {
    if (!this.filteredItems || this._forceNextRequest) {
      this._forceNextRequest = false;
      return true;
    }

    const loadedItem = this.filteredItems[page * this.pageSize];

    if (loadedItem !== undefined) {
      return loadedItem instanceof ComboBoxPlaceholder;
    } else {
      return this.size === undefined;
    }
  }

  _loadPage(page) {
    // make sure same page isn't requested multiple times.
    if (!this._pendingRequests[page] && this.dataProvider) {
      this.loading = true;
      const params = {
        page,
        pageSize: this.pageSize,
        filter: this.filter
      };

      const callback = (items, size) => {
        if (this._pendingRequests[page] === callback) {
          if (!this.filteredItems) {
            const filteredItems = [];
            filteredItems.splice(params.page * params.pageSize, items.length, ...items);
            this.filteredItems = filteredItems;
          } else {
            this.splice('filteredItems', params.page * params.pageSize, items.length, ...items);
          } // Update selectedItem from filteredItems if value is set


          if (this._isValidValue(this.value) && this._getItemValue(this.selectedItem) !== this.value) {
            this._selectItemForValue(this.value);
          }

          this.size = size;
          delete this._pendingRequests[page];

          if (Object.keys(this._pendingRequests).length === 0) {
            this.loading = false;
          }

          if (page === 0 && this.__repositionOverlayDebouncer && items.length > (this.__maxRenderedItems || 0)) {
            setTimeout(() => this.__repositionOverlayDebouncer.flush());
            this.__maxRenderedItems = items.length;
          }
        }
      };

      this._pendingRequests[page] = callback;
      this.dataProvider(params, callback);
    }
  }

  _getPageForIndex(index) {
    return Math.floor(index / this.pageSize);
  }
  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */


  clearCache() {
    if (!this.dataProvider) {
      return;
    }

    this._pendingRequests = {};
    const filteredItems = [];

    for (let i = 0; i < (this.size || 0); i++) {
      filteredItems.push(this.__placeHolder);
    }

    this.filteredItems = filteredItems;

    if (this.opened) {
      this._loadPage(0);
    } else {
      this._forceNextRequest = true;
    }
  }

  _sizeChanged(size = 0) {
    const filteredItems = (this.filteredItems || []).slice(0, size);

    for (let i = 0; i < size; i++) {
      filteredItems[i] = filteredItems[i] !== undefined ? filteredItems[i] : this.__placeHolder;
    }

    this.filteredItems = filteredItems;
  }

  _pageSizeChanged(pageSize, oldPageSize) {
    if (Math.floor(pageSize) !== pageSize || pageSize < 1) {
      this.pageSize = oldPageSize;
      throw new Error('`pageSize` value must be an integer > 0');
    }

    this.clearCache();
  }

  _dataProviderChanged(dataProvider, oldDataProvider) {
    this._ensureItemsOrDataProvider(() => {
      this.dataProvider = oldDataProvider;
    });
  }

  _ensureItemsOrDataProvider(restoreOldValueCallback) {
    if (this.items !== undefined && this.dataProvider !== undefined) {
      restoreOldValueCallback();
      throw new Error('Using `items` and `dataProvider` together is not supported');
    } else if (this.dataProvider && !this.filteredItems) {
      this.filteredItems = [];
    }
  }

  _warnDataProviderValue(dataProvider, value) {
    if (dataProvider && value !== '' && (this.selectedItem === undefined || this.selectedItem === null)) {
      const valueIndex = this._indexOfValue(value, this.filteredItems);

      if (valueIndex < 0 || !this._getItemLabel(this.filteredItems[valueIndex])) {
        /* eslint-disable no-console */
        console.warn('Warning: unable to determine the label for the provided `value`. ' + 'Nothing to display in the text field. This usually happens when ' + 'setting an initial `value` before any items are returned from ' + 'the `dataProvider` callback. Consider setting `selectedItem` ' + 'instead of `value`');
        /* eslint-enable no-console */
      }
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-combo-box>` is a combo box element combining a dropdown list with an
 * input field for filtering the list of items. If you want to replace the default
 * input field with a custom implementation, you should use the
 * [`<vaadin-combo-box-light>`](#/elements/vaadin-combo-box-light) element.
 *
 * Items in the dropdown list must be provided as a list of `String` values.
 * Defining the items is done using the `items` property, which can be assigned
 * with data-binding, using an attribute or directly with the JavaScript property.
 *
 * ```html
 * <vaadin-combo-box
 *     label="Fruit"
 *     items="[[data]]">
 * </vaadin-combo-box>
 * ```
 *
 * ```js
 * combobox.items = ['apple', 'orange', 'banana'];
 * ```
 *
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 * This element can be used within an `iron-form`.
 *
 * ### Item rendering
 *
 * `<vaadin-combo-box>` supports using custom renderer callback function for defining the
 * content of `<vaadin-combo-box-item>`.
 *
 * The renderer function provides `root`, `comboBox`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `comboBox`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-combo-box id="combo-box"></vaadin-combo-box>
 * ```
 * ```js
 * const comboBox = document.querySelector('#combo-box');
 * comboBox.items = [{'label': 'Hydrogen', 'value': 'H'}];
 * comboBox.renderer = function(root, comboBox, model) {
 *   root.innerHTML = model.index + ': ' +
 *                    model.item.label + ' ' +
 *                    '<b>' + model.item.value + '</b>';
 * };
 * ```
 *
 * Renderer is called on the opening of the combo-box and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Item Template
 *
 * Alternatively, the content of the `<vaadin-combo-box-item>` can be populated by using
 * custom item template provided in the light DOM:
 *
 * ```html
 * <vaadin-combo-box items='[{"label": "Hydrogen", "value": "H"}]'>
 *   <template>
 *     [[index]]: [[item.label]] <b>[[item.value]</b>
 *   </template>
 * </vaadin-combo-box>
 * ```
 *
 * The following properties are available for item template bindings:
 *
 * Property name | Type | Description
 * --------------|------|------------
 * `index`| Number | Index of the item in the `items` array
 * `item` | String or Object | The item reference
 * `selected` | Boolean | True when item is selected
 * `focused` | Boolean | True when item is focused
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-combo-box>` data through the
 * [`dataProvider`](#/elements/vaadin-combo-box#property-dataProvider) function property.
 * The `<vaadin-combo-box>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-combo-box#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Lazy Loading“ example on “Basics” page in the demos.
 *
 * __Note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * comboBox.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(
 *       response.employees, // requested page of items
 *       response.totalSize  // total number of items
 *     );
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-combo-box-overlay-max-height` | Property that determines the max height of overlay | `65vh`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `text-field` | The text field
 * `toggle-button` | The toggle button
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [`<vaadin-text-field>` documentation](https://vaadin.com/components/vaadin-text-field/html-api/elements/Vaadin.TextFieldElement)
 * for the text field parts.
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `opened` | Set when the combo box dropdown is open | :host
 * `disabled` | Set to a disabled combo box | :host
 * `readonly` | Set to a read only combo box | :host
 * `has-value` | Set when the element has a value | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `loading` | Set when new items are expected | :host
 *
 * In addition to `<vaadin-combo-box>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-combo-box-overlay>`
 * - `<vaadin-combo-box-item>`
 *
 * Note: the `theme` attribute value set on `<vaadin-combo-box>` is
 * propagated to the internal themable components listed above.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class ComboBoxElement extends ElementMixin(ControlStateMixin(ThemePropertyMixin(ThemableMixin(ComboBoxDataProviderMixin(ComboBoxMixin(polymerElement_js.PolymerElement)))))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`;
  }

  constructor() {
    super();
    /**
     * @property
     */

    this.theme;
  }

  static get is() {
    return 'vaadin-combo-box';
  }

  static get version() {
    return '5.0.9';
  }

  static get properties() {
    return {
      /**
       * The label for this element.
       */
      label: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this input.
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to prevent the user from entering invalid input.
       */
      preventInvalidInput: {
        type: Boolean
      },

      /**
       * A pattern to validate the `input` with.
       */
      pattern: {
        type: String
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: {
        type: String
      },
      autofocus: {
        type: Boolean
      },

      /**
       * A placeholder string in addition to the label.
       */
      placeholder: {
        type: String,
        value: ''
      },
      readonly: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ['_updateAriaExpanded(opened)'];
  }

  attributeChanged(name, type) {
    // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari && this.root) {
      Array.prototype.forEach.call(this.root.querySelectorAll('*'), el => {
        el.style['-webkit-backface-visibility'] = 'visible';
        el.style['-webkit-backface-visibility'] = '';
      });
    }
  }

  ready() {
    super.ready();
    this._nativeInput = this.inputElement.focusElement;
    this._toggleElement = this.$.toggleButton;
    this._clearElement = this.inputElement.shadowRoot.querySelector('[part="clear-button"]'); // Stop propagation of Esc in capturing phase so that
    // vaadin-text-field will not handle Esc as a shortcut
    // to clear the value.
    // We need to set this listener for "this.inputElement"
    // instead of just "this", otherwise keyboard navigation behaviour
    // breaks a bit on Safari and some related tests fail.

    this.inputElement.addEventListener('keydown', e => {
      if (this._isEventKey(e, 'esc')) {
        this._stopPropagation(e); // Trigger _onEscape method of vaadin-combo-box-mixin because
        // bubbling phase is not reached.


        this._onEscape(e);
      }
    }, true);

    this._nativeInput.setAttribute('role', 'combobox');

    this._nativeInput.setAttribute('aria-autocomplete', 'list');

    this._updateAriaExpanded();
  }

  connectedCallback() {
    super.connectedCallback();

    this._preventInputBlur();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._restoreInputBlur();
  }

  _getPositionTarget() {
    return this.$.input;
  }

  _updateAriaExpanded() {
    if (this._nativeInput) {
      this._nativeInput.setAttribute('aria-expanded', this.opened);

      this._toggleElement.setAttribute('aria-expanded', this.opened);
    }
  }

  get inputElement() {
    return this.$.input;
  }
  /**
   * Focusable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    // inputElement might not be defined on property changes before ready.
    return this.inputElement || this;
  }

}

customElements.define(ComboBoxElement.is, ComboBoxElement);

const $_documentContainer$j = htmlTag_js.html`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$j.content);

const $_documentContainer$k = htmlTag_js.html`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$k.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * A mixin for `nav` elements, facilitating navigation and selection of childNodes.
 *
 * @polymerMixin
 */

const ListMixin = superClass => class VaadinListMixin extends superClass {
  static get properties() {
    return {
      /**
       * Used for mixin detection because `instanceof` does not work with mixins.
       */
      _hasVaadinListMixin: {
        value: true
      },

      /**
       * The index of the item selected in the items array.
       * Note: Not updated when used in `multiple` selection mode.
       */
      selected: {
        type: Number,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * Define how items are disposed in the dom.
       * Possible values are: `horizontal|vertical`.
       * It also changes navigation keys from left/right to up/down.
       */
      orientation: {
        type: String,
        reflectToAttribute: true,
        value: ''
      },

      /**
       * The list of items from which a selection can be made.
       * It is populated from the elements passed to the light DOM,
       * and updated dynamically when adding or removing items.
       *
       * The item elements must implement `Vaadin.ItemMixin`.
       *
       * Note: unlike `<vaadin-combo-box>`, this property is read-only,
       * so if you want to provide items by iterating array of data,
       * you have to use `dom-repeat` and place it to the light DOM.
       */
      items: {
        type: Array,
        readOnly: true,
        notify: true
      },

      /**
       * The search buffer for the keyboard selection feature.
       */
      _searchBuf: {
        type: String,
        value: ''
      }
    };
  }

  static get observers() {
    return ['_enhanceItems(items, orientation, selected, disabled)'];
  }

  ready() {
    super.ready();
    this.addEventListener('keydown', e => this._onKeydown(e));
    this.addEventListener('click', e => this._onClick(e));
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._setItems(this._filterItems(Array.from(this.children)));
    });
  }

  _enhanceItems(items, orientation, selected, disabled) {
    if (!disabled) {
      if (items) {
        this.setAttribute('aria-orientation', orientation || 'vertical');
        this.items.forEach(item => {
          orientation ? item.setAttribute('orientation', orientation) : item.removeAttribute('orientation');
          item.updateStyles();
        });

        this._setFocusable(selected);

        const itemToSelect = items[selected];
        items.forEach(item => item.selected = item === itemToSelect);

        if (itemToSelect && !itemToSelect.disabled) {
          this._scrollToItem(selected);
        }
      }
    }
  }

  get focused() {
    return this.getRootNode().activeElement;
  }

  _filterItems(array) {
    return array.filter(e => e._hasVaadinItemMixin);
  }

  _onClick(event) {
    if (event.metaKey || event.shiftKey || event.ctrlKey || event.defaultPrevented) {
      return;
    }

    const item = this._filterItems(event.composedPath())[0];

    let idx;

    if (item && !item.disabled && (idx = this.items.indexOf(item)) >= 0) {
      this.selected = idx;
    }
  }

  _searchKey(currentIdx, key) {
    this._searchReset = debounce_js.Debouncer.debounce(this._searchReset, async_js.timeOut.after(500), () => this._searchBuf = '');
    this._searchBuf += key.toLowerCase();
    const increment = 1;

    const condition = item => !item.disabled && item.textContent.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().indexOf(this._searchBuf) === 0;

    if (!this.items.some(item => item.textContent.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().indexOf(this._searchBuf) === 0)) {
      this._searchBuf = key.toLowerCase();
    }

    const idx = this._searchBuf.length === 1 ? currentIdx + 1 : currentIdx;
    return this._getAvailableIndex(idx, increment, condition);
  }

  _onKeydown(event) {
    if (event.metaKey || event.ctrlKey) {
      return;
    } // IE names for arrows do not include the Arrow prefix


    const key = event.key.replace(/^Arrow/, '');
    const currentIdx = this.items.indexOf(this.focused);

    if (/[a-zA-Z0-9]/.test(key) && key.length === 1) {
      const idx = this._searchKey(currentIdx, key);

      if (idx >= 0) {
        this._focus(idx);
      }

      return;
    }

    const condition = item => !item.disabled;

    let idx, increment;

    if (this._vertical && key === 'Up' || !this._vertical && key === 'Left') {
      increment = -1;
      idx = currentIdx - 1;
    } else if (this._vertical && key === 'Down' || !this._vertical && key === 'Right') {
      increment = 1;
      idx = currentIdx + 1;
    } else if (key === 'Home') {
      increment = 1;
      idx = 0;
    } else if (key === 'End') {
      increment = -1;
      idx = this.items.length - 1;
    }

    idx = this._getAvailableIndex(idx, increment, condition);

    if (idx >= 0) {
      this._focus(idx);

      event.preventDefault();
    }
  }

  _getAvailableIndex(idx, increment, condition) {
    const totalItems = this.items.length;

    for (let i = 0; typeof idx == 'number' && i < totalItems; i++, idx += increment || 1) {
      if (idx < 0) {
        idx = totalItems - 1;
      } else if (idx >= totalItems) {
        idx = 0;
      }

      const item = this.items[idx];

      if (condition(item)) {
        return idx;
      }
    }

    return -1;
  }

  _setFocusable(idx) {
    idx = this._getAvailableIndex(idx, 1, item => !item.disabled);
    const item = this.items[idx] || this.items[0];
    this.items.forEach(e => e.tabIndex = e === item ? 0 : -1);
  }

  _focus(idx) {
    const item = this.items[idx];
    this.items.forEach(e => e.focused = e === item);

    this._setFocusable(idx);

    this._scrollToItem(idx);

    item.focus();
  }

  focus() {
    // In initialisation (e.g vaadin-select) observer might not been run yet.
    this._observer && this._observer.flush();
    const firstItem = this.querySelector('[tabindex="0"]') || (this.items ? this.items[0] : null);
    firstItem && firstItem.focus();
  }
  /* @protected */


  get _scrollerElement() {} // Returning scroller element of the component
  // Scroll the container to have the next item by the edge of the viewport


  _scrollToItem(idx) {
    const item = this.items[idx];

    if (!item) {
      return;
    }

    const props = this._vertical ? ['top', 'bottom'] : ['left', 'right'];

    const scrollerRect = this._scrollerElement.getBoundingClientRect();

    const nextItemRect = (this.items[idx + 1] || item).getBoundingClientRect();
    const prevItemRect = (this.items[idx - 1] || item).getBoundingClientRect();
    let scrollDistance = 0;

    if (nextItemRect[props[1]] >= scrollerRect[props[1]]) {
      scrollDistance = nextItemRect[props[1]] - scrollerRect[props[1]];
    } else if (prevItemRect[props[0]] <= scrollerRect[props[0]]) {
      scrollDistance = prevItemRect[props[0]] - scrollerRect[props[0]];
    }

    this._scroll(scrollDistance);
  }
  /* @protected */


  get _vertical() {
    return this.orientation !== 'horizontal';
  }

  _scroll(pixels) {
    this._scrollerElement['scroll' + (this._vertical ? 'Top' : 'Left')] += pixels;
  }
  /**
   * Fired when the selection is changed.
   * Not fired when used in `multiple` selection mode.
   *
   * @event selected-changed
   * @param {Object} detail
   * @param {Object} detail.value the index of the item selected in the items array.
   */


};

/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * A mixin for `nav` elements, facilitating multiple selection of childNodes.
 *
 * @polymerMixin
 * @mixes Vaadin.ListMixin
 */

const MultiSelectListMixin = superClass => class VaadinMultiSelectListMixin extends ListMixin(superClass) {
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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `<vaadin-list-box>` is a Web Component for creating menus.
 *
 * ```
 *   <vaadin-list-box selected="2">
 *     <vaadin-item>Item 1</vaadin-item>
 *     <vaadin-item>Item 2</vaadin-item>
 *     <vaadin-item>Item 3</vaadin-item>
 *     <vaadin-item>Item 4</vaadin-item>
 *   </vaadin-list-box>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|------------------------
 * `items`           | The items container
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.MultiSelectListMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class ListBoxElement extends ElementMixin(MultiSelectListMixin(ThemableMixin(polymerElement_js.PolymerElement))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`;
  }

  static get is() {
    return 'vaadin-list-box';
  }

  static get version() {
    return '1.2.0';
  }

  static get properties() {
    return {
      // We don't need to define this property since super default is vertical,
      // but we don't want it to be modified, or be shown in the API docs.

      /** @private */
      orientation: {
        readOnly: true
      }
    };
  }

  constructor() {
    super();
    /** @protected */

    this.focused;
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'list');
    setTimeout(this._checkImport.bind(this), 2000);
  }

  get _scrollerElement() {
    return this.shadowRoot.querySelector('[part="items"]');
  }

  _checkImport() {
    var item = this.querySelector('vaadin-item');

    if (item && !(item instanceof polymerElement_js.PolymerElement)) {
      console.warn(`Make sure you have imported the vaadin-item element.`);
    }
  }

}

customElements.define(ListBoxElement.is, ListBoxElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
gestures_js.register({
  name: 'vaadin-contextmenu',
  deps: ['touchstart', 'touchmove', 'touchend', 'contextmenu'],
  flow: {
    start: ['touchstart', 'contextmenu'],
    end: ['contextmenu']
  },
  emits: ['vaadin-contextmenu'],
  info: {
    sourceEvent: null,
    _ios: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  },
  reset: function () {
    this.info.sourceEvent = null;

    this._cancelTimer();

    this.info.touchJob = null;
    this.info.touchStartCoords = null;
  },
  _cancelTimer: function () {
    if (this._timerId) {
      clearTimeout(this._timerId);
      delete this._fired;
    }
  },
  touchstart: function (e) {
    this.info.sourceEvent = e;
    this.info.touchStartCoords = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }; // After timeout event is already retargeted to the parent element in case there is one.
    // So we are assigning the target synchronously on event dispatched.

    const t = e.composedPath()[0] || e.target;
    this._timerId = setTimeout(() => {
      const ct = e.changedTouches[0];

      if (!e.shiftKey) {
        if (this.info._ios) {
          this._fired = true;
          this.fire(t, ct.clientX, ct.clientY);
        } // needed to prevent any 'tap' gesture events from firing
        // which could potentially cancel/close the overlay.


        gestures_js.prevent('tap');
      }
    }, 500); // default setting for Android and iOS.
  },
  touchmove: function (e) {
    const moveThreshold = 15;
    const touchStartCoords = this.info.touchStartCoords;

    if (Math.abs(touchStartCoords.x - e.changedTouches[0].clientX) > moveThreshold || Math.abs(touchStartCoords.y - e.changedTouches[0].clientY) > moveThreshold) {
      this._cancelTimer();
    }
  },
  touchend: function (e) {
    if (this._fired) {
      e.preventDefault();
    }

    this._cancelTimer();
  },
  contextmenu: function (e) {
    if (!e.shiftKey) {
      this.info.sourceEvent = e;
      this.fire(e.target, e.clientX, e.clientY);
      gestures_js.prevent('tap');
    }
  },
  fire: function (target, x, y) {
    // NOTE(web-padawan): the code below is copied from `Polymer.Gestures._fire`,
    // which is not exported from `gestures.js` module for Polymer 3.
    const sourceEvent = this.info.sourceEvent;
    const ev = new Event('vaadin-contextmenu', {
      bubbles: true,
      cancelable: true,
      composed: true
    });
    ev.detail = {
      x,
      y,
      sourceEvent
    };
    target.dispatchEvent(ev); // forward `preventDefault` in a clean way

    if (ev.defaultPrevented && sourceEvent && sourceEvent.preventDefault) {
      sourceEvent.preventDefault();
    }
  }
});

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

class DeviceDetectorElement extends class extends polymerElement_js.PolymerElement {} {
  static get template() {
    return htmlTag_js.html`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-device-detector';
  }

  static get properties() {
    return {
      /**
       * `true`, when running in a phone.
       */
      phone: {
        type: Boolean,
        computed: '_phone(wide, touch)',
        notify: true
      },

      /**
       * `true`, when running in a touch device.
       * @default false
       */
      touch: {
        type: Boolean,
        notify: true,
        value: () => this._touch()
      },

      /**
       * `true`, when running in a tablet/desktop device.
       */
      wide: {
        type: Boolean,
        notify: true
      }
    };
  }

  static _touch() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (err) {
      return false;
    }
  }

  _phone(wide, touch) {
    return !wide && touch;
  }

}

customElements.define(DeviceDetectorElement.is, DeviceDetectorElement);

/**
 * The vaadin-context-menu-item element.
 *
 * @memberof Vaadin
 */

class ContextMenuItemElement extends ItemElement {
  static get is() {
    return 'vaadin-context-menu-item';
  }

}
/**
 * The vaadin-context-menu-list-box element.
 *
 * @memberof Vaadin
 */


class ContextMenuListBoxElement extends ListBoxElement {
  static get is() {
    return 'vaadin-context-menu-list-box';
  }

}

customElements.define(ContextMenuItemElement.is, ContextMenuItemElement);
customElements.define(ContextMenuListBoxElement.is, ContextMenuListBoxElement);
/**
 * @polymerMixin
 */

const ItemsMixin = superClass => class ItemsMixin extends superClass {
  static get properties() {
    return {
      /**
       * @typedef MenuItem
       * @type {object}
       * @property {string} text - Text to be set as the menu item component's textContent
       * @property {union: string | object} component - The component to represent the item.
       * Either a tagName or an element instance. Defaults to "vaadin-context-menu-item".
       * @property {boolean} disabled - If true, the item is disabled and cannot be selected
       * @property {boolean} checked - If true, the item shows a checkmark next to it
       * @property {MenuItem[]} children - Array of child menu items
       */

      /**
       * Defines a (hierarchical) menu structure for the component.
       * If a menu item has a non-empty `children` set, a sub-menu with the child items is opened
       * next to the parent menu on mouseover, tap or a right arrow keypress.
       *
       * The items API can't be used together with a renderer or a template!
       *
       * #### Example
       *
       * ```javascript
       * contextMenu.items = [
       *   {text: 'Menu Item 1', children:
       *     [
       *       {text: 'Menu Item 1-1', checked: true},
       *       {text: 'Menu Item 1-2'}
       *     ]
       *   },
       *   {component: 'hr'},
       *   {text: 'Menu Item 2', children:
       *     [
       *       {text: 'Menu Item 2-1'},
       *       {text: 'Menu Item 2-2', disabled: true}
       *     ]
       *   },
       *   {text: 'Menu Item 3', disabled: true}
       * ];
       * ```
       *
       * @type {MenuItem[]}
       *
       *
       * ### Styling
       *
       * The `<vaadin-context-menu-item>` sub-menu elements have the following additional state attributes on top of
       * the built-in `<vaadin-item>` state attributes (see `<vaadin-item>` documentation for full listing).
       *
       * Part name | Attribute | Description
       * ----------------|----------------|----------------
       * `:host` | expanded | Expanded parent item
       */
      items: Array
    };
  }

  ready() {
    super.ready(); // Overlay's outside click listener doesn't work with modeless
    // overlays (submenus) so we need additional logic for it

    this.__itemsOutsideClickListener = e => {
      if (!e.composedPath().filter(el => el.localName === 'vaadin-context-menu-overlay')[0]) {
        this.dispatchEvent(new CustomEvent('items-outside-click'));
      }
    };

    this.addEventListener('items-outside-click', e => this.items && this.close());
  }

  connectedCallback() {
    super.connectedCallback(); // Firefox leaks click to document on contextmenu even if prevented
    // https://bugzilla.mozilla.org/show_bug.cgi?id=990614

    document.documentElement.addEventListener('click', this.__itemsOutsideClickListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.documentElement.removeEventListener('click', this.__itemsOutsideClickListener);
  }

  __forwardFocus() {
    const overlay = this.$.overlay;
    const child = overlay.getFirstChild(); // if parent item is not focused, do not focus submenu

    if (overlay.parentOverlay) {
      const parent = overlay.parentOverlay.querySelector('[expanded]');

      if (parent && parent.hasAttribute('focused') && child) {
        child.focus();
      } else {
        overlay.$.overlay.focus();
      }
    } else if (child) {
      child.focus();
    }
  }

  __openSubMenu(subMenu, itemElement) {
    subMenu.items = itemElement._item.children;
    subMenu.listenOn = itemElement;
    const itemRect = itemElement.getBoundingClientRect();
    const content = subMenu.$.overlay.$.content;
    const style = getComputedStyle(content);
    const parent = this.$.overlay;
    const y = parent.hasAttribute('bottom-aligned') ? itemRect.bottom + parseFloat(style.paddingBottom) : itemRect.top - parseFloat(style.paddingTop); // Store the reference to align based on parent overlay coordinates

    subMenu.$.overlay._setParentOverlay(parent); // Set theme attribute from parent element


    if (parent.theme) {
      subMenu.setAttribute('theme', parent.theme);
    } else {
      subMenu.removeAttribute('theme');
    }

    let x;
    content.style.minWidth = '';

    if (document.documentElement.clientWidth - itemRect.right > itemRect.width) {
      // There's room on the right side
      x = itemRect.right;
    } else {
      // Open on the left side
      x = itemRect.left - itemRect.width; // Make sure there's no gaps between the menus

      content.style.minWidth = parent.$.content.clientWidth + 'px';
    }

    x = Math.max(x, 0);
    itemElement.dispatchEvent(new CustomEvent('opensubmenu', {
      detail: {
        x,
        y,
        children: itemElement._item.children
      }
    }));
  }

  __itemsRenderer(root, menu, context) {
    this.__initMenu(root, menu);

    const subMenu = root.querySelector(this.constructor.is);
    subMenu.closeOn = menu.closeOn;
    const listBox = root.querySelector('vaadin-context-menu-list-box');
    listBox.innerHTML = '';
    const items = Array.from(context.detail.children || menu.items);
    items.forEach(item => {
      let component;

      if (item.component instanceof HTMLElement) {
        component = item.component;
      } else {
        component = document.createElement(item.component || 'vaadin-context-menu-item');
      }

      if (component instanceof ItemElement) {
        component.setAttribute('role', 'menuitem');
        component.classList.add('vaadin-menu-item');
      } else if (component.localName === 'hr') {
        component.setAttribute('role', 'separator');
      }

      this.theme && component.setAttribute('theme', this.theme);
      component._item = item;

      if (item.text) {
        component.textContent = item.text;
      }

      this.__toggleMenuComponentAttribute(component, 'menu-item-checked', item.checked);

      this.__toggleMenuComponentAttribute(component, 'disabled', item.disabled);

      component.setAttribute('aria-haspopup', 'false');
      component.classList.remove('vaadin-context-menu-parent-item');

      if (item.children && item.children.length) {
        component.classList.add('vaadin-context-menu-parent-item');
        component.setAttribute('aria-haspopup', 'true');
        component.setAttribute('aria-expanded', 'false');
        component.removeAttribute('expanded');
      }

      listBox.appendChild(component);
    });
  }

  __toggleMenuComponentAttribute(component, attribute, on) {
    if (on) {
      component.setAttribute(attribute, '');
      component['__has-' + attribute] = true;
    } else if (component['__has-' + attribute]) {
      component.removeAttribute(attribute);
      component['__has-' + attribute] = false;
    }
  }

  __initMenu(root, menu) {
    if (!root.firstElementChild) {
      const is = this.constructor.is;
      root.innerHTML = `
        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>
        <${is} hidden></${is}>
      `;
      flush_js.flush();
      const listBox = root.querySelector('vaadin-context-menu-list-box');
      this.theme && listBox.setAttribute('theme', this.theme);
      listBox.classList.add('vaadin-menu-list-box');
      requestAnimationFrame(() => listBox.setAttribute('role', 'menu'));
      const subMenu = root.querySelector(is);
      subMenu.$.overlay.modeless = true;
      subMenu.openOn = 'opensubmenu';
      menu.addEventListener('opened-changed', e => !e.detail.value && subMenu.close());
      subMenu.addEventListener('opened-changed', e => {
        if (!e.detail.value) {
          const expandedItem = listBox.querySelector('[expanded]');

          if (expandedItem) {
            expandedItem.setAttribute('aria-expanded', 'false');
            expandedItem.removeAttribute('expanded');
          }
        }
      });
      listBox.addEventListener('selected-changed', e => {
        if (typeof e.detail.value === 'number') {
          const item = e.target.items[e.detail.value]._item;

          if (!item.children) {
            const detail = {
              value: item
            };
            menu.dispatchEvent(new CustomEvent('item-selected', {
              detail
            }));
          }

          listBox.selected = null;
        }
      });
      subMenu.addEventListener('item-selected', e => {
        menu.dispatchEvent(new CustomEvent('item-selected', {
          detail: e.detail
        }));
      });
      subMenu.addEventListener('close-all-menus', () => {
        menu.dispatchEvent(new CustomEvent('close-all-menus'));
      });
      menu.addEventListener('close-all-menus', menu.close);
      menu.addEventListener('item-selected', menu.close);
      menu.$.overlay.$.backdrop.addEventListener('click', () => menu.close());
      menu.$.overlay.addEventListener('keydown', e => {
        if (e.keyCode === 37) {
          menu.close();
          menu.listenOn.focus();
        } else if (e.keyCode === 27) {
          menu.dispatchEvent(new CustomEvent('close-all-menus'));
        }
      });
      requestAnimationFrame(() => this.__openListenerActive = true);

      const openSubMenu = (e, itemElement = e.composedPath().filter(e => e.localName === 'vaadin-context-menu-item')[0]) => {
        // Delay enabling the mouseover listener to avoid it from triggering on parent menu open
        if (!this.__openListenerActive) {
          return;
        } // Don't open sub-menus while the menu is still opening


        if (menu.$.overlay.hasAttribute('opening')) {
          requestAnimationFrame(() => openSubMenu(e, itemElement));
          return;
        }

        if (itemElement) {
          if (subMenu.items !== itemElement._item.children) {
            subMenu.close();
          }

          if (!menu.opened) {
            return;
          }

          if (itemElement._item.children && itemElement._item.children.length) {
            itemElement.setAttribute('aria-expanded', 'true');
            itemElement.setAttribute('expanded', '');

            this.__openSubMenu(subMenu, itemElement);
          } else {
            subMenu.listenOn.focus();
          }
        }
      };

      menu.$.overlay.addEventListener('mouseover', openSubMenu);
      menu.$.overlay.addEventListener('keydown', e => (e.keyCode === 39 || e.keyCode === 13 || e.keyCode === 32) && openSubMenu(e));
    } else {
      const listBox = root.querySelector('vaadin-context-menu-list-box');

      if (this.theme) {
        listBox.setAttribute('theme', this.theme);
      } else {
        listBox.removeAttribute('theme');
      }
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const $_documentContainer$l = document.createElement('template');
$_documentContainer$l.innerHTML = `<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part="overlay"] {
        background-color: #fff;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$l.content);
/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-context-menu-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

class ContextMenuOverlayElement extends OverlayElement {
  static get is() {
    return 'vaadin-context-menu-overlay';
  }

  static get properties() {
    return {
      instanceProps: {
        type: Object,
        value: () => {
          return {
            detail: true,
            target: true
          };
        }
      },

      /**
       * @protected
       */
      parentOverlay: {
        type: Object,
        readOnly: true
      }
    };
  }

  static get observers() {
    return ['_themeChanged(theme)'];
  }

  ready() {
    super.ready();
    this.addEventListener('keydown', e => {
      if (!e.defaultPrevented && e.composedPath()[0] === this.$.overlay && [38, 40].indexOf(e.keyCode) > -1) {
        const child = this.getFirstChild();

        if (child && Array.isArray(child.items) && child.items.length) {
          e.preventDefault();

          if (e.keyCode === 38) {
            child.items[child.items.length - 1].focus();
          } else {
            child.focus();
          }
        }
      }
    });
  }

  getFirstChild() {
    return this.content.querySelector(':not(style):not(slot)');
  }

  _themeChanged(theme) {
    this.close();
  }

  getBoundaries() {
    // Measure actual overlay and content sizes
    const overlayRect = this.getBoundingClientRect();
    const contentRect = this.$.overlay.getBoundingClientRect(); // Maximum x and y values are imposed by content size and overlay limits.

    let yMax = overlayRect.bottom - contentRect.height; // Adjust constraints to ensure bottom-aligned applies to sub-menu.

    const parent = this.parentOverlay;

    if (parent && parent.hasAttribute('bottom-aligned')) {
      const parentStyle = getComputedStyle(parent);
      yMax = yMax - parseFloat(parentStyle.bottom) - parseFloat(parentStyle.height);
    }

    return {
      xMax: overlayRect.right - contentRect.width,
      yMax,
      left: overlayRect.left,
      top: overlayRect.top,
      width: contentRect.width
    };
  }

}

customElements.define(ContextMenuOverlayElement.is, ContextMenuOverlayElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 *
 * `<vaadin-context-menu>` is a Web Component for creating context menus. The content of the
 * menu can be populated in three ways: imperatively by using the items API or a renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Items
 *
 * Items is a higher level convenience API for defining a (hierarchical) menu structure for the component.
 * If a menu item has a non-empty `children` set, a sub-menu with the child items is opened
 * next to the parent menu on mouseover, tap or a right arrow keypress.
 *
 * When an item is selected, `<vaadin-context-menu>` dispatches an "item-selected" event
 * with the selected item as `event.detail.value` property.
 *
 * ```javascript
 * contextMenu.items = [
 *   {text: 'Menu Item 1', children:
 *     [
 *       {text: 'Menu Item 1-1', checked: true},
 *       {text: 'Menu Item 1-2'}
 *     ]
 *   },
 *   {component: 'hr'},
 *   {text: 'Menu Item 2', children:
 *     [
 *       {text: 'Menu Item 2-1'},
 *       {text: 'Menu Item 2-2', disabled: true}
 *     ]
 *   },
 *   {text: 'Menu Item 3', disabled: true}
 * ];
 *
 * contextMenu.addEventListener('item-selected', e => {
 *   const item = e.detail.value;
 *   console.log(`${item.text} selected`);
 * });
 * ```
 *
 * **NOTE:** when the `items` array is defined, the renderer or a template cannot be used.
 *
 * ### Rendering
 *
 * The renderer function provides `root`, `contextMenu`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `contextMenu`. Before generating
 * new content, the renderer function should check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-context-menu id="contextMenu">
 *  <p>This paragraph has a context menu.</p>
 * </vaadin-context-menu>
 * ```
 * ```js
 * const contextMenu = document.querySelector('#contextMenu');
 * contextMenu.renderer = (root, contextMenu, context) => {
 *   let listBox = root.firstElementChild;
 *   if (!listBox) {
 *     listBox = document.createElement('vaadin-list-box');
 *     root.appendChild(listBox);
 *   }
 *
 *   let item = listBox.querySelector('vaadin-item');
 *   if (!item) {
 *     item = document.createElement('vaadin-item');
 *     listBox.appendChild(item);
 *   }
 *   item.textContent = 'Content of the selector: ' + context.target.textContent;
 * };
 * ```
 *
 * You can access the menu context inside the renderer using
 * `context.target` and `context.detail`.
 *
 * Renderer is called on the opening of the context-menu and each time the related context is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the `renderer` function is defined, the template content
 * is not in use.
 *
 * ### Polymer Templates
 *
 * Alternatively to using the `renderer`, you can populate
 * the menu content using Polymer's Templates:
 *
 * ```html
 * <vaadin-context-menu>
 *   <template>
 *     <vaadin-list-box>
 *       <vaadin-item>First menu item</vaadin-item>
 *       <vaadin-item>Second menu item</vaadin-item>
 *     </vaadin-list-box>
 *   </template>
 * </vaadin-context-menu>
 * ```
 *
 * ### “vaadin-contextmenu” Gesture Event
 *
 * `vaadin-contextmenu` is a gesture event (a custom event),
 * which is dispatched after either `contextmenu` and long touch events.
 * This enables support for both mouse and touch environments in a uniform way.
 *
 * `<vaadin-context-menu>` opens the menu overlay on the `vaadin-contextmenu`
 * event by default.
 *
 * ### Menu Listener
 *
 * By default, the `<vaadin-context-menu>` element listens for the menu opening
 * event on itself. In order to have a context menu on your content, wrap
 * your content with the `<vaadin-context-menu>` element, and add a template
 * element with a menu. Example:
 *
 * ```html
 * <vaadin-context-menu>
 *   <template>
 *     <vaadin-list-box>
 *       <vaadin-item>First menu item</vaadin-item>
 *       <vaadin-item>Second menu item</vaadin-item>
 *     </vaadin-list-box>
 *   </template>
 *
 *   <p>This paragraph has the context menu provided in the above template.</p>
 *   <p>Another paragraph with the context menu.</p>
 * </vaadin-context-menu>
 * ```
 *
 * In case if you do not want to wrap the page content, you can listen for
 * events on an element outside the `<vaadin-context-menu>` by setting the
 * `listenOn` property:
 *
 * ```html
 * <vaadin-context-menu id="customListener">
 *   <template>
 *     <vaadin-list-box>
 *       ...
 *     </vaadin-list-box>
 *   </template>
 * </vaadin-context-menu>
 *
 * <div id="menuListener">The element that listens for the context menu.</div>
 * ```
 * ```javascript
 *   const contextMenu = document.querySelector('vaadin-context-menu#customListener');
 *   contextMenu.listenOn = document.querySelector('#menuListener');
 * ```
 *
 * ### Filtering Menu Targets
 *
 * By default, the listener element and all its descendants open the context
 * menu. You can filter the menu targets to a smaller set of elements inside
 * the listener element by setting the `selector` property.
 *
 * In the following example, only the elements matching `.has-menu` will open the context menu:
 *
 * ```html
 * <vaadin-context-menu selector=".has-menu">
 *   <template>
 *     <vaadin-list-box>
 *       ...
 *     </vaadin-list-box>
 *   </template>
 *
 *   <p class="has-menu">This paragraph opens the context menu</p>
 *   <p>This paragraph does not open the context menu</p>
 * </vaadin-context-menu>
 * ```
 *
 * ### Menu Context
 *
 * You can bind to the following properties in the menu template:
 *
 * - `target` is the menu opening event target, which is the element that
 * the user has called the context menu for
 * - `detail` is the menu opening event detail
 *
 * In the following example, the menu item text is composed with the contents
 * of the element that opened the menu:
 *
 * ```html
 * <vaadin-context-menu selector="li">
 *   <template>
 *     <vaadin-list-box>
 *       <vaadin-item>The menu target: [[target.textContent]]</vaadin-item>
 *     </vaadin-list-box>
 *   </template>
 *
 *   <ul>
 *     <li>Foo</li>
 *     <li>Bar</li>
 *     <li>Baz</li>
 *   </ul>
 * </vaadin-context-menu>
 * ```
 *
 * ### Styling
 *
 * `<vaadin-context-menu>` uses `<vaadin-context-menu-overlay>` internal
 * themable component as the actual visible context menu overlay. See
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-context-menu-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * Note: the `theme` attribute value set on `<vaadin-context-menu>` is
 * propagated to the internal `<vaadin-context-menu-overlay>` component.
 * In case of using nested menu items, the `theme` attribute is also propagated
 * to internal `vaadin-context-menu-list-box` and `vaadin-context-menu-item`'s.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.ContextMenu.ItemsMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class ContextMenuElement extends ElementMixin(ThemePropertyMixin(ItemsMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement)))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`;
  }

  static get is() {
    return 'vaadin-context-menu';
  }

  static get version() {
    return '4.3.13';
  }

  static get properties() {
    return {
      /**
       * CSS selector that can be used to target any child element
       * of the context menu to listen for `openOn` events.
       */
      selector: {
        type: String
      },

      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true
      },

      /**
       * Event name to listen for opening the context menu.
       */
      openOn: {
        type: String,
        value: 'vaadin-contextmenu'
      },

      /**
       * The target element that's listened to for context menu opening events.
       * By default the vaadin-context-menu listens to the target's `vaadin-contextmenu`
       * events.
       * @type {HTMLElement}
       * @default self
       */
      listenOn: {
        type: Object,
        value: function () {
          return this;
        }
      },

      /**
       * Event name to listen for closing the context menu.
       */
      closeOn: {
        type: String,
        value: 'click',
        observer: '_closeOnChanged'
      },

      /**
       * Custom function for rendering the content of the menu overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `contextMenu` The reference to the `<vaadin-context-menu>` element.
       * - `context` The object with the menu context, contains:
       *   - `context.target`  the target of the menu opening event,
       *   - `context.detail` the menu opening event detail.
       */
      renderer: {
        type: Function
      },
      _context: Object,
      _boundClose: Object,
      _boundOpen: Object,
      _contentTemplate: Object,
      _oldTemplate: Object,
      _oldRenderer: Object,
      _touch: Boolean
    };
  }

  static get observers() {
    return ['_openedChanged(opened)', '_contextChanged(_context, _instance)', '_targetOrOpenOnChanged(listenOn, openOn)', '_templateOrRendererChanged(_contentTemplate, renderer, _context, items)'];
  }

  constructor() {
    super();
    this._boundOpen = this.open.bind(this);
    this._boundClose = this.close.bind(this);
    this._boundOnGlobalContextMenu = this._onGlobalContextMenu.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.__boundOnScroll = this.__onScroll.bind(this);
    window.addEventListener('scroll', this.__boundOnScroll, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.__boundOnScroll, true);
  }

  ready() {
    super.ready();
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }

  _setTemplateFromNodes(nodes) {
    this._contentTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._contentTemplate;
  } // Runs before overlay is fully rendered


  _onOverlayOpened(e) {
    this._setOpened(e.detail.value);
  } // Runs after overlay is fully rendered


  _onVaadinOverlayOpen(e) {
    this.__alignOverlayPosition();

    this.$.overlay.style.opacity = '';

    this.__forwardFocus();
  }

  _targetOrOpenOnChanged(listenOn, openOn) {
    if (this._oldListenOn && this._oldOpenOn) {
      this._unlisten(this._oldListenOn, this._oldOpenOn, this._boundOpen);

      this._oldListenOn.style.webkitTouchCallout = '';
      this._oldListenOn.style.webkitUserSelect = '';
      this._oldListenOn = null;
      this._oldOpenOn = null;
    }

    if (listenOn && openOn) {
      this._listen(listenOn, openOn, this._boundOpen); // note: these styles don't seem to work in Firefox on iOS.


      listenOn.style.webkitTouchCallout = 'none';
      listenOn.style.webkitUserSelect = 'none';
      this._oldListenOn = listenOn;
      this._oldOpenOn = openOn;
    }
  }

  _closeOnChanged(closeOn, oldCloseOn) {
    // Listen on this.$.overlay.root to workaround issue on
    //  ShadyDOM polyfill: https://github.com/webcomponents/shadydom/issues/159
    // Outside click event from overlay
    const evtOverlay = 'vaadin-overlay-outside-click';

    if (oldCloseOn) {
      this._unlisten(this.$.overlay, oldCloseOn, this._boundClose);

      this._unlisten(this.$.overlay.root, oldCloseOn, this._boundClose);
    }

    if (closeOn) {
      this._listen(this.$.overlay, closeOn, this._boundClose);

      this._listen(this.$.overlay.root, closeOn, this._boundClose);

      this._unlisten(this.$.overlay, evtOverlay, this._preventDefault);
    } else {
      this._listen(this.$.overlay, evtOverlay, this._preventDefault);
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _openedChanged(opened) {
    if (opened) {
      if (!this._instance) {
        this.$.overlay.template = this.querySelector('template');
        this._instance = this.$.overlay._instance;
      }

      document.documentElement.addEventListener('contextmenu', this._boundOnGlobalContextMenu, true);
    } else {
      document.documentElement.removeEventListener('contextmenu', this._boundOnGlobalContextMenu, true);
    } // Has to be set after instance has been created


    this.$.overlay.opened = opened;
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    this.$.overlay.render();
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._contentTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }

  _templateOrRendererChanged(template, renderer, context, items) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for context-menu content');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;

    if (items) {
      if (template || renderer) {
        throw new Error('The items API cannot be used together with a template/renderer');
      }

      if (this.closeOn === 'click') {
        this.closeOn = '';
      }

      renderer = this.__itemsRenderer;
    }

    if (renderer && context) {
      this.$.overlay.setProperties({
        owner: this,
        renderer: renderer
      });
    }
  }

  _contextChanged(context, instance) {
    if (context === undefined || instance === undefined) {
      return;
    }

    instance.detail = context.detail;
    instance.target = context.target;
  }
  /**
   * Closes the overlay.
   */


  close() {
    this._setOpened(false);
  }

  _contextTarget(e) {
    if (this.selector) {
      const targets = this.listenOn.querySelectorAll(this.selector);
      return Array.prototype.filter.call(targets, el => {
        return e.composedPath().indexOf(el) > -1;
      })[0];
    } else {
      return e.target;
    }
  }
  /**
   * Opens the overlay.
   * @param {Event} e used as the context for the menu. Overlay coordinates are taken from this event.
   */


  open(e) {
    if (e && !this.opened) {
      this._context = {
        detail: e.detail,
        target: this._contextTarget(e)
      };

      if (this._context.target) {
        this._preventDefault(e);

        e.stopPropagation(); // Used in alignment which is delayed until overlay is rendered

        this.__x = this._getEventCoordinate(e, 'x');
        this.__pageXOffset = window.pageXOffset;
        this.__y = this._getEventCoordinate(e, 'y');
        this.__pageYOffset = window.pageYOffset;
        this.$.overlay.style.opacity = '0';

        this._setOpened(true);
      }
    }
  }

  __onScroll() {
    if (!this.opened) {
      return;
    }

    const yDiff = window.pageYOffset - this.__pageYOffset;
    const xDiff = window.pageXOffset - this.__pageXOffset;

    this.__adjustPosition('left', -xDiff);

    this.__adjustPosition('right', xDiff);

    this.__adjustPosition('top', -yDiff);

    this.__adjustPosition('bottom', yDiff);

    this.__pageYOffset += yDiff;
    this.__pageXOffset += xDiff;
  }

  __adjustPosition(coord, diff) {
    const overlay = this.$.overlay;
    const style = overlay.style;
    style[coord] = (parseInt(style[coord]) || 0) + diff + 'px';
  }

  __alignOverlayPosition() {
    const overlay = this.$.overlay;
    const style = overlay.style; // Reset all properties before measuring

    ['top', 'right', 'bottom', 'left'].forEach(prop => style.removeProperty(prop));
    ['right-aligned', 'bottom-aligned'].forEach(attr => overlay.removeAttribute(attr)); // Maximum x and y values are imposed by content size and overlay limits.

    const {
      xMax,
      yMax,
      left,
      top,
      width
    } = overlay.getBoundaries(); // Reuse saved x and y event values, in order to this method be used async
    // in the `vaadin-overlay-change` which guarantees that overlay is ready

    const x = this.__x || left;
    const y = this.__y || top; // Select one overlay corner and move to the event x/y position.
    // Then set styling attrs for flex-aligning the content appropriately.

    const wdthVport = document.documentElement.clientWidth;
    const hghtVport = document.documentElement.clientHeight; // Align to the parent menu overlay, if any.

    const parent = overlay.parentOverlay;
    let alignedToParent = false;

    if (parent) {
      const parentContentRect = parent.$.overlay.getBoundingClientRect();

      if (parent.hasAttribute('right-aligned')) {
        const parentStyle = getComputedStyle(parent);

        const getPadding = (el, direction) => {
          return parseFloat(getComputedStyle(el.$.content)['padding' + direction]);
        };

        const right = parseFloat(parentStyle.right) + parentContentRect.width;
        const padding = getPadding(parent, 'Left') + getPadding(overlay, 'Right'); // Preserve right-aligned, if possible.

        if (wdthVport - (right - padding) > width) {
          overlay.setAttribute('right-aligned', '');
          style.right = right - padding + 'px';
          alignedToParent = true;
        }
      }
    }

    if (!alignedToParent) {
      if (x < wdthVport / 2 || x < xMax) {
        style.left = x + 'px';
      } else {
        style.right = Math.max(0, wdthVport - x) + 'px';
        overlay.setAttribute('right-aligned', '');
      }
    }

    if (y < hghtVport / 2 || y < yMax) {
      style.top = y + 'px';
    } else {
      style.bottom = Math.max(0, hghtVport - y) + 'px';
      overlay.setAttribute('bottom-aligned', '');
    }
  }

  _getEventCoordinate(event, coord) {
    if (event.detail instanceof Object) {
      if (event.detail[coord]) {
        // Polymer gesture events, get coordinate from detail
        return event.detail[coord];
      } else if (event.detail.sourceEvent) {
        // Unwrap detailed event
        return this._getEventCoordinate(event.detail.sourceEvent, coord);
      }
    } else {
      const prop = 'client' + coord.toUpperCase();
      const position = event.changedTouches ? event.changedTouches[0][prop] : event[prop];

      if (position === 0) {
        // Native keyboard event
        const rect = event.target.getBoundingClientRect();
        return coord === 'x' ? rect.left : rect.top + rect.height;
      } else {
        // Native mouse or touch event
        return position;
      }
    }
  }

  _listen(node, evType, handler) {
    if (gestures_js.gestures[evType]) {
      gestures_js.addListener(node, evType, handler);
    } else {
      node.addEventListener(evType, handler);
    }
  }

  _unlisten(node, evType, handler) {
    if (gestures_js.gestures[evType]) {
      gestures_js.removeListener(node, evType, handler);
    } else {
      node.removeEventListener(evType, handler);
    }
  }

  _onGlobalContextMenu(e) {
    if (!e.shiftKey) {
      e.preventDefault();
      this.close();
    }
  }
  /**
   * Fired when an item is selected when the context menu is populated using the `items` API.
   *
   * @event item-selected
   * @param {Object} detail
   * @param {Object} detail.value the selected menu item
   */


}

customElements.define(ContextMenuElement.is, ContextMenuElement);

const $_documentContainer$m = htmlTag_js.html`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$m.content);

const $_documentContainer$n = htmlTag_js.html`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$n.content);

const $_documentContainer$o = htmlTag_js.html`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;
document.head.appendChild($_documentContainer$o.content);

const $_documentContainer$p = htmlTag_js.html`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$p.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayElement extends disableUpgradeMixin_js.DisableUpgradeMixin(OverlayElement) {
  static get is() {
    return 'vaadin-date-picker-overlay';
  }

}

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DatePickerHelper = class VaadinDatePickerHelper {
  /**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */
  static _getISOWeekNumber(date) {
    // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
    var dayOfWeek = date.getDay(); // 0 == sunday
    // ISO 8601 use weeks that start on monday so we use
    // mon=1,tue=2,...sun=7;

    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    } // Find nearest thursday (defines the week in ISO 8601). The week number
    // for the nearest thursday is the same as for the target date.


    var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

    var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
    var firstOfJanuary = new Date(0, 0);
    firstOfJanuary.setFullYear(nearestThursday.getFullYear());
    var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
    // when the given date is inside daylight saving time period.

    var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
    return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
  }
  /**
   * Check if two dates are equal.
   *
   * @param {Date} date1
   * @param {Date} date2
   * @return {Boolean} True if the given date objects refer to the same date
   */


  static _dateEquals(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  /**
   * Check if the given date is in the range of allowed dates.
   *
   * @param {Date} date The date to check
   * @param {Date} min Range start
   * @param {Date} max Range end
   * @return {Boolean} True if the date is in the range
   */


  static _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }
  /**
   * Get closest date from array of dates.
   *
   * @param {Date} date The date to compare dates with
   * @param {Array} dates Array of date objects
   * @return {Date} Closest date
   */


  static _getClosestDate(date, dates) {
    return dates.filter(date => date !== undefined).reduce((closestDate, candidate) => {
      if (!candidate) {
        return closestDate;
      }

      if (!closestDate) {
        return candidate;
      }

      var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
      var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
      return candidateDiff < closestDateDiff ? candidate : closestDate;
    });
  }
  /**
   * Extracts the basic component parts of a date (day, month and year)
   * to the expected format.
   */


  static _extractDateParts(date) {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @memberof Vaadin
 * @private
 */

class MonthCalendarElement extends ThemableMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement)) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-month-calendar';
  }

  static get properties() {
    return {
      /**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */
      month: {
        type: Date,
        value: new Date()
      },

      /**
       * A `Date` object for the currently selected date.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * A `Date` object for the currently focused date.
       */
      focusedDate: Date,
      showWeekNumbers: {
        type: Boolean,
        value: false
      },
      i18n: {
        type: Object
      },

      /**
       * Flag stating whether taps on the component should be ignored.
       */
      ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: {
        type: Date,
        value: null
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: {
        type: Date,
        value: null
      },
      _days: {
        type: Array,
        computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
      },
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        computed: '_isDisabled(month, minDate, maxDate)'
      }
    };
  }

  static get observers() {
    return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
  }

  _dateEquals(date1, date2) {
    return DatePickerHelper._dateEquals(date1, date2);
  }

  _dateAllowed(date, min, max) {
    return DatePickerHelper._dateAllowed(date, min, max);
  }
  /* Returns true if all the dates in the month are out of the allowed range */


  _isDisabled(month, minDate, maxDate) {
    // First day of the month
    var firstDate = new Date(0, 0);
    firstDate.setFullYear(month.getFullYear());
    firstDate.setMonth(month.getMonth());
    firstDate.setDate(1); // Last day of the month

    var lastDate = new Date(0, 0);
    lastDate.setFullYear(month.getFullYear());
    lastDate.setMonth(month.getMonth() + 1);
    lastDate.setDate(0);

    if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
      return false;
    }

    return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
  }

  _getTitle(month, monthNames) {
    if (month === undefined || monthNames === undefined) {
      return;
    }

    return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
  }

  _onMonthGridTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);
  }

  _dateAdd(date, delta) {
    date.setDate(date.getDate() + delta);
  }

  _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
    if (weekDayNames === undefined || firstDayOfWeek === undefined) {
      return;
    }

    return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
  }

  _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
    if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
      return;
    }

    weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
    weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
    weekDayNames = weekDayNames.map((day, index) => {
      return {
        weekDay: day,
        weekDayShort: weekDayNamesShort[index]
      };
    });
    return weekDayNames;
  }

  _getDate(date) {
    return date ? date.getDate() : '';
  }

  _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
    if (showWeekNumbers && firstDayOfWeek === 1) {
      this.setAttribute('week-numbers', '');
    } else {
      this.removeAttribute('week-numbers');
    }
  }

  _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
    // Currently only supported for locales that start the week on Monday.
    return showWeekNumbers && firstDayOfWeek === 1;
  }

  _isToday(date) {
    return this._dateEquals(new Date(), date);
  }

  _getDays(month, firstDayOfWeek) {
    if (month === undefined || firstDayOfWeek === undefined) {
      return;
    } // First day of the month (at midnight).


    var date = new Date(0, 0);
    date.setFullYear(month.getFullYear());
    date.setMonth(month.getMonth());
    date.setDate(1); // Rewind to first day of the week.

    while (date.getDay() !== firstDayOfWeek) {
      this._dateAdd(date, -1);
    }

    var days = [];
    var startMonth = date.getMonth();
    var targetMonth = month.getMonth();

    while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
      days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

      this._dateAdd(date, 1);
    }

    return days;
  }

  _getWeekNumber(date, days) {
    if (date === undefined || days === undefined) {
      return;
    }

    if (!date) {
      // Get the first non-null date from the days array.
      date = days.reduce((acc, d) => {
        return !acc && d ? d : acc;
      });
    }

    return DatePickerHelper._getISOWeekNumber(date);
  }

  _getWeekNumbers(dates) {
    return dates.map(date => this._getWeekNumber(date, dates)).filter((week, index, arr) => arr.indexOf(week) === index);
  }

  _handleTap(e) {
    if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
      this.selectedDate = e.target.date;
      this.dispatchEvent(new CustomEvent('date-tap', {
        bubbles: true,
        composed: true
      }));
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _getRole(date) {
    return date ? 'button' : 'presentation';
  }

  _getAriaLabel(date) {
    if (!date) {
      return '';
    }

    var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

    if (this._isToday(date)) {
      ariaLabel += ', ' + this.i18n.today;
    }

    return ariaLabel;
  }

  _getAriaDisabled(date, min, max) {
    if (date === undefined || min === undefined || max === undefined) {
      return;
    }

    return this._dateAllowed(date, min, max) ? 'false' : 'true';
  }

}

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @memberof Vaadin
 * @private
 */

class InfiniteScrollerElement extends polymerElement_js.PolymerElement {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-infinite-scroller';
  }

  static get properties() {
    return {
      /**
       * Count of individual items in each buffer.
       * The scroller has 2 buffers altogether so bufferSize of 20
       * will result in 40 buffered DOM items in total.
       * Changing after initialization not supported.
       */
      bufferSize: {
        type: Number,
        value: 20
      },

      /**
       * The amount of initial scroll top. Needed in order for the
       * user to be able to scroll backwards.
       */
      _initialScroll: {
        value: 500000
      },

      /**
       * The index/position mapped at _initialScroll point.
       */
      _initialIndex: {
        value: 0
      },
      _buffers: Array,
      _preventScrollEvent: Boolean,
      _mayHaveMomentum: Boolean,
      _initialized: Boolean,
      active: {
        type: Boolean,
        observer: '_activated'
      }
    };
  }

  ready() {
    super.ready();
    this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
    this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
    var tpl = this.querySelector('template');
    this._TemplateClass = templatize_js.templatize(tpl, this, {
      forwardHostProp: function (prop, value) {
        if (prop !== 'index') {
          this._buffers.forEach(buffer => {
            [].forEach.call(buffer.children, insertionPoint => {
              insertionPoint._itemWrapper.instance[prop] = value;
            });
          });
        }
      }
    }); // Firefox interprets elements with overflow:auto as focusable
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (isFirefox) {
      this.$.scroller.tabIndex = -1;
    }
  }

  _activated(active) {
    if (active && !this._initialized) {
      this._createPool();

      this._initialized = true;
    }
  }

  _finishInit() {
    if (!this._initDone) {
      // Once the first set of items start fading in, stamp the rest
      this._buffers.forEach(buffer => {
        [].forEach.call(buffer.children, insertionPoint => this._ensureStampedInstance(insertionPoint._itemWrapper));
      }, this);

      if (!this._buffers[0].translateY) {
        this._reset();
      }

      this._initDone = true;
    }
  }

  _translateBuffer(up) {
    var index = up ? 1 : 0;
    this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
    this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
    this._buffers[index].updated = false;

    this._buffers.reverse();
  }

  _scroll() {
    if (this._scrollDisabled) {
      return;
    }

    var scrollTop = this.$.scroller.scrollTop;

    if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
      // Scrolled near the end/beginning of the scrollable area -> reset.
      this._initialIndex = ~~this.position;

      this._reset();
    } // Check if we scrolled enough to translate the buffer positions.


    var bufferOffset = this.root.querySelector('.buffer').offsetTop;
    var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
    var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

    if (upperThresholdReached || lowerThresholdReached) {
      this._translateBuffer(lowerThresholdReached);

      this._updateClones();
    }

    if (!this._preventScrollEvent) {
      this.dispatchEvent(new CustomEvent('custom-scroll', {
        bubbles: false,
        composed: true
      }));
      this._mayHaveMomentum = true;
    }

    this._preventScrollEvent = false;
    this._debouncerScrollFinish = debounce_js.Debouncer.debounce(this._debouncerScrollFinish, async_js.timeOut.after(200), () => {
      var scrollerRect = this.$.scroller.getBoundingClientRect();

      if (!this._isVisible(this._buffers[0], scrollerRect) && !this._isVisible(this._buffers[1], scrollerRect)) {
        this.position = this.position;
      }
    });
  }
  /**
   * Current scroller position as index. Can be a fractional number.
   *
   * @type {Number}
   */


  set position(index) {
    this._preventScrollEvent = true;

    if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
      this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
    } else {
      this._initialIndex = ~~index;

      this._reset();

      this._scrollDisabled = true;
      this.$.scroller.scrollTop += index % 1 * this.itemHeight;
      this._scrollDisabled = false;
    }

    if (this._mayHaveMomentum) {
      // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
      this.$.scroller.classList.add('notouchscroll');
      this._mayHaveMomentum = false;
      setTimeout(() => {
        // Restore -webkit-overflow-scrolling: touch; after a small delay.
        this.$.scroller.classList.remove('notouchscroll');
      }, 10);
    }
  }
  /**
   * @private
   */


  get position() {
    return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
  }

  get itemHeight() {
    if (!this._itemHeightVal) {
      if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
        this.updateStyles();
      }

      const itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

      const tmpStyleProp = 'background-position';
      this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
      const itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
      this.$.fullHeight.style.removeProperty(tmpStyleProp);
      this._itemHeightVal = parseFloat(itemHeightPx);
    }

    return this._itemHeightVal;
  }

  get _bufferHeight() {
    return this.itemHeight * this.bufferSize;
  }

  _reset() {
    this._scrollDisabled = true;
    this.$.scroller.scrollTop = this._initialScroll;
    this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
    this._buffers[1].translateY = this._initialScroll;

    this._buffers.forEach(buffer => {
      buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
    });

    this._buffers[0].updated = this._buffers[1].updated = false;

    this._updateClones(true);

    this._debouncerUpdateClones = debounce_js.Debouncer.debounce(this._debouncerUpdateClones, async_js.timeOut.after(200), () => {
      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones();
    });
    this._scrollDisabled = false;
  }

  _createPool() {
    var container = this.getBoundingClientRect();

    this._buffers.forEach(buffer => {
      for (var i = 0; i < this.bufferSize; i++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.style.height = this.itemHeight + 'px';
        itemWrapper.instance = {};
        const contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
        const slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
        const insertionPoint = document.createElement('slot');
        insertionPoint.setAttribute('name', slotName);
        insertionPoint._itemWrapper = itemWrapper;
        buffer.appendChild(insertionPoint);
        itemWrapper.setAttribute('slot', slotName);
        this.appendChild(itemWrapper); // This is needed by IE

        flush_js.flush();
        setTimeout(() => {
          // Only stamp the visible instances first
          if (this._isVisible(itemWrapper, container)) {
            this._ensureStampedInstance(itemWrapper);
          }
        }, 1); // Wait for first reset
      }
    }, this);

    setTimeout(() => {
      renderStatus_js.afterNextRender(this, this._finishInit.bind(this));
    }, 1);
  }

  _ensureStampedInstance(itemWrapper) {
    if (itemWrapper.firstElementChild) {
      return;
    }

    var tmpInstance = itemWrapper.instance;
    itemWrapper.instance = new this._TemplateClass({});
    itemWrapper.appendChild(itemWrapper.instance.root);
    Object.keys(tmpInstance).forEach(prop => {
      itemWrapper.instance.set(prop, tmpInstance[prop]);
    });
  }

  _updateClones(viewPortOnly) {
    this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
    var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

    this._buffers.forEach((buffer, bufferIndex) => {
      if (!buffer.updated) {
        var firstIndex = this._firstIndex + this.bufferSize * bufferIndex;
        [].forEach.call(buffer.children, (insertionPoint, index) => {
          const itemWrapper = insertionPoint._itemWrapper;

          if (!viewPortOnly || this._isVisible(itemWrapper, scrollerRect)) {
            itemWrapper.instance.index = firstIndex + index;
          }
        });
        buffer.updated = true;
      }
    }, this);
  }

  _isVisible(element, container) {
    var rect = element.getBoundingClientRect();
    return rect.bottom > container.top && rect.top < container.bottom;
  }

}

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

const $_documentContainer$q = document.createElement('template');
$_documentContainer$q.innerHTML = `<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([right-aligned][dir="rtl"]) {
        align-items: flex-start;
      }

      [part="overlay"] {
        display: flex;
        flex: auto;
      }

      [part~="content"] {
        flex: auto;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$q.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayContentElement extends ThemableMixin(ThemePropertyMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker-overlay-content';
  }

  static get properties() {
    return {
      /**
       * The value for this element.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * Date value which is focused using keyboard.
       */
      focusedDate: {
        type: Date,
        notify: true,
        observer: '_focusedDateChanged'
      },
      _focusedMonthDate: Number,

      /**
       * Date which should be visible when there is no value selected.
       */
      initialPosition: {
        type: Date,
        observer: '_initialPositionChanged'
      },
      _originDate: {
        value: new Date()
      },
      _visibleMonthIndex: Number,
      _desktopMode: Boolean,
      _translateX: {
        observer: '_translateXChanged'
      },
      _yearScrollerWidth: {
        value: 50
      },
      i18n: {
        type: Object
      },
      showWeekNumbers: {
        type: Boolean
      },
      _ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: Date,

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: Date,
      _focused: Boolean,

      /**
       * Input label
       */
      label: String
    };
  }

  ready() {
    super.ready();
    this.setAttribute('tabindex', 0);
    this.addEventListener('keydown', this._onKeydown.bind(this));
    gestures_js.addListener(this, 'tap', this._stopPropagation);
    this.addEventListener('focus', this._onOverlayFocus.bind(this));
    this.addEventListener('blur', this._onOverlayBlur.bind(this));
  }
  /**
   * Fired when the scroller reaches the target scrolling position.
   * @event scroll-animation-finished
   * @param {Number} detail.position new position
   * @param {Number} detail.oldPosition old position
   */


  connectedCallback() {
    super.connectedCallback();

    this._closeYearScroller();

    this._toggleAnimateClass(true);

    gestures_js.setTouchAction(this.$.scrollers, 'pan-y');
    ironA11yAnnouncer_js.IronA11yAnnouncer.requestAvailability();
  }

  announceFocusedDate() {
    var focusedDate = this._currentlyFocusedDate();

    var announce = [];

    if (DatePickerHelper._dateEquals(focusedDate, new Date())) {
      announce.push(this.i18n.today);
    }

    announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

    if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
      announce.push(this.i18n.week);
      announce.push(DatePickerHelper._getISOWeekNumber(focusedDate));
    }

    this.dispatchEvent(new CustomEvent('iron-announce', {
      bubbles: true,
      composed: true,
      detail: {
        text: announce.join(' ')
      }
    }));
    return;
  }
  /**
   * Focuses the cancel button
   */


  focusCancel() {
    this.$.cancelButton.focus();
  }
  /**
   * Scrolls the list to the given Date.
   */


  scrollToDate(date, animate) {
    this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
  }

  _focusedDateChanged(focusedDate) {
    this.revealDate(focusedDate);
  }

  _isCurrentYear(yearsFromNow) {
    return yearsFromNow === 0;
  }

  _isSelectedYear(yearsFromNow, selectedDate) {
    if (selectedDate) {
      return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
    }
  }
  /**
   * Scrolls the month and year scrollers enough to reveal the given date.
   */


  revealDate(date) {
    if (date) {
      var diff = this._differenceInMonths(date, this._originDate);

      var scrolledAboveViewport = this.$.monthScroller.position > diff;
      var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
      var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

      if (scrolledAboveViewport) {
        this._scrollToPosition(diff, true);
      } else if (scrolledBelowViewport) {
        this._scrollToPosition(diff - visibleItems + 1, true);
      }
    }
  }

  _onOverlayFocus() {
    this._focused = true;
  }

  _onOverlayBlur() {
    this._focused = false;
  }

  _initialPositionChanged(initialPosition) {
    this.scrollToDate(initialPosition);
  }

  _repositionYearScroller() {
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
  }

  _repositionMonthScroller() {
    this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
  }

  _onMonthScroll() {
    this._repositionYearScroller();

    this._doIgnoreTaps();
  }

  _onYearScroll() {
    this._repositionMonthScroller();

    this._doIgnoreTaps();
  }

  _onYearScrollTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);

    this._repositionMonthScroller();
  }

  _onMonthScrollTouchStart() {
    this._repositionYearScroller();
  }

  _doIgnoreTaps() {
    this._ignoreTaps = true;
    this._debouncer = debounce_js.Debouncer.debounce(this._debouncer, async_js.timeOut.after(300), () => this._ignoreTaps = false);
  }

  _formatDisplayed(date, formatDate, label) {
    if (date) {
      return formatDate(DatePickerHelper._extractDateParts(date));
    } else {
      return label;
    }
  }

  _onTodayTap() {
    var today = new Date();

    if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
      // Select today only if the month scroller is positioned approximately
      // at the beginning of the current month
      this.selectedDate = today;

      this._close();
    } else {
      this._scrollToCurrentMonth();
    }
  }

  _scrollToCurrentMonth() {
    if (this.focusedDate) {
      this.focusedDate = new Date();
    }

    this.scrollToDate(new Date(), true);
  }

  _showClear(selectedDate) {
    return !!selectedDate;
  }

  _onYearTap(e) {
    if (!this._ignoreTaps && !this._notTapping) {
      var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
      var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

      this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
    }
  }

  _scrollToPosition(targetPosition, animate) {
    if (this._targetPosition !== undefined) {
      this._targetPosition = targetPosition;
      return;
    }

    if (!animate) {
      this.$.monthScroller.position = targetPosition;
      this._targetPosition = undefined;

      this._repositionYearScroller();

      return;
    }

    this._targetPosition = targetPosition; // http://gizma.com/easing/

    var easingFunction = (t, b, c, d) => {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var duration = animate ? 300 : 0;
    var start = 0;
    var initialPosition = this.$.monthScroller.position;

    var smoothScroll = timestamp => {
      start = start || timestamp;
      var currentTime = timestamp - start;

      if (currentTime < duration) {
        var currentPos = easingFunction(currentTime, initialPosition, this._targetPosition - initialPosition, duration);
        this.$.monthScroller.position = currentPos;
        window.requestAnimationFrame(smoothScroll);
      } else {
        this.dispatchEvent(new CustomEvent('scroll-animation-finished', {
          bubbles: true,
          composed: true,
          detail: {
            position: this._targetPosition,
            oldPosition: initialPosition
          }
        }));
        this.$.monthScroller.position = this._targetPosition;
        this._targetPosition = undefined;
      }

      setTimeout(this._repositionYearScroller.bind(this), 1);
    }; // Start the animation.


    window.requestAnimationFrame(smoothScroll);
  }

  _limit(value, range) {
    return Math.min(range.max, Math.max(range.min, value));
  }

  _handleTrack(e) {
    // Check if horizontal movement threshold (dx) not exceeded or
    // scrolling fast vertically (ddy).
    if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
      return;
    } // If we're flinging quickly -> start animating already.


    if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
      this._toggleAnimateClass(true);
    }

    var newTranslateX = this._translateX + e.detail.ddx;
    this._translateX = this._limit(newTranslateX, {
      min: 0,
      max: this._yearScrollerWidth
    });
  }

  _track(e) {
    if (this._desktopMode) {
      // No need to track for swipe gestures on desktop.
      return;
    }

    switch (e.detail.state) {
      case 'start':
        this._toggleAnimateClass(false);

        break;

      case 'track':
        this._handleTrack(e);

        break;

      case 'end':
        this._toggleAnimateClass(true);

        if (this._translateX >= this._yearScrollerWidth / 2) {
          this._closeYearScroller();
        } else {
          this._openYearScroller();
        }

        break;
    }
  }

  _toggleAnimateClass(enable) {
    if (enable) {
      this.classList.add('animate');
    } else {
      this.classList.remove('animate');
    }
  }

  _toggleYearScroller() {
    this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
  }

  _openYearScroller() {
    this._translateX = 0;
    this.setAttribute('years-visible', '');
  }

  _closeYearScroller() {
    this.removeAttribute('years-visible');
    this._translateX = this._yearScrollerWidth;
  }

  _isYearScrollerVisible() {
    return this._translateX < this._yearScrollerWidth / 2;
  }

  _translateXChanged(x) {
    if (!this._desktopMode) {
      this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
      this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
    }
  }

  _yearAfterXYears(index) {
    var result = new Date(this._originDate);
    result.setFullYear(parseInt(index) + this._originDate.getFullYear());
    return result.getFullYear();
  }

  _yearAfterXMonths(months) {
    return this._dateAfterXMonths(months).getFullYear();
  }

  _dateAfterXMonths(months) {
    var result = new Date(this._originDate);
    result.setDate(1);
    result.setMonth(parseInt(months) + this._originDate.getMonth());
    return result;
  }

  _differenceInMonths(date1, date2) {
    var months = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months - date2.getMonth() + date1.getMonth();
  }

  _differenceInYears(date1, date2) {
    return this._differenceInMonths(date1, date2) / 12;
  }

  _clear() {
    this.selectedDate = '';
  }

  _close() {
    const overlayContent = this.getRootNode().host;
    const overlay = overlayContent ? overlayContent.getRootNode().host : null;

    if (overlay) {
      overlay.opened = false;
    }

    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

  _cancel() {
    this.focusedDate = this.selectedDate;

    this._close();
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (ironA11yKeysBehavior_js.IronA11yKeysBehavior.keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _onKeydown(e) {
    var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
    // previously in the keydown event.


    const isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
    const isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
    const isScroller = !isToday && !isCancel;

    var eventKey = this._eventKey(e);

    if (eventKey === 'tab') {
      // We handle tabs here and don't want to bubble up.
      e.stopPropagation();
      const isFullscreen = this.hasAttribute('fullscreen');
      const isShift = e.shiftKey;

      if (isFullscreen) {
        e.preventDefault();
      } else if (isShift && isScroller || !isShift && isCancel) {
        // Return focus back to the input field
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('focus-input', {
          bubbles: true,
          composed: true
        }));
      } else if (isShift && isToday) {
        // Browser returns focus back to the scrollable area. We need to set
        // the focused flag, and move the scroll to focused date.
        this._focused = true;
        setTimeout(() => this.revealDate(this.focusedDate), 1);
      } else {
        // Browser moves the focus out of the scroller, hence focused flag must
        // set to false.
        this._focused = false;
      }
    } else if (eventKey) {
      e.preventDefault();
      e.stopPropagation();

      switch (eventKey) {
        case 'down':
          this._moveFocusByDays(7);

          this.focus();
          break;

        case 'up':
          this._moveFocusByDays(-7);

          this.focus();
          break;

        case 'right':
          if (isScroller) {
            this._moveFocusByDays(1);
          }

          break;

        case 'left':
          if (isScroller) {
            this._moveFocusByDays(-1);
          }

          break;

        case 'enter':
          if (isScroller || isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          }

          break;

        case 'space':
          if (isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          } else {
            var focusedDate = this.focusedDate;

            if (DatePickerHelper._dateEquals(focusedDate, this.selectedDate)) {
              this.selectedDate = '';
              this.focusedDate = focusedDate;
            } else {
              this.selectedDate = focusedDate;
            }
          }

          break;

        case 'home':
          this._moveFocusInsideMonth(focus, 'minDate');

          break;

        case 'end':
          this._moveFocusInsideMonth(focus, 'maxDate');

          break;

        case 'pagedown':
          this._moveFocusByMonths(e.shiftKey ? 12 : 1);

          break;

        case 'pageup':
          this._moveFocusByMonths(e.shiftKey ? -12 : -1);

          break;

        case 'esc':
          this._cancel();

          break;
      }
    }
  }

  _currentlyFocusedDate() {
    return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
  }

  _focusDate(dateToFocus) {
    this.focusedDate = dateToFocus;
    this._focusedMonthDate = dateToFocus.getDate();
  }

  _focusClosestDate(focus) {
    this._focusDate(DatePickerHelper._getClosestDate(focus, [this.minDate, this.maxDate]));
  }

  _moveFocusByDays(days) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth());
    dateToFocus.setDate(focus.getDate() + days);

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (days > 0) {
          // down or right
          this._focusDate(this.maxDate);
        } else {
          // up or left
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusByMonths(months) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth() + months);
    var targetMonth = dateToFocus.getMonth();
    dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

    if (dateToFocus.getMonth() !== targetMonth) {
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this.focusedDate = dateToFocus;
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (months > 0) {
          // pagedown
          this._focusDate(this.maxDate);
        } else {
          // pageup
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusInsideMonth(focusedDate, property) {
    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focusedDate.getFullYear());

    if (property === 'minDate') {
      dateToFocus.setMonth(focusedDate.getMonth());
      dateToFocus.setDate(1);
    } else {
      dateToFocus.setMonth(focusedDate.getMonth() + 1);
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
        // Move to minDate or maxDate
        this._focusDate(this[property]);
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focusedDate);
      }
    }
  }

  _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }

  _isTodayAllowed(min, max) {
    var today = new Date();
    var todayMidnight = new Date(0, 0);
    todayMidnight.setFullYear(today.getFullYear());
    todayMidnight.setMonth(today.getMonth());
    todayMidnight.setDate(today.getDate());
    return this._dateAllowed(todayMidnight, min, max);
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

}

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const DatePickerMixin = subclass => class VaadinDatePickerMixin extends class_js.mixinBehaviors([ironResizableBehavior_js.IronResizableBehavior], subclass) {
  static get properties() {
    return {
      /**
       * The current selected date.
       */
      _selectedDate: {
        type: Date
      },
      _focusedDate: Date,

      /**
       * The value for this element.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      value: {
        type: String,
        observer: '_valueChanged',
        notify: true,
        value: ''
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       */
      initialPosition: String,

      /**
       * The label for this element.
       */
      label: String,

      /**
       * Set true to open the date selector overlay.
       */
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_openedChanged'
      },

      /**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */
      showWeekNumbers: {
        type: Boolean
      },
      _fullscreen: {
        value: false,
        observer: '_fullscreenChanged'
      },
      _fullscreenMediaQuery: {
        value: '(max-width: 420px), (max-height: 420px)'
      },
      // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
      // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
      _touchPrevented: Array,

      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
           {
            // An array with the full names of months starting
            // with January.
            monthNames: [
              'January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September',
              'October', 'November', 'December'
            ],
             // An array of weekday names starting with Sunday. Used
            // in screen reader announcements.
            weekdays: [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'
            ],
             // An array of short weekday names starting with Sunday.
            // Displayed in the calendar.
            weekdaysShort: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
             // An integer indicating the first day of the week
            // (0 = Sunday, 1 = Monday, etc.).
            firstDayOfWeek: 0,
             // Used in screen reader announcements along with week
            // numbers, if they are displayed.
            week: 'Week',
             // Translation of the Calendar icon button title.
            calendar: 'Calendar',
             // Translation of the Clear icon button title.
            clear: 'Clear',
             // Translation of the Today shortcut button text.
            today: 'Today',
             // Translation of the Cancel button text.
            cancel: 'Cancel',
             // A function to format given `Object` as
            // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            formatDate: d => {
              // returns a string representation of the given
              // object in 'MM/DD/YYYY' -format
            },
             // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            // Must properly parse (at least) text formatted by `formatDate`.
            // Setting the property to null will disable keyboard input feature.
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            parseDate: text => {
              // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
              // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            }
             // A function to format given `monthName` and
            // `fullYear` integer as calendar title string.
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          }
        *
       * @default {English/US}
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            firstDayOfWeek: 0,
            week: 'Week',
            calendar: 'Calendar',
            clear: 'Clear',
            today: 'Today',
            cancel: 'Cancel',
            formatDate: d => {
              const yearStr = String(d.year).replace(/\d+/, y => '0000'.substr(y.length) + y);
              return [d.month + 1, d.day, yearStr].join('/');
            },
            parseDate: text => {
              const parts = text.split('/');
              const today = new Date();
              let date,
                  month = today.getMonth(),
                  year = today.getFullYear();

              if (parts.length === 3) {
                year = parseInt(parts[2]);

                if (parts[2].length < 3 && year >= 0) {
                  year += year < 50 ? 2000 : 1900;
                }

                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 2) {
                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 1) {
                date = parseInt(parts[0]);
              }

              if (date !== undefined) {
                return {
                  day: date,
                  month,
                  year
                };
              }
            },
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          };
        }
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      min: {
        type: String,
        observer: '_minChanged'
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      max: {
        type: String,
        observer: '_maxChanged'
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      _minDate: {
        type: Date,
        // null does not work here because minimizer passes undefined to overlay (#351)
        value: ''
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      _maxDate: {
        type: Date,
        value: ''
      },
      _noInput: {
        type: Boolean,
        computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
      },
      _ios: {
        type: Boolean,
        value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
      },
      _webkitOverflowScroll: {
        type: Boolean,
        value: document.createElement('div').style.webkitOverflowScrolling === ''
      },
      _ignoreAnnounce: {
        value: true
      },
      _focusOverlayOnOpen: Boolean,
      _overlayInitialized: Boolean
    };
  }

  static get observers() {
    return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
  }

  ready() {
    super.ready();
    this._boundOnScroll = this._onScroll.bind(this);
    this._boundFocus = this._focus.bind(this);
    this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);

    const isClearButton = e => {
      const path = e.composedPath();
      const inputIndex = path.indexOf(this._inputElement);
      return path.slice(0, inputIndex).filter(el => el.getAttribute && el.getAttribute('part') === 'clear-button').length === 1;
    };

    gestures_js.addListener(this, 'tap', e => {
      // FIXME(platosha): use preventDefault in the text field clear button,
      // then the following composedPath check could be simplified down
      // to `if (!e.defaultPrevented)`.
      // https://github.com/vaadin/vaadin-text-field/issues/352
      if (!isClearButton(e)) {
        this.open();
      }
    });
    this.addEventListener('touchend', e => {
      if (!isClearButton(e)) {
        e.preventDefault();
      }
    });
    this.addEventListener('keydown', this._onKeydown.bind(this));
    this.addEventListener('input', this._onUserInput.bind(this));
    this.addEventListener('focus', e => this._noInput && e.target.blur());
    this.addEventListener('blur', e => !this.opened && this.validate());
  }

  _initOverlay() {
    this.$.overlay.removeAttribute('disable-upgrade');
    this._overlayInitialized = true;
    this.$.overlay.addEventListener('opened-changed', e => this.opened = e.detail.value);

    this._overlayContent.addEventListener('close', this._close.bind(this));

    this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

    this._overlayContent.addEventListener('focus', () => this.focusElement._setFocused(true));

    this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._overlayInitialized) {
      this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
    }

    this.opened = false;
  }
  /**
   * Opens the dropdown.
   */


  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }

  _close(e) {
    if (e) {
      e.stopPropagation();
    }

    this._focus();

    this.close();
  }
  /**
   * Closes the dropdown.
   */


  close() {
    if (this._overlayInitialized) {
      this.$.overlay.close();
    }
  }

  get _inputElement() {
    return this._input();
  }

  get _nativeInput() {
    if (this._inputElement) {
      // vaadin-text-field's input is focusElement
      // iron-input's input is inputElement
      return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
    }
  }

  _parseDate(str) {
    // Parsing with RegExp to ensure correct format
    var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

    if (!parts) {
      return;
    }

    var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

    date.setFullYear(parseInt(parts[1], 10));
    date.setMonth(parseInt(parts[2], 10) - 1);
    date.setDate(parseInt(parts[3], 10));
    return date;
  }

  _isNoInput(fullscreen, ios, i18n) {
    return !this._inputElement || fullscreen || ios || !i18n.parseDate;
  }

  _formatISO(date) {
    if (!(date instanceof Date)) {
      return '';
    }

    const pad = (num, fmt = '00') => (fmt + num).substr((fmt + num).length - fmt.length);

    let yearSign = '';
    let yearFmt = '0000';
    let yearAbs = date.getFullYear();

    if (yearAbs < 0) {
      yearAbs = -yearAbs;
      yearSign = '-';
      yearFmt = '000000';
    } else if (date.getFullYear() >= 10000) {
      yearSign = '+';
      yearFmt = '000000';
    }

    const year = yearSign + pad(yearAbs, yearFmt);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    return [year, month, day].join('-');
  }

  _openedChanged(opened) {
    if (opened && !this._overlayInitialized) {
      this._initOverlay();
    }

    if (this._overlayInitialized) {
      this.$.overlay.opened = opened;
    }

    if (opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _selectedDateChanged(selectedDate, formatDate) {
    if (selectedDate === undefined || formatDate === undefined) {
      return;
    }

    if (this.__userInputOccurred) {
      this.__dispatchChange = true;
    }

    const inputValue = selectedDate && formatDate(DatePickerHelper._extractDateParts(selectedDate));

    const value = this._formatISO(selectedDate);

    if (value !== this.value) {
      this.validate(inputValue);
      this.value = value;
    }

    this.__userInputOccurred = false;
    this.__dispatchChange = false;
    this._ignoreFocusedDateChange = true;
    this._focusedDate = selectedDate;
    this._ignoreFocusedDateChange = false;
    this._inputValue = selectedDate ? inputValue : '';
  }

  _focusedDateChanged(focusedDate, formatDate) {
    if (focusedDate === undefined || formatDate === undefined) {
      return;
    }

    this.__userInputOccurred = true;

    if (!this._ignoreFocusedDateChange && !this._noInput) {
      this._inputValue = focusedDate ? formatDate(DatePickerHelper._extractDateParts(focusedDate)) : '';
    }
  }

  _updateHasValue(value) {
    if (value) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  __getOverlayTheme(theme, overlayInitialized) {
    if (overlayInitialized) {
      return theme;
    }
  }

  _handleDateChange(property, value, oldValue) {
    if (!value) {
      this[property] = '';
      return;
    }

    var date = this._parseDate(value);

    if (!date) {
      this.value = oldValue;
      return;
    }

    if (!DatePickerHelper._dateEquals(this[property], date)) {
      this[property] = date;
    }
  }

  _valueChanged(value, oldValue) {
    if (this.__dispatchChange) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
    }

    this._handleDateChange('_selectedDate', value, oldValue);
  }

  _minChanged(value, oldValue) {
    this._handleDateChange('_minDate', value, oldValue);
  }

  _maxChanged(value, oldValue) {
    this._handleDateChange('_maxDate', value, oldValue);
  }

  _updateAlignmentAndPosition() {
    if (!this._overlayInitialized) {
      return;
    }

    if (!this._fullscreen) {
      const inputRect = this._inputElement.getBoundingClientRect();

      const bottomAlign = inputRect.top > window.innerHeight / 2;
      const rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

      if (rightAlign) {
        const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        this.$.overlay.setAttribute('right-aligned', '');
        this.$.overlay.style.removeProperty('left');
        this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
      } else {
        this.$.overlay.removeAttribute('right-aligned');
        this.$.overlay.style.removeProperty('right');
        this.$.overlay.style.left = inputRect.left + 'px';
      }

      if (bottomAlign) {
        const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        this.$.overlay.setAttribute('bottom-aligned', '');
        this.$.overlay.style.removeProperty('top');
        this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
      } else {
        this.$.overlay.removeAttribute('bottom-aligned');
        this.$.overlay.style.removeProperty('bottom');
        this.$.overlay.style.top = inputRect.bottom + 'px';
      }
    }

    this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

    this._overlayContent._repositionYearScroller();
  }

  _fullscreenChanged() {
    if (this._overlayInitialized && this.$.overlay.opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _onOverlayOpened() {
    this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

    var parsedInitialPosition = this._parseDate(this.initialPosition);

    var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

    if (parsedInitialPosition || DatePickerHelper._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
      this._overlayContent.initialPosition = initialPosition;
    } else {
      this._overlayContent.initialPosition = DatePickerHelper._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
    }

    this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


    this._ignoreFocusedDateChange = true;
    this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
    this._ignoreFocusedDateChange = false;
    window.addEventListener('scroll', this._boundOnScroll, true);
    this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._webkitOverflowScroll) {
      this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
    }

    if (this._focusOverlayOnOpen) {
      this._overlayContent.focus();

      this._focusOverlayOnOpen = false;
    } else {
      this._focus();
    }

    if (this._noInput && this.focusElement) {
      this.focusElement.blur();
    }

    this.updateStyles();
    this._ignoreAnnounce = false;
  } // A hack needed for iOS to prevent dropdown from being clipped in an
  // ancestor container with -webkit-overflow-scrolling: touch;


  _preventWebkitOverflowScrollingTouch(element) {
    var result = [];

    while (element) {
      if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
        var oldInlineValue = element.style.webkitOverflowScrolling;
        element.style.webkitOverflowScrolling = 'auto';
        result.push({
          element: element,
          oldInlineValue: oldInlineValue
        });
      }

      element = element.parentElement;
    }

    return result;
  }

  _onOverlayClosed() {
    this._ignoreAnnounce = true;
    window.removeEventListener('scroll', this._boundOnScroll, true);
    this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._touchPrevented) {
      this._touchPrevented.forEach(prevented => prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue);

      this._touchPrevented = [];
    }

    this.updateStyles(); // Select the parsed input or focused date

    this._ignoreFocusedDateChange = true;

    if (this.i18n.parseDate) {
      var inputValue = this._inputValue || '';
      const dateObject = this.i18n.parseDate(inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._selectedDate = parsedDate;
      } else {
        this._selectedDate = null;
        this._inputValue = inputValue;
      }
    } else if (this._focusedDate) {
      this._selectedDate = this._focusedDate;
    }

    this._ignoreFocusedDateChange = false;

    if (this._nativeInput && this._nativeInput.selectionStart) {
      this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
    }

    this.validate();
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @param {string} value Value to validate. Optional, defaults to user's input value.
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate(value) {
    // reset invalid state on the underlying text field
    this.invalid = false;
    value = value !== undefined ? value : this._inputValue;
    return !(this.invalid = !this.checkValidity(value));
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * Override the `checkValidity` method for custom validations.
   *
   * @param {string} value Value to validate. Optional, defaults to the selected date.
   * @return {boolean} True if the value is valid
   */


  checkValidity(value) {
    var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(DatePickerHelper._extractDateParts(this._selectedDate));

    var minMaxValid = !this._selectedDate || DatePickerHelper._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

    var inputValidity = true;

    if (this._inputElement) {
      if (this._inputElement.checkValidity) {
        // vaadin native input elements have the checkValidity method
        inputValidity = this._inputElement.checkValidity(value);
      } else if (this._inputElement.validate) {
        // iron-form-elements have the validate API
        inputValidity = this._inputElement.validate(value);
      }
    }

    return inputValid && minMaxValid && inputValidity;
  }

  _onScroll(e) {
    if (e.target === window || !this._overlayContent.contains(e.target)) {
      this._updateAlignmentAndPosition();
    }
  }

  _focus() {
    if (this._noInput) {
      this._overlayInitialized && this._overlayContent.focus();
    } else {
      this._inputElement.focus();
    }
  }

  _focusAndSelect() {
    this._focus();

    this._setSelectionRange(0, this._inputValue.length);
  }

  _setSelectionRange(a, b) {
    if (this._nativeInput && this._nativeInput.setSelectionRange) {
      this._nativeInput.setSelectionRange(a, b);
    }
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'enter', 'esc', 'tab'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (ironA11yKeysBehavior_js.IronA11yKeysBehavior.keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _isValidDate(d) {
    return d && !isNaN(d.getTime());
  }

  _onKeydown(e) {
    if (this._noInput) {
      // The input element cannot be readonly as it would conflict with
      // the required attribute. Both are not allowed on an input element.
      // Therefore we prevent default on most keydown events.
      var allowedKeys = [9 // tab
      ];

      if (allowedKeys.indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }

    switch (this._eventKey(e)) {
      case 'down':
      case 'up':
        // prevent scrolling the page with arrows
        e.preventDefault();

        if (this.opened) {
          this._overlayContent.focus();

          this._overlayContent._onKeydown(e);
        } else {
          this._focusOverlayOnOpen = true;
          this.open();
        }

        break;

      case 'enter':
        {
          const dateObject = this.i18n.parseDate(this._inputValue);

          const parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

          if (this._overlayInitialized && this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
            this._selectedDate = this._overlayContent.focusedDate;
          }

          this.close();
          break;
        }

      case 'esc':
        this._focusedDate = this._selectedDate;

        this._close();

        break;

      case 'tab':
        if (this.opened) {
          e.preventDefault(); // Clear the selection range (remains visible on IE)

          this._setSelectionRange(0, 0);

          if (e.shiftKey) {
            this._overlayContent.focusCancel();
          } else {
            this._overlayContent.focus();

            this._overlayContent.revealDate(this._focusedDate);
          }
        }

        break;
    }
  }

  _validateInput(date, min, max) {
    if (date && (min || max)) {
      this.invalid = !DatePickerHelper._dateAllowed(date, min, max);
    }
  }

  _onUserInput(e) {
    if (!this.opened && this._inputElement.value) {
      this.open();
    }

    this._userInputValueChanged();
  }

  _userInputValueChanged(value) {
    if (this.opened && this._inputValue) {
      const dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._ignoreFocusedDateChange = true;

        if (!DatePickerHelper._dateEquals(parsedDate, this._focusedDate)) {
          this._focusedDate = parsedDate;
        }

        this._ignoreFocusedDateChange = false;
      }
    }
  }

  _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
    if (opened && !_ignoreAnnounce) {
      this._overlayContent.announceFocusedDate();
    }
  }

  get _overlayContent() {
    return this.$.overlay.content.querySelector('#overlay-content');
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class DatePickerElement extends ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin(DatePickerMixin(gestureEventListeners_js.GestureEventListeners(polymerElement_js.PolymerElement)))))) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker';
  }

  static get version() {
    return '4.0.5';
  }

  static get properties() {
    return {
      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: String,

      /**
       * A placeholder string in addition to the label. If this is set, the label will always float.
       */
      placeholder: String,

      /**
       * Set to true to make this element read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * This property is set to true when the control value invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },
      _userInputValue: String
    };
  }

  static get observers() {
    return ['_userInputValueChanged(_userInputValue)', '_setClearButtonLabel(i18n.clear)'];
  }

  ready() {
    super.ready(); // In order to have synchronized invalid property, we need to use the same validate logic.

    renderStatus_js.afterNextRender(this, () => this._inputElement.validate = () => {}); // FIXME(platosha): dispatch `input` event on
    // <vaadin-text-field> clear button
    // https://github.com/vaadin/vaadin-text-field/issues/347

    this._inputElement.addEventListener('change', () => {
      if (this._inputElement.value === '') {
        this.__dispatchChange = true;
        this.value = '';
        this.validate();
        this.__dispatchChange = false;
      }
    });
  }

  _onVaadinOverlayClose(e) {
    if (this._openedWithFocusRing && this.hasAttribute('focused')) {
      this.focusElement.setAttribute('focus-ring', '');
    } else if (!this.hasAttribute('focused')) {
      this.focusElement.blur();
    }

    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
      e.preventDefault();
    }
  }

  _toggle(e) {
    e.stopPropagation();
    this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
  }

  _input() {
    return this.$.input;
  }

  set _inputValue(value) {
    this._inputElement.value = value;
  }

  get _inputValue() {
    return this._inputElement.value;
  }

  _getAriaExpanded(opened) {
    return Boolean(opened).toString();
  }
  /**
   * Focussable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    return this._input() || this;
  }

  _setClearButtonLabel(i18nClear) {
    // FIXME(platosha): expose i18n API in <vaadin-text-field>
    // https://github.com/vaadin/vaadin-text-field/issues/348
    this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute('aria-label', i18nClear);
  }

}

customElements.define(DatePickerElement.is, DatePickerElement);

const $_documentContainer$r = htmlTag_js.html`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$r.content);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const $_documentContainer$s = document.createElement('template');
$_documentContainer$s.innerHTML = `<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">
  <template>
    <style>
      /*
        NOTE(platosha): Make some min-width to prevent collapsing of the content
        taking the parent width, e. g., <vaadin-grid> and such.
      */
      [part="content"] {
        min-width: 12em; /* matches the default <vaadin-text-field> width */
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$s.content);
/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-dialog-overlay>` parts.
 *
 * @memberof Vaadin
 * @private
 */

class DialogOverlayElement extends OverlayElement {
  static get is() {
    return 'vaadin-dialog-overlay';
  }

}

customElements.define(DialogOverlayElement.is, DialogOverlayElement);
/**
 *
 * `<vaadin-dialog>` is a Web Component for creating customized modal dialogs. The content of the
 * dialog can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the dialog uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `dialog` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `dialog`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-dialog id="dialog"></vaadin-dialog>
 * ```
 * ```js
 * const dialog = document.querySelector('#dialog');
 * dialog.renderer = function(root, dialog) {
 *   root.textContent = "Sample dialog";
 * };
 * ```
 *
 * Renderer is called on the opening of the dialog.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Polymer Templates
 *
 * Alternatively, the content can be provided with Polymer's Template.
 * Dialog finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * ```html
 * <vaadin-dialog opened>
 *   <template>
 *     Sample dialog
 *   </template>
 * </vaadin-dialog>
 * ```
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-dialog-overlay>` parts.
 *
 * Note: the `theme` attribute value set on `<vaadin-dialog>` is
 * propagated to the internal `<vaadin-dialog-overlay>` component.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class DialogElement extends ThemePropertyMixin(ElementMixin(polymerElement_js.PolymerElement)) {
  static get template() {
    return htmlTag_js.html`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`;
  }

  static get is() {
    return 'vaadin-dialog';
  }

  static get version() {
    return '2.2.1';
  }

  static get properties() {
    return {
      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * Set to true to disable closing dialog on outside click
       */
      noCloseOnOutsideClick: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable closing dialog on Escape press
       */
      noCloseOnEsc: {
        type: Boolean,
        value: false
      },

      /**
       * Set the `aria-label` attribute for assistive technologies like
       * screen readers. An `undefined` value for this property (the
       * default) means that the `aria-label` attribute is not present at
       * all.
       */
      ariaLabel: {
        type: String
      },

      /**
       * Theme to apply to the overlay element
       */
      theme: String,
      _contentTemplate: Object,

      /**
       * Custom function for rendering the content of the dialog.
       * Receives two arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `dialog` The reference to the `<vaadin-dialog>` element.
       */
      renderer: Function,
      _oldTemplate: Object,
      _oldRenderer: Object
    };
  }

  static get observers() {
    return ['_openedChanged(opened)', '_ariaLabelChanged(ariaLabel)', '_templateOrRendererChanged(_contentTemplate, renderer)'];
  }

  ready() {
    super.ready();
    this.$.overlay.setAttribute('role', 'dialog');
    this.$.overlay.addEventListener('vaadin-overlay-outside-click', this._handleOutsideClick.bind(this));
    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._handleEscPress.bind(this));
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }

  _setTemplateFromNodes(nodes) {
    this._contentTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._contentTemplate;
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._contentTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    this.$.overlay.render();
  }

  _templateOrRendererChanged(template, renderer) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for dialog content');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;

    if (renderer) {
      this.$.overlay.setProperties({
        owner: this,
        renderer: renderer
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.opened = false;
  }

  _openedChanged(opened) {
    if (opened) {
      this.$.overlay.template = this.querySelector('template');
    }

    this.$.overlay.opened = opened;
  }

  _ariaLabelChanged(ariaLabel) {
    if (ariaLabel !== undefined && ariaLabel !== null) {
      this.$.overlay.setAttribute('aria-label', ariaLabel);
    } else {
      this.$.overlay.removeAttribute('aria-label');
    }
  }

  _onOverlayOpened(e) {
    if (e.detail.value === false) {
      this.opened = false;
    }
  }
  /**
   * Close the dialog if `noCloseOnOutsideClick` isn't set to true
   */


  _handleOutsideClick(e) {
    if (this.noCloseOnOutsideClick) {
      e.preventDefault();
    }
  }
  /**
   * Close the dialog if `noCloseOnEsc` isn't set to true
   */


  _handleEscPress(e) {
    if (this.noCloseOnEsc) {
      e.preventDefault();
    }
  }

}

customElements.define(DialogElement.is, DialogElement);

const $_documentContainer$t = htmlTag_js.html`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer$t.content);

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var ANIMATION_FRAME = async_js.animationFrame;
var IDLE_TIME = async_js.idlePeriod;
var MICRO_TASK = async_js.microTask;
const PolymerIronList = class_js.Class({
  behaviors: [ironResizableBehavior_js.IronResizableBehavior, ironScrollTargetBehavior_js.IronScrollTargetBehavior],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is the same as `scrollTop`.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */
  _collection: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of the list.
   */
  _maxPages: 2,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);

    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;

    if (val < 0) {
      val = this._physicalCount + val;
    }

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;

    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;
      idx = this._iterateItems(function (pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
        } // Handle a partially rendered final row in grid mode


        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - vidx % this._itemsPerRow;
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }

    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;

    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        this._iterateItems(function (pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }

          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }

      this._lastVisibleIndexVal = idx;
    }

    return idx;
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop;
  },

  attached: function () {
    this._debounce('_render', this._render, ANIMATION_FRAME); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
  },
  detached: function () {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function () {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function () {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0; // Track the current scroll position.

    this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null; // Random access.

    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;

      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset.

      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);

      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }

      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), MICRO_TASK);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function (fromTop) {
    var ith, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      offsetContent = bottom - scrollBottom;
    } // eslint-disable-next-line no-constant-condition


    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;

      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }

      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        } // Check that the index is not visible.


        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }

        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        } // Check that the index is not visible.


        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }

        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = ith === 0 ? physicalCount - 1 : ith - 1;
      }
    }

    return {
      indexes: idxs,
      physicalTop: top - this._scrollOffset
    };
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function (itemSet, movingUp) {
    if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
      return;
    }

    this._manageFocus();

    this._assignModels(itemSet);

    this._updateMetrics(itemSet); // Adjust offset after measuring.


    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }

    this._positionItems();

    this._updateScrollerSize();
  },
  _isClientFull: function () {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function (count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the focused item.
      // In this situation, the focused item is currently rendered and its model would
      // have changed after increasing the pool if the physical start remained unchanged.

      if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }

      this._update();

      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    } // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.


    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) ; else if (!this._isClientFull()) {
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), MICRO_TASK);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), IDLE_TIME);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function () {
    if (!this.isAttached || !this._isVisible) {
      return;
    }

    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);

      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;

      this._update(reusables.indexes);

      this._update();

      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();

      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function (change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._collection = this.items && undefined ? undefined.get(this.items) : null;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;

      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }

      this._removeFocusedItem();

      this._debounce('_render', this._render, ANIMATION_FRAME);
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function (fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);

        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;

      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }

      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function (pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }

    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function (itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    flush_js.flush ? flush_js.flush() : polymer_dom_js.flush();
    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function (pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();

      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    } // Update the average if it measured something.


    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    }
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function () {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    this._iterateItems(function (pidx, vidx) {
      this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
      y += this._physicalSizes[pidx];
    });
  },
  _getPhysicalSizeIncrement: function (pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }

    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }

    return this._rowHeight;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function () {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop; // juking scroll position during interial scrolling on iOS is no bueno

      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function (pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function (forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
    }

    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function (idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }

    flush_js.flush ? flush_js.flush() : polymer_dom_js.flush(); // Items should have been rendered prior scrolling to an index.

    if (this._physicalCount === 0) {
      return;
    }

    idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
    }

    this._manageFocus();

    this._assignModels();

    this._updateMetrics(); // Estimate new physical offset.


    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }

    this._updateScrollerSize(true);

    this._positionItems();

    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

    this._increasePoolIfNeeded(0); // clear cached visible index.


    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function () {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function () {
    this._debounce('_render', function () {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null; // Skip the resize event on touch devices when the address bar slides up.

      this.updateViewportBoundaries();

      if (this._isVisible) {
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, ANIMATION_FRAME);
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function (idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },
  _isIndexRendered: function (idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },
  _getPhysicalIndex: function (vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  _clamp: function (v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function (name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = debounce_js.Debouncer.debounce(this._debouncers[name], asyncModule, cb.bind(this));
    flush_js.enqueueDebouncer(this._debouncers[name]);
  }
});

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * This Element is used internally by vaadin-grid.
 *
 * @private
 */

class GridScrollerElement extends PolymerIronList {
  static get is() {
    return 'vaadin-grid-scroller';
  }

  static get properties() {
    return {
      size: {
        type: Number,
        notify: true
      },
      _vidxOffset: {
        value: 0
      }
    };
  }

  static get observers() {
    return ['_effectiveSizeChanged(_effectiveSize)'];
  }

  connectedCallback() {
    super.connectedCallback();

    this._scrollHandler();
  }
  /**
  * @protected
  */


  _updateScrollerItem(item, index) {}
  /**
  * @protected
  */


  _afterScroll() {}
  /**
  * @protected
  */


  _getRowTarget() {}
  /**
  * @protected
  */


  _createScrollerRows() {}
  /**
  * @protected
  */


  _canPopulate() {}
  /**
  * @private
  */


  scrollToIndex(index) {
    this._warnPrivateAPIAccess('scrollToIndex');

    if (index > 0) {
      this._pendingScrollToIndex = null;
    }

    if (!parseInt(this.$.items.style.borderTopWidth) && index > 0) {
      // Schedule another scroll to be invoked once init is complete
      this._pendingScrollToIndex = index;
    }

    this._scrollingToIndex = true;
    index = Math.min(Math.max(index, 0), this._effectiveSize - 1);
    this.$.table.scrollTop = index / this._effectiveSize * (this.$.table.scrollHeight - this.$.table.offsetHeight);

    this._scrollHandler();

    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(1000000);
    }

    this._accessIronListAPI(() => super.scrollToIndex(index - this._vidxOffset));

    this._scrollHandler(); // Ensure scroll position


    const row = Array.from(this.$.items.children).filter(child => child.index === index)[0];

    if (row) {
      const headerOffset = row.getBoundingClientRect().top - this.$.header.getBoundingClientRect().bottom;

      if (Math.abs(headerOffset) > 1) {
        this.$.table.scrollTop += headerOffset;

        this._scrollHandler();
      }
    }

    this._scrollingToIndex = false;
  }

  _effectiveSizeChanged(size) {
    let fvi; // first visible (adjusted) index

    let fviOffset = 0;

    this._iterateItems((pidx, vidx) => {
      if (vidx === this._firstVisibleIndex) {
        const row = this._physicalItems[pidx];
        fvi = row.index;
        fviOffset = row.getBoundingClientRect().top;
      }
    });

    if (this.items && size < this.items.length) {
      // Size was reduced, scroll to 0 first
      this._scrollTop = 0;
    }

    if (!Array.isArray(this.items)) {
      // Edge/IE seems to have the lowest maximum
      const maxVirtualItems = this._edge || this._ie ? 30000 : 100000;
      this.items = {
        length: Math.min(size, maxVirtualItems)
      };
    }

    this._accessIronListAPI(() => super._itemsChanged({
      path: 'items'
    }));

    this._virtualCount = Math.min(this.items.length, size) || 0;

    if (this._scrollTop === 0) {
      this._accessIronListAPI(() => this._scrollToIndex(Math.min(size - 1, fvi)));

      this._iterateItems((pidx, vidx) => {
        const row = this._physicalItems[pidx];

        if (row.index === fvi) {
          this.$.table.scrollTop += Math.round(row.getBoundingClientRect().top - fviOffset);
        } // Restore keyboard focus to the right cell


        if (row.index === this._focusedItemIndex && this._itemsFocusable && this.$.items.contains(this.shadowRoot.activeElement)) {
          const cellIndex = Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);
          row.children[cellIndex].focus();
        }
      });
    }

    this._assignModels();

    requestAnimationFrame(() => this._update());
  }

  _positionItems() {
    this._adjustScrollPosition();

    let rePosition;

    if (isNaN(this._physicalTop)) {
      rePosition = true;
      this._physicalTop = 0;
    }

    let y = this._physicalTop;

    this._iterateItems((pidx, vidx) => {
      this._physicalItems[pidx].style.transform = `translateY(${y}px)`;
      y += this._physicalSizes[pidx];
    });

    if (rePosition) {
      this._scrollToIndex(0);
    }
  }

  _increasePoolIfNeeded(count) {
    if (count === 0 && this._scrollingToIndex || !this._canPopulate() || !this._effectiveSize) {
      return;
    }

    if (!this._initialPoolCreated) {
      this._initialPoolCreated = true;

      super._increasePoolIfNeeded(25);
    } else if (this._optPhysicalSize !== Infinity) {
      this._debounceIncreasePool = debounce_js.Debouncer.debounce(this._debounceIncreasePool, async_js.animationFrame, () => {
        this._updateMetrics();

        const remainingPhysicalSize = this._optPhysicalSize - this._physicalSize;
        let estimatedMissingRowCount = Math.ceil(remainingPhysicalSize / this._physicalAverage);

        if (this._physicalCount + estimatedMissingRowCount > this._effectiveSize) {
          // Do not increase the physical item count above the this._effectiveSize
          estimatedMissingRowCount = Math.max(0, this._effectiveSize - this._physicalCount);
        }

        if (this._physicalSize && estimatedMissingRowCount > 0) {
          super._increasePoolIfNeeded(estimatedMissingRowCount); // Ensure the rows are in order after increasing pool


          this.__reorderChildNodes();
        }
      });
    }
  }

  __reorderChildNodes() {
    const childNodes = Array.from(this.$.items.childNodes);
    const rowsInOrder = !!childNodes.reduce((inOrder, current, currentIndex, array) => {
      if (currentIndex === 0 || array[currentIndex - 1].index === current.index - 1) {
        return inOrder;
      }
    }, true);

    if (!rowsInOrder) {
      childNodes.sort((row1, row2) => {
        return row1.index - row2.index;
      }).forEach(row => this.$.items.appendChild(row));
    }
  }

  _createPool(size) {
    const fragment = document.createDocumentFragment();

    const physicalItems = this._createScrollerRows(size);

    physicalItems.forEach(inst => fragment.appendChild(inst));

    this._getRowTarget().appendChild(fragment); // Weird hack needed to get Safari to actually distribute slots


    const content = this.querySelector('[slot]');

    if (content) {
      const slot = content.getAttribute('slot');
      content.setAttribute('slot', 'foo-bar');
      content.setAttribute('slot', slot);
    }

    this._updateHeaderFooterMetrics();

    renderStatus_js.afterNextRender(this, () => this.notifyResize());
    return physicalItems;
  }
  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */


  _assignModels(itemSet) {
    this._iterateItems((pidx, vidx) => {
      const el = this._physicalItems[pidx];

      this._toggleAttribute('hidden', vidx >= this._effectiveSize, el);

      this._updateScrollerItem(el, vidx + (this._vidxOffset || 0));
    }, itemSet);
  }

  _scrollHandler() {
    const delta = this.$.table.scrollTop - this._scrollPosition;

    this._accessIronListAPI(super._scrollHandler);

    const oldOffset = this._vidxOffset;

    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(delta);
    }

    if (this._vidxOffset !== oldOffset) {
      this._update();
    }

    this._afterScroll();
  }

  _adjustVirtualIndexOffset(delta) {
    if (Math.abs(delta) > 10000) {
      if (this._noScale) {
        this._noScale = false;
        return;
      }

      const scale = this.$.table.scrollTop / (this.$.table.scrollHeight - this.$.table.offsetHeight);
      const offset = scale * this._effectiveSize;
      this._vidxOffset = Math.round(offset - scale * this._virtualCount);
    } else {
      // Make sure user can always swipe/wheel scroll to the start and end
      const oldOffset = this._vidxOffset || 0;
      const threshold = 1000;
      const maxShift = 100; // At start

      if (this._scrollTop === 0) {
        this._vidxOffset = 0;

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(0);
        }
      } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
        this._vidxOffset -= Math.min(this._vidxOffset, maxShift);

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex + (oldOffset - this._vidxOffset));
        }

        this._noScale = true;
      } // At end


      const maxOffset = this._effectiveSize - this._virtualCount;

      if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
        this._vidxOffset = maxOffset;

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this._virtualCount);
        }
      } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
        this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex - (this._vidxOffset - oldOffset));
        }

        this._noScale = true;
      }
    }
  }

  _accessIronListAPI(cb) {
    this._warnPrivateAPIAccessAsyncEnabled = false;
    const returnValue = cb.apply(this);
    this._debouncerWarnPrivateAPIAccess = debounce_js.Debouncer.debounce(this._debouncerWarnPrivateAPIAccess, async_js.animationFrame, () => this._warnPrivateAPIAccessAsyncEnabled = true);
    return returnValue;
  }
  /* Allow iron-list to access its APIs from debounced callbacks without warns */


  _debounceRender(cb, asyncModule) {
    super._debounceRender(() => this._accessIronListAPI(cb), asyncModule);
  }
  /* Warn when iron-list APIs are being accessed directly */


  _warnPrivateAPIAccess(apiName) {
    if (this._warnPrivateAPIAccessAsyncEnabled) {
      console.warn(`Accessing private API (${apiName})!`);
    }
  }

  _render() {
    this._accessIronListAPI(super._render);
  }

  _createFocusBackfillItem() {
    /* Ignore */
  }

  _multiSelectionChanged() {
    /* Ignore */
  }

  clearSelection() {
    /* Ignore */
  }

  _itemsChanged() {
    /* Ignore */
  }

  _manageFocus() {
    /* Ignore */
  }

  _removeFocusedItem() {
    /* Ignore */
  }

  get _firstVisibleIndex() {
    return this._accessIronListAPI(() => super.firstVisibleIndex);
  }

  get _lastVisibleIndex() {
    return this._accessIronListAPI(() => super.lastVisibleIndex);
  }

  _scrollToIndex(index) {
    this._accessIronListAPI(() => this.scrollToIndex(index));
  }

  get firstVisibleIndex() {
    this._warnPrivateAPIAccess('firstVisibleIndex');

    return super.firstVisibleIndex;
  }

  set firstVisibleIndex(value) {
    this._warnPrivateAPIAccess('firstVisibleIndex');

    super.firstVisibleIndex = value;
  }

  get lastVisibleIndex() {
    this._warnPrivateAPIAccess('lastVisibleIndex');

    return super.lastVisibleIndex;
  }

  set lastVisibleIndex(value) {
    this._warnPrivateAPIAccess('lastVisibleIndex');

    super.lastVisibleIndex = value;
  }

  updateViewportBoundaries() {
    this._warnPrivateAPIAccess('updateViewportBoundaries');

    super.updateViewportBoundaries.apply(this, arguments);
  }

  _resizeHandler() {
    super._resizeHandler();

    flush_js.flush();
  }

}

customElements.define(GridScrollerElement.is, GridScrollerElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const A11yMixin = superClass => class A11yMixin extends superClass {
  static get observers() {
    return ['_a11yUpdateGridSize(size, _columnTree, _columnTree.*)'];
  }

  _a11yGetHeaderRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer || col.path || col.header)).length;
  }

  _a11yGetFooterRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer)).length;
  }

  _a11yUpdateGridSize(size, _columnTree) {
    if (size === undefined || _columnTree === undefined) {
      return;
    }

    const bodyColumns = _columnTree[_columnTree.length - 1];
    this.$.table.setAttribute('aria-rowcount', size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree));
    this.$.table.setAttribute('aria-colcount', bodyColumns && bodyColumns.length || 0);

    this._a11yUpdateHeaderRows();

    this._a11yUpdateFooterRows();
  }

  _a11yUpdateHeaderRows() {
    Array.from(this.$.header.children).forEach((headerRow, index) => headerRow.setAttribute('aria-rowindex', index + 1));
  }

  _a11yUpdateFooterRows() {
    Array.from(this.$.footer.children).forEach((footerRow, index) => footerRow.setAttribute('aria-rowindex', this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1));
  }

  _a11yUpdateRowRowindex(row, index) {
    row.setAttribute('aria-rowindex', index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
  }

  _a11yUpdateRowSelected(row, selected) {
    // Jaws reads selection only for rows, NVDA only for cells
    row.setAttribute('aria-selected', Boolean(selected));
    Array.from(row.children).forEach(cell => cell.setAttribute('aria-selected', Boolean(selected)));
  }

  _a11yUpdateRowLevel(row, level) {
    row.setAttribute('aria-level', level + 1);
  }

  _a11yUpdateRowDetailsOpened(row, detailsOpened) {
    Array.from(row.children).forEach(cell => {
      if (typeof detailsOpened === 'boolean') {
        cell.setAttribute('aria-expanded', detailsOpened);
      } else {
        if (cell.hasAttribute('aria-expanded')) {
          cell.removeAttribute('aria-expanded');
        }
      }
    });
  }

  _a11ySetRowDetailsCell(row, detailsCell) {
    Array.from(row.children).forEach(cell => {
      if (cell !== detailsCell) {
        cell.setAttribute('aria-controls', detailsCell.id);
      }
    });
  }

  _a11yUpdateCellColspan(cell, colspan) {
    cell.setAttribute('aria-colspan', Number(colspan));
  }

  _a11yUpdateSorters() {
    Array.from(this.querySelectorAll('vaadin-grid-sorter')).forEach(sorter => {
      let cellContent = sorter.parentNode;

      while (cellContent && cellContent.localName !== 'vaadin-grid-cell-content') {
        cellContent = cellContent.parentNode;
      }

      if (cellContent && cellContent.assignedSlot) {
        const cell = cellContent.assignedSlot.parentNode;
        cell.setAttribute('aria-sort', {
          'asc': 'ascending',
          'desc': 'descending'
        }[String(sorter.direction)] || 'none');
      }
    });
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const ActiveItemMixin = superClass => class ActiveItemMixin extends superClass {
  static get properties() {
    return {
      /**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       */
      activeItem: {
        type: Object,
        notify: true,
        value: null
      }
    };
  }

  ready() {
    super.ready();
    this.$.scroller.addEventListener('click', this._onClick.bind(this));
    this.addEventListener('cell-activate', this._activateItem.bind(this));
  }

  _activateItem(e) {
    const model = e.detail.model;
    const clickedItem = model ? model.item : null;

    if (clickedItem) {
      this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
    }
  } // we need to listen to click instead of tap because on mobile safari, the
  // document.activeElement has not been updated (focus has not been shifted)
  // yet at the point when tap event is being executed.


  _onClick(e) {
    if (e.defaultPrevented) {
      // Something has handled this click already, e. g., <vaadin-grid-sorter>
      return;
    }

    const path = e.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];

    if (!cell || cell.getAttribute('part').indexOf('details-cell') > -1) {
      return;
    }

    const cellContent = cell._content;
    const activeElement = this.getRootNode().activeElement;

    const cellContentHasFocus = cellContent.contains(activeElement) && ( // MSIE bug: flex children receive focus. Make type & attributes check.
    !this._ie || this._isFocusable(activeElement));

    if (!cellContentHasFocus && !this._isFocusable(e.target)) {
      this.dispatchEvent(new CustomEvent('cell-activate', {
        detail: {
          model: this.__getRowModel(cell.parentElement)
        }
      }));
    }
  }

  _isFocusable(target) {
    if (!target.parentNode) {
      return false;
    }

    const focusables = Array.from(target.parentNode.querySelectorAll('[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]')).filter(element => element.getAttribute('part') !== 'cell body-cell');
    const isFocusableElement = focusables.indexOf(target) !== -1;
    return !target.disabled && isFocusableElement;
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ArrayDataProviderMixin = superClass => class ArrayDataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing the items which will be stamped to the column template
       * instances.
       */
      items: Array
    };
  }

  static get observers() {
    return ['_itemsChanged(items, items.*, isAttached)'];
  }

  _itemsChanged(items, splices, isAttached) {
    if (!isAttached) {
      return;
    }

    if (!Array.isArray(items)) {
      if (items === undefined || items === null) {
        this.size = 0;
      }

      if (this.dataProvider === this._arrayDataProvider) {
        this.dataProvider = undefined;
      }

      return;
    }

    this.size = items.length;
    this.dataProvider = this.dataProvider || this._arrayDataProvider;
    this.clearCache();

    this._ensureFirstPageLoaded();
  }

  _arrayDataProvider(opts, cb) {
    let items = (Array.isArray(this.items) ? this.items : []).slice(0);

    if (this._filters && this._checkPaths(this._filters, 'filtering', items)) {
      items = this._filter(items);
    }

    this.size = items.length;

    if (opts.sortOrders.length && this._checkPaths(this._sorters, 'sorting', items)) {
      items = items.sort(this._multiSort.bind(this));
    }

    const start = opts.page * opts.pageSize;
    const end = start + opts.pageSize;
    const slice = items.slice(start, end);
    cb(slice, items.length);
  }
  /**
   * Check array of filters/sorters for paths validity, console.warn invalid items
   * @param {Array}  arrayToCheck The array of filters/sorters to check
   * @param {string} action       The name of action to include in warning (filtering, sorting)
   * @param {Array}  items
   */


  _checkPaths(arrayToCheck, action, items) {
    if (!items.length) {
      return false;
    }

    let result = true;

    for (var i in arrayToCheck) {
      const path = arrayToCheck[i].path; // skip simple paths

      if (!path || path.indexOf('.') === -1) {
        continue;
      }

      const parentProperty = path.replace(/\.[^\.]*$/, ''); // a.b.c -> a.b

      if (polymerLegacy_js.Base.get(parentProperty, items[0]) === undefined) {
        console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
        result = false;
      }
    }

    return result;
  }

  _multiSort(a, b) {
    return this._sorters.map(sort => {
      if (sort.direction === 'asc') {
        return this._compare(polymerLegacy_js.Base.get(sort.path, a), polymerLegacy_js.Base.get(sort.path, b));
      } else if (sort.direction === 'desc') {
        return this._compare(polymerLegacy_js.Base.get(sort.path, b), polymerLegacy_js.Base.get(sort.path, a));
      }

      return 0;
    }).reduce((p, n) => {
      return p ? p : n;
    }, 0);
  }

  _normalizeEmptyValue(value) {
    if ([undefined, null].indexOf(value) >= 0) {
      return '';
    } else if (isNaN(value)) {
      return value.toString();
    } else {
      return value;
    }
  }

  _compare(a, b) {
    a = this._normalizeEmptyValue(a);
    b = this._normalizeEmptyValue(b);

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  }

  _filter(items) {
    return items.filter((item, index) => {
      return this._filters.filter(filter => {
        const value = this._normalizeEmptyValue(polymerLegacy_js.Base.get(filter.path, item));

        const filterValueLowercase = this._normalizeEmptyValue(filter.value).toString().toLowerCase();

        return value.toString().toLowerCase().indexOf(filterValueLowercase) === -1;
      }).length === 0;
    });
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ColumnResizingMixin = superClass => class ColumnResizingMixin extends gestureEventListeners_js.GestureEventListeners(superClass) {
  ready() {
    super.ready();
    const scroller = this.$.scroller;
    gestures_js.addListener(scroller, 'track', this._onHeaderTrack.bind(this)); // Disallow scrolling while resizing

    scroller.addEventListener('touchmove', e => scroller.hasAttribute('column-resizing') && e.preventDefault()); // Disable contextmenu on any resize separator.

    scroller.addEventListener('contextmenu', e => e.target.getAttribute('part') == 'resize-handle' && e.preventDefault()); // Disable native cell focus when resizing

    scroller.addEventListener('mousedown', e => e.target.getAttribute('part') === 'resize-handle' && e.preventDefault());
  }

  _onHeaderTrack(e) {
    const handle = e.target;

    if (handle.getAttribute('part') === 'resize-handle') {
      const cell = handle.parentElement;
      let column = cell._column;

      this._toggleAttribute('column-resizing', true, this.$.scroller); // Get the target column to resize


      while (column.localName === 'vaadin-grid-column-group') {
        column = Array.prototype.slice.call(column._childColumns, 0).sort(function (a, b) {
          return a._order - b._order;
        }).filter(function (column) {
          return !column.hidden;
        }).pop();
      }

      const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
      var targetCell = columnRowCells.filter(cell => cell._column === column)[0]; // Resize the target column

      if (targetCell.offsetWidth) {
        var style = window.getComputedStyle(targetCell);
        var minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
        column.width = Math.max(minWidth, targetCell.offsetWidth + e.detail.x - targetCell.getBoundingClientRect().right) + 'px';
        column.flexGrow = 0;
      } // Fix width and flex-grow for all preceding columns


      columnRowCells.sort(function (a, b) {
        return a._column._order - b._column._order;
      }).forEach(function (cell, index, array) {
        if (index < array.indexOf(targetCell)) {
          cell._column.width = cell.offsetWidth + 'px';
          cell._column.flexGrow = 0;
        }
      });

      if (e.detail.state === 'end') {
        this._toggleAttribute('column-resizing', false, this.$.scroller);
      } // Notify resize


      this._resizeHandler();
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const ItemCache = class ItemCache {
  constructor(grid, parentCache, parentItem) {
    this.grid = grid;
    this.parentCache = parentCache;
    this.parentItem = parentItem;
    this.itemCaches = {};
    this.items = {};
    this.effectiveSize = 0;
    this.size = 0;
    this.pendingRequests = {};
  }

  isLoading() {
    return Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter(index => {
      return this.itemCaches[index].isLoading();
    })[0];
  }

  getItemForIndex(index) {
    const {
      cache,
      scaledIndex
    } = this.getCacheAndIndex(index);
    return cache.items[scaledIndex];
  }

  updateSize() {
    this.effectiveSize = !this.parentItem || this.grid._isExpanded(this.parentItem) ? this.size + Object.keys(this.itemCaches).reduce((prev, curr) => {
      const subCache = this.itemCaches[curr];
      subCache.updateSize();
      return prev + subCache.effectiveSize;
    }, 0) : 0;
  }

  ensureSubCacheForScaledIndex(scaledIndex) {
    if (!this.itemCaches[scaledIndex]) {
      const subCache = new ItemCache(this.grid, this, this.items[scaledIndex]);
      this.itemCaches[scaledIndex] = subCache;

      this.grid._loadPage(0, subCache);
    }
  }

  getCacheAndIndex(index) {
    let thisLevelIndex = index;
    const keys = Object.keys(this.itemCaches);

    for (var i = 0; i < keys.length; i++) {
      const expandedIndex = Number(keys[i]);
      const subCache = this.itemCaches[expandedIndex];

      if (thisLevelIndex <= expandedIndex) {
        return {
          cache: this,
          scaledIndex: thisLevelIndex
        };
      } else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) {
        return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
      }

      thisLevelIndex -= subCache.effectiveSize;
    }

    return {
      cache: this,
      scaledIndex: thisLevelIndex
    };
  }

};
/**
 * @polymerMixin
 */

const DataProviderMixin = superClass => class DataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * Number of items fetched at a time from the dataprovider.
       */
      pageSize: {
        type: Number,
        value: 50,
        observer: '_pageSizeChanged'
      },

      /**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       */
      dataProvider: {
        type: Object,
        notify: true,
        observer: '_dataProviderChanged'
      },

      /**
       * `true` while data is being requested from the data provider.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },
      _cache: {
        type: Object,
        value: function () {
          const cache = new ItemCache(this);
          return cache;
        }
      },

      /**
       * Path to an item sub-property that identifies the item.
       */
      itemIdPath: {
        type: String,
        value: null
      },

      /**
       * An array that contains the expanded items.
       */
      expandedItems: {
        type: Object,
        notify: true,
        value: () => []
      }
    };
  }

  static get observers() {
    return ['_sizeChanged(size)', '_expandedItemsChanged(expandedItems.*)'];
  }

  _sizeChanged(size) {
    const delta = size - this._cache.size;
    this._cache.size += delta;
    this._cache.effectiveSize += delta;
    this._effectiveSize = this._cache.effectiveSize;
  }

  _updateRowItem(item, el) {
    el.children.forEach(cell => {
      cell._instance && (cell._instance.item = item);
    });
  }

  _getItem(index, el) {
    if (index >= this._effectiveSize) {
      return;
    }

    el.index = index;

    const {
      cache,
      scaledIndex
    } = this._cache.getCacheAndIndex(index);

    const item = cache.items[scaledIndex];

    if (item) {
      this._toggleAttribute('loading', false, el);

      this._updateItem(el, item);

      if (this._isExpanded(item)) {
        cache.ensureSubCacheForScaledIndex(scaledIndex);
      }
    } else {
      this._toggleAttribute('loading', true, el);

      this._loadPage(this._getPageForIndex(scaledIndex), cache);
    }
  }

  _pagesForPhysicalItems() {
    // TODO: potentially heavy operation to run first visible index,
    // reconsider if performance issues occur on data binding / scrolling.
    // TODO: _vidxOffset shouldn't be read from here.
    const firstVisiblePage = this._getPageForIndex(this._firstVisibleIndex + this._vidxOffset);

    return [firstVisiblePage].concat(this._physicalItems.filter(row => row.index).items(row => this._getPageForIndex(row.index))).reduce((prev, curr) => {
      if (prev.indexOf(curr) === -1) {
        prev.push(curr);
      }

      return prev;
    }, []);
  }

  _expandedInstanceChangedCallback(inst, value) {
    if (inst.item === undefined) {
      return;
    }

    if (value) {
      this.expandItem(inst.item);
    } else {
      this.collapseItem(inst.item);
    }
  }
  /**
   * Returns a value that identifies the item. Uses `itemIdPath` if available.
   * Can be customized by overriding.
   */


  getItemId(item) {
    return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
  }

  _isExpanded(item) {
    return this.expandedItems && this._getItemIndexInArray(item, this.expandedItems) > -1;
  }

  _expandedItemsChanged(e) {
    this._cache.updateSize();

    this._effectiveSize = this._cache.effectiveSize;

    this._assignModels();
  }
  /**
   * Expands the given item tree.
   */


  expandItem(item) {
    if (!this._isExpanded(item)) {
      this.push('expandedItems', item);
    }
  }
  /**
   * Collapses the given item tree.
   */


  collapseItem(item) {
    if (this._isExpanded(item)) {
      this.splice('expandedItems', this._getItemIndexInArray(item, this.expandedItems), 1);
    }
  }

  _getIndexLevel(index) {
    let {
      cache
    } = this._cache.getCacheAndIndex(index);

    let level = 0;

    while (cache.parentCache) {
      cache = cache.parentCache;
      level++;
    }

    return level;
  }

  _canPopulate() {
    return this._hasData && this._columnTree;
  }

  _loadPage(page, cache) {
    // make sure same page isn't requested multiple times.
    if (!cache.pendingRequests[page] && this.dataProvider) {
      this._setLoading(true);

      cache.pendingRequests[page] = true;
      const params = {
        page,
        pageSize: this.pageSize,
        sortOrders: this._mapSorters(),
        filters: this._mapFilters(),
        parentItem: cache.parentItem
      };
      this.dataProvider(params, (items, size) => {
        if (size !== undefined) {
          cache.size = size;
        } else {
          if (params.parentItem) {
            cache.size = items.length;
          }
        } // Populate the cache with new items


        items.forEach((item, itemsIndex) => {
          const itemIndex = page * this.pageSize + itemsIndex;
          cache.items[itemIndex] = item;

          if (this._isExpanded(item)) {
            // Force synchronous data request for expanded item sub-cache
            cache.ensureSubCacheForScaledIndex(itemIndex);
          }
        });
        this._hasData = true;
        delete cache.pendingRequests[page];

        if (!this._cache.isLoading()) {
          // All active requests have finished, update the effective size and rows
          this._setLoading(false);

          this._cache.updateSize();

          this._effectiveSize = this._cache.effectiveSize;
          Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => {
            const cachedItem = this._cache.getItemForIndex(row.index);

            if (cachedItem) {
              this._toggleAttribute('loading', false, row);

              this._updateItem(row, cachedItem);
            }
          });

          this._increasePoolIfNeeded(0);
        }

        this.__setInitialColumnWidths();
      });
    }
  }

  _getPageForIndex(index) {
    return Math.floor(index / this.pageSize);
  }
  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */


  clearCache() {
    this._cache = new ItemCache(this);
    Array.from(this.$.items.children).forEach(row => {
      Array.from(row.children).forEach(cell => {
        // Force data system to pick up subproperty changes
        cell._instance && cell._instance._setPendingProperty('item', {}, false);
      });
    });
    this._cache.size = this.size || 0;

    this._cache.updateSize();

    this._hasData = false;

    this._assignModels();

    if (!this._effectiveSize) {
      this._loadPage(0, this._cache);
    }
  }

  _flushItemsDebouncer() {
    if (this._debouncerLoad) {
      this._debouncerLoad.flush();
    }
  }

  _pageSizeChanged(pageSize, oldPageSize) {
    if (oldPageSize !== undefined && pageSize !== oldPageSize) {
      this.clearCache();
    }
  }

  _checkSize() {
    if (this.size === undefined && this._effectiveSize === 0) {
      console.warn('The <vaadin-grid> needs the total number of items' + ' in order to display rows. Set the total number of items' + ' to the `size` property, or provide the total number of items' + ' in the second argument of the `dataProvider`’s `callback` call.');
    }
  }

  _dataProviderChanged(dataProvider, oldDataProvider) {
    if (oldDataProvider !== undefined) {
      this.clearCache();
    }

    if (dataProvider && this.items && this.items.length) {
      // Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
      this._scrollToIndex(this._firstVisibleIndex);
    }

    this._ensureFirstPageLoaded();

    this._debouncerCheckSize = debounce_js.Debouncer.debounce(this._debouncerCheckSize, async_js.timeOut.after(2000), this._checkSize.bind(this));

    this._scrollHandler();
  }

  _ensureFirstPageLoaded() {
    if (!this._hasData) {
      // load data before adding rows to make sure they have content when
      // rendered for the first time.
      this._loadPage(0, this._cache, () => {
        const hadData = this._hasData;
        this._hasData = true;

        if (!hadData) {
          this.notifyResize();
        }
      });
    }
  }

  _itemsEqual(item1, item2) {
    return this.getItemId(item1) === this.getItemId(item2);
  }

  _getItemIndexInArray(item, array) {
    let result = -1;
    array.forEach((i, idx) => {
      if (this._itemsEqual(i, item)) {
        result = idx;
      }
    });
    return result;
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const DynamicColumnsMixin = superClass => class DynamicColumnsMixin extends superClass {
  ready() {
    super.ready();

    this._addNodeObserver();
  }

  _hasColumnGroups(columns) {
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].localName === 'vaadin-grid-column-group') {
        return true;
      }
    }

    return false;
  }

  _getChildColumns(el) {
    return flattenedNodesObserver_js.FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement);
  }

  _flattenColumnGroups(columns) {
    return columns.map(col => {
      if (col.localName === 'vaadin-grid-column-group') {
        return this._getChildColumns(col);
      } else {
        return [col];
      }
    }).reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  }

  _getColumnTree() {
    var rootColumns = flattenedNodesObserver_js.FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement);
    var _columnTree = [];

    for (var c = rootColumns;;) {
      _columnTree.push(c);

      if (!this._hasColumnGroups(c)) {
        break;
      }

      c = this._flattenColumnGroups(c);
    }

    return _columnTree;
  }

  _updateColumnTree() {
    var columnTree = this._getColumnTree();

    if (!this._arrayEquals(columnTree, this._columnTree)) {
      this._columnTree = columnTree;
    }
  }

  _addNodeObserver() {
    this._observer = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      const rowDetailsTemplate = info.addedNodes.filter(n => n.localName === 'template' && n.classList.contains('row-details'))[0];

      if (rowDetailsTemplate && this._rowDetailsTemplate !== rowDetailsTemplate) {
        this._rowDetailsTemplate = rowDetailsTemplate;
      }

      if (info.addedNodes.filter(this._isColumnElement).length > 0 || info.removedNodes.filter(this._isColumnElement).length > 0) {
        this._updateColumnTree();
      }

      this._debouncerCheckImports = debounce_js.Debouncer.debounce(this._debouncerCheckImports, async_js.timeOut.after(2000), this._checkImports.bind(this));

      this._ensureFirstPageLoaded();
    });
  }

  _arrayEquals(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length != arr2.length) {
      return false;
    }

    for (var i = 0, l = arr1.length; i < l; i++) {
      // Check if we have nested arrays
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this._arrayEquals(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] != arr2[i]) {
        return false;
      }
    }

    return true;
  }

  _checkImports() {
    ['vaadin-grid-column-group', 'vaadin-grid-filter', 'vaadin-grid-filter-column', 'vaadin-grid-tree-toggle', 'vaadin-grid-selection-column', 'vaadin-grid-sort-column', 'vaadin-grid-sorter'].forEach(elementName => {
      var element = this.querySelector(elementName);

      if (element && !(element instanceof polymerElement_js.PolymerElement)) {
        console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
      }
    });
  }

  _updateFirstAndLastColumn() {
    Array.from(this.shadowRoot.querySelectorAll('tr')).forEach(row => this._updateFirstAndLastColumnForRow(row));
  }

  _updateFirstAndLastColumnForRow(row) {
    Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((a, b) => {
      return a._column._order - b._column._order;
    }).forEach((cell, cellIndex, children) => {
      this._toggleAttribute('first-column', cellIndex === 0, cell);

      this._toggleAttribute('last-column', cellIndex === children.length - 1, cell);
    });
  }

  _isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
  }

};

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const EventContextMixin = superClass => class EventContextMixin extends superClass {
  /**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   */
  getEventContext(event) {
    const context = {};
    const path = event.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];

    if (!cell) {
      return context;
    }

    context.section = ['body', 'header', 'footer', 'details'].filter(section => cell.getAttribute('part').indexOf(section) > -1)[0];

    if (cell._column) {
      context.column = cell._column;
    }

    if (context.section === 'body' || context.section === 'details') {
      Object.assign(context, this.__getRowModel(cell.parentElement));
    }

    return context;
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const FilterMixin = superClass => class FilterMixin extends superClass {
  static get properties() {
    return {
      _filters: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('filter-changed', this._filterChanged.bind(this));
  }

  _filterChanged(e) {
    if (this._filters.indexOf(e.target) === -1) {
      this._filters.push(e.target);
    }

    e.stopPropagation();

    if (this.dataProvider) {
      this.clearCache();
    }
  }

  _mapFilters() {
    return this._filters.map(filter => {
      return {
        path: filter.path,
        value: filter.value
      };
    });
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * `vaadin-grid-templatizer` is a helper element for the `vaadin-grid` that is preparing and
 * stamping instances of cells and columns templates
 *
 * @memberof Vaadin
 * @private
 */

class GridTemplatizer extends class extends polymerElement_js.PolymerElement {} {
  static get is() {
    return 'vaadin-grid-templatizer';
  }

  static get properties() {
    return {
      dataHost: Object,
      template: Object,
      _templateInstances: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _parentPathValues: {
        value: function () {
          return {};
        }
      },
      _grid: Object
    };
  }

  static get observers() {
    return ['_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)'];
  }

  constructor() {
    super();
    this._instanceProps = {
      detailsOpened: true,
      index: true,
      item: true,
      selected: true,
      expanded: true,
      level: true
    };
  }

  createInstance() {
    this._ensureTemplatized();

    const instance = new this._TemplateClass({});
    this.addInstance(instance);
    return instance;
  }

  addInstance(instance) {
    if (this._templateInstances.indexOf(instance) === -1) {
      this._templateInstances.push(instance);

      requestAnimationFrame(() => this.notifyPath('_templateInstances.*', this._templateInstances));
    }
  }

  removeInstance(instance) {
    const index = this._templateInstances.indexOf(instance);

    this.splice('_templateInstances', index, 1);
  }

  _ensureTemplatized() {
    if (!this._TemplateClass) {
      this._TemplateClass = templatize_js.templatize(this.template, this, {
        instanceProps: this._instanceProps,
        parentModel: true,
        forwardHostProp: function (prop, value) {
          this._forwardParentProp(prop, value);

          if (this._templateInstances) {
            this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
          }
        },
        notifyInstanceProp: function (inst, prop, value) {
          if (prop === 'index' || prop === 'item') {
            // We don’t need a change notification for these.
            return;
          }

          const originalProp = `__${prop}__`; // Notify for only user-action changes, not for scrolling updates. E. g.,
          // if `detailsOpened` is different from `__detailsOpened__`, which was set during render.

          if (inst[originalProp] === value) {
            return;
          }

          inst[originalProp] = value;
          const row = Array.from(this._grid.$.items.children).filter(row => this._grid._itemsEqual(row._item, inst.item))[0];

          if (row) {
            Array.from(row.children).forEach(cell => {
              if (cell._instance) {
                cell._instance[originalProp] = value;

                cell._instance.notifyPath(prop, value);
              }
            });
          }

          const itemPrefix = 'item.';

          if (Array.isArray(this._grid.items) && prop.indexOf(itemPrefix) === 0) {
            const itemsIndex = this._grid.items.indexOf(inst.item);

            const path = prop.slice(itemPrefix.length);

            this._grid.notifyPath(`items.${itemsIndex}.${path}`, value);
          }

          const gridCallback = `_${prop}InstanceChangedCallback`;

          if (this._grid && this._grid[gridCallback]) {
            this._grid[gridCallback](inst, value);
          }
        }
      });
    }
  }

  _forwardParentProp(prop, value) {
    this._parentPathValues[prop] = value;

    this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
  }

  _templateInstancesChanged(t, p) {
    let index, count;

    if (t.path === '_templateInstances') {
      // Iterate all instances
      index = 0;
      count = this._templateInstances.length;
    } else if (t.path === '_templateInstances.splices') {
      // Iterate only new instances
      index = t.value.index;
      count = t.value.addedCount;
    } else {
      return;
    }

    Object.keys(this._parentPathValues || {}).forEach(keyName => {
      for (var i = index; i < index + count; i++) {
        this._templateInstances[i].set(keyName, this._parentPathValues[keyName]);
      }
    });
  }

}

customElements.define(GridTemplatizer.is, GridTemplatizer);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const RowDetailsMixin = superClass => class RowDetailsMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing references to items with open row details.
       */
      detailsOpenedItems: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _rowDetailsTemplate: Object,

      /**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       */
      rowDetailsRenderer: Function,
      _detailsCells: {
        type: Array
      }
    };
  }

  static get observers() {
    return ['_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)', '_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)'];
  }

  _rowDetailsTemplateOrRendererChanged(rowDetailsTemplate, rowDetailsRenderer) {
    if (rowDetailsTemplate && rowDetailsRenderer) {
      throw new Error('You should only use either a renderer or a template for row details');
    }

    if (rowDetailsTemplate || rowDetailsRenderer) {
      if (rowDetailsTemplate && !rowDetailsTemplate.templatizer) {
        var templatizer = new GridTemplatizer();
        templatizer._grid = this;
        templatizer.dataHost = this.dataHost;
        templatizer.template = rowDetailsTemplate;
        rowDetailsTemplate.templatizer = templatizer;
      }

      if (this._columnTree) {
        // Only update the rows if the column tree has already been initialized
        Array.from(this.$.items.children).forEach(row => {
          if (!row.querySelector('[part~=details-cell]')) {
            this._updateRow(row, this._columnTree[this._columnTree.length - 1]);

            this._a11yUpdateRowDetailsOpened(row, false);
          } // Clear any old template instances


          delete row.querySelector('[part~=details-cell]')._instance;
        });
      }

      if (this.detailsOpenedItems.length) {
        Array.from(this.$.items.children).forEach(this._toggleDetailsCell, this);

        this._update();
      }
    }
  }

  _detailsOpenedItemsChanged(changeRecord, rowDetailsTemplate, rowDetailsRenderer) {
    if (changeRecord.path === 'detailsOpenedItems.length' || !changeRecord.value) {
      // Let’s avoid duplicate work of both “.splices” and “.length” updates.
      return;
    }

    Array.from(this.$.items.children).forEach(row => {
      this._toggleDetailsCell(row, row._item);

      this._a11yUpdateRowDetailsOpened(row, this._isDetailsOpened(row._item));

      this._toggleAttribute('details-opened', this._isDetailsOpened(row._item), row);
    });
  }

  _configureDetailsCell(cell) {
    cell.setAttribute('part', 'cell details-cell'); // Freeze the details cell, so that it does not scroll horizontally
    // with the normal cells. This way it looks less weird.

    this._toggleAttribute('frozen', true, cell);
  }

  _toggleDetailsCell(row, item) {
    const cell = row.querySelector('[part~="details-cell"]');

    if (!cell) {
      return;
    }

    const detailsHidden = !this._isDetailsOpened(item);
    const hiddenChanged = !!cell.hidden !== detailsHidden;

    if (!cell._instance && !cell._renderer || cell.hidden !== detailsHidden) {
      cell.hidden = detailsHidden;

      if (detailsHidden) {
        row.style.removeProperty('padding-bottom');
      } else {
        if (this.rowDetailsRenderer) {
          cell._renderer = this.rowDetailsRenderer;

          cell._renderer.call(this, cell._content, this, {
            index: row.index,
            item: item
          });
        } else if (this._rowDetailsTemplate && !cell._instance) {
          // Stamp the template
          cell._instance = this._rowDetailsTemplate.templatizer.createInstance();
          cell._content.innerHTML = '';

          cell._content.appendChild(cell._instance.root);

          this._updateItem(row, item);
        }

        flush_js.flush();
        row.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);
        requestAnimationFrame(() => this.notifyResize());
      }
    }

    if (hiddenChanged) {
      this._updateMetrics();

      this._positionItems();
    }
  }

  _updateDetailsCellHeights() {
    Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(cell => {
      cell.parentElement.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);
    });
  }

  _isDetailsOpened(item) {
    return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
  }
  /**
   * Open the details row of a given item.
   */


  openItemDetails(item) {
    if (!this._isDetailsOpened(item)) {
      this.push('detailsOpenedItems', item);
    }
  }
  /**
   * Close the details row of a given item.
   */


  closeItemDetails(item) {
    if (this._isDetailsOpened(item)) {
      this.splice('detailsOpenedItems', this._getItemIndexInArray(item, this.detailsOpenedItems), 1);
    }
  }

  _detailsOpenedInstanceChangedCallback(instance, value) {
    if (super._detailsOpenedInstanceChangedCallback) {
      super._detailsOpenedInstanceChangedCallback(instance, value);
    }

    if (value) {
      this.openItemDetails(instance.item);
    } else {
      this.closeItemDetails(instance.item);
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ScrollMixin = superClass => class ScrollMixin extends superClass {
  get _timeouts() {
    return {
      SCROLL_PERIOD: 1000,
      WHEEL_SCROLLING: 200,
      SCROLLING: 100,
      IGNORE_WHEEL: 500
    };
  }

  static get properties() {
    return {
      // Cached array of frozen cells
      _frozenCells: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _scrollbarWidth: {
        type: Number,
        value: function () {
          // Create the measurement node
          var scrollDiv = document.createElement('div');
          scrollDiv.style.width = '100px';
          scrollDiv.style.height = '100px';
          scrollDiv.style.overflow = 'scroll';
          scrollDiv.style.position = 'absolute';
          scrollDiv.style.top = '-9999px';
          document.body.appendChild(scrollDiv); // Get the scrollbar width

          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Delete the DIV

          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        }
      },
      _rowWithFocusedElement: Element,
      _deltaYAcc: {
        type: Number,
        value: 0
      }
    };
  }

  static get observers() {
    return ['_scrollHeightUpdated(_estScrollHeight)', '_scrollViewportHeightUpdated(_viewportHeight)'];
  } // Override (from iron-scroll-target-behavior) to avoid document scroll


  set _scrollTop(top) {
    this.$.table.scrollTop = top;
  }

  get _scrollTop() {
    return this.$.table.scrollTop;
  }

  constructor() {
    super();
    this._scrollLineHeight = this._getScrollLineHeight();
  }
  /**
   * @returns {Number|undefined} - The browser's default font-size in pixels
   */


  _getScrollLineHeight() {
    const el = document.createElement('div');
    el.style.fontSize = 'initial';
    el.style.display = 'none';
    document.body.appendChild(el);
    const fontSize = window.getComputedStyle(el).fontSize;
    document.body.removeChild(el);
    return fontSize ? window.parseInt(fontSize) : undefined;
  }

  _scrollViewportHeightUpdated(_viewportHeight) {
    this._scrollPageHeight = _viewportHeight - this.$.header.clientHeight - this.$.footer.clientHeight - this._scrollLineHeight;
  }

  ready() {
    super.ready();
    this.scrollTarget = this.$.table;
    this.addEventListener('wheel', e => {
      this._wheelScrolling = true;
      this._debouncerWheelScrolling = debounce_js.Debouncer.debounce(this._debouncerWheelScrolling, async_js.timeOut.after(this._timeouts.WHEEL_SCROLLING), () => this._wheelScrolling = false);

      this._onWheel(e);
    });
    this.$.table.addEventListener('scroll', e => {
      if (this.$.outerscroller.outerScrolling) {
        e.stopImmediatePropagation();
      }
    }, true);
    this.$.items.addEventListener('focusin', e => {
      const itemsIndex = e.composedPath().indexOf(this.$.items);
      this._rowWithFocusedElement = e.composedPath()[itemsIndex - 1];
    });
    this.$.items.addEventListener('focusout', () => this._rowWithFocusedElement = undefined);
  }

  _onWheel(e) {
    if (e.ctrlKey || this._hasScrolledAncestor(e.target, e.deltaX, e.deltaY)) {
      return;
    }

    const table = this.$.table;
    let deltaY = e.deltaY;

    if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      // Scrolling by "lines of text" instead of pixels
      deltaY *= this._scrollLineHeight;
    } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      // Scrolling by "pages" instead of pixels
      deltaY *= this._scrollPageHeight;
    }

    if (this._wheelAnimationFrame) {
      // Skip new wheel events while one is being processed
      this._deltaYAcc += deltaY;
      e.preventDefault();
      return;
    }

    deltaY += this._deltaYAcc;
    this._deltaYAcc = 0;
    this._wheelAnimationFrame = true;
    this._debouncerWheelAnimationFrame = debounce_js.Debouncer.debounce(this._debouncerWheelAnimationFrame, async_js.animationFrame, () => this._wheelAnimationFrame = false);
    var momentum = Math.abs(e.deltaX) + Math.abs(deltaY);

    if (this._canScroll(table, e.deltaX, deltaY)) {
      e.preventDefault();
      table.scrollTop += deltaY;
      table.scrollLeft += e.deltaX;

      this._scrollHandler();

      this._hasResidualMomentum = true;
      this._ignoreNewWheel = true;
      this._debouncerIgnoreNewWheel = debounce_js.Debouncer.debounce(this._debouncerIgnoreNewWheel, async_js.timeOut.after(this._timeouts.IGNORE_WHEEL), () => this._ignoreNewWheel = false);
    } else if (this._hasResidualMomentum && momentum <= this._previousMomentum || this._ignoreNewWheel) {
      e.preventDefault();
    } else if (momentum > this._previousMomentum) {
      this._hasResidualMomentum = false;
    }

    this._previousMomentum = momentum;
  }
  /**
   * Determines if the element has an ancestor prior to this
   * cell content that handles the scroll delta
   */


  _hasScrolledAncestor(el, deltaX, deltaY) {
    if (el.localName === 'vaadin-grid-cell-content') {
      return false;
    } else if (this._canScroll(el, deltaX, deltaY) && ['auto', 'scroll'].indexOf(getComputedStyle(el).overflow) !== -1) {
      return true;
    } else if (el !== this && el.parentElement) {
      return this._hasScrolledAncestor(el.parentElement, deltaX, deltaY);
    }
  }
  /**
   * Determines if the the given scroll deltas can be applied to the element
   * (fully or partially)
   */


  _canScroll(el, deltaX, deltaY) {
    return deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight || deltaY < 0 && el.scrollTop > 0 || deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth || deltaX < 0 && el.scrollLeft > 0;
  }

  _scheduleScrolling() {
    if (!this._scrollingFrame) {
      // Defer setting state attributes to avoid Edge hiccups
      this._scrollingFrame = requestAnimationFrame(() => this._toggleAttribute('scrolling', true, this.$.scroller));
    }

    this._debounceScrolling = debounce_js.Debouncer.debounce(this._debounceScrolling, async_js.timeOut.after(this._timeouts.SCROLLING), () => {
      cancelAnimationFrame(this._scrollingFrame);
      delete this._scrollingFrame;

      this._toggleAttribute('scrolling', false, this.$.scroller);

      if (!this.$.outerscroller.outerScrolling) {
        this._reorderRows();
      }
    });

    if (!this._scrollPeriodFrame) {
      this._scrollPeriodFrame = requestAnimationFrame(() => this._toggleAttribute('scroll-period', true, this.$.scroller));
    }

    this._debounceScrollPeriod = debounce_js.Debouncer.debounce(this._debounceScrollPeriod, async_js.timeOut.after(this._timeouts.SCROLL_PERIOD), () => {
      cancelAnimationFrame(this._scrollPeriodFrame);
      delete this._scrollPeriodFrame;

      this._toggleAttribute('scroll-period', false, this.$.scroller);
    });
  }

  _afterScroll() {
    this._translateStationaryElements();

    if (!this.hasAttribute('reordering')) {
      this._scheduleScrolling();
    }

    const os = this.$.outerscroller;

    if (!this._ios && (this._wheelScrolling || os.passthrough)) {
      os.syncOuterScroller();
    }

    if (this._ios) {
      // Enable vertical rubberband feedback
      const overScroll = Math.max(-os.scrollTop, 0) || Math.min(0, os.scrollHeight - os.scrollTop - os.offsetHeight);
      this.$.items.style.transform = `translateY(${overScroll}px)`;
    }

    this._updateOverflow();
  }

  _updateOverflow() {
    // Set overflow styling attributes
    let overflow = '';
    const table = this.$.table;

    if (table.scrollTop < table.scrollHeight - table.clientHeight) {
      overflow += ' bottom';
    }

    if (table.scrollTop > 0) {
      overflow += ' top';
    }

    if (table.scrollLeft < table.scrollWidth - table.clientWidth) {
      overflow += ' right';
    }

    if (table.scrollLeft > 0) {
      overflow += ' left';
    }

    this._debounceOverflow = debounce_js.Debouncer.debounce(this._debounceOverflow, async_js.animationFrame, () => {
      const value = overflow.trim();

      if (value.length > 0 && this.getAttribute('overflow') !== value) {
        this.setAttribute('overflow', value);
      } else if (value.length == 0 && this.hasAttribute('overflow')) {
        this.removeAttribute('overflow');
      }
    });
  } // correct order needed for preserving correct tab order between cell contents.


  _reorderRows() {
    const body = this.$.items;
    const items = body.querySelectorAll('tr');

    if (!items.length) {
      return;
    }

    const adjustedVirtualStart = this._virtualStart + this._vidxOffset; // Which row to use as a target?

    const targetRow = this._rowWithFocusedElement || Array.from(items).filter(row => !row.hidden)[0];

    if (!targetRow) {
      // All rows are hidden, don't reorder
      return;
    } // Where the target row should be?


    const targetPhysicalIndex = targetRow.index - adjustedVirtualStart; // Reodrer the DOM elements to keep the target row at the target physical index

    const delta = Array.from(items).indexOf(targetRow) - targetPhysicalIndex;

    if (delta > 0) {
      for (let i = 0; i < delta; i++) {
        body.appendChild(items[i]);
      }
    } else if (delta < 0) {
      for (let i = items.length + delta; i < items.length; i++) {
        body.insertBefore(items[i], items[0]);
      }
    }
  }

  _frozenCellsChanged() {
    this._debouncerCacheElements = debounce_js.Debouncer.debounce(this._debouncerCacheElements, async_js.microTask, () => {
      Array.from(this.root.querySelectorAll('[part~="cell"]')).forEach(function (cell) {
        cell.style.transform = '';
      });
      this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll('[frozen]'));

      this._translateStationaryElements();
    });

    this._updateLastFrozen();
  }

  _updateLastFrozen() {
    if (!this._columnTree) {
      return;
    }

    const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);

    columnsRow.sort((a, b) => {
      return a._order - b._order;
    });
    const lastFrozen = columnsRow.reduce((prev, col, index) => {
      col._lastFrozen = false;
      return col.frozen && !col.hidden ? index : prev;
    }, undefined);

    if (lastFrozen !== undefined) {
      columnsRow[lastFrozen]._lastFrozen = true;
    }
  }

  _translateStationaryElements() {
    if (this._edge && !this._scrollbarWidth) {
      // Fixed mode (Tablet Edge)
      this.$.items.style.transform = this._getTranslate(-this._scrollLeft || 0, -this._scrollTop || 0);
      this.$.footer.style.transform = this.$.header.style.transform = this._getTranslate(-this._scrollLeft || 0, 0);
    } else {
      this.$.footer.style.transform = this.$.header.style.transform = this._getTranslate(0, this._scrollTop);
    }

    var frozenCellTransform = this._getTranslate(this._scrollLeft, 0);

    for (var i = 0; i < this._frozenCells.length; i++) {
      this._frozenCells[i].style.transform = frozenCellTransform;
    }
  }

  _getTranslate(x, y) {
    return 'translate(' + x + 'px,' + y + 'px)';
  }

  _scrollHeightUpdated(_estScrollHeight) {
    this.$.outersizer.style.top = this.$.fixedsizer.style.top = _estScrollHeight + 'px';
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const SelectionMixin = superClass => class SelectionMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array that contains the selected items.
       */
      selectedItems: {
        type: Object,
        notify: true,
        value: () => []
      }
    };
  }

  static get observers() {
    return ['_selectedItemsChanged(selectedItems.*)'];
  }

  _isSelected(item) {
    return this.selectedItems && this._getItemIndexInArray(item, this.selectedItems) > -1;
  }
  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item object
   */


  selectItem(item) {
    if (!this._isSelected(item)) {
      this.push('selectedItems', item);
    }
  }
  /**
   * Deselects the given item if it is already selected.
   *
   * @method deselect
   * @param {Object} item The item object
   */


  deselectItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);

    if (index > -1) {
      this.splice('selectedItems', index, 1);
    }
  }
  /**
   * Toggles the selected state of the given item.
   *
   * @method toggle
   * @param {Object} item The item object
   */


  _toggleItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);

    if (index === -1) {
      this.selectItem(item);
    } else {
      this.deselectItem(item);
    }
  }

  _selectedItemsChanged(e) {
    if (this.$.items.children.length && (e.path === 'selectedItems' || e.path === 'selectedItems.splices')) {
      Array.from(this.$.items.children).forEach(row => {
        this._updateItem(row, row._item);
      });
    }
  }

  _selectedInstanceChangedCallback(instance, value) {
    if (super._selectedInstanceChangedCallback) {
      super._selectedInstanceChangedCallback(instance, value);
    }

    if (value) {
      this.selectItem(instance.item);
    } else {
      this.deselectItem(instance.item);
    }
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const SortMixin = superClass => class SortMixin extends superClass {
  static get properties() {
    return {
      /**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       */
      multiSort: {
        type: Boolean,
        value: false
      },
      _sorters: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _previousSorters: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('sorter-changed', this._onSorterChanged); // With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
    // before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
    // makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
    // after this (<vaadin-grid>) is ready (and the listeners are active).

    if (window.ShadyDOM) {
      async_js.microTask.run(() => {
        const sorters = this.querySelectorAll('vaadin-grid-sorter');
        Array.from(sorters).forEach(sorter => {
          // Don't try to fire if the sorter hasn't been upgraded yet
          if (sorter instanceof polymerElement_js.PolymerElement) {
            sorter.dispatchEvent(new CustomEvent('sorter-changed', {
              bubbles: true,
              composed: true
            }));
          }
        });
      });
    }
  }

  _onSorterChanged(e) {
    const sorter = e.target;

    this._removeArrayItem(this._sorters, sorter);

    sorter._order = null;

    if (this.multiSort) {
      if (sorter.direction) {
        this._sorters.unshift(sorter);
      }

      this._sorters.forEach((sorter, index) => sorter._order = this._sorters.length > 1 ? index : null, this);
    } else {
      if (sorter.direction) {
        this._sorters.forEach(sorter => {
          sorter._order = null;
          sorter.direction = null;
        });

        this._sorters = [sorter];
      }
    }

    e.stopPropagation();

    if (this.dataProvider && // No need to clear cache if sorters didn't change
    JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) {
      this.clearCache();
    }

    this._a11yUpdateSorters();

    this._previousSorters = this._mapSorters();
  }

  _mapSorters() {
    return this._sorters.map(sorter => {
      return {
        path: sorter.path,
        direction: sorter.direction
      };
    });
  }

  _removeArrayItem(array, item) {
    const index = array.indexOf(item);

    if (index > -1) {
      array.splice(index, 1);
    }
  }

};

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const StylingMixin = superClass => class StylingMixin extends superClass {
  static get properties() {
    return {
      /**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      cellClassNameGenerator: Function
    };
  }

  static get observers() {
    return ['__cellClassNameGeneratorChanged(cellClassNameGenerator)'];
  }

  __cellClassNameGeneratorChanged(cellClassGenerator) {
    this.generateCellClassNames();
  }
  /**
   * Runs the `cellClassNameGenerator` for the visible cells.
   * If the generator depends on varying conditions, you need to
   * call this function manually in order to update the styles when
   * the conditions change.
   */


  generateCellClassNames() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => this._generateCellClassNames(row, this.__getRowModel(row)));
  }

  _generateCellClassNames(row, rowData) {
    Array.from(row.children).forEach(cell => {
      if (cell.__generatedClasses) {
        cell.__generatedClasses.forEach(className => cell.classList.remove(className));
      }

      if (this.cellClassNameGenerator) {
        const result = this.cellClassNameGenerator(cell._column, rowData);
        cell.__generatedClasses = result && result.split(' ').filter(className => className.length > 0);

        if (cell.__generatedClasses) {
          cell.__generatedClasses.forEach(className => cell.classList.add(className));
        }
      }
    });
  }

};

/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DropMode = {
  BETWEEN: 'between',
  ON_TOP: 'on-top',
  ON_TOP_OR_BETWEEN: 'on-top-or-between',
  ON_GRID: 'on-grid'
};
const DropLocation = {
  ON_TOP: 'on-top',
  ABOVE: 'above',
  BELOW: 'below',
  EMPTY: 'empty'
};
/**
 * @polymerMixin
 */

const DragAndDropMixin = superClass => class DragAndDropMixin extends superClass {
  static get properties() {
    return {
      /**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       */
      dropMode: String,

      /**
       * Marks the grid's rows to be available for dragging.
       */
      rowsDraggable: Boolean,

      /**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      dragFilter: Function,

      /**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      dropFilter: Function,
      __dndAutoScrollThreshold: {
        value: 50
      }
    };
  }

  static get observers() {
    return ['_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)'];
  }

  ready() {
    super.ready();
    this.$.table.addEventListener('dragstart', this._onDragStart.bind(this));
    this.$.table.addEventListener('dragend', this._onDragEnd.bind(this));
    this.$.table.addEventListener('dragover', this._onDragOver.bind(this));
    this.$.table.addEventListener('dragleave', this._onDragLeave.bind(this));
    this.$.table.addEventListener('drop', this._onDrop.bind(this));
    this.$.table.addEventListener('dragenter', e => {
      if (this.dropMode) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  _onDragStart(e) {
    if (this.rowsDraggable) {
      let row = e.target;

      if (row.localName === 'vaadin-grid-cell-content') {
        // The draggable node is the cell content element on browsers that support native shadow
        row = row.assignedSlot.parentNode.parentNode;
      }

      if (row.parentNode !== this.$.items) {
        return;
      }

      e.stopPropagation();

      this._toggleAttribute('dragging-rows', true, this);

      if (this._safari) {
        // Safari doesn't get proper drag images from transformed
        // elements so we need to switch to top temporarily
        const transform = row.style.transform;
        row.style.top = /translateY\((.*)\)/.exec(transform)[1];
        row.style.transform = 'none';
        requestAnimationFrame(() => {
          row.style.top = '';
          row.style.transform = transform;
        });
      }

      const rowRect = row.getBoundingClientRect();

      if (!window.ShadyDOM) {
        if (this._ios) {
          e.dataTransfer.setDragImage(row);
        } else {
          e.dataTransfer.setDragImage(row, e.clientX - rowRect.left, e.clientY - rowRect.top);
        }
      }

      let rows = [row];

      if (this._isSelected(row._item)) {
        rows = this.__getViewportRows().filter(row => this._isSelected(row._item)).filter(row => !this.dragFilter || this.dragFilter(this.__getRowModel(row)));
      } // Set the default transfer data


      e.dataTransfer.setData('text', this.__formatDefaultTransferData(rows));
      row.setAttribute('dragstart', rows.length > 1 ? rows.length : '');
      this.updateStyles({
        '--_grid-drag-start-x': `${e.clientX - rowRect.left + 20}px`,
        '--_grid-drag-start-y': `${e.clientY - rowRect.top + 10}px`
      });
      requestAnimationFrame(() => {
        row.removeAttribute('dragstart');
        this.updateStyles({
          '--_grid-drag-start-x': '',
          '--_grid-drag-start-y': ''
        });
      });
      const event = new CustomEvent('grid-dragstart', {
        detail: {
          draggedItems: rows.map(row => row._item),
          setDragData: (type, data) => e.dataTransfer.setData(type, data),
          setDraggedItemsCount: count => row.setAttribute('dragstart', count)
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  _onDragEnd(e) {
    this._toggleAttribute('dragging-rows', false, this);

    e.stopPropagation();
    const event = new CustomEvent('grid-dragend');
    event.originalEvent = e;
    this.dispatchEvent(event);
  }

  _onDragLeave(e) {
    e.stopPropagation();

    this._clearDragStyles();
  }

  _onDragOver(e) {
    if (this.dropMode) {
      this._dropLocation = undefined;
      this._dragOverItem = undefined;

      if (this.__dndAutoScroll(e.clientY)) {
        this._clearDragStyles();

        return;
      }

      let row = e.composedPath().filter(node => node.localName === 'tr')[0];

      if (!this._effectiveSize || this.dropMode === DropMode.ON_GRID) {
        // The grid is empty or "on-grid" drop mode was used, always default to "empty"
        this._dropLocation = DropLocation.EMPTY;
      } else if (!row || row.parentNode !== this.$.items) {
        // The dragover didn't occur on a body row but the grid has items
        if (row) {
          // The dragover occurred over a header/footer row
          return;
        } else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          // The drop mode allows setting the last row as the drag over item
          row = Array.from(this.$.items.children).filter(row => !row.hidden).pop();
          this._dropLocation = DropLocation.BELOW;
        } else {
          // Drop mode on-top used but the dragover didn't occur over one of the existing rows
          return;
        }
      } else {
        // The dragover occurred on a body row, determine the drop location from coordinates
        const rowRect = row.getBoundingClientRect();
        this._dropLocation = DropLocation.ON_TOP;

        if (this.dropMode === DropMode.BETWEEN) {
          const dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
          this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
        } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          if (e.clientY - rowRect.top < rowRect.height / 3) {
            this._dropLocation = DropLocation.ABOVE;
          } else if (e.clientY - rowRect.top > rowRect.height / 3 * 2) {
            this._dropLocation = DropLocation.BELOW;
          }
        }
      }

      if (row && row.hasAttribute('drop-disabled')) {
        this._dropLocation = undefined;
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (this._dropLocation === DropLocation.EMPTY) {
        this._toggleAttribute('dragover', true, this);
      } else if (row) {
        this._dragOverItem = row._item;

        if (row.getAttribute('dragover') !== this._dropLocation) {
          row.setAttribute('dragover', this._dropLocation);
        }
      } else {
        this._clearDragStyles();
      }
    }
  }

  __dndAutoScroll(clientY) {
    if (this.__dndAutoScrolling) {
      return true;
    }

    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
    const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
    let scrollTopDelta = 0;

    if (bottomDiff > 0) {
      scrollTopDelta = bottomDiff * 2;
    } else if (topDiff > 0) {
      scrollTopDelta = -topDiff * 2;
    }

    if (scrollTopDelta) {
      const scrollTop = this.$.table.scrollTop;
      this.$.table.scrollTop += scrollTopDelta;
      const scrollTopChanged = scrollTop !== this.$.table.scrollTop;

      if (scrollTopChanged) {
        this.__dndAutoScrolling = true; // Disallow more auto-scrolls within 20ms

        setTimeout(() => this.__dndAutoScrolling = false, 20);

        this._scrollHandler();

        return true;
      }
    }
  }

  __getViewportRows() {
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    return Array.from(this.$.items.children).filter(row => {
      const rowRect = row.getBoundingClientRect();
      return rowRect.bottom > headerBottom && rowRect.top < footerTop;
    });
  }

  _clearDragStyles() {
    this.removeAttribute('dragover');
    Array.from(this.$.items.children).forEach(row => row.removeAttribute('dragover'));
  }

  _onDrop(e) {
    if (this.dropMode) {
      e.stopPropagation();
      e.preventDefault();
      const dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map(type => {
        return {
          type,
          data: e.dataTransfer.getData(type)
        };
      });

      this._clearDragStyles();

      const event = new CustomEvent('grid-drop', {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        detail: {
          dropTargetItem: this._dragOverItem,
          dropLocation: this._dropLocation,
          dragData
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  __formatDefaultTransferData(rows) {
    return rows.map(row => {
      return Array.from(row.children).filter(cell => !cell.hidden && cell.getAttribute('part').indexOf('details-cell') === -1).sort((a, b) => {
        return a._column._order > b._column._order ? 1 : -1;
      }).map(cell => cell._content.textContent.trim()).filter(content => content).join('\t');
    }).join('\n');
  }

  _dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter) {
    this.filterDragAndDrop();
  }
  /**
   * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
   * If the filter depends on varying conditions, you may need to
   * call this function manually in order to update the draggability when
   * the conditions change.
   */


  filterDragAndDrop() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => {
      this._filterDragAndDrop(row, this.__getRowModel(row));
    });
  }

  _filterDragAndDrop(row, rowData) {
    const dragDisabled = !this.rowsDraggable || this.dragFilter && !this.dragFilter(rowData);
    const dropDisabled = !this.dropMode || this.dropFilter && !this.dropFilter(rowData);
    const draggableElements = window.ShadyDOM ? [row] : Array.from(row.children).map(cell => cell._content);
    draggableElements.forEach(e => {
      if (dragDisabled) {
        e.removeAttribute('draggable');
      } else {
        e.setAttribute('draggable', true);
      }
    });

    this._toggleAttribute('drag-disabled', dragDisabled, row);

    this._toggleAttribute('drop-disabled', dropDisabled, row);
  }
  /**
   * Fired when starting to drag grid rows.
   *
   * @event grid-dragstart
   * @param {Object} originalEvent The native dragstart event
   * @param {Object} detail
   * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
   * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
   * Parameter is of type number.
   * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
   * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
   * The function takes two parameters:
   * - type:string The type of the data
   * - data:string The data
   */

  /**
   * Fired when the dragging of the rows ends.
   *
   * @event grid-dragend
   * @param {Object} originalEvent The native dragend event
   */

  /**
   * Fired when a drop occurs on top of the grid.
   *
   * @event grid-drop
   * @param {Object} originalEvent The native drop event
   * @param {Object} detail
   * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
   * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
   * Depending on the dropMode value, the drop location can be one of the following
   * - `on-top`: when the drop occurred on top of the row
   * - `above`: when the drop occurred above the row
   * - `below`: when the drop occurred below the row
   * - `empty`: when the drop occurred over the grid, not relative to any specific row
   * @param {string} detail.dragData An array of items with the payload as a string representation as the
   * `data` property and the type of the data as `type` property.
   */


};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const KeyboardNavigationMixin = superClass => class KeyboardNavigationMixin extends superClass {
  static get properties() {
    return {
      _headerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _itemsFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _footerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _navigatingIsHidden: Boolean,
      _focusedItemIndex: {
        type: Number,
        value: 0
      },
      _focusedColumnOrder: Number
    };
  }

  ready() {
    super.ready();

    if (this._ios || this._android) {
      // Disable keyboard navigation on mobile devices
      return;
    }

    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('focusin', this._onFocusIn);
    this.addEventListener('focusout', this._onFocusOut); // When focus goes from cell to another cell, focusin/focusout events do
    // not escape the grid’s shadowRoot, thus listening inside the shadowRoot.

    this.$.table.addEventListener('focusin', this._onCellFocusIn.bind(this));
    this.$.table.addEventListener('focusout', this._onCellFocusOut.bind(this));
    this.addEventListener('mousedown', () => {
      this._toggleAttribute('navigating', false, this);

      this._isMousedown = true;
    });
    this.addEventListener('mouseup', () => this._isMousedown = false);
  }

  _focusableChanged(focusable, oldFocusable) {
    if (oldFocusable) {
      oldFocusable.setAttribute('tabindex', '-1');
    }

    if (focusable) {
      focusable.setAttribute('tabindex', '0');
    }
  }

  _onKeyDown(e) {
    // Ensure standard key value, unified across browsers
    let key = e.key;

    if (key === 'Up' || key === 'Down' || key === 'Left' || key === 'Right') {
      // MSIE & Edge
      key = 'Arrow' + key;
    }

    if (key === 'Esc') {
      // MSIE & Edge
      key = 'Escape';
    }

    if (key === 'Spacebar') {
      // MSIE
      key = ' ';
    }

    let keyGroup;

    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'PageUp':
      case 'PageDown':
      case 'Home':
      case 'End':
        keyGroup = 'Navigation';
        break;

      case 'Enter':
      case 'Escape':
      case 'F2':
        keyGroup = 'Interaction';
        break;

      case 'Tab':
        keyGroup = 'Tab';
        break;

      case ' ':
        keyGroup = 'Space';
        break;
    }

    this._detectInteracting(e);

    if (this.hasAttribute('interacting') && keyGroup !== 'Interaction') {
      // When in the interacting mode, only the “Interaction” keys are handled.
      keyGroup = undefined;
    }

    if (keyGroup) {
      this[`_on${keyGroup}KeyDown`](e, key);
    }
  }

  _ensureScrolledToIndex(index) {
    const targetRowInDom = Array.from(this.$.items.children).filter(child => child.index === index)[0];

    if (!targetRowInDom) {
      this._scrollToIndex(index);
    }
  }

  _onNavigationKeyDown(e, key) {
    e.preventDefault();

    function indexOfChildElement(el) {
      return Array.prototype.indexOf.call(el.parentNode.children, el);
    }

    const visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;
    let dx = 0,
        dy = 0;

    switch (key) {
      case 'ArrowRight':
        dx = 1;
        break;

      case 'ArrowLeft':
        dx = -1;
        break;

      case 'Home':
        dx = -Infinity;
        e.ctrlKey && (dy = -Infinity);
        break;

      case 'End':
        dx = Infinity;
        e.ctrlKey && (dy = Infinity);
        break;

      case 'ArrowDown':
        dy = 1;
        break;

      case 'ArrowUp':
        dy = -1;
        break;

      case 'PageDown':
        dy = visibleItemsCount;
        break;

      case 'PageUp':
        dy = -visibleItemsCount;
        break;
    }

    const activeCell = e.composedPath()[0];
    const columnIndex = indexOfChildElement(activeCell);

    const isRowDetails = this._elementMatches(activeCell, '[part~="details-cell"]');

    const activeRow = activeCell.parentNode;
    const activeRowGroup = activeRow.parentNode;
    const maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1; // Body rows have index property, otherwise DOM child index of the row is used.

    const rowIndex = activeRowGroup === this.$.items ? this._focusedItemIndex !== undefined ? this._focusedItemIndex : activeRow.index : indexOfChildElement(activeRow); // Index of the destination row

    let dstRowIndex = Math.max(0, Math.min(rowIndex + dy, maxRowIndex)); // Row details navigation logic

    let dstIsRowDetails = false;

    if (activeRowGroup === this.$.items) {
      const item = activeRow._item;

      const dstItem = this._cache.getItemForIndex(dstRowIndex); // Should we navigate to row details?


      if (isRowDetails) {
        dstIsRowDetails = dy === 0;
      } else {
        dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== rowIndex && this._isDetailsOpened(dstItem);
      } // Should we navigate between details and regular cells of the same row?


      if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
        dstRowIndex = rowIndex;
      }
    } // Header and footer could have hidden rows, e. g., if none of the columns
    // or groups on the given column tree level define template. Skip them
    // in vertical keyboard navigation.


    if (activeRowGroup !== this.$.items) {
      if (dstRowIndex > rowIndex) {
        while (dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex++;
        }
      } else if (dstRowIndex < rowIndex) {
        while (dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex--;
        }
      }
    } // _focusedColumnOrder is memoized — this is to ensure predictable
    // navigation when entering and leaving detail and column group cells.


    if (this._focusedColumnOrder === undefined) {
      if (isRowDetails) {
        this._focusedColumnOrder = 0;
      } else {
        this._focusedColumnOrder = this._getColumns(activeRowGroup, rowIndex)[columnIndex]._order;
      }
    } // Find orderedColumnIndex — the index of order closest matching the
    // original _focusedColumnOrder in the sorted array of orders
    // of the visible columns on the destination row.


    const dstColumns = this._getColumns(activeRowGroup, dstRowIndex);

    const dstSortedColumnOrders = dstColumns.filter(c => !c.hidden).map(c => c._order).sort((b, a) => b - a);
    const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
    const orderedColumnIndex = dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b, a) => Math.abs(b - this._focusedColumnOrder) - Math.abs(a - this._focusedColumnOrder))[0]); // Index of the destination column order

    const dstOrderedColumnIndex = dy === 0 && isRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));

    if (dstOrderedColumnIndex !== orderedColumnIndex) {
      // Horizontal movement invalidates stored _focusedColumnOrder
      this._focusedColumnOrder = undefined;
    } // Ensure correct vertical scroll position, destination row is visible


    if (activeRowGroup === this.$.items) {
      this._ensureScrolledToIndex(dstRowIndex);
    } // This has to be set after scrolling, otherwise it can be removed by
    // `_preventScrollerRotatingCellFocus(item, index)` during scrolling.


    this._toggleAttribute('navigating', true, this);

    const columnIndexByOrder = dstColumns.reduce((acc, col, i) => (acc[col._order] = i, acc), {});
    const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]]; // For body rows, use index property to find destination row, otherwise use DOM child index

    const dstRow = activeRowGroup === this.$.items ? Array.from(activeRowGroup.children).filter(el => el.index === dstRowIndex)[0] : activeRowGroup.children[dstRowIndex];

    if (!dstRow) {
      return;
    } // Here we go!


    const dstCell = dstIsRowDetails ? Array.from(dstRow.children).filter(el => this._elementMatches(el, '[part~="details-cell"]'))[0] : dstRow.children[dstColumnIndex];

    this._scrollHorizontallyToCell(dstCell);

    if (activeRowGroup === this.$.items) {
      // When scrolling with repeated keydown, sometimes FocusEvent listeners
      // are too late to update _focusedItemIndex. Ensure next keydown
      // listener invocation gets updated _focusedItemIndex value.
      this._focusedItemIndex = dstRowIndex;
    }

    if (activeRowGroup === this.$.items) {
      const dstRect = dstCell.getBoundingClientRect();
      const footerTop = this.$.footer.getBoundingClientRect().top;
      const headerBottom = this.$.header.getBoundingClientRect().bottom;

      if (dstRect.bottom > footerTop) {
        this.$.table.scrollTop += dstRect.bottom - footerTop;

        this._scrollHandler();
      } else if (dstRect.top < headerBottom) {
        this.$.table.scrollTop -= headerBottom - dstRect.top;

        this._scrollHandler();
      }
    }

    dstCell.focus();
  }

  _parseEventPath(path) {
    const tableIndex = path.indexOf(this.$.table);
    return {
      rowGroup: path[tableIndex - 1],
      row: path[tableIndex - 2],
      cell: path[tableIndex - 3]
    };
  }

  _onInteractionKeyDown(e, key) {
    const localTarget = e.composedPath()[0];
    const localTargetIsTextInput = localTarget.localName === 'input' && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);
    let wantInteracting;

    switch (key) {
      case 'Enter':
        wantInteracting = this.hasAttribute('interacting') ? !localTargetIsTextInput : true;
        break;

      case 'Escape':
        wantInteracting = false;
        break;

      case 'F2':
        wantInteracting = !this.hasAttribute('interacting');
        break;
    }

    const {
      cell
    } = this._parseEventPath(e.composedPath());

    if (this.hasAttribute('interacting') !== wantInteracting) {
      if (wantInteracting) {
        const focusTarget = cell._content.querySelector('[focus-target]') || cell._content.firstElementChild;

        if (focusTarget) {
          e.preventDefault();
          focusTarget.focus();

          this._toggleAttribute('interacting', true, this);

          this._toggleAttribute('navigating', false, this);
        }
      } else {
        e.preventDefault();
        this._focusedColumnOrder = undefined;
        cell.focus();

        this._toggleAttribute('interacting', false, this);

        this._toggleAttribute('navigating', true, this);
      }
    }
  }

  _predictFocusStepTarget(srcElement, step) {
    const tabOrder = [this.$.table, this._headerFocusable, this._itemsFocusable, this._footerFocusable, this.$.focusexit];
    let index = tabOrder.indexOf(srcElement);
    index += step;

    while (index >= 0 && index <= tabOrder.length - 1 && (!tabOrder[index] || tabOrder[index].parentNode.hidden)) {
      index += step;
    }

    return tabOrder[index];
  }

  _onTabKeyDown(e) {
    const focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);

    if (focusTarget === this.$.table) {
      // The focus is about to exit the grid to the top.
      this.$.table.focus();
    } else if (focusTarget === this.$.focusexit) {
      // The focus is about to exit the grid to the bottom.
      this.$.focusexit.focus();
    } else if (focusTarget === this._itemsFocusable) {
      let itemsFocusTarget = focusTarget;
      const targetRow = this._itemsFocusable.parentNode;

      this._ensureScrolledToIndex(this._focusedItemIndex);

      if (targetRow.index !== this._focusedItemIndex) {
        // The target row, which is about to be focused next, has been
        // assigned with a new index since last focus, probably because of
        // scrolling. Focus the row for the stored focused item index instead.
        const columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
        const focusedItemRow = Array.from(this.$.items.children).filter(row => row.index === this._focusedItemIndex)[0];

        if (focusedItemRow) {
          itemsFocusTarget = focusedItemRow.children[columnIndex];
        }
      }

      e.preventDefault();
      itemsFocusTarget.focus();
    } else {
      e.preventDefault();
      focusTarget.focus();
    }

    this._toggleAttribute('navigating', true, this);
  }

  _onSpaceKeyDown(e) {
    e.preventDefault();
    const cell = e.composedPath()[0];

    if (cell._content && cell._content.firstElementChild) {
      const wasNavigating = this.hasAttribute('navigating');

      cell._content.firstElementChild.click();

      this._toggleAttribute('navigating', wasNavigating, this);
    } else {
      this.dispatchEvent(new CustomEvent('cell-activate', {
        detail: {
          model: this.__getRowModel(cell.parentElement)
        }
      }));
    }
  }

  _onFocusIn(e) {
    if (!this._isMousedown) {
      this._toggleAttribute('navigating', true, this);
    }

    const rootTarget = e.composedPath()[0];

    if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
      // The focus enters the top (bottom) of the grid, meaning that user has
      // tabbed (shift-tabbed) into the grid. Move the focus to
      // the first (the last) focusable.
      this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();

      this._toggleAttribute('interacting', false, this);
    } else {
      this._detectInteracting(e);
    }
  }

  _onFocusOut(e) {
    this._toggleAttribute('navigating', false, this);

    this._detectInteracting(e);
  }

  _onCellFocusIn(e) {
    this._detectInteracting(e);

    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0];
      this._activeRowGroup = cell.parentNode.parentNode;

      if (this._activeRowGroup === this.$.header) {
        this._headerFocusable = cell;
      } else if (this._activeRowGroup === this.$.items) {
        this._itemsFocusable = cell;
      } else if (this._activeRowGroup === this.$.footer) {
        this._footerFocusable = cell;
      } // Inform cell content of the focus (used in <vaadin-grid-sorter>)


      cell._content.dispatchEvent(new CustomEvent('cell-focusin', {
        bubbles: false
      }));
    }

    this._detectFocusedItemIndex(e);
  }

  _onCellFocusOut(e) {
    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0]; // Inform cell content of the focus (used in <vaadin-grid-sorter>)

      cell._content.dispatchEvent(new CustomEvent('cell-focusout', {
        bubbles: false
      }));
    }
  }

  _detectInteracting(e) {
    this._toggleAttribute('interacting', e.composedPath().some(el => el.localName === 'vaadin-grid-cell-content'), this);
  }

  _detectFocusedItemIndex(e) {
    const {
      rowGroup,
      row
    } = this._parseEventPath(e.composedPath());

    if (rowGroup === this.$.items) {
      this._focusedItemIndex = row.index;
    }
  }

  _preventScrollerRotatingCellFocus(item, index) {
    if (item.index === this._focusedItemIndex && this.hasAttribute('navigating') && this._activeRowGroup === this.$.items) {
      // Focused item has went, hide navigation mode
      this._navigatingIsHidden = true;

      this._toggleAttribute('navigating', false, this);
    }

    if (index === this._focusedItemIndex && this._navigatingIsHidden) {
      // Focused item is back, restore navigation mode
      this._navigatingIsHidden = false;

      this._toggleAttribute('navigating', true, this);
    }
  }

  _getColumns(rowGroup, rowIndex) {
    let columnTreeLevel = this._columnTree.length - 1;

    if (rowGroup === this.$.header) {
      columnTreeLevel = rowIndex;
    } else if (rowGroup === this.$.footer) {
      columnTreeLevel = this._columnTree.length - 1 - rowIndex;
    }

    return this._columnTree[columnTreeLevel];
  }

  _resetKeyboardNavigation() {
    if (this.$.header.firstElementChild) {
      this._headerFocusable = Array.from(this.$.header.firstElementChild.children).filter(el => !el.hidden)[0];
    }

    if (this.$.items.firstElementChild) {
      const firstVisibleIndexRow = this._iterateItems((pidx, vidx) => {
        if (this._firstVisibleIndex === vidx) {
          return this.$.items.children[pidx];
        }
      });

      if (firstVisibleIndexRow) {
        this._itemsFocusable = Array.from(firstVisibleIndexRow.children).filter(el => !el.hidden)[0];
      }
    }

    if (this.$.footer.firstElementChild) {
      this._footerFocusable = Array.from(this.$.footer.firstElementChild.children).filter(el => !el.hidden)[0];
    }
  }

  _scrollHorizontallyToCell(dstCell) {
    if (dstCell.hasAttribute('frozen') || this._elementMatches(dstCell, '[part~="details-cell"]')) {
      // These cells are, by design, always visible, no need to scroll.
      return;
    }

    const dstCellRect = dstCell.getBoundingClientRect();
    const dstRow = dstCell.parentNode;
    const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
    const tableRect = this.$.table.getBoundingClientRect();
    let leftBoundary = tableRect.left,
        rightBoundary = tableRect.right;

    for (let i = dstCellIndex - 1; i >= 0; i--) {
      const cell = dstRow.children[i];

      if (cell.hasAttribute('hidden') || this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }

      if (cell.hasAttribute('frozen')) {
        leftBoundary = cell.getBoundingClientRect().right;
        break;
      }
    }

    for (let i = dstCellIndex + 1; i < dstRow.children.length; i++) {
      const cell = dstRow.children[i];

      if (cell.hasAttribute('hidden') || this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }

      if (cell.hasAttribute('frozen')) {
        rightBoundary = cell.getBoundingClientRect().left;
        break;
      }
    }

    if (dstCellRect.left < leftBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
    }

    if (dstCellRect.right > rightBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
    }
  }

  _elementMatches(el, query) {
    return el.matches ? el.matches(query) : Array.from(el.parentNode.querySelectorAll(query)).indexOf(el) !== -1;
  }

};

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ColumnReorderingMixin = superClass => class ColumnReorderingMixin extends gestureEventListeners_js.GestureEventListeners(superClass) {
  static get properties() {
    return {
      /**
       * Set to true to allow column reordering.
       */
      columnReorderingAllowed: {
        type: Boolean,
        value: false
      },
      _orderBaseScope: {
        type: Number,
        value: 10000000
      }
    };
  }

  static get observers() {
    return ['_updateOrders(_columnTree, _columnTree.*)'];
  }

  ready() {
    super.ready();
    gestures_js.addListener(this, 'track', this._onTrackEvent);
    this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
    this.addEventListener('touchstart', this._onTouchStart.bind(this));
    this.addEventListener('touchmove', this._onTouchMove.bind(this));
    this.addEventListener('touchend', this._onTouchEnd.bind(this));
    this.addEventListener('contextmenu', this._onContextMenu.bind(this));
  }

  _onContextMenu(e) {
    if (this.hasAttribute('reordering')) {
      e.preventDefault();
    }
  }

  _onTouchStart(e) {
    // Touch event, delay activation by 100ms
    this._startTouchReorderTimeout = setTimeout(() => {
      this._onTrackStart({
        detail: {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        }
      });
    }, 100);
  }

  _onTouchMove(e) {
    if (this._draggedColumn) {
      e.preventDefault();
    }

    clearTimeout(this._startTouchReorderTimeout);
  }

  _onTouchEnd() {
    clearTimeout(this._startTouchReorderTimeout);

    this._onTrackEnd();
  }

  _onTrackEvent(e) {
    if (e.detail.state === 'start') {
      const path = e.composedPath();
      const headerCell = path[path.indexOf(this.$.header) - 2];

      if (!headerCell || !headerCell._content) {
        // Not a header column
        return;
      }

      const activeElement = this.getRootNode().activeElement;

      if (headerCell._content.contains(this.getRootNode().activeElement) && (!this._ie || !this._isFocusable(activeElement))) {
        // Something was focused inside the cell
        return;
      }

      if (this.$.scroller.hasAttribute('column-resizing')) {
        // Resizing is in progress
        return;
      }

      if (!this._touchDevice) {
        // Not a touch device
        this._onTrackStart(e);
      }
    } else if (e.detail.state === 'track') {
      this._onTrack(e);
    } else if (e.detail.state === 'end') {
      this._onTrackEnd(e);
    }
  }

  _onTrackStart(e) {
    if (!this.columnReorderingAllowed) {
      return;
    } // Cancel reordering if there are draggable nodes on the event path


    const path = e.path || polymer_dom_js.dom(e).path;

    if (path && path.filter(node => node.hasAttribute && node.hasAttribute('draggable'))[0]) {
      return;
    }

    const headerCell = this._cellFromPoint(e.detail.x, e.detail.y);

    if (!headerCell || headerCell.getAttribute('part').indexOf('header-cell') === -1) {
      return;
    }

    this._toggleAttribute('reordering', true, this);

    this._draggedColumn = headerCell._column;

    while (this._draggedColumn.parentElement.childElementCount === 1) {
      // This is the only column in the group, drag the whole group instead
      this._draggedColumn = this._draggedColumn.parentElement;
    }

    this._setSiblingsReorderStatus(this._draggedColumn, 'allowed');

    this._draggedColumn._reorderStatus = 'dragging';

    this._updateGhost(headerCell);

    this._reorderGhost.style.visibility = 'visible';

    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);

    this._autoScroller();
  }

  _onTrack(e) {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    const targetCell = this._cellFromPoint(e.detail.x, e.detail.y);

    if (!targetCell) {
      return;
    }

    const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);

    if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e.detail.x)) {
      this._swapColumnOrders(this._draggedColumn, targetColumn);
    }

    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);

    this._lastDragClientX = e.detail.x;
  }

  _onTrackEnd() {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    this._toggleAttribute('reordering', false, this);

    this._draggedColumn._reorderStatus = '';

    this._setSiblingsReorderStatus(this._draggedColumn, '');

    this._draggedColumn = null;
    this._lastDragClientX = null;
    this._reorderGhost.style.visibility = 'hidden';
    this.dispatchEvent(new CustomEvent('column-reorder', {
      detail: {
        columns: this._getColumnsInOrder()
      }
    }));
  }

  _getColumnsInOrder() {
    return this._columnTree.slice(0).pop().filter(c => !c.hidden).sort((b, a) => b._order - a._order);
  }

  _cellFromPoint(x, y) {
    x = x || 0;
    y = y || 0;

    if (!this._draggedColumn) {
      this._toggleAttribute('no-content-pointer-events', true, this.$.scroller);
    }

    let cell;

    if (settings_js.useShadow) {
      cell = this.shadowRoot.elementFromPoint(x, y);
    } else {
      cell = document.elementFromPoint(x, y); // Workaround a FF58 bug

      if (cell.localName === 'vaadin-grid-cell-content') {
        cell = cell.assignedSlot.parentNode;
      }
    }

    this._toggleAttribute('no-content-pointer-events', false, this.$.scroller); // Make sure the element is actually a cell


    if (cell && cell._column) {
      return cell;
    }
  }

  _updateGhostPosition(eventClientX, eventClientY) {
    const ghostRect = this._reorderGhost.getBoundingClientRect(); // // This is where we want to position the ghost


    const targetLeft = eventClientX - ghostRect.width / 2;
    const targetTop = eventClientY - ghostRect.height / 2; // Current position

    const _left = parseInt(this._reorderGhost._left || 0);

    const _top = parseInt(this._reorderGhost._top || 0); // Reposition the ghost


    this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
    this._reorderGhost._top = _top - (ghostRect.top - targetTop);
    this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
  }

  _getInnerText(e) {
    if (e.localName) {
      // Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
      if (getComputedStyle(e).display === 'none') {
        return '';
      } else {
        return Array.from(e.childNodes).map(n => this._getInnerText(n)).join('');
      }
    } else {
      return e.textContent;
    }
  }

  _updateGhost(cell) {
    const ghost = this._reorderGhost;
    ghost.textContent = this._getInnerText(cell._content);
    const style = window.getComputedStyle(cell);
    ['boxSizing', 'display', 'width', 'height', 'background', 'alignItems', 'padding', 'border', 'flex-direction', 'overflow'].forEach(propertyName => ghost.style[propertyName] = style[propertyName]);
    return ghost;
  }

  _updateOrders(columnTree, splices) {
    if (columnTree === undefined || splices === undefined) {
      return;
    } // Set order numbers to top-level columns


    columnTree[0].forEach((column, index) => column._order = (index + 1) * this._orderBaseScope);
  }

  _setSiblingsReorderStatus(column, status) {
    Array.from(column.parentNode.children).filter(child => /column/.test(child.localName) && this._isSwapAllowed(child, column)).forEach(sibling => sibling._reorderStatus = status);
  }

  _autoScroller() {
    if (this._lastDragClientX) {
      const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
      const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;

      if (rightDiff > 0) {
        this.$.table.scrollLeft += rightDiff / 10;
      } else if (leftDiff > 0) {
        this.$.table.scrollLeft -= leftDiff / 10;
      }

      this._scrollHandler();
    }

    if (this._draggedColumn) {
      this.async(this._autoScroller, 10);
    }
  }

  _isSwapAllowed(column1, column2) {
    if (column1 && column2) {
      const differentColumns = column1 !== column2;
      const sameParent = column1.parentElement === column2.parentElement;
      const sameFrozen = column1.frozen === column2.frozen;
      return differentColumns && sameParent && sameFrozen;
    }
  }

  _isSwappableByPosition(targetColumn, clientX) {
    const targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(cell => targetColumn.contains(cell._column))[0];
    const sourceCellRect = this.$.header.querySelector('tr:not([hidden]) [reorder-status=dragging]').getBoundingClientRect();
    const targetRect = targetCell.getBoundingClientRect();

    if (targetRect.left > sourceCellRect.left) {
      return clientX > targetRect.right - sourceCellRect.width;
    } else {
      return clientX < targetRect.left + sourceCellRect.width;
    }
  }

  _swapColumnOrders(column1, column2) {
    const _order = column1._order;
    column1._order = column2._order;
    column2._order = _order;

    this._updateLastFrozen();

    this._updateFirstAndLastColumn();
  }

  _getTargetColumn(targetCell, draggedColumn) {
    if (targetCell && draggedColumn) {
      let candidate = targetCell._column;

      while (candidate.parentElement !== draggedColumn.parentElement && candidate !== this) {
        candidate = candidate.parentElement;
      }

      if (candidate.parentElement === draggedColumn.parentElement) {
        return candidate;
      } else {
        return targetCell._column;
      }
    }
  }
  /**
   * Fired when the columns in the grid are reordered.
   *
   * @event column-reorder
   * @param {Object} detail
   * @param {Object} detail.columns the columns in the new order
   */


};

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */

const ColumnBaseMixin = superClass => class ColumnBaseMixin extends superClass {
  static get properties() {
    return {
      /**
       * When set to true, the column is user-resizable.
       * @default false
       */
      resizable: {
        type: Boolean,
        value: function () {
          if (this.localName === 'vaadin-grid-column-group') {
            return;
          }

          const parent = this.parentNode;

          if (parent && parent.localName === 'vaadin-grid-column-group') {
            return parent.resizable || false;
          } else {
            return false;
          }
        }
      },
      _headerTemplate: {
        type: Object
      },
      _footerTemplate: {
        type: Object
      },

      /**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       */
      frozen: {
        type: Boolean,
        value: false
      },

      /**
       * When set to true, the cells for this column are hidden.
       */
      hidden: {
        type: Boolean
      },

      /**
       * Text content to display in the header cell of the column.
       */
      header: {
        type: String
      },

      /**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       */
      textAlign: {
        type: String
      },
      _lastFrozen: {
        type: Boolean,
        value: false
      },
      _order: Number,
      _reorderStatus: Boolean,
      _emptyCells: Array,
      _headerCell: Object,
      _footerCell: Object,
      _grid: Object,

      /**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */
      headerRenderer: Function,

      /**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */
      footerRenderer: Function
    };
  }

  static get observers() {
    return ['_widthChanged(width, _headerCell, _footerCell, _cells.*)', '_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)', '_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)', '_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)', '_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)', '_orderChanged(_order, _headerCell, _footerCell, _cells.*)', '_lastFrozenChanged(_lastFrozen)', '_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)', '_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)', '_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)', '_resizableChanged(resizable, _headerCell)', '_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)', '_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)'];
  }
  /** @protected */


  connectedCallback() {
    super.connectedCallback();
    this._bodyTemplate && (this._bodyTemplate.templatizer._grid = this._grid);
    this._headerTemplate && (this._headerTemplate.templatizer._grid = this._grid);
    this._footerTemplate && (this._footerTemplate.templatizer._grid = this._grid);

    this._templateObserver.flush();

    if (!this._bodyTemplate) {
      // The observer might not have triggered if the tag is empty. Run manually.
      this._templateObserver.callback();
    }

    requestAnimationFrame(() => {
      this._allCells.forEach(cell => {
        if (!cell._content.parentNode) {
          this._grid && this._grid.appendChild(cell._content);
        }
      });
    });
  }
  /** @protected */


  disconnectedCallback() {
    super.disconnectedCallback();
    requestAnimationFrame(() => {
      if (!this._findHostGrid()) {
        this._allCells.forEach(cell => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      }
    });
    this._gridValue = undefined;
  }

  _findHostGrid() {
    let el = this; // Custom elements extending grid must have a specific localName

    while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
      el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
    }

    return el || undefined;
  }

  get _grid() {
    if (!this._gridValue) {
      this._gridValue = this._findHostGrid();
    }

    return this._gridValue;
  }

  get _allCells() {
    return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter(cell => cell);
  }

  constructor() {
    super();
    this._templateObserver = new flattenedNodesObserver_js.FlattenedNodesObserver(this, info => {
      this._headerTemplate = this._prepareHeaderTemplate();
      this._footerTemplate = this._prepareFooterTemplate();
      this._bodyTemplate = this._prepareBodyTemplate();
    });
  }

  _prepareHeaderTemplate() {
    return this._prepareTemplatizer(this._findTemplate(true) || null, {});
  }

  _prepareFooterTemplate() {
    return this._prepareTemplatizer(this._findTemplate(false, true) || null, {});
  }

  _prepareBodyTemplate() {
    return this._prepareTemplatizer(this._findTemplate() || null);
  }

  _prepareTemplatizer(template, instanceProps) {
    if (template && !template.templatizer) {
      const templatizer = new GridTemplatizer();
      templatizer._grid = this._grid;
      templatizer.dataHost = this.dataHost;
      templatizer._instanceProps = instanceProps || templatizer._instanceProps;
      templatizer.template = template;
      template.templatizer = templatizer;
    }

    return template;
  }

  _renderHeaderAndFooter() {
    if (this.headerRenderer) {
      this.__runRenderer(this.headerRenderer, this._headerCell);
    }

    if (this.footerRenderer) {
      this.__runRenderer(this.footerRenderer, this._footerCell);
    }
  }

  __runRenderer(renderer, cell, rowData) {
    const args = [cell._content, this];

    if (rowData && rowData.item) {
      args.push(rowData);
    }

    renderer.apply(this, args);
  }

  __setColumnTemplateOrRenderer(template, renderer, cells) {
    if (template && renderer) {
      throw new Error('You should only use either a renderer or a template');
    }

    cells.forEach(cell => {
      const model = this._grid.__getRowModel(cell.parentElement);

      if (renderer) {
        cell._renderer = renderer;

        if (model.item || renderer === this.headerRenderer || renderer === this.footerRenderer) {
          this.__runRenderer(renderer, cell, model);
        }
      } else if (cell._template !== template) {
        cell._template = template;
        cell._content.innerHTML = '';
        template.templatizer._grid = template.templatizer._grid || this._grid;
        const inst = template.templatizer.createInstance();

        cell._content.appendChild(inst.root);

        cell._instance = inst;

        if (model.item) {
          cell._instance.setProperties(model);
        }
      }
    });
  }

  _setBodyTemplateOrRenderer(template, renderer, cells, splices) {
    if ((template || renderer) && cells) {
      this.__setColumnTemplateOrRenderer(template, renderer, cells);
    }
  }

  _setHeaderTemplateOrRenderer(headerTemplate, headerRenderer, headerCell) {
    if ((headerTemplate || headerRenderer) && headerCell) {
      this.__setColumnTemplateOrRenderer(headerTemplate, headerRenderer, [headerCell]);
    }
  }

  _setFooterTemplateOrRenderer(footerTemplate, footerRenderer, footerCell) {
    if ((footerTemplate || footerRenderer) && footerCell) {
      this.__setColumnTemplateOrRenderer(footerTemplate, footerRenderer, [footerCell]);

      this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement);
    }
  }

  _selectFirstTemplate(header = false, footer = false) {
    return flattenedNodesObserver_js.FlattenedNodesObserver.getFlattenedNodes(this).filter(node => node.localName === 'template' && node.classList.contains('header') === header && node.classList.contains('footer') === footer)[0];
  }

  _findTemplate(header, footer) {
    const template = this._selectFirstTemplate(header, footer);

    if (template) {
      if (this.dataHost) {
        // set dataHost to the context where template has been defined
        template._rootDataHost = this.dataHost._rootDataHost || this.dataHost;
      }
    }

    return template;
  }

  _flexGrowChanged(flexGrow, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('flexGrow');
    }

    this._allCells.forEach(cell => cell.style.flexGrow = flexGrow);
  }

  _orderChanged(order, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.style.order = order);
  }

  _widthChanged(width, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('width');
    }

    this._allCells.forEach(cell => cell.style.width = width); // Force a reflow to workaround browser issues causing double scrollbars to grid
    // https://github.com/vaadin/vaadin-grid/issues/1586


    if (this._grid && this._grid.__forceReflow) {
      this._grid.__forceReflow();
    }
  }

  _frozenChanged(frozen, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('frozen', frozen);
    }

    this._allCells.forEach(cell => this._toggleAttribute('frozen', frozen, cell));

    this._grid && this._grid._frozenCellsChanged && this._grid._frozenCellsChanged();
  }

  _lastFrozenChanged(lastFrozen) {
    this._allCells.forEach(cell => this._toggleAttribute('last-frozen', lastFrozen, cell));

    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._lastFrozen = lastFrozen;
    }
  }

  _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
    const hasHeaderText = header !== undefined;

    if (!headerRenderer && !headerTemplate && hasHeaderText && headerCell) {
      this.__setTextContent(headerCell._content, header);
    }

    if (path && cells.value) {
      if (!renderer && !bodyTemplate) {
        const pathRenderer = (root, owner, {
          item
        }) => this.__setTextContent(root, this.get(path, item));

        this.__setColumnTemplateOrRenderer(undefined, pathRenderer, cells.value);
      }

      if (!headerRenderer && !headerTemplate && !hasHeaderText && headerCell && header !== null) {
        this.__setTextContent(headerCell._content, this._generateHeader(path));
      }
    }

    if (headerCell) {
      this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement);
    }
  }

  __setTextContent(node, textContent) {
    node.textContent !== textContent && (node.textContent = textContent);
  }

  _generateHeader(path) {
    return path.substr(path.lastIndexOf('.') + 1).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/-/g, ' ').replace(/^./, match => match.toUpperCase());
  }

  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  _reorderStatusChanged(reorderStatus, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.setAttribute('reorder-status', reorderStatus));
  }

  _resizableChanged(resizable, headerCell) {
    if (resizable === undefined || headerCell === undefined) {
      return;
    }

    if (headerCell) {
      [headerCell].concat(this._emptyCells).forEach(cell => {
        if (cell) {
          const existingHandle = cell.querySelector('[part~="resize-handle"]');

          if (existingHandle) {
            cell.removeChild(existingHandle);
          }

          if (resizable) {
            const handle = document.createElement('div');
            handle.setAttribute('part', 'resize-handle');
            cell.appendChild(handle);
          }
        }
      });
    }
  }

  _textAlignChanged(textAlign, _cells, _headerCell, _footerCell) {
    if (textAlign === undefined) {
      return;
    }

    if (['start', 'end', 'center'].indexOf(textAlign) === -1) {
      console.warn('textAlign can only be set as "start", "end" or "center"');
      return;
    }

    let textAlignFallback;

    if (getComputedStyle(this._grid).direction === 'ltr') {
      if (textAlign === 'start') {
        textAlignFallback = 'left';
      } else if (textAlign === 'end') {
        textAlignFallback = 'right';
      }
    } else {
      if (textAlign === 'start') {
        textAlignFallback = 'right';
      } else if (textAlign === 'end') {
        textAlignFallback = 'left';
      }
    }

    this._allCells.forEach(cell => {
      cell._content.style.textAlign = textAlign;

      if (getComputedStyle(cell._content).textAlign !== textAlign) {
        cell._content.style.textAlign = textAlignFallback;
      }
    });
  }

  _hiddenChanged(hidden, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('hidden', hidden);
    }

    this._allCells.forEach(cell => this._toggleAttribute('hidden', hidden, cell));

    if (!!hidden !== !!this._previousHidden && this._grid) {
      this._grid._updateLastFrozen && this._grid._updateLastFrozen();
      this._grid.notifyResize && this._grid.notifyResize();
      this._grid._resetKeyboardNavigation && this._grid._resetKeyboardNavigation();
    }

    this._previousHidden = hidden;
  }

};
/**
 * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
 * should look like.
 *
 * See `<vaadin-grid>` documentation and demos for instructions and examples on how
 * to configure the `<vaadin-grid-column>`.
 * ```
 *
 * @memberof Vaadin
 * @mixes Vaadin.Grid.ColumnBaseMixin
 */

class GridColumnElement extends ColumnBaseMixin(polymerElement_js.PolymerElement) {
  static get is() {
    return 'vaadin-grid-column';
  }

  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: '100px'
      },

      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       */
      flexGrow: {
        type: Number,
        value: 1
      },

      /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      renderer: Function,

      /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */
      path: {
        type: String
      },

      /**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       */
      autoWidth: {
        type: Boolean,
        value: false
      },
      _bodyTemplate: {
        type: Object
      },
      _cells: Array
    };
  }

}

customElements.define(GridColumnElement.is, GridColumnElement);

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * This Element is used internally by vaadin-grid.
 *
 * @private
 */

class GridOuterScrollerElement extends class extends polymerElement_js.PolymerElement {} {
  static get template() {
    return htmlTag_js.html`
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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const VaadinGridStyles = document.createElement('dom-module'); // NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514

VaadinGridStyles.appendChild(htmlTag_js.html`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);
const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (safari || firefox) {
  const scrollingStyles = document.createElement('style');
  scrollingStyles.textContent = `
    [scrolling][safari] #outerscroller,
    [scrolling][firefox] #outerscroller {
      pointer-events: auto;
    }

    [ios] #outerscroller {
      pointer-events: auto;
      z-index: -3;
    }

    [ios][scrolling] #outerscroller {
      z-index: 0;
    }

    [ios] [frozen] {
      will-change: auto;
    }
  `;
  VaadinGridStyles.querySelector('template').content.appendChild(scrollingStyles);
}

VaadinGridStyles.register('vaadin-grid-styles');

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

const TOUCH_DEVICE$1 = (() => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
})();
/**
 *
 * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
 * the grid can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Quick Start
 *
 * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
 *
 * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
 * shorthand properties for the columns to define what gets rendered in the cells of the column.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
 *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
 *   <vaadin-grid-column path="email"></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
 * `renderer` and `footerRenderer`.
 *
 * Each of those renderer functions provides `root`, `column`, `rowData` arguments when applicable.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `column`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * Renderers are called on initialization of new column cells and each time the
 * related row data is updated. DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 * ```js
 * const grid = document.querySelector('vaadin-grid');
 * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
 *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
 *
 * const columns = grid.querySelectorAll('vaadin-grid-column');
 *
 * columns[0].headerRenderer = function(root) {
 *   root.textContent = 'Name';
 * };
 * columns[0].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.name;
 * };
 *
 * columns[1].headerRenderer = function(root) {
 *   root.textContent = 'Surname';
 * };
 * columns[1].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.surname;
 * };
 *
 * columns[2].headerRenderer = function(root) {
 *   root.textContent = 'Role';
 * };
 * columns[2].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.role;
 * };
 * ```
 *
 * Alternatively, the content can be provided with Polymer's Templates:
 *
 * #### Example:
 * ```html
 * <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},
 * {"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
 *   <vaadin-grid-column>
 *     <template class="header">Name</template>
 *     <template>[[item.name]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Surname</template>
 *     <template>[[item.surname]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Role</template>
 *     <template>[[item.role]]</template>
 *   </vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * The following helper elements can be used for further customization:
 * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
 * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
 * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
 * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
 * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
 *
 * __Note that the helper elements must be explicitly imported.__
 * If you want to import everything at once you can use the `all-imports.html` bundle.
 *
 * A column template can be decorated with one the following class names to specify its purpose
 * - `header`: Marks a header template
 * - `footer`: Marks a footer template
 * - `row-details`: Marks a row details template
 *
 * The following built-in template variables can be bound to inside the column templates:
 * - `[[index]]`: Number representing the row index
 * - `[[item]]` and it's sub-properties: Data object (provided by a data provider / items array)
 * - `{{selected}}`: True if the item is selected (can be two-way bound)
 * - `{{detailsOpened}}`: True if the item has row details opened (can be two-way bound)
 * - `{{expanded}}`: True if the item has tree sublevel expanded (can be two-way bound)
 * - `[[level]]`: Number of the tree sublevel of the item, first level-items have 0
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-grid>` data through the
 * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
 * The `<vaadin-grid>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Assigning Data” page in the demos.
 *
 * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
 *
 * __Also, note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * grid.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(
 *       response.employees, // requested page of items
 *       response.totalSize  // total number of items
 *     );
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * __Alternatively, you can use the `size` property to set the total number of items:__
 *
 * ```javascript
 * grid.size = 200; // The total number of items
 * grid.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(response.employees);
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `row` | Row in the internal table
 * `cell` | Cell in the internal table
 * `header-cell` | Header cell in the internal table
 * `body-cell` | Body cell in the internal table
 * `footer-cell` | Footer cell in the internal table
 * `details-cell` | Row details cell in the internal table
 * `resize-handle` | Handle for resizing the columns
 * `reorder-ghost` | Ghost element of the header cell being dragged
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `loading` | Set when the grid is loading data from data provider | :host
 * `interacting` | Keyboard navigation in interaction mode | :host
 * `navigating` | Keyboard navigation in navigation mode | :host
 * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
 * `reordering` | Set when the grid's columns are being reordered | :host
 * `dragover` | Set when the grid (not a specific row) is dragged over | :host
 * `dragging-rows` : Set when grid rows are dragged  | :host
 * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
 * `frozen` | Frozen cell | cell
 * `last-frozen` | Last frozen cell | cell
* * `first-column` | First visible cell on a row | cell
 * `last-column` | Last visible cell on a row | cell
 * `selected` | Selected row | row
 * `expanded` | Expanded row | row
 * `details-opened` | Row with details open | row
 * `loading` | Row that is waiting for data from data provider | row
 * `odd` | Odd row | row
 * `first` | The first body row | row
 * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
 * `dragover` | Set when the row is dragged over | row
 * `drag-disabled` | Set to a row that isn't available for dragging | row
 * `drop-disabled` | Set to a row that can't be dropped on top of | row
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.Grid.A11yMixin
 * @mixes Vaadin.Grid.ActiveItemMixin
 * @mixes Vaadin.Grid.ArrayDataProviderMixin
 * @mixes Vaadin.Grid.ColumnResizingMixin
 * @mixes Vaadin.Grid.DataProviderMixin
 * @mixes Vaadin.Grid.DynamicColumnsMixin
 * @mixes Vaadin.Grid.FilterMixin
 * @mixes Vaadin.Grid.RowDetailsMixin
 * @mixes Vaadin.Grid.ScrollMixin
 * @mixes Vaadin.Grid.SelectionMixin
 * @mixes Vaadin.Grid.SortMixin
 * @mixes Vaadin.Grid.KeyboardNavigationMixin
 * @mixes Vaadin.Grid.ColumnReorderingMixin
 * @mixes Vaadin.Grid.EventContextMixin
 * @mixes Vaadin.Grid.StylingMixin
 * @mixes Vaadin.Grid.DragAndDropMixin
 * @demo demo/index.html
 */


class GridElement extends ElementMixin(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(DragAndDropMixin(StylingMixin(GridScrollerElement)))))))))))))))))) {
  static get template() {
    return htmlTag_js.html`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`;
  }

  static get is() {
    return 'vaadin-grid';
  }

  static get version() {
    return '5.4.12';
  }

  static get observers() {
    return ['_columnTreeChanged(_columnTree, _columnTree.*)'];
  }

  static get properties() {
    return {
      _this: {
        type: Object,
        value: function () {
          return this;
        }
      },
      _safari: {
        type: Boolean,
        value: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      },
      _ios: {
        type: Boolean,
        value: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
      },
      _edge: {
        type: Boolean,
        value: typeof CSS !== 'undefined' && CSS.supports('(-ms-ime-align:auto)')
      },
      _ie: {
        type: Boolean,
        value: !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/))
      },
      _firefox: {
        type: Boolean,
        value: navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      },
      _android: {
        type: Boolean,
        value: /android/i.test(navigator.userAgent)
      },
      _touchDevice: {
        type: Boolean,
        value: TOUCH_DEVICE$1
      },

      /**
       * If true, the grid's height is defined by the number of its rows.
       */
      heightByRows: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_heightByRowsChanged'
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('animationend', this._onAnimationEnd);
  }

  __hasRowsWithClientHeight() {
    return !!Array.from(this.$.items.children).filter(row => row.clientHeight).length;
  }

  __setInitialColumnWidths() {
    if (!this._initialColumnWidthsSet && this.__hasRowsWithClientHeight()) {
      this._initialColumnWidthsSet = true;
      this.recalculateColumnWidths();
    }
  }
  /**
   * @param {Array<Vaadin.GridColumnElement>} cols the columns to auto size based on their content width
   */


  _recalculateColumnWidths(cols) {
    // Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
    // split for performance reasons to batch these similar actions [write/read] together to avoid
    // unnecessary layout trashing.
    // [write] Set automatic width for all cells (breaks column alignment)
    cols.forEach(col => {
      col.width = 'auto';
      col._origFlexGrow = col.flexGrow;
      col.flexGrow = 0;
    }); // [read] Measure max cell width in each column

    cols.forEach(col => {
      col._currentWidth = 0; // Note: _allCells only contains cells which are currently rendered in DOM

      col._allCells.forEach(c => {
        const cellWidth = Math.ceil(c.getBoundingClientRect().width);
        col._currentWidth = Math.max(col._currentWidth, cellWidth);
      });
    }); // [write] Set column widths to fit widest measured content

    cols.forEach(col => {
      col.width = `${col._currentWidth}px`;
      col.flexGrow = col._origFlexGrow;
      col._currentWidth = undefined;
      col._origFlexGrow = undefined;
    });
  }
  /**
   * Updates the `width` of all columns which have `autoWidth` set to `true`.
   */


  recalculateColumnWidths() {
    if (!this._columnTree) {
      return; // No columns
    }

    const cols = this._getColumns().filter(col => !col.hidden && col.autoWidth);

    this._recalculateColumnWidths(cols);
  }

  _createScrollerRows(count) {
    const rows = [];

    for (var i = 0; i < count; i++) {
      const row = document.createElement('tr');
      row.setAttribute('part', 'row');
      row.setAttribute('role', 'row');

      if (this._columnTree) {
        this._updateRow(row, this._columnTree[this._columnTree.length - 1], 'body', false, true);
      }

      rows.push(row);
    }

    if (this._columnTree) {
      this._columnTree[this._columnTree.length - 1].forEach(c => c.notifyPath && c.notifyPath('_cells.*', c._cells));
    }

    renderStatus_js.beforeNextRender(this, () => {
      this._updateFirstAndLastColumn();

      this._resetKeyboardNavigation();
    });
    return rows;
  }

  _getRowTarget() {
    return this.$.items;
  }

  _createCell(tagName) {
    const contentId = this._contentIndex = this._contentIndex + 1 || 0;
    const slotName = 'vaadin-grid-cell-content-' + contentId;
    const cellContent = document.createElement('vaadin-grid-cell-content');
    cellContent.setAttribute('slot', slotName);
    const cell = document.createElement(tagName);
    cell.id = slotName.replace('-content-', '-');
    cell.setAttribute('tabindex', '-1');
    cell.setAttribute('role', tagName === 'td' ? 'gridcell' : 'columnheader');
    const slot = document.createElement('slot');
    slot.setAttribute('name', slotName);
    cell.appendChild(slot);
    cell._content = cellContent; // With native Shadow DOM, mousedown on slotted element does not focus
    // focusable slot wrapper, that is why cells are not focused with
    // mousedown. Workaround: listen for mousedown and focus manually.

    cellContent.addEventListener('mousedown', () => {
      if (window.chrome) {
        // Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
        const mouseUpListener = () => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          } // If focus is in the cell content — respect it, do not change.


          document.removeEventListener('mouseup', mouseUpListener, true);
        };

        document.addEventListener('mouseup', mouseUpListener, true);
      } else {
        // Focus on mouseup, on the other hand, removes selection on Safari.
        // Watch out sync focus removal issue, only async focus works here.
        setTimeout(() => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          }
        });
      }
    });
    return cell;
  }

  _updateRow(row, columns, section, isColumnRow, noNotify) {
    section = section || 'body';
    const contentsFragment = document.createDocumentFragment();
    Array.from(row.children).forEach(cell => cell._vacant = true);
    row.innerHTML = '';

    if (row.id !== 'outersizer' && row.id !== 'fixedsizer') {
      row.hidden = true;
    }

    columns.forEach((column, index) => {
      let cell;

      if (section === 'body') {
        // Body
        column._cells = column._cells || [];
        cell = column._cells.filter(cell => cell._vacant)[0];

        if (!cell) {
          cell = this._createCell('td');

          column._cells.push(cell);
        }

        cell.setAttribute('part', 'cell body-cell');
        row.appendChild(cell);

        if (index === columns.length - 1 && (this._rowDetailsTemplate || this.rowDetailsRenderer)) {
          // Add details cell as last cell to body rows
          this._detailsCells = this._detailsCells || [];

          const detailsCell = this._detailsCells.filter(cell => cell._vacant)[0] || this._createCell('td');

          if (this._detailsCells.indexOf(detailsCell) === -1) {
            this._detailsCells.push(detailsCell);
          }

          if (!detailsCell._content.parentElement) {
            contentsFragment.appendChild(detailsCell._content);
          }

          this._configureDetailsCell(detailsCell);

          row.appendChild(detailsCell);

          this._a11ySetRowDetailsCell(row, detailsCell);

          detailsCell._vacant = false;
        }

        if (column.notifyPath && !noNotify) {
          column.notifyPath('_cells.*', column._cells);
        }
      } else {
        // Header & footer
        const tagName = section === 'header' ? 'th' : 'td';

        if (isColumnRow || column.localName === 'vaadin-grid-column-group') {
          cell = column[`_${section}Cell`] || this._createCell(tagName);
          cell._column = column;
          row.appendChild(cell);
          column[`_${section}Cell`] = cell;
        } else {
          column._emptyCells = column._emptyCells || [];
          cell = column._emptyCells.filter(cell => cell._vacant)[0] || this._createCell(tagName);
          cell._column = column;
          row.appendChild(cell);

          if (column._emptyCells.indexOf(cell) === -1) {
            column._emptyCells.push(cell);
          }
        }

        cell.setAttribute('part', `cell ${section}-cell`);

        this.__updateHeaderFooterRowVisibility(row);
      }

      if (!cell._content.parentElement) {
        contentsFragment.appendChild(cell._content);
      }

      cell._vacant = false;
      cell._column = column;
    }); // Might be empty if only cache was used

    this.appendChild(contentsFragment);

    this._frozenCellsChanged();

    this._updateFirstAndLastColumnForRow(row);
  }

  __updateHeaderFooterRowVisibility(row) {
    if (!row) {
      return;
    }

    const visibleRowCells = Array.from(row.children).filter(cell => {
      const column = cell._column;

      if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
        // The cell is an "empty cell"  -> doesn't block hiding the row
        return false;
      }

      if (row.parentElement === this.$.header) {
        if (column.headerRenderer || column._headerTemplate) {
          // The cell is the header cell of a column that has a header renderer
          // or a header template -> row should be visible
          return true;
        }

        if (column.header === null) {
          // The column header is explicilty set to null -> doesn't block hiding the row
          return false;
        }

        if (column.path || column.header !== undefined) {
          // The column has an explicit non-null header or a path that generates a header
          // -> row should be visible
          return true;
        }
      } else {
        if (column.footerRenderer || column._footerTemplate) {
          // The cell is the footer cell of a column that has a footer renderer
          // or a footer template -> row should be visible
          return true;
        }
      }
    });

    if (row.hidden !== !visibleRowCells.length) {
      row.hidden = !visibleRowCells.length;
      this.notifyResize();
    }
  }

  _updateScrollerItem(row, index) {
    this._preventScrollerRotatingCellFocus(row, index);

    if (!this._columnTree) {
      return;
    }

    this._toggleAttribute('first', index === 0, row);

    this._toggleAttribute('odd', index % 2, row);

    this._a11yUpdateRowRowindex(row, index);

    this._getItem(index, row);
  }

  _columnTreeChanged(columnTree, splices) {
    Array.from(this.$.items.children).forEach(row => this._updateRow(row, columnTree[columnTree.length - 1]));

    while (this.$.header.children.length < columnTree.length) {
      const headerRow = document.createElement('tr');
      headerRow.setAttribute('part', 'row');
      headerRow.setAttribute('role', 'row');
      this.$.header.appendChild(headerRow);
      const footerRow = document.createElement('tr');
      footerRow.setAttribute('part', 'row');
      footerRow.setAttribute('role', 'row');
      this.$.footer.appendChild(footerRow);
    }

    while (this.$.header.children.length > columnTree.length) {
      this.$.header.removeChild(this.$.header.firstElementChild);
      this.$.footer.removeChild(this.$.footer.firstElementChild);
    }

    Array.from(this.$.header.children).forEach((headerRow, index) => this._updateRow(headerRow, columnTree[index], 'header', index === columnTree.length - 1));
    Array.from(this.$.footer.children).forEach((footerRow, index) => this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], 'footer', index === 0)); // Sizer rows

    this._updateRow(this.$.outersizer, columnTree[columnTree.length - 1]);

    this._updateRow(this.$.fixedsizer, columnTree[columnTree.length - 1]);

    this._resizeHandler();

    this._frozenCellsChanged();

    this._updateFirstAndLastColumn();

    this._resetKeyboardNavigation();

    this._a11yUpdateHeaderRows();

    this._a11yUpdateFooterRows();
  }

  _updateItem(row, item) {
    row._item = item;

    const model = this.__getRowModel(row);

    this._toggleAttribute('selected', model.selected, row);

    this._a11yUpdateRowSelected(row, model.selected);

    this._a11yUpdateRowLevel(row, model.level);

    this._toggleAttribute('expanded', model.expanded, row);

    if (this._rowDetailsTemplate || this.rowDetailsRenderer) {
      this._toggleDetailsCell(row, item);
    }

    this._generateCellClassNames(row, model);

    this._filterDragAndDrop(row, model);

    Array.from(row.children).forEach(cell => {
      if (cell._renderer) {
        const owner = cell._column || this;

        cell._renderer.call(owner, cell._content, owner, model);
      } else if (cell._instance) {
        cell._instance.__detailsOpened__ = model.detailsOpened;
        cell._instance.__selected__ = model.selected;
        cell._instance.__level__ = model.level;
        cell._instance.__expanded__ = model.expanded;

        cell._instance.setProperties(model);
      }
    });
    this._debouncerUpdateHeights = debounce_js.Debouncer.debounce(this._debouncerUpdateHeights, async_js.timeOut.after(1), () => {
      this._updateMetrics();

      this._positionItems();

      this._updateScrollerSize();
    });
  }

  _resizeHandler() {
    this._updateDetailsCellHeights();

    this._accessIronListAPI(super._resizeHandler, true);

    this._updateHeaderFooterMetrics();
  }

  _updateHeaderFooterMetrics() {
    const headerHeight = this.$.header.clientHeight + 'px';
    const footerHeight = this.$.footer.clientHeight + 'px';
    [this.$.outersizer, this.$.fixedsizer, this.$.items].forEach(element => {
      element.style.borderTopWidth = headerHeight;
      element.style.borderBottomWidth = footerHeight;
    });
    renderStatus_js.afterNextRender(this.$.header, () => {
      if (this._pendingScrollToIndex) {
        this._scrollToIndex(this._pendingScrollToIndex);
      }
    });
  }

  _onAnimationEnd(e) {
    // ShadyCSS applies scoping suffixes to animation names
    if (e.animationName.indexOf('vaadin-grid-appear') === 0) {
      this._render();

      this._updateHeaderFooterMetrics();

      e.stopPropagation();
      this.notifyResize();

      this.__setInitialColumnWidths();
    }
  }

  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  __getRowModel(row) {
    return {
      index: row.index,
      item: row._item,
      level: this._getIndexLevel(row.index),
      expanded: this._isExpanded(row._item),
      selected: this._isSelected(row._item),
      detailsOpened: !!(this._rowDetailsTemplate || this.rowDetailsRenderer) && this._isDetailsOpened(row._item)
    };
  }
  /**
   * Manually invoke existing renderers for all the columns
   * (header, footer and body cells) and opened row details.
   */


  render() {
    if (this._columnTree) {
      // header and footer renderers
      this._columnTree.forEach(level => {
        level.forEach(column => column._renderHeaderAndFooter());
      }); // body and row details renderers


      this._update();
    }
  }
  /**
   * Updates the computed metrics and positioning of internal grid parts
   * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
   * content changes asynchronously to ensure consistent appearance (e.g. when a
   * contained image whose bounds aren't known beforehand finishes loading).
   */


  notifyResize() {
    super.notifyResize();
  }

  _heightByRowsChanged(value, oldValue) {
    if (value || oldValue) {
      this.notifyResize();
    }
  }

  __forceReflow() {
    this._debouncerForceReflow = debounce_js.Debouncer.debounce(this._debouncerForceReflow, async_js.animationFrame, () => {
      this.$.scroller.style.overflow = 'hidden';
      setTimeout(() => this.$.scroller.style.overflow = '');
    });
  }

}

customElements.define(GridElement.is, GridElement);
//# sourceMappingURL=index.js.map
