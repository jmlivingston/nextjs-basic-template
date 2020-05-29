export default (req, res) => {
  switch (req.method) {
    case 'POST':
      console.log(res.send);
      if (req.body.userName === 'Oceaneering' && req.body.password === 'Kaigunjin') {
        res.statusCode = 200;
        res.json({});
      } else {
        res.statusCode = 403;
        res.end();
      }
      break;
    default:
      res.statusCode = 405;
      res.end();
  }
};
