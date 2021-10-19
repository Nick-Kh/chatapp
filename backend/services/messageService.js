const getRandomMessage = (data) => {
  let msgIdx = getRandomIndex(data.length - 1);
  return data[msgIdx];
}

const getRandomIndex = (num) => {
  return Math.floor(Math.random() * num);
} 

module.exports = {
  getRandomMessage
}