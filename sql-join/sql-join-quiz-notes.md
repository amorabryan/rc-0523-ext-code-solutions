# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  They are a column(s) in a database table that refeerences the primary key of another table. It allows the database to connect data but also keeps information in separate tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select (name of table).(column name)
  from (first table)
  join (second table) using (column name that matches)

- How do you temporarily rename columns or tables in a SQL statement?
  use the `as` keyword

- How do you create a one-to-many relationship between two tables?
  Create two tables (table 1 and table 2) with their own primary keys. Add a foreign key on a column in table 1 based on the primary key of table 2

- How do you create a many-to-many relationship between two tables?
  A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table.

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
