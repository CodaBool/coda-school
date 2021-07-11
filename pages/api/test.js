import applyMiddleware from '../../util'

export default applyMiddleware(async (req, res) => {
  try {
    res.status(200).json({msg: 'hi'})
  } catch (err) {
    if (typeof err === 'string') {
      res.status(400).json({ msg: err })
    } else {
      res.status(500).json({ msg: err.message || err})
    }
  }
})