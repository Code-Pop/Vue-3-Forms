let UUID = 0

export default function UniqueID () {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}
