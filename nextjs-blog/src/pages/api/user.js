import { userDetail } from 'constants/userDetail'

export default function handler(req, res) {
  res.status(200).json(userDetail)
}
