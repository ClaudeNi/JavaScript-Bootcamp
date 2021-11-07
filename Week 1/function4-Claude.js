function date() {
    var date = new Date();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Today is ${dayArr[weekDay]} the ${date.getDate()} of ${monthArr[month]}, ${date.getFullYear()}`;
}
