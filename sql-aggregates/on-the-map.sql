select "countries"."name" as "country",
count(*) as "cities"
from "countries"
join "cities" using ("countryId")
group by "countries"."name";
