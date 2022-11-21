function createUser(username, password) {
  // TODO write user info to db and return result [bool]
  console.log(username, password);
  return true;
}

export const register = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let result = createUser(username, password);
  if (result) {
    res.send({
      error_code: 0,
      msg: 'ok',
    });
    return;
  } else {
    res.send({
      error_code: 1,
      msg: 'Register fail',
    });
    return;
  }
};
