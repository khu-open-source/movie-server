function getUserByUsername(username) {
  // TODO Write the query user info logic here.
  return {
    username: username,
    password: 'xxx',
  };
}
export const login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let user = getUserByUsername(username);
  if (!user) {
    res.send({
      error_code: 1,
      msg: 'User not found or password error.',
    });
    return;
  }
  if (user.password != password) {
    res.send({
      error_code: 1,
      msg: 'User not found or password error.',
    });
    return;
  }
  // set cookie
  req.session.username = username;

  res.send({
    error_code: 0,
    msg: 'ok',
  });
  return;
};
