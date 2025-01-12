/* This file is the project entry point of the project. 
When the project is first run, this is the first file 
that is called which then calls the next file (app.js) to 
continue launching and running the backend. */

import app from "./app/app.js";

const { SERVER_HOSTNAME, SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://${SERVER_HOSTNAME}:${SERVER_PORT}/`);
});
