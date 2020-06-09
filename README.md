# colby-click-button-component

A bootstrap button react component.

## Props

| Name       | Description                                                | Type     | Default Value     |
| ---------- | ---------------------------------------------------------- | -------- | ----------------- |
| title      | The button text field                                      | string   | "Submit"          |
| className  | The button classes                                         | string   | "btn btn-primary" |
| id         | The HTML id of the button                                  | string   | null              |
| onClick    | The onClick handler function                               | function | () => {}          |
| isLoading  | Whether to show a loading spinner in the button            | bool     | false             |
| isDisabled | Is the button disabled?                                    | bool     | false             |
| style      | CSS styles, in object form, to be injected into the button | object   | {}                |

## Usage

### Simple Button

```javascript
import React from 'react';
import Button from '@colbycommunications/colby-click-button-component';

export default () => <Button title="Submit" />;
```

### Loading State

```javascript
import React from 'react';
import Button from '@colbycommunications/colby-click-button-component';

export default () => <Button title="Submit" className="btn btn-primary" isLoading />;
```

### Custom onClick Callback

```javascript
import React from 'react';
import Button from '@colbycommunications/colby-click-button-component';
import notification from '@colbycommunications/colby-notification';

export default () => (
    <Button
        title="Submit"
        className="btn btn-primary"
        onClick={() => notification('Button Clicked')}
    />
);
```
