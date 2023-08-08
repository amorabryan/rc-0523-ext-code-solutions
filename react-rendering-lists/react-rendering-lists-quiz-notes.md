# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When we have an array of items, like when we pull from an API or when we have a variable number of items.

- Why is it important for React components to be data-driven?
  It allows components to be reused in different parts of the application with different data sets, allowing the code to be more flexible and modular. For example, in this assignment, we are given a pokedex array as a prop that we need to pass into our PokemonList component. But what if we were to recieve another pokedex array with different values? We can still use our component, but assign the pokedex prop with the new pokedex array.

e.g.

```js
const pokedex2 = [
  { number: '002', name: 'Ivysaur' },
  { number: '005', name: 'Charmeleon' },
  { number: '008', name: 'Wartortle' },
  { number: '026', name: 'Raichu' },
  { number: '040', name: 'Wigglytuff' },
]
<PokemonList pokedex={pokedex2} />
```

In this example, we are given a new array but we can still use the same component.

- Where in the component code would a list of React components typically be built?
  Either in the return portion of the component code or before the return defined by a variable.

- What `Array` method is commonly used to create a list of React components?
  The map method of the Array object

- Why do components in a list need to have unique keys?
  The key prop is used by React to keep track of individual components within the list and having unique ID's helps React comb through the data and dynamically change. If we didn't have the unique ID, then React would have a hard time reorganizing the data provided in the same listing if an item is deleted, inserted or reordered.

- What is the best value to use as a "key" prop when rendering lists?
  A unique ID that is given somewhere in the dataset that we recieve (e.g. a number associated to the data or accessible from the data itself)

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
