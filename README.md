#Local Library

The purpose of the website is to provide an online catalog for a small local library, where users can browse available books; add authors, genres, books and search on them

##Setup

1. Change the link in the _**mongoDB**_ variable of the **_app.js_** file.

2. Run the command `npm install` in the console. The command will fetch all the dependency 
packages listed in the project's **_package.json_** file.

3. For run the application 

    - on Windows, use this command: `SET DEBUG=local-library:* & npm start`;
    - on macOS or Linux, use this command: `DEBUG=local-library:* & npm start`.

4. Then load http://localhost:3000/ in your browser to access the app.
