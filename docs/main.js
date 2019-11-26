import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
    <vaadin-text-field label="Text" value="Some text..."></vaadin-text-field>
    <vaadin-grid>
        <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
        <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
        <vaadin-grid-column path="location.city"></vaadin-grid-column>
        <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
    </vaadin-grid>
`, document.querySelector('body'));