# My Site  

### Production
```
yarn run build
yarn start
```

### Locally
Be sure to start docker mongo db. To start and stop:
```
docker-compose up
docker-compose down
```
Then run
```
yarn run start:dev
```

### Locally with watch
```
(1) ~ yarn run start:dev:watch
(2) ~ yarn run client
```

### Dependencies
The architecture is as follows:

Deployment and Web Hosting: [Heroku](https://dashboard.heroku.com/apps/lukedunscombe)  
Domain hosting: [GoDaddy](https://dcc.godaddy.com/manage/lukedunscombe.com/settings)  
Database hosting: [MongoDB Atlas](https://cloud.mongodb.com/v2/5e36e1f65538554dda54c0ec#clusters)  
Image file hosting: [Cloudinary](https://cloudinary.com/console/c-d54355ef7e152f1122da6552e70722)
