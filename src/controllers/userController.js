function handleLogin(username) {
  // TODO Write the query user info logic here.
  return {
    username: username,
    password: 'xxx',
  };
}

export function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = handleLogin(username);
  if (!user) {
    res.status(400).send({
      msg: 'User not found or password error.',
    });
    return;
  }
  if (user.password != password) {
    res.status(400).send({
      msg: 'User not found or password error.',
    });
    return;
  }
  // set cookie
  req.session.username = username;

  res.send({
    msg: 'ok',
  });
  return;
}

function handleRegister(username, password, email) {
  // TODO write user info to db and return result [bool]
  console.log(username, password, email);
  return true;
}

export function register(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const result = handleRegister(username, password, email);
  if (result) {
    res.send({
      msg: 'ok',
    });
    return;
  } else {
    res.status(400).send({
      msg: 'Register Fail!',
    });
    return;
  }
}

export function logout(req, res) {
  req.session.destroy();
  res.send({
    msg: 'ok',
  });
  return;
}
