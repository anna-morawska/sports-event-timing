# sports-event-timing

The project consists of 3 parts:

frontend - created based on create-react-app boilerplate. It is connected via socket.io to the backend server. It connects and reconnects to the server depending on the focus/blur state of the browser window.
For the convenience of testing, you can start the race from the frontend layer of the app - by pressing the start button.

backed - there the all backend logic lives. It is connected to the cloud mongodb database - for the convienience, all the credentials required for the authentication process are inside the project, so no further steps are needed. There is an athletes collection in the database, where all the data about athletes are placed ( name, surname, startNr and chipID - the same as in ./test-client/athletes.json file. ). When the server receives a post request from the test-client server it saves the data in the results collection. When you repeat the race, the old results collection is dropped.

test-client - a small express server which - based on the fake data provided in the dataset.json file - determines time gaps between athletes and sends post requests to the backend server in the calculated time intervals.

### Installing

To run the app, all the dependencies have to be installed. Run:

```
yarn / npm install
```

in the frontend, backend, test-client and the root project directory. Then, to start the app run

```
 yarn start / npm start
```

in the root project dir.

### Further improvements:

tests - for the frontend and backend part
better error handling
...
