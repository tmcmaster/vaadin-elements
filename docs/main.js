import {html, render} from "./web_modules/lit-html.js";

function testing() {
    console.log('testing')
}

const dataGridData = [
    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
];
const dataGridData2 = dataGridData;


let sites = {
    'src': 'https://github.com/tmcmaster/vaadin-elements',
    'pika': 'https://www.pika.dev/npm/@wonkytech/vaadin-elements',
    'npm': 'https://www.npmjs.com/package/@wonkytech/vaadin-elements',
    'docs': 'https://github.com/tmcmaster/vaadin-elements#readme'
};

render(html`
    <style>
        body {
            padding: 0;
            margin: 0;
            left:0;
            top:0;
            width: 100vw;
            height: 100vh;  
        }
    </style>
    <tm-examples heading="Vaadin Elements" .sites="${sites}">
    
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
        
        <section title="Vaadin Grid">
            <script>
                let dataGridData = [
                    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
                    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
                ];
            </script>
            <vaadin-grid id="vaadin-grid" .items="${dataGridData}">
                <vaadin-grid-filter-column path="name.first" header="First name"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column path="location.city"></vaadin-grid-sort-column>
                <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
            </vaadin-grid>            
        </section>
        
        <section title="Selectable Vaadin Grid">
            <script>
                let dataGridData2 = [
                    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
                    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
                ];
            </script>
            <vaadin-grid id="vaadin-grid" .items="${dataGridData2}">
                <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
                <vaadin-grid-filter-column path="name.first" header="First name"></vaadin-grid-filter-column>
                <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
                <vaadin-grid-sort-column path="location.city"></vaadin-grid-sort-column>
                <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
            </vaadin-grid>            
        </section>

    </tm-examples>

`, document.querySelector('body'));



