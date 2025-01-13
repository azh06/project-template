# Teaching Project Template
```md
┏━━━━━━━━━━━━━━┓                      ┏━━━━━━━━━━━━━━┓                    ┏━━━━━━━━━━━━━━┓
┃              ┃ -------------------> ┃              ┃ -----------------> ┃              ┃
┃              ┃   [HTTP Requests]    ┃              ┃   [DB Requests]    ┃              ┃
┃   Frontend   ┃                      ┃   Backend    ┃                    ┃   Database   ┃
┃   Server     ┃                      ┃   Server     ┃                    ┃   Instance   ┃
┃              ┃   [HTTP Responses]   ┃              ┃   [DB Responses]   ┃              ┃
┃              ┃ <------------------- ┃              ┃ <----------------- ┃              ┃
┗━━━━━━━━━━━━━━┛                      ┗━━━━━━━━━━━━━━┛                    ┗━━━━━━━━━━━━━━┛

     React                               Express.js                           MongoDB
     Tailwind                            Mongoose/MongoDB                     Docker
     Next.js                             
```
# Prerequisite Technologies
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Github Desktop](https://desktop.github.com/download/)
- [Docker Desktop](https://docs.docker.com/get-started/get-docker/)
- [Node.js](https://nodejs.org/en/download)

# Steps to run
1. Clone this repository to your computer.
2. Put the backend `.env` file in the backend folder, and the database `.env` file in the database folder.
3. Run the following command in the root directory.
```
npm run setup
```
4. Set up the database
   ```
   cd database; npm start; cd ..
   ```
5. Run the following command in the root directory.
```
cd backend; npm run reset; cd ..
```
6. Run the following command in the root directory.
```
npm start
```
