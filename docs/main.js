import {html, render} from "./web_modules/lit-html.js";

const dataGridData = [
    {name: {first:'AAA', last: 'aaa'}, location: {city: 'Aaa'}, visitCount: 1},
    {name: {first:'BBB', last: 'bb'}, location: {city: 'Bbb'}, visitCount: 2}
];

function testing() {
    console.log('testing')
}

render(html`
    <style>
        body {
            background: lightgray;
        }
    </style>

    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
        } 
        
        div.body {
            max-width: 800px;
            width: 100%;
        }
        .hidden {
            display: none;
        }
    </style>
    
    <div class="body">
        <vaadin-tabs>
          <vaadin-tab>vaadin-text-field</vaadin-tab>
          <vaadin-tab>vaadin-button</vaadin-tab>
          <vaadin-tab>vaadin-grid</vaadin-tab>
        </vaadin-tabs>
        <div id="pages" class="hidden">
            <div>
                <h2>vaadin-text-field</h2>
                <vaadin-text-field label="Text" value="Some text..."></vaadin-text-field>        
            </div>
    
            <div>
                <h2>vaadin-button</h2>
                <vaadin-button>Button</vaadin-button>
                <vaadin-button disabled>Disabled</vaadin-button>
            </div>
       
            <div>
                <h2>vaadin-grid</h2>
                <vaadin-grid id="vaadin-grid" .items="${dataGridData}">
                    <vaadin-grid-filter-column path="name.first" header="First name"></vaadin-grid-filter-column>
                    <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
                    <vaadin-grid-sort-column path="location.city"></vaadin-grid-sort-column>
                    <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
                </vaadin-grid>  
            </div>      
        </div>
    </div>
`, document.querySelector('body'));

const tabs = document.getElementsByTagName('vaadin-tabs')[0];
const pages = document.getElementById('pages');

Array.from(pages.children).forEach((page, index) => {
    page.classList.add('hidden');
});
Array.from(pages.children)[tabs.selected].classList.remove('hidden');
pages.classList.remove('hidden');

console.log('Tabs: ', tabs);
console.log('Pages: ', pages);

tabs.addEventListener('selected-changed', () => {
    console.log('Selected: ' + tabs.selected);
    Array.from(pages.children).forEach((page, index) => {
        console.log('Page: ', page);
        if (index === tabs.selected) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
});