select "firstName",
       "lastName"
from "rentals"
join "inventory" using ("inventoryId")
join "customers" using ("customerId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
