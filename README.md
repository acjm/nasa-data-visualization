# Test Javascript - Data visualization 

You can start by cloning the repo and execute the following scripts

### `npm install`

To install the dependecies required to run the project

beside CRA we used the following External packages:

    - axios
    - Tailwind as UI lib
    - react-csv


### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint warnings in the console. (Linting needed for more improved code styling)


### `Ideas and improvement`

this section contains some improvements & ideas that can be added to the project :

    - Handling Different State/types of errors. including pagination (this part wasn't made because it wasn't mentionned in the test)

    - Since the data is not persisted, we can Add a caching system (redis or other mechanism) to reduce API calls & prevent 429 erros
    
    - Testing async functions and UI 