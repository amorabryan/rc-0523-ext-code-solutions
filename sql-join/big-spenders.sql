select "c"."firstName",
       "c"."lastName",
       "p"."amount"
from "payments" as "p"
join "customers" as "c" using ("customerId")
order by "p"."amount" DESC
limit 10;
