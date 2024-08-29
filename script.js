const output = document.getElementById('output');
const loadingRow = document.getElementById('loading');

function randomTime() {
  return 2000; // Always return 2000ms (which is 2 seconds)
}

function createPromise(name) {
  const startTime = Date.now();
  return new Promise((resolve) => {
    const delay = randomTime();
    setTimeout(() => {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
      resolve({ name, time: timeTaken.toFixed(3) });
    }, delay);
  });
}

const promises = [
  createPromise('Promise 1'),
  createPromise('Promise 2'),
  createPromise('Promise 3')
];

const startTime = Date.now();

Promise.all(promises)
  .then((results) => {
    loadingRow.remove(); // Remove the loading row
    let totalTime = 0;
    results.forEach((result) => {
      totalTime += parseFloat(result.time);
      const row = output.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();
      nameCell.textContent = result.name;
      timeCell.textContent = result.time;
    });
    const totalRow = output.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();
    totalNameCell.textContent = 'Total';
    const endTime = Date.now();
    const actualTotalTime = ((endTime - startTime) / 1000).toFixed(3);
    totalTimeCell.textContent = actualTotalTime;
  })
  .catch((error) => {
    console.error(error);
  });