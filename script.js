const hours = +prompt('Please enter the number of hours');

if (isNaN(hours)) {
    alert('Sorry, you input wrong data');
} else {
    const seconds = hours * 60;
    alert(`${hours} hours is ${seconds} seconds`);
}
