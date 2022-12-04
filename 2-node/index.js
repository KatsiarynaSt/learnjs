const number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
function toReadable (index) {
  return number[index - 1]
}

for (let i = 1; i < 100; i++) {
  console.log('to readable. result ' + i + ': ', toReadable(i))
}
