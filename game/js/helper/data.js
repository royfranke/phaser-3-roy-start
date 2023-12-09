/**
 * A helper class that processes data saves and loads.
 */
 export default class HelperData {
    constructor() {
    }


    loadCSV(csvPath, delimiter = ',') {
        return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', csvPath);
        xhr.setRequestHeader('Content-Type', 'text/csv');
        xhr.onload = () => {
            if (xhr.status === 200) {
            const csvData = xhr.responseText;
            const rows = csvData.split('\n');
            const dataArray = [];
            rows.forEach(row => {
                const cols = row.split(delimiter);
                dataArray.push(cols);
            });
            resolve(dataArray);
            } else {
            reject(new Error(`Failed to load CSV file: ${csvPath}`));
            }
        };
        xhr.onerror = () => {
            reject(new Error(`Failed to load CSV file: ${csvPath}`));
        };
        xhr.send();
        });
    }
 }