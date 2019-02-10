# Find similar people
This API will let you search for a candidate profile to find other people that does the same.
Right now it will just look for first and second level connections that have the same `professionalHeading`
or that includes the candidate's `professionalHeading`.


## Running the project
All just need is to have yarn installed. Then you should run:
- `npm install`
- `npm start`

## Endpoints
- `candidate/:username` (returns the candidate with similar connections)
- `people?name=` (returns candidate options).


## Pending things I will like to add:
The idea of this project was to create a custom Database to store the parsed data.
That is why I configured mongoose, unfortunately didn't had enough time to implement it.
Instead I'm just hitting torre's API and responding with the parsed data so it is just like
a middleware.

- Unit test (unfortunately didn't have the time).
- Better logging and error handling.
- Better criteria to find "similar" profiles.
