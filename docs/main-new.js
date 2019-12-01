import {html, render} from "./web_modules/lit-html.js";

function testing() {
    console.log('testing')
}

render(html`
    <style>
        body {
            background: lightgray;
        }
    </style>
    <tm-examples heading="Material Elements">
    
        <section title="Vaadin Button">
             <vaadin-button>Button</vaadin-button>
             <vaadin-button disabled>Disabled</vaadin-button>
        </section>
        
        <section title="Vaadin Textfield">
             <vaadin-text-field label="Text" value="Some text..."></vaadin-text-field>
        </section>
        
        <section title="Vaadin Tabs">
             <vaadin-tabs>
                <vaadin-tab>vaadin-text-field</vaadin-tab>
                <vaadin-tab>vaadin-button</vaadin-tab>
                <vaadin-tab>vaadin-grid</vaadin-tab>
            </vaadin-tabs>
        </section>

    </tm-examples>

`, document.querySelector('body'));



// <section title="Vaadin Grid">
//     <script>
// const dataGridData = [
//     {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
//     {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
// ];
// </script>
// <vaadin-grid id="vaadin-grid" .items="${dataGridData}">
//     <vaadin-grid-filter-column path="name.first" header="First name"></vaadin-grid-filter-column>
//     <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
//     <vaadin-grid-sort-column path="location.city"></vaadin-grid-sort-column>
//     <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
//     </vaadin-grid>
//     </section>