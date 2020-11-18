// Miscellanious functions

export const getCharacterId = (url) => {
  return url.split('/').reverse()[1]
}
