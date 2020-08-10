## Why use jsonwebtoken

- In the front end, when a user registers, we want them to get logged in right away.
- And in order to be logged in, we want to return a json web token to authenticate and access protected routes.
- https://jwt.io/
- in the payload, we want to send the id of the user so that we can identify which user it is

- How to implement it: Link[https://github.com/auth0/node-jsonwebtoken]

- In the end, we were able to return the token, res.json({ token }), so we take this token, send it in the headers in the access-protected routes
