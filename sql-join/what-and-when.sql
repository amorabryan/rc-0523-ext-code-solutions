select "releaseYear",
       "c"."name"
from "films"
join "filmGenre" using ("filmId")
join "genres" as "c" using ("genreId")
where "title" = 'Boogie Amelie';
