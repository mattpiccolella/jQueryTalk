<a id="top"></a>
# Leveling Up Your Apps with jQuery

*Building responsive, interactive web applications.*

Written and developed by [Matt Piccolella](mailto:matthew@adicu.com) and [ADI](adi).

Credit to [Eloquent Javascript][eloquent], [jQuery Fundamentals][fundamentals], and [Learn jQuery][learn_jquery].

## Getting Started: FAQs

Before we can learn jQuery, we must understand what it is, how we will use it, and what we can expect to learn from this guide. 

### What is jQuery?
[jQuery][jquery] is a small, simple client-side JavaScript web framework that is used by 60% of the internet's top websites.

### What is jQuery used for?
Web developers use jQuery for a variety of things, anywhere from traversing and manipulating the DOM (e.g. changing text on a page without reloading it), event handling (responding to button clicks or form submissions on the client-side), and making HTTP requests (posting information to a backend). Essentially, jQuery is useful in making "single-page web applications," applications which load a page once and do everything else from inside the browser.

### What will this tutorial teach me?
This tutorial is not meant to serve as a more formal introduction to JavaScript or jQuery. It is meant to teach only the basics of this incredibly feature-rich library, and shows only some of the things that the framework can be used for.

## Using this Document

This document contains a series of several sections, each of which explains a certain feature of jQuery that is valuable in building web applications.

### Running the Sample Code

Unlike many other programming languages, JavaScript runs in the browser. This means that JavaScript code does not need to be compiled, and is instead run through within HTML. 

Therefore, to run the sample code, one must merely open the provided HTML files in her browser of choice (Chrome, Safari, Firefox).

In addition, one can also 

## Table of Contents

-   [Preface: HTML and the DOM](#html)
-   [1.0 The Basics of JavaScript](#javascript)
    - [Preface: The JavaScript Console](#console)
    - [1.1 Variables](#variables)
    - [1.2 Functions](#functions)
    - [1.3 Objects](#objects)
    - [1.4 Arrays](#arrays)
    - [1.5 Undefined v. Null](#undefined)
-   [2.0 The Basics of jQuery](#jquery)
    - [2.1 Selectors](#selectors)
    - [2.2 `document.ready`](#document)
    - [2.3 Creating New Elements](#creation)
    - [2.4 Iterating Through Elements](#iteration)
-   [Additional Resources](#additionalresources)


------------------------------
<a id="html"></a>
## Preface: HTML/CSS and the DOM
Web pages are created using a language called HTML. When HTML is loaded by the browser, it creates something called a DOM (Document Object Model), which is a standardized, tree-like structure that provides a structured way to access and manipulate elements within the document. JavaScript, and in particular jQuery, use the DOM in order to allow you to retrieve, and more importantly, manipulate elements (buttons, divs, links, etc.) on an HTML page.

To be able to retrieve elements from the DOM using jQuery, we have to have a way to be able to identify different elements of an HTML page. Generally, there are three ways to identify HTML elements, each of which is used heavily in both CSS and Javascript/jQery.

### Tag/Element
```html
<a href="https://adicu.com">ADICU</a>
<p>ADI is awesome!</p>
```
Here, we can identify a link by its tag `a` or a paragraph by its tag `p`. For example:

```css
a
p
```

### Class
```html
<p class="sampleclass">Some sample paragraph.</p>
```
We can select an element by its class `sampleclass` by preceding it with a period, as such:

```css
.sampleclass
```

### ID
```html
<h1 id="specificheader">This One Header</h1>
```
To select an element by its ID, we include a `#`` before its name. Its select would thus be:

```css
#specificheader
```
An important thing to note here is that an ID is meant to be unique, and therefore good for an element that is meant to occur just once.

### Multiple Selectors
We can chain these selectors together to be even more specific. Say, for example, we wanted to select all links of a certain class:

```html
<a class="some_class">Desired Link</a>
```

We could write:

```css
a.some_class
```

Or, say we had a div with a certain ID, and that div has some paragraph elements inside of it, as such:

```html
<div id="content">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
</div>
```

To select the links inside this div, we could use both the ID and tag selector by writing:

```css
#content p
```

This identification process is very similar to the process used in CSS. For example, say we wanted to select each of the links of class "blue_link" and make them blue. We could write:

```css
a.blue_link {
    color: blue;
}
```

The focus of JavaScript is being able to select these elements, so a solid understanding of this section is hugely important to understanding jQuery.

<a id="javascript"></a>
## 1.0 The Basics of Javascript
JavaScript is the programming language of the web. It is used on nearly every website to do all sorts of things, and jQuery is built directly on top of it. It is somewhat similar to other programming languages, like Python, in its basics, but it ultimately prides itself on its uniqueness. Here, we will define some of the most basic concepts of JavaScript.

<a id="console"></a>
## Preface: Running Code in the Console
To run JavaScript code, we can type it into the JavaScript console. Thus, if you'd like to write the code that I have typed, you can open the JavaScript console in your browser of choice. Here is a screenshot of the browser in Chrome:

![JS Console](https://dl.dropboxusercontent.com/s/91l4s20ycafliqp/JavaScript%20console.png)

The console is very important to JavaScript development, and is very useful for debugging.

<a id="variables"></a>
### 1.1 Variables
Variables in JavaScript are very similar to variables in other programming languages. To declare one, we simply type:

```javascript
var my_name = "Matt";
```

Notice a few things. We use the word `var` to identify a variable. Also, we do not include a type, like we would in Java in something like `int x = 5;`. This means that our variables can take on several types:

```javascript
var school = "Columbia";
var favorite_number = 17;
var isTeen = true;
```

In addition, we finish our expressions with semi-colons, as we do in Java.

To print the value of a variable, we can use the function `console.log`, as follows:

```javascript
var favoriteFood = "pizza";
console.log(favoriteFood);
```
<a id="functions"></a>
### 1.2 Functions
Functions work in the same way as other languages: they take parameters and return a value. To declare a function, we use the reserved word `function`:
```javascript
function add(x,y) {
    return x + y;
}
```

To call a function is the same as other languages:
```javascript
var sum = add(5,9);
```

Something that is particuarly unique about JavaScript is that functions are what are called **first class objects**, meaning that functions can be passed as parameters, returned by functions, and stored in variables. For example:

```javascript
// Function that adds two numbers.
var add = function(x,y) {
    return x + y;
}
// Function that takes a math function, two numbers, and applies it n times
var applyNTimes(mathFunction, x, y, n) {
    var i = 0;
    var sum = 0;
    while (i < n) {
        sum += addFunction(x,y);
    }
    n += 1;
}
var result = addNTimes(add,3,5,10); // 150
```

Thus, here, we define a function and set it equal to a variable. Then, we define another function that takes a function as one of its parameters, and then call it by passing our original function.

<a id="objects"></a>
### 1.3 Objects
In JavaScript, everything besides the five primitives (strings, booleans, numbers, `null`, and `undefined`) are objects.

Objects in JavaScript can be created using curly brackets, as follows:

```javascript
var person = {
    name : "Jane Doe",
    age : 18,
    school : "SEAS"
};
```

Here, we create an object, call it `person`, and give it three properties: `name`, `age`, and `school`. Accessing or modifying these properities can be done in either of two ways:

```javascript
// Dot Notation
var name = person.name;
person.age = 20;

// Bracket Notation
var age = person["age"];
person["school"] = "Barnard";
```

Interestingly, we can set attributes of an object to a function, as follows:

```javascript
var person = {
    name : "Jane Doe",
    age : 18,
    school : "SEAS",
    describe : function() {
        console.log(this.name + " " + this.age + " " + this.school);
    }
};
```

Thus, if we wanted to call this function of the object, we simply call `person.describe()`.

Notice the use of the keyword `this`. That is used to refer to the object itself. Thus, to access the properties `name`, `age`, and `self`, we can simply use the keyword `this` to indicate the object in which the function resides. This is similar to Java's `this` keyword or Python's `self` keyword.

<a id="arrays"></a>
### 1.4 Arrays
Arrays are just as they are in other programming languages:

```javascript
var numberArray = [1,2,3,4,5,6];
console.log(numberArray[2]) # 3
console.log(numberArray.length) # 6
```

One interesting aspect is the `forEach` method in the arrays, which allows us to pass a function which is executed for each item in an array:

```javascript
var numberArray = [2,4,6,8,10];
numberArray.forEach(function(number) {
    console.log(number);
});
```
<a id="undefined"></a>
### 1.5 Undefined v. Null
One very important concept in JavaScript is the difference between `undefine`and `null`. 

`null` is a value and is used explicitly to indicate a value is missing. For instance, say we have a person object, but we don't know his name:

```javascript
var person = {
    name: null,
    age: 19
};
```
This is deliberate and useful for showing that a certain value is missing.

`undefined` is used to show that a certain value or property has not yet been set. For example, on the same person object as above, say I tried to access a property we haven't added:

```javascript
console.log(person.favoriteFood);
```

This would yield the value `undefined` to indicate that no value for that property has yet been set.

<a id="jquery"></a>
## 2.0 The Basics of jQuery
jQuery makes it super easy for us to utilize the JavaScript we just learned in order to manipulate our HTML page. Here, we will show you how we can start to use it on our web pages.

<a id="selectors"></a>
### 2.1 Selectors
The selectors that we looked at in the preface are what jQuery is built on. To select an element in jQuery, we essentially use its HTML selector as follows:

```javascript
$("p.some_class");
```

It's as simple as that! The `$` is the most characteristic character in all of jQuery, and you'll see that it appears everywhere. This selection returns an array, so we can access each element through our array syntax. So, given:

```html
<div id="content">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
</div>
```

```javascript
var contentParagraphs = $("#content p");
console.log(contentParagraphs[1]); // Paragraph Two
console.log(contentParagraphs.length); // 3
```

Once we have the elements we want to interact with in our JavaScript code, it becomes quite easy for us to add to, change, or remove from the DOM.

<a id="document"></a>
### 2.2 `document.ready`
When we are utilizing elements that appear in the DOM, it is hugely important for us that we don't execute our code until the document is ready and has been created. For this reason, jQuery has a hugely important method called `document.ready` that allows us to wait until our document is ready until we execute our code. 

The function takes a function, and looks as follows:

```javascript
$(document).ready(function() {
    // Include all the JavaScript we want to run
    console.log("Our document is ready!");
});
```

Because this is used so often, jQuery has shortened it for us to be simply:

```javascript
$(function() {
    // Include all the JavaScript we want to run
    console.log("Our document is ready using our new, shortened syntax!");
});
```

It is recommended that all the code that is wanted on a webpage be wrapped in this `document.ready` call, as it assures that all the elements we expect to be there will be there.

<a id="creation"></a>
### 2.3 Creating New Elements
We can use jQuery to create new elements as well. We do this by simply including HTML inside our `$` selector. For example, say we have a `div` containing some links:

```html
<div id="links">
    <a href="http://www.google.com">Google</a>
    <a href="http://facebook.com">Facebook</a>
</div>
```

Now, say inside our JavaScript code, say we want to create a new link, and add it to our section of links. We can do that by creating a new element:

```javascript
var newLink = $("<a href='http://www.adicu.com'>ADICU</a>");
```

Then, by selecting the `div` using our previous selectors, we can add it:

```javascript
$("#links").append(newLink);
```

Following this, our webpage will now look as follows:

```html
<div id="links">
    <a href="http://www.google.com">Google</a>
    <a href="http://facebook.com">Facebook</a>
    <a href="http://www.adicu.com">ADICU</a>
</div>
```

The ability to create new elements will be hugely important to us as we continue making interactive webpages.
<a id="iteration"></a>
### 2.4 Iterating Through Elements
Because our selections yield arrays, we can iterate through each of the items in the array using the array syntax. For example, say we have a list:

```html
<ul>
    <li class="veggie">Broccoli</li>
    <li class="veggie">Carrots</li>
    <li class="veggie">Tomatoes</li>
</ul>
```

Say we want to add the number of the element in bold before each element in the list. We do that using the following code:

```javascript
$("li.veggie").each(function(index, element) {
    $(element).prepend('<b>' + index + ': </b>'); 
});
```

The code goes through each element in the selection, executing a function which takes both the index and the element at that index. The code then prepends some HTML to each of the elements in our selection. Our new HTML will look as follows:

```html
<ul>
    <li class="veggie"><b>1: </b>Broccoli</li>
    <li class="veggie"><b>2: </bCarrots</li>
    <li class="veggie"><b>3: </bTomatoes</li>
</ul>
```
It's as simple as that to make substantive changes to a webpage after it has been loaded!


___________

## Additional Resources

Along with this tutorial, there is a wealth of information available on JavaScript and jQuery all across the web. Below are some good places to start:

[Eloquent Javascript][eloquent]

[jQuery Fundamentals][fundamentals]

[Learn jQuery][learn_jquery]

[ADI Resources][learn]

[Codecademy][codecademy]


[eloquent]: http://eloquentjavascript.net/
[fundamentals]: http://jqfundamentals.com/
[learn_jquery]: http://learn.jquery.com/
[learn]: https://adicu.com/resources
[codecademy]: http://www.codecademy.com/
[jquery]: http://jquery.com/
[adi]: https://adicu.com

