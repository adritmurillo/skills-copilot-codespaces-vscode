// Create a web server
// Create a route at /comments that returns a JSON object
// The JSON object should have a key of "comments" and an array of comments as the value
// The comments array should have at least 3 comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { username: 'Tammy', comment: 'lololol' },
      { username: 'Timmy', comment: 'lalalal' },
      { username: 'Tommy', comment: 'lululul' }
    ]
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});