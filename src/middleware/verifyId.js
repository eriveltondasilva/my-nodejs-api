export default function verifyId(_req, _res, next, id) {
  if (isNaN(id)) {
    throw new Error(`Invalid id: ${id}`)
  }

  next()
}
