const userService = require('../services/userService');

exports.helloWorld = (req, res) => {
  res.send('Hello World');
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
};
