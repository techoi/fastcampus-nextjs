export default function handler(req, res) {
  res.clearPreviewData()

  res.status(200).json({ message: 'cookies cleared' })
}
