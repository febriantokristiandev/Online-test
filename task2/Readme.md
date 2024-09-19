NOTE: 

1. Jalankan aplikasi dengan npm start
2. Jangan lupa import database yang sudah saya sediakan (db.sql)
3. Ketika melakukan test dengan postman sertakan

    ```json
        x-api-key : 'x-api-key: APIKEY12345678'
    ```
4. server akan berjalan di 
    ```bash
    http://localhost:3000
    ```
5. Contoh CURL
   
   Add User :
    ```php
    curl --location 'http://localhost:3000/users' \
    --header 'x-api-key: APIKEY12345678' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "name": "John Doe6",
    "email": "john.doe6@example.com",
    "password": "securepassword123"
    }'
    ```

    Get All User :
    ```php
    curl --location 'http://localhost:3000/users' \
    --header 'x-api-key: APIKEY12345678' \
    --data ''
    ```

    Get User by Id :
    ```php
    curl --location 'http://localhost:3000/users/1' \
    --header 'x-api-key: APIKEY12345678' \
    --data ''
    ```

    Delete User by Id:
    ```php
    curl --location --request DELETE 'http://localhost:3000/users/1' \
    --header 'x-api-key: APIKEY12345678' \
    --data ''
    ```