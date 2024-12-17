// imports express module into the app
import express from "express";
// creates an instance of the express application and stores it in a constant called "app"
const app = express();
// declares a port variable to use and sets it to 3000
const port = 3000;

const musicians = [
  {
    name: "Beck",
    genre: "alternative",
    bestSong: "Hollow Log",
  },
  {
    name: "Kendrick Lamar",
    genre: "Hip-Hop",
    bestSong: "Savior",
  },
  {
    name: "Kate Bush",
    genre: "Art Pop",
    bestSong: "The Sensual World",
  },
];

// call get method on app. First argument is slash to indicate home location.
// Second argument is callback / arrow function which gives in the request and the response
// and returns a call to the response's send method, containing the message to display
app.get("/", (req, res) => {
  res.json(musicians);
});

// call listen method on app. first argument is port variable.
// Second argument is callback / arrow function with no arguments, which console.logs a listening message which includes port number
app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
