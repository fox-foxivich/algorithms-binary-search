type Item = number
type Index = number

function binarySearch(sortedArray: Item[], item: Item): Index | null {
  let lowIndex = 0
  let highIndex = sortedArray.length - 1

  while (lowIndex <= highIndex) {
    const middleIndex = Math.ceil((lowIndex + highIndex) / 2)
    const guess = sortedArray[middleIndex]

    if (guess === item) {
      return middleIndex
    }

    if (item < guess) {
      highIndex = middleIndex - 1
    } else {
      lowIndex = middleIndex + 1
    }
  }

  return null
}

const myList = [
  -1024, -512, -256, -128, -64, -32, -16, -8, -4, -2, -1, 0, 1, 3, 5, 7, 9, 12,
  16, 32, 64, 128, 256, 512, 1024, 1025,
]

for (let item of myList) {
  console.log(binarySearch(myList, item))
}
