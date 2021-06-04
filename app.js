var taskNum = 0;
while (taskNum < 1 || taskNum > 10 || taskNum === "" || taskNum === null || taskNum != Number(taskNum))
{
  taskNum = prompt("Enter task number (From 1 to 10):")
  if (taskNum === null || taskNum === "")
  {
    alert("Please enter some value!");
  }
  else if (taskNum != Number(taskNum))
  {
    alert("This isn't a number!");
  }
  else if (taskNum < 1 || taskNum > 10)
  {
    alert("There is no such task!");
  }
}

taskNum = Number(taskNum);

//Question 1
if (taskNum === 1)
{
  function power(a, b)
  {
    var result = a ** b;
    if (result % 1 === 0)
    {
      return result;
    }
    else
    {
      return result.toFixed(2);
    }
  }
  var a = "";
  while (a === "" || a === null || a != Number(a))
  {
    a = prompt("Enter a number:");
    if (a === "")
    {
      alert("You didn't enter anything!");
    }
    else if (a === null)
    {
      alert("Please don't cancel!");
    }
    else if (a != Number(a))
    {
      alert("This isn't a number!");
    }
  }
  var b = "";
  while (b === "" || b === null || b != Number(b))
  {
    b = prompt("Enter its power:");
    if (b === "")
    {
      alert("You didn't enter anything!");
    }
    else if (b === null)
    {
      alert("Please don't cancel!");
    }
    else if (b != Number(b))
    {
      alert("This isn't a number!");
    }
  }
  var result = power(a, b);
  document.write("<h1>Power Operator</h1>");
  document.write("<p>" + a + " raised to " + b + " is " + result + ".</p>");
}

//Question 2
else if (taskNum === 2)
{
  function isLeapYear(year)
  {
    if (year % 4 === 0 && year % 100 !== 0)
    {
      return true;
    }
    else if (year % 100 === 0 && year % 400 === 0)
    {
      return true;
    }
  }
  var year = "";
  var yearNow = new Date().getFullYear();
  while (year === "" || year === null || year != Number(year) || year < 1)
  {
    year = prompt("Enter a year:");
    if (year === "")
    {
      alert("You didn't enter anything!");
    }
    else if (year === null)
    {
      alert("Please don't cancel!");
    }
    else if (year != Number(year))
    {
      alert("This isn't a number!");
    }
    else if (year < 1)
    {
      alert("Invalid year!");
    }
  }
  var result = isLeapYear(year);
  document.write("<h1>Leap Year Finder</h1 >");
  if (result)
  {
    if (year < yearNow)
    {
      document.write(year + " was a leap year.");
    }
    else if (year == yearNow)
    {
      document.write(year + " is a leap year.");
    }
    else
    {
      document.write(year + " will be a leap year.");
    }
  }
  else
  {
    if (year < yearNow)
    {
      document.write(year + " was not a leap year.");
    }
    else if (year == yearNow)
    {
      document.write(year + " is not a leap year.");
    }
    else
    {
      document.write(year + " will not be a leap year.");
    }
  }
}

//Question 3
else if (taskNum === 3)
{
  function calcTriangleArea(a, b, c)
  {
    function calcSide(a, b, c)
    {
      var s = (a + b + c) / 2
      if (s % 1 === 0)
      {
        return s;
      }
      else
      {
        return s.toFixed(2);
      }
    }
    var s = calcSide(a, b, c);
    if (s <= a || s <= b || s <= c)
    {
      return undefined;
    }
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (area % 1 === 0)
    {
      return area;
    }
    else
    {
      return area.toFixed(2);
    }
  }
  var side1 = "",
    side2 = "",
    side3 = "";
  while (side1 === "" || side1 === null || side1 != Number(side1) || side1 <= 0)
  {
    side1 = prompt("Enter first side of triangle:");
    if (side1 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (side1 === null)
    {
      alert("Please don't cancel!");
    }
    else if (side1 != Number(side1))
    {
      alert("This isn't a number!");
    }
    else if (side1 <= 0)
    {
      alert("Invalid input!");
    }
  }
  while (side2 === "" || side2 === null || side2 != Number(side2) || side2 <= 0)
  {
    side2 = prompt("Enter second side of triangle:");
    if (side2 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (side2 === null)
    {
      alert("Please don't cancel!");
    }
    else if (side2 != Number(side2))
    {
      alert("This isn't a number!");
    }
    else if (side2 <= 0)
    {
      alert("Invalid input!");
    }
  }
  while (side3 === "" || side3 === null || side3 != Number(side3) || side3 <= 0)
  {
    side3 = prompt("Enter third side of triangle:");
    if (side3 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (side3 === null)
    {
      alert("Please don't cancel!");
    }
    else if (side3 != Number(side3))
    {
      alert("This isn't a number!");
    }
    else if (side3 <= 0)
    {
      alert("Invalid input!");
    }
  }
  side1 = +side1;
  side2 = +side2;
  side3 = +side3;
  var triangleArea = calcTriangleArea(side1, side2, side3);
  if (triangleArea == undefined)
  {
    alert("By triangle inequality, such a triangle does not exist!");
  }
  else
  {
    document.write("<h1>Area Of Triangle</h1>");
    document.write("The three sides of triangle are: <b>" + side1 + ", " + side2 + ", " + side3 + "</b>.<br />");
    document.write("Its area is <b>" + triangleArea + "</b>.");
  }
}

//Question 4
else if (taskNum === 4)
{
  function mainFunction(marks1, marks2, marks3)
  {
    function average(marks1, marks2, marks3)
    {
      return Math.round((marks1 + marks2 + marks3) / 3);
    }

    function percentage(marks1, marks2, marks3)
    {
      var percentage = ((marks1 + marks2 + marks3) / 300) * 100;
      if (percentage % 1 === 0)
      {
        return percentage;
      }
      else
      {
        return percentage.toFixed(2);
      }
    }
    var totalObtained = marks1 + marks2 + marks3;
    var average = average(marks1, marks2, marks3);
    var percentage = percentage(marks1, marks2, marks3);
    document.write("<h1>Report Card</h1>");
    document.write("Individual marks for each subject: <b>" + marks1 + ", " + marks2 + " and " + marks3 + "</b><br />");
    document.write("Total marks: <b>300</b><br />");
    document.write("Obtained marks: <b>" + totalObtained + "</b><br />");
    document.write("Average: <b>" + average + "</b><br />");
    document.write("Percentage: <b>" + percentage + "</b><br />");
  }
  var marks1 = "",
    marks2 = "",
    marks3 = "";
  while (marks1 === "" || marks1 === null || marks1 != Number(marks1) || marks1 < 0 || marks1 > 100)
  {
    marks1 = prompt("Enter marks of 1st subject:");
    if (marks1 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (marks1 === null)
    {
      alert("Please don't cancel!");
    }
    else if (marks1 != Number(marks1))
    {
      alert("This isn't a number!");
    }
    else if (marks1 < 0 || marks1 > 100)
    {
      alert("Invalid marks!");
    }
  }
  while (marks2 === "" || marks2 === null || marks2 != Number(marks2) || marks2 < 0 || marks2 > 100)
  {
    marks2 = prompt("Enter marks of 2nd subject:");
    if (marks2 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (marks2 === null)
    {
      alert("Please don't cancel!");
    }
    else if (marks2 != Number(marks2))
    {
      alert("This isn't a number!");
    }
    else if (marks2 < 0 || marks2 > 100)
    {
      alert("Invalid marks!");
    }
  }
  while (marks3 === "" || marks3 === null || marks3 != Number(marks3) || marks3 < 0 || marks3 > 100)
  {
    marks3 = prompt("Enter marks of 3rd subject:");
    if (marks3 === "")
    {
      alert("You didn't enter anything!");
    }
    else if (marks3 === null)
    {
      alert("Please don't cancel!");
    }
    else if (marks3 != Number(marks3))
    {
      alert("This isn't a number!");
    }
    else if (marks3 < 0 || marks3 > 100)
    {
      alert("Invalid marks!");
    }
  }
  marks1 = Number(marks1);
  marks2 = Number(marks2);
  marks3 = Number(marks3);
  mainFunction(marks1, marks2, marks3);
}

//Question 5
else if (taskNum === 5)
{
  function strIndex(text, str)
  {
    for (var i = 0; i < text.length; i++)
    {
      if (text.slice(i, i + str.length) === str)
      {
        return i;
      }
    }
    return -1;
  }
  var text = "";
  while (text === null || text === "" || text == Number(text))
  {
    text = prompt("Enter some text: ");
    if (text === "")
    {
      alert("You entered nothing!");
    }
    else if (text === null)
    {
      alert("You can't cancel!");
    }
    else if (text == Number(text))
    {
      alert("You entered only numbers!");
    }
  }
  var string = "";
  while (string === null || string === "" || string == Number(string) || string.length > text.length)
  {
    string = prompt("Enter a segment to find: ");
    if (string === "")
    {
      alert("You entered nothing!");
    }
    else if (string === null)
    {
      alert("You can't cancel!");
    }
    else if (string == Number(string))
    {
      alert("You entered only numbers!");
    }
    else if (string.length > text.length)
    {
      alert("The segment to find is larger than the text itself!");
    }
  }
  var stringIndex = strIndex(text, string);
  document.write("<h1>Index Finder</h1>");
  if (stringIndex != -1)
  {
    document.write("The string " + "'" + string + "'" + " is present at index " + stringIndex + " of the given text.");
  }
  else
  {
    document.write("The string " + "'" + string + "'" + " is not present anywhere in the given text.")
  }
}

//Question 6
else if (taskNum === 6)
{
  function deleteVowels(str)
  {
    var vowelFound = false;
    for (var i = 0; i < str.length; i++)
    {
      if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u")
      {
        str = str.slice(0, i) + str.slice(i + 1);
        i--;
        vowelFound = true;
      }
    }
    if (vowelFound)
    {
      return str;
    }
    else
    {
      return -1;
    }
  }
  var string = "";
  while (string === null || string === "" || string == Number(string))
  {
    string = prompt("Enter some text: ");
    if (string === "")
    {
      alert("You entered nothing!");
    }
    else if (string === null)
    {
      alert("You can't cancel!");
    }
    else if (string == Number(string))
    {
      alert("You entered only numbers!");
    }
  }
  var noVowelString = deleteVowels(string);
  document.write("<h1>Vowel Remover</h1>");
  if (noVowelString === -1)
  {
    document.write("Your string is already vowel free.");
  }
  else
  {
    document.write("Original String: <b>" + string + "</b><br />");
    document.write("Vowel Free String: <b>" + noVowelString);
  }
}

//Question 7
else if (taskNum === 7)
{
  function countVowelPairs(str)
  {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++)
    {
      switch (str[i])
      {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        switch (str[i + 1])
        {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          count += 1;
        }
      }
    }
    return count;
  }
  var string = "";
  while (string === null || string === "" || string == Number(string))
  {
    string = prompt("Enter text to count vowel pairs in it: ");
    if (string === "")
    {
      alert("You entered nothing!");
    }
    else if (string === null)
    {
      alert("You can't cancel!");
    }
    else if (string == Number(string))
    {
      alert("You entered only numbers!");
    }
  }
  var vowelPairs = countVowelPairs(string);
  document.write("<h1>Vowel Pair Counter</h1>");
  if (vowelPairs === 0)
  {
    document.write("There are no vowel pairs in this text.");
  }
  else if (vowelPairs === 1)
  {
    document.write("There is only one vowel pair in this text.")
  }
  else
  {
    document.write("There are " + vowelPairs + " vowel pairs in this text.");
  }
}

//Question 8
else if (taskNum === 8)
{
  function kmToMeters(km)
  {
    var meters = km * 1000;
    if (meters % 1 != 0)
    {
      return meters.toFixed(2);
    }
    return meters;
  }

  function kmToFeet(km)
  {
    var meters = kmToMeters(km)
    var feet = meters * 3.281;
    if (feet % 1 != 0)
    {
      return feet.toFixed(2);
    }
    return feet;
  }

  function kmToInches(km)
  {
    var feet = kmToFeet(km);
    var inches = feet * 12;
    if (inches % 1 != 0)
    {
      return inches.toFixed(2);
    }
    return inches;
  }

  function kmToCentimeters(km)
  {
    var inches = kmToInches(km);
    var cm = inches * 2.54;
    if (cm % 1 != 0)
    {
      return cm.toFixed(2);
    }
    return cm;
  }
  var distanceInKm = "";
  while (distanceInKm === "" || distanceInKm === null || distanceInKm != Number(distanceInKm) || distanceInKm <= 0)
  {
    distanceInKm = prompt("Enter distance between cities in kilometers: ");
    if (distanceInKm === "")
    {
      alert("You didn't enter anything!");
    }
    else if (distanceInKm === null)
    {
      alert("Please don't cancel!");
    }
    else if (distanceInKm != Number(distanceInKm))
    {
      alert("This isn't a number!");
    }
    else if (distanceInKm <= 0)
    {
      alert("Invalid input!");
    }
  }
  var meters = kmToMeters(distanceInKm);
  var feet = kmToFeet(distanceInKm);
  var inches = kmToInches(distanceInKm);
  var cm = kmToCentimeters(distanceInKm);
  document.write("<h1>Distance Between Cities</h1>");
  document.write("<p>In Kilometers: " + distanceInKm + "</p>");
  document.write("<p>In Meters: " + meters + "</p>");
  document.write("<p>In Feet: " + feet + "</p>");
  document.write("<p>In Inches: " + inches + "</p>");
  document.write("<p>In Centimeters: " + cm + "</p>");
}

//Question 9
else if (taskNum === 9)
{
  function calcOvertimePay(jobHours, hoursWorked)
  {
    var extraHours = hoursWorked - jobHours;
    var overtimePay = extraHours * 12;
    return overtimePay;
  }
  var jobHours = "";
  while (jobHours === "" || jobHours === null || jobHours != Number(jobHours) || jobHours < 1 || jobHours.indexOf(".") != -1)
  {
    jobHours = prompt("Enter normal work hours:");
    if (jobHours === "")
    {
      alert("You didn't enter anything!");
    }
    else if (jobHours === null)
    {
      alert("Please don't cancel!");
    }
    else if (jobHours != Number(jobHours))
    {
      alert("This isn't a number!");
    }
    else if (jobHours < 1)
    {
      alert("Invalid work hours!");
    }
    else if (jobHours.indexOf(".") != -1)
    {
      alert("Please enter integers only!");
    }
  }
  var hoursWorked = "";
  while (hoursWorked === "" || hoursWorked === null || hoursWorked != Number(hoursWorked) || hoursWorked < 1 || hoursWorked.indexOf(".") != -1)
  {
    hoursWorked = prompt("Enter number of hours worked:");
    if (hoursWorked === "")
    {
      alert("You didn't enter anything!");
    }
    else if (hoursWorked === null)
    {
      alert("Please don't cancel!");
    }
    else if (hoursWorked != Number(hoursWorked))
    {
      alert("This isn't a number!");
    }
    else if (hoursWorked < 1)
    {
      alert("Invalid work hours!");
    }
    else if (hoursWorked.indexOf(".") != -1)
    {
      alert("Please enter integers only!");
    }
  }
  var overtimePay = calcOvertimePay(jobHours, hoursWorked);
  document.write("<h1>Overtime Pay Calculator</h1>");
  if (overtimePay === 0)
  {
    document.write("You didn't work more than the normal job time!");
  }
  else if (overtimePay > 0)
  {
    document.write("Your overtime pay is " + overtimePay + " Rs.")
  }
  else
  {
    document.write("You underworked! How can YOU expect an overtime pay?");
  }
}

//Question 10
else if (taskNum === 10)
{
  function notesChange(amount)
  {
    var lt100 = amount % 100;
    var in100 = amount - lt100;
    var notesIn100 = in100 / 100;
    var lt50 = lt100 % 50;
    var in50 = lt100 - lt50;
    var notesIn50 = in50 / 50;
    var notesIn10 = lt50 / 10;
    return [notesIn100, notesIn50, notesIn10];
  }
  var amount = "";
  while (amount === "" || amount === null || amount != Number(amount) || amount < 10 || amount >= 10000 || amount % 100 % 50 % 10 != 0)
  {
    amount = prompt("Enter the amount to receive change: ");
    if (amount === "")
    {
      alert("You didn't enter anything!");
    }
    else if (amount === null)
    {
      alert("Please don't cancel!");
    }
    else if (amount != Number(amount))
    {
      alert("This isn't a number!");
    }
    else if (amount < 10)
    {
      alert("The smallest note available is of 10Rs! Increase your amount.");
    }
    else if (amount % 100 % 50 % 10 != 0)
    {
      alert("You can't give us coins! Enter a round figure.")
    }
    else if (amount >= 10000)
    {
      alert("Please enter amount less than 10000!");
    }
  }
  var changedAmount = notesChange(amount);
  var hundredNotes = changedAmount[0];
  var fiftyNotes = changedAmount[1];
  var tenNotes = changedAmount[2];
  document.write("<h1>Note Changer</h1>")
  document.write("Your amount: <b>" + amount + " Rs.</b><br />");
  document.write("Your change: <b>")
  if (hundredNotes > 0)
  {
    document.write(hundredNotes + " hundred note(s)");
    if (fiftyNotes === 0 && tenNotes === 0)
    {
      document.write(".");
    }
    else if (fiftyNotes > 0 && tenNotes > 0)
    {
      document.write(", ");
    }
    else if (fiftyNotes > 0 || tenNotes > 0)
    {
      document.write(" and ");
    }
    else
    {
      document.write(".");
    }
  }
  if (fiftyNotes > 0)
  {
    document.write(fiftyNotes + " fifty note(s)");
    if (tenNotes > 0)
    {
      document.write(" and ");
    }
    else
    {
      document.write(".");
    }
  }
  if (tenNotes > 0)
  {
    document.write(tenNotes + " ten note(s).")
  }
  document.write("</b>");
}
