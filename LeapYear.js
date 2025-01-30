const LeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year": "NOT Leap Year" 
    let year = LeapYear(2024)
    console.log(year)

 