# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  C: insert into
  R: select
  U: update
  D: delete

- How do you add a row to a SQL table?
  insert into "name of table" ("name of column names to be updated")
  values ('values to be added')

- How do you add multiple rows to a SQL table at once?
  insert into "name of table" ("name of column names to be updated")
  values ('values to be added'),
  ('more values to be added')

- How do you update rows in a database table?
  update "name of table"
  set "name of column data to be updated" = "data that you want to add"
  where "row you would like to update"

- How do you delete rows from a database table?
  delete
  from "name of table"
  where "name of row data to be deleted" = "data that you want to delete"

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  It will either update or delete the entire table

- How do you accidentally delete or update all rows in a table?
  You dont add the 'where' clause

- How do you get back the modified row without a separate `select` statement?
  use the `returning *;` clause

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
