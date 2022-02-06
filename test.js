/* alert("Hello, World");

var myVariable;
myVariable =10;

var myVar2 = "hello";
myVar2 = "hello again" */

/* myVar2 = 5;

var customerAge = 32;

var myVar3 = 40;

    maVar = 10
maVar + 10
myVar = myVar + 10
myVar = myVar -5
myVar = myVar / 2

5 + 'hello'
100 + 'hello'
'hello'+'david'
5 * 'hello'
myVar += 5
myVar -= 10
myVar /= 2
myVar *= 5

document.write()
console.log()
//Booleans
var iLikeMeat = true
iLikeMeat = false */

//if Statements

/* var youLikeMeat = true

if (youLikeMeat) {
    document.write('you like meat')
} else {
    document.write('you hate meat')
}


var myNum = 10
if (myNum == 10) {

    document.write(' myNum is equal to 10')

} else{
    document.write('myNum is not equal to 10')
} */

/* var myAge = 8
if (myAge > 30) {
    document.write('you are over 30!')
} else if (myAge > 20) {
    document.write('you are over 20!')
} else if (myAge >10) {
    document.write('you are over 10!')
} else {
    document.write('you are not over 10')
}

var x = 5
x > 4
x >= 5
x < 5
x <= 5
x == 4
x == 5
x ===5
x === '5'
x != 4
x = '5'
x !== 5 */

/* var myAge = 35

if (myAge >= 18 && myAge <= 30) {
    document.write('you can come')
} else {
    document.write('you aint coming')
} */

/* var myAge = 26

if (myAge < 18 || myAge > 30 || myAge ===25) {

    document.write('you aint coming')
    
} else {
    document.write('you can come')
} */

/* var age = 5

while (age < 10) {
    console.log('your age is less than 10')
    age++
}   document.write('you are now over 10') */

/* var links = document.getElementsByTagName('a')

for (i = 1; i <= links.length; i++ ) {

    console.log('this is link number' + i)

}   
    document.write('all links now looped') */

/* for (i = 0; i< 10; i++) {

    if(i === 5 || i === 3){

        continue

    }

    console.log(i)

    if(i === 7){
        break
    }
}

console.log('I have broken out of the loop') */

/* var links = document.getElementsByTagName('a')

for(i = 0; i < links.length; i++) {

    links[i].className = 'link-' + i;
} */

/* function getAverage (a,b) {

    var average = (a + b) / 2 //local variable
    console.log(average)
    return average
} */


/* var myResult = getAverage(7,8) //global variable */


/* function logResult() {

    console.log('the average is ' + myResult)

} */

/* var myResult = getAverage(7,8) //global variable

function logResult() {

    console.log('the average is ' + myResult + ' inside the function')

}

logResult() */

/* var a = '5'
var b = 5

console.log(a + b)
console.log(typeof (a + b))

console.log(Math.round(7.5))
console.log(Math.floor(7.5))
console.log(Math.ceil(7.5))
console.log(Math.max(7,5,9,15,300))
console.log(Math.PI) */

/* var a = 8
var b = 5

//console.log(a * b)

if (isNaN(a)) {
    console.log('tha int even a number, thickie')
} else {

    console.log('meaning of life is ' + (a * b))
} */

//var myString = 'I\'m a "fun box" string'
    /* console.log(myString.length)
    console.log(myString.toUpperCase())
    console.log(myString.toLowerCase())
    console.log(myString.indexOf('string')) */

    /* if (myString.indexOf('box') === -1) {
        console.log('the word box in not in the string')

      } else {
          console.log('the word box starts at position ' +
          myString.indexOf('box'))
      }  */

/* var string1 = 'abc'
var string2 = 'bcd'

console.log(string1.toLowerCase === string2.toLowerCase)
console.log(string1 < string2) */

/* var str = 'hello, world'

var str2 = str.slice(2, 10)
console.log(str2)
var str3 = str.slice(3)
console.log(str3)

var tags = 'meat, ham, salami, pork, beef, chicken'
var tagsArray = tags.split(',')
console.log(tagsArray) */

/* var myArray = []
myArray[0] = 25
myArray[1] = 35
myArray[2] = true
myArray[3] = 'hello'
console.log(myArray)
myArray[2] = false
myArray2 = [10,20,'hi',false]
console.log(myArray2)
var myArray3 = new Array()
var myArray4 = new Array(5)
console.log(myArray2.length)
console.log(myArray2.sort())
console.log(myArray2.reverse()) */

/* var myString = new String
myString = 'hello'
console.log(myString.length)
console.log(myString.toUpperCase())
var myString2 = 'hi there'
console.log(myString2.toUpperCase()) */

/* var myCar = new Object()
myCar.maxSpeed = 50
myCar.driver = 'Marcin'
myCar.drive = function() { console.log('now driving')}

console.log(myCar.driver)
console.log(myCar.drive())

var myCar2 = {
    maxSpeed: 70, 
    driver: 'Jan', 
    drive: function(speed, time) { 
        console.log(speed * time)}
}

console.log(myCar2.maxSpeed)
console.log(myCar2.drive(50, 3)) */

/* var myCar2 = {

    maxSpeed: 70, 
    driver: 'Jan', 
    drive: function(speed, time) { 
        console.log(speed * time)},
    logDriver: function() {
        console.log('driver name is ' + this.driver)
    }
}


myCar2.logDriver()
console.log(myCar2.maxSpeed)
console.log(myCar2.drive(50, 3)) */

/* myCar2 = {

    maxSpeed: 70, 
    driver: 'Jan', 
    drive: function(speed, time) { 
        console.log(speed * time)},
    logDriver: function() {
        console.log('driver name is ' + this.driver)
    }
}


myCar2.logDriver()
console.log(myCar2.maxSpeed)
console.log(myCar2.drive(50, 3)) */

/* var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed
    this.driver = driver
    this.drive = function(speed, time) {
        console.log(speed * time)
    }
    this.logDriver = function() {
        console.log('driver name is ' + this.driver)
    }

}

var myCar = new Car(70, 'Gregor')
var myCar2 = new Car(40, 'Frank')
var myCar3 = new Car(170, 'Joseph')
var myCar4 = new Car(78, 'Martin')

myCar.drive(30,5)
myCar3.logDriver() */

/* var myDate = new Date()
console.log(myDate)

var myPastDate = new Date(1545, 11, 2)
    console.log(myPastDate) */

/* var birthday = new Date(1979, 10, 21, 20, 37)
var birthday2 = new Date(1979, 10, 21, 20, 37)

console.log(birthday.getMonth())
console.log(birthday.getFullYear())
console.log(birthday.getDate())
console.log(birthday.getDay())
console.log(birthday.getHours())
console.log(birthday.getTime())

if(birthday.getTime() == birthday2.getTime()){
    console.log('birthdays are equal')
} else {
    console.log('birthdays are not equal')
} */

    /* document.getElementsByClassName('content')

    var myContentDivs = document.getElementsByClassName('content')

    var myH2 = myContentDivs[1].getElementsByTagName('h2')

    myH2[0].innerHTML = 'YO NINJAS'

    document.getElementById('page-title') */

/* var myBody = document.getElementsByTagName('body')

myBody[0].innerHTML

var myTitle = document.getElementById('page-title')

myTitle.textContent = 'the new content of the page title' */

/* var link = document.getElementById('test')

link.getAttribute('href')
link.getAttribute('class')
link.setAttribute('class', 'pie')
link.setAttribute('alt','hello')
link.className
link.classname = 'ninja'
link.href
link.style */

/* var title = document.getElementById('page-title')

title.setAttribute('style', 'position: relative')

title.setAttribute('style', 'left: 10px')

title.setAttribute('style', 'position: relative, left: 10px')

title.style.left = '20px'

title.style.top = '10px'

title.style.colot = 'red'

title.style.backgroundColor = 'blue' */

/* var newLi = document.createElement('li')

var newA = cocument.createElement('a')

var menu = document.getElementById('main-nav').getElementsByTagName('ul')[0]
menu.appendChild(newLi)

newLi.appendChild(newA)

newA.innerHTML = 'Blog'

menu.insertBefore(newLi, menu.getElementsByTagName('li')[0]) */

/* var parent = document.getElementById('main-nav').getElementsByTagName('ul')[0]

var child = parent.getElementsByTagName('li')[0]

 var removed = parent.removeChild(child)

parent.appendChild(removed) */

//var link0 = document.getElementsByClassName("link_0");

/* var link0 = document.querySelector('.link_0')

link0.onclick = function(){

    alert('you clicked me')

}

var link1 = document.querySelector('.link_1')

link1.onclick = function(){

    alert('you clicked me')

}

var link2 = document.querySelector('.link_2')

link2.onclick = function(){

    alert('you clicked me')

} */

/* var link1 = document.getElementById('page-title')

link1.onmouseover = function(){

    alert('you hovered your mouse over me')

} */

function setUpEvents() {

    var content = document.getElementById('content')
    var button = document.getElementById('show-more')

    button.onclick = function(){

    if(content.className == "open") {
        //shrink the box
        content.className = ''
        button.innerHTML = 'Show More'
    } else {
        //expand the box
        content.className = 'open'
        button.innerHTML = 'Show Less'
    }
    }

}

window.onload = function() {

    setUpEvents()

    }


























































