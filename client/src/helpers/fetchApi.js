export async function createUserApi(name, email, password) {
  return await fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ displayName: name, email, password, image: 'a' })
  });
};

export async function loginApi(email, password) {
  return await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  });
}

export async function getPosts(token, setPosts) {
  const result = await fetch(`http://localhost:3001/post`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
  });

  const data = await result.json();

  return setPosts(data);
}

export async function getPostById(token, setPost, id) {
  const result = await fetch(`http://localhost:3001/post/${id}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
  });

  const data = await result.json();
  
  return setPost(data);
}

export async function createPostApi(token, title, content) {
  const result =  await fetch('http://localhost:3001/post', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
      "Authorization": `${token}`,
    },
    body: JSON.stringify({ title, content, categoryIds: [1, 2] })
  });

  const data = await result.json();
  return data;
}

export async function updatePostApi(token, id, title, content) {
  const result = await fetch(`http://localhost:3001/post/${id}`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
      "Authorization": `${token}`,
    },
    body: JSON.stringify({ title, content })
  });
  const data = await result.json();

  return data;
}


export async function deletePostApi(token, id) {
  const result = await fetch(`http://localhost:3001/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": "application/json",
      "Authorization": `${token}`,
    },
  });

  return result;
}

