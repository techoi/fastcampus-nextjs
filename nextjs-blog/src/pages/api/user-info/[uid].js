export default function handler(req, res) {
  const { uid } = req.query
  const cookies = req.cookies
  //   res.status(200).json({ name: `Jimmy Choi ${uid} ${JSON.stringify(cookies)}` })
  //   res.status(404).send({ error: 'error' })
  res.redirect(307, '/api/user')
}
