export default function handler(req,res) {
    if (req.query.token !== 'jimmy' || !req.query.post) {
        return res.status(401).json({message: 'Invalid token'})
    }

    res.setPreviewData({})

    res.redirect(`/posts/${req.query.post}`)
}