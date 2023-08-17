# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  They are functions that allow you to use state and other React features in functional components; they provide a way to add and manage stateful behavior in React components without the need for class components.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks should only be called at the top level of a function component or from other custom hooks and should be called from within React functional components, not JavaScript functions.

- What is the purpose of state in React?
  It is to store and manage mutable data within a component.

- Why can't we just maintain state in a local variable?
  Local variables do not trigger component re-renders when they are updted.

- What two actions happen when you call a `state setter` function?

1. The state variable is updated with the new value you pass to the setter function.
2. React schedules a re-render of the component that uses the state, ensuring that the component reflects the updated state.

- When does the local `state variable` get updated with the new value?
  The local state variable gets updated with the new value immediately after calling the state setter function.

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
