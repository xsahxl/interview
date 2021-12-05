const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

// Promise.all([p1, p2]).then((res) => {
//   console.log(res);
// });

function MyPromiseAll(list) {
  return new Promise((resolve, reject) => {
    const arr = [];
    let num = 0;
    list.forEach((item, index) => {
      item.then((res) => {
        arr[index] = res;
        num++;
        list.length === num && resolve(arr);
      });
    });
  });
}

MyPromiseAll([p1, p2]).then((res) => {
  console.log(res);
});
