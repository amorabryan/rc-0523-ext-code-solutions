# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  An event is an action that could be triggered as a result of the user action or system generated event
  Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

- What is an "event handler"? Which component declares the handler?
  It is a function thats responsible for handling an event when it occurs. It defines the behavior or actions that should be performed in response to the event. The component that declares the event handler is the parent component; it defines the function and passes it as a prop to the child coponent that needs to trigger the event.

- How do you pass an event handler to a React component?
  You need to pass it as a prop when rendering the component (e.g. <CustomButton onCustomClick={handleCustomClick}) />

- What is the naming convention for event handlers?
  Use the handle prefix followed by a descriptive name indicating the event or action being handled (e.g. 'handleClick')

- What is an "event handler prop"? Which component declares the prop?
  A prop that represents an event handler function. The component that declares the prop is the parent component.

- What are some custom event handler props a component may wish to define?
  Like the event handler props, but add 'on' as a prefix (e.g. onCustomClick). They allow components to be defined based on its specific functionality, allowing parent components to define the behavior of child components based on their specific needs.

- What is the naming convention for custom event handler props?
  Like the event handler props, but add 'on' as a prefix (e.g. onCustomClick)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
