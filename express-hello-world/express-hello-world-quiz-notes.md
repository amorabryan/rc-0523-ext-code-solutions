# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next

- What is Express middleware useful for?
  It is useful for handling common functionalities and processing tasks in Express, such as logging, authentication, input validation, error handling, etc.

- How do you mount a middleware with an Express application?
  app.use() with the parameter taking a callback function to access the request object(req), the response object(res) and the next middleware function in the applications request-response cycle

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  the request object(req) - the HTTP request from the client
  the response object(res) - the HTTP response that will be sent back to the client
  the next function(next) - moves the request to the next middleware function in the stack

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
