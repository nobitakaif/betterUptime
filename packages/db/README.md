# db

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

<!-- ################################################### -->
steps to initialise the project locally

    1 -> install all the dependencies 
    2 -> run redis and postgres locally using docker
    3 -> create user using signup and signup then put some website into the table
    4 -> go inside the postgres container and then insert into regoin and  country name from where you want to track like india, usa, new york 
    5 -> go inside the redis container and create consumer group and make sure consumer group's id is same of uuid that we put inside the when we create region using this cmd (GROUP CREATE betteruptime:website ee80006d-ce28-4e2e-9a15-209c959eb737 $) 
    6 -> the start the pusher that will push the website that we want to track
    7 -> start the worker and worker will put the website from the pusher then it will the send the request to the website name that it's get from the pusher if response is GOOD then it store the data into the db(website is up) otherwise (website is down) 
