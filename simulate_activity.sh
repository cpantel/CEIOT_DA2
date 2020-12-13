curl --location --request POST 'http://localhost:8080/api/dispositivo/1/medicion' \
--header 'Content-Type: application/json' \
--data-raw '{
 "valor":22
}'

sleep 10

curl --location --request POST 'http://localhost:8080/api/dispositivo/1/medicion' \
--header 'Content-Type: application/json' \
--data-raw '{
 "valor":40
}'

sleep 10

curl --location --request POST 'http://localhost:8080/api/dispositivo/1/medicion' \
--header 'Content-Type: application/json' \
--data-raw '{
 "valor":62
}'
