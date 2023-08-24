# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  It loads data when the component mounts and runs once because we had an empty array as the second argument in `useEffect`.

- What browser function can be used to make HTTP requests to a server in React?
  You can use a `fetch` API to make HTTP requests to a server.

- How do you use `useEffect` to load component data just once when the component mounts?
  You will have an empty dependency array [] as the second argument. This way the effect will not be dependant on any values and run only once.

- How do you use `useEffect` to load component data every time the data key changes?
  You will have a dependency array [] with a data key, and the side effect will run every time the value of the variable changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Server-side rendering (SSR's), GraphQL, Real-Time API's

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
