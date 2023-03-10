function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
  }
const it = makeRangeIterator(1, 10, 1);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}