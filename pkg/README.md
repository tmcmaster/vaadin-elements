# Vaadin Components

## Installation

```bash
npm install --save @wonkytech/vaadin-elements
```

## Usage

```html
<script type="module">
  import '@wonkytech/vaadin-elements';
</script>

<vaadin-text-field label="Text" value="Some text..."></vaadin-text-field>
```


## Build this package

After adding any extra Vaadin components to the package.json file, build the pika package.
```bash
./bin/build.sh
```

Commit changes, and push to the git repository.

publish the pika package: 
```bash
pika publish
```

Commit remaining changes.
