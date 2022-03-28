export async function createUserApi (name, email, password) {
  return await fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ displayName: name, email, password, image: 'a' })
  });
};

export async function loginApi (email, password) {
  return await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  });
}

