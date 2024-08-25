require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  //Your github api data 
  "login": "DipeshK47",
  "id": 103434044,
  "node_id": "U_kgDOBipHPA",
  "avatar_url": "https://avatars.githubusercontent.com/u/103434044?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DipeshK47",
  "html_url": "https://github.com/DipeshK47",
  "followers_url": "https://api.github.com/users/DipeshK47/followers",
  "following_url": "https://api.github.com/users/DipeshK47/following{/other_user}",
  "gists_url": "https://api.github.com/users/DipeshK47/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DipeshK47/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DipeshK47/subscriptions",
  "organizations_url": "https://api.github.com/users/DipeshK47/orgs",
  "repos_url": "https://api.github.com/users/DipeshK47/repos",
  "events_url": "https://api.github.com/users/DipeshK47/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DipeshK47/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dipesh Kumar",
  "company": null,
  "blog": "",
  "location": "Delhi, India",
  "email": null,
  "hireable": null,
  "bio": "A dedicated developer proficient in Full Stack development and AI/ML, with a specialization in Computer Vision & NLP, hailing from India.",
  "twitter_username": null,
  "public_repos": 43,
  "public_gists": 0,
  "followers": 9,
  "following": 17,
  "created_at": "2022-04-11T13:43:08Z",
  "updated_at": "2024-08-25T13:35:57Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) => {
    res.send('<h1>Pls login</h1>')
})
app.get('/youtube', (req,res) => {
    res.send('<h2>Youtube</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
 })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})