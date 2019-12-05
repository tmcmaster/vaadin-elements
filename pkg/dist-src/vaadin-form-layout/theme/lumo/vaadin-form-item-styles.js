import "../../../vaadin-lumo-styles/color.js";
import "../../../vaadin-lumo-styles/spacing.js";
import "../../../vaadin-lumo-styles/style.js";
import "../../../vaadin-lumo-styles/typography.js";
import { html } from "@polymer/polymer/lib/utils/html-tag.js";
const $_documentContainer = html`<dom-module id="lumo-form-item" theme-for="vaadin-form-item">
  <template>
    <style>
      :host {
        --vaadin-form-item-row-spacing: 0;
      }

      /* font-weight, margin-bottom, transition and line-height same values as for part label in text-field */
      [part="label"] {
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin-top: var(--lumo-space-m);
        margin-left: calc(var(--lumo-border-radius) / 4);
        margin-bottom: var(--lumo-space-xs);
        transition: color 0.4s;
        line-height: 1.333;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);