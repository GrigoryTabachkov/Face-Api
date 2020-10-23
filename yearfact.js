const fact = document.querySelector('#fact');
const factText = document.querySelector('#fact-text');
const numberInput = document.querySelector('#numberInput');

async function getFactFetch() {
  const year = numberInput.value;
  // https://numbersapi.p.rapidapi.com/${year}?fragment=true&json=true/year
  await (fetch(`http://numbersapi.com/${year}/year`, {
    // method: 'GET',
    // headers: {
      // 'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
      // 'x-rapidapi-key': '2d6352989cmshd5924bd0368f0dbp161e36jsn57d7ec3fc5cd',
    // },
  })
    .then((res) => res.text()))
    .then((data) => {
      if (year !== '') {
        fact.style.display = 'block';
        factText.innerText = data;
      }
    })
    .catch((err) => console.log(err));
}
numberInput.addEventListener('input', getFactFetch);
getFactFetch().then(() => console.log('shit ;( ERR_CONNECTION_TIMED_OUT'));

setTimeout(() => {
  $('#fadeIt').fadeOut('fast');
}, 10000);


// const fact = document.querySelector('#fact');
// const factText = document.querySelector('#fact-text');
// const numberInput = document.querySelector('#numberInput');
//
// async function getFactFetch() {
//   const number = numberInput.value;
//   await fetch(`http://api.fungenerators.com/fact/onthisday/event/${number}`)
//     .then((res) => res.text())
//     .then((data) => {
//       if (number !== '') {
//         fact.style.display = 'block';
//         factText.innerText = data;
//       }
//     })
//     .catch((err) => console.log(err));
// }
// numberInput.addEventListener('input', getFactFetch);
//
// getFactFetch()
//   .then(() => console.log('success'));
