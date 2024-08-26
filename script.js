//your JS code here. If required.
 function createRandomPromise(name) {
            return new Promise((resolve) => {
                const time = Math.random() * 2 + 1; // Time between 1 and 3 seconds
                setTimeout(() => resolve({ name, time }), time * 1000);
            });
        }

        // Create three promises
        const promise1 = createRandomPromise('Promise 1');
        const promise2 = createRandomPromise('Promise 2');
        const promise3 = createRandomPromise('Promise 3');

        // Handle all promises
        Promise.all([promise1, promise2, promise3])
            .then((results) => {
                // Remove loading row
                document.getElementById('loadingRow').remove();

                // Get the table body
                const tbody = document.querySelector('#promiseTable tbody');

                // Insert rows for each promise result
                results.forEach(result => {
                    const row = document.createElement('tr');
                    const cell1 = document.createElement('td');
                    cell1.textContent = result.name;
                    const cell2 = document.createElement('td');
                    cell2.textContent = result.time.toFixed(3);
                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    tbody.appendChild(row);
                });

                // Calculate total time
                const totalTime = results.reduce((sum, result) => sum + result.time, 0);

                // Insert row for total time
                const totalRow = document.createElement('tr');
                const totalCell1 = document.createElement('td');
                totalCell1.textContent = 'Total';
                const totalCell2 = document.createElement('td');
                totalCell2.textContent = totalTime.toFixed(3);
                totalRow.appendChild(totalCell1);
                totalRow.appendChild(totalCell2);
                tbody.appendChild(totalRow);
            });