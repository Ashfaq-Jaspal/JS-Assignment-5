//1
var num1 = +prompt("Enter numbe 1")
var num2 = +prompt("Enter numbe 2")
var sum = num1  + num2
document.write ("Sum of " + num1 +" and " + num2 + " is " + sum)
//2
document.write ("<br>")
var subtraction = num1  - num2
document.write ("Subtraction of " + num1 +" and " + num2 + " is " + subtraction)
document.write ("<br>")
var multiplication = num1  * num2
document.write ("Multiplication of " + num1 +" and " + num2 + " is " + multiplication)
document.write ("<br>")
var division = num1  / num2
document.write ("Division of " + num1 +" and " + num2 + " is " + division)
document.write ("<br>")
var modulus = num1  % num2
document.write ("Remainder of " + num1 +" and " + num2 + " is " + modulus)
//3
document.write ("<br>")
document.write ("<br>")
var random = 
document.write ("Value after variable declaration is: " + random + ".")
document.write ("<br>")
var newNum = +prompt("Enter number 3")
document.write ("Initial value: " + newNum)
document.write ("<br>")
var increasedNum1 = ++newNum
document.write ("Value after increment is: " + increasedNum1)
document.write ("<br>")
var increasedNum7 = 7 + increasedNum1
document.write ("Value after addition is: " + increasedNum7)
document.write ("<br>")
var decreasedNum1 = --increasedNum7
document.write ("Value after decrement is: " + decreasedNum1)
document.write ("<br>")
var remainder = decreasedNum1 % 3
document.write ("The remainder is: " + remainder)
//4
document.write ("<br>")
document.write ("<br>")
var ticketCost = 600
var ticketQuantity = prompt("How many tickets do you want to buy?")
var totalPrice = ticketCost * ticketQuantity
document.write ("Total cost to buy " + ticketQuantity + " tickets to a movie is " + totalPrice + "PKR")
//5
document.write ("<br>")
document.write ("<br>")
var table = +prompt("Enter table number")
document.write ("Table of " + table)
document.write ("<br>")
document.write (table + " x " + "1 = " + table*1)
document.write ("<br>")
document.write (table + " x " + "2 = " + table*2)
document.write ("<br>")
document.write (table + " x " + "3 = " + table*3)
document.write ("<br>")
document.write (table + " x " + "4 = " + table*4)
document.write ("<br>")
document.write (table + " x " + "5 = " + table*5)
document.write ("<br>")
document.write (table + " x " + "6 = " + table*6)
document.write ("<br>")
document.write (table + " x " + "7 = " + table*7)
document.write ("<br>")
document.write (table + " x " + "8 = " + table*8)
document.write ("<br>")
document.write (table + " x " + "9 = " + table*9)
document.write ("<br>")
document.write (table + " x " + "10 = " + table*10)
//6
document.write ("<br>")
document.write ("<br>")
var celsiusTemperature = +prompt("Enter your Celsius temprature (only numbers like: 34)")
var fahrenheitTemperature = +prompt("Enter your Fahrenheit temprature (only numbers like: 80)")
var cConvertedTof = ((celsiusTemperature * 9 / 5) + 32)
var fConvertedToc = ((fahrenheitTemperature - 32) * 5 / 9)
document.write ( celsiusTemperature )
document.write ("<sup>o</sup>")
document.write ("C is " + cConvertedTof)
document.write ("<sup>o</sup>")
document.write ("F.")
document.write ("<br>")
document.write ( fahrenheitTemperature)
document.write ("<sup>o</sup>")
document.write ("F is " + fConvertedToc)
document.write ("<sup>o</sup>")
document.write ("C.")
//7
document.write ("<br>")
document.write ("<br>")
document.write ("<h1>Shopping Cart</h1>")
document.write ("<br>")
var priceItem1 = 500
var priceItem2 = 300
var quantityItem1 = +prompt ("Enter the quantity of item 1")
var quantityItem2 = +prompt ("Enter the quantity of item 2")
var totalAmount = ((quantityItem1 * priceItem1) + (quantityItem2 * priceItem2))
var totalItems = (quantityItem1 + quantityItem2)
var shipCharges = 50 * totalItems
document.write ("Price of item 1 is " + priceItem1)
document.write ("<br>")
document.write ("Quantity of item 1 is " + quantityItem1)
document.write ("<br>")
document.write ("Price of item 2 is " + priceItem2)
document.write ("<br>")
document.write ("Quantity of item 2 is " + quantityItem2)
document.write ("<br>")
document.write ('Shipping charges ' + shipCharges)
document.write ("<br>")
document.write ("Total Cost: " + (shipCharges + totalAmount))
document.write ("<br>")
document.write ("<br>")
//8
document.write ("<h1>Marks Sheet</h1>")
document.write ("<br>")
var totalMarks = +prompt ("Enter your toal marks")
var obtainedMarks = +prompt ("Enter your obtained marks")
var marksPercent = obtainedMarks / totalMarks * 100
document.write ('Total marks: ' + totalMarks)
document.write ("<br>")
document.write ('Marks obtained: ' + obtainedMarks)
document.write ("<br>")
document.write ('Percentage: ' + marksPercent + "%")
//9
document.write ("<br>")
document.write ("<br>")
document.write ("<h1>Age Calculator</h1>")
document.write ("<br>")
var currentYear = +prompt("Enter the current year")
var birthYear = +prompt("Enter your birth year")
document.write ("Current Year: " + currentYear)
document.write ("<br>")
document.write ("Birth Year: " + birthYear)
document.write ("<br>")
if (birthYear >=1901 && birthYear <2000) {
    document.write ("Your Age is: " + (2000 - birthYear + 23) )
}
else if (birthYear >=2000 && birthYear <2023) {
    document.write ( "Your Age is: " + (2023 - birthYear) )
}
else document.write ("This birth year is not allowed!")
document.write ("<br>")
document.write ("<br>")