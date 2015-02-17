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

This document contains a series of several sections, each of which explains a certain feature of jQuery that is valuable in building web applications. All of the code referenced inside the guide will be available on Github. 

### Running the Sample Code

Unlike many other programming languages, JavaScript runs in the browser. This means that JavaScript code does not need to be compiled, and is instead run through within HTML. 

Therefore, to run the sample code, one must merely open the provided HTML files in her browser of choice (Chrome, Safari, Firefox).

## Table of Contents

-   [Preface: HTML and the DOM](#html)
-   [Additional Resources](#additionalresources)


------------------------------
## Preface: HTML/CSS and the DOM
Web pages are created using a language called HTML. When HTML is loaded by the browser, it creates something called a DOM (Document Object Model), which is a standardized, tree-like structure that provides a structured way to access and manipulate elements within the document. JavaScript, and in particular jQuery, use the DOM in order to allow you to retrieve, and more importantly, manipulate elements (buttons, divs, links, etc.) on an HTML page.

To be able to retrieve elements from the DOM using jQuery, we have to have a way to be able to identify different elements of an HTML page. Generally, there are three ways to identify HTML elements, each of which is used heavily in both CSS and Javascript/jQery.

### Tag/Element
```html
<a href="https://adicu.com">ADICU</a>
<p>ADI is awesome!</p>
```
Here, we can identify a link by its tag "a" or a paragraph by its tag "p". For example:

```css
a
```

### Class
```html
<p class="sampleclass">Some sample paragraph.</p>
```
We can select a link by its class "sampleclass" by preceding it with a period, as such:

```css
.sampleclass
```

### ID
```html
<h1 id="specificheader">This One Header</h1>
```
To select an element by its ID, we include a "#" before its name. Its select would thus be:

```css
#specificheader
```
An important thing to note here is that an ID is meant to be unique, and therefore good for identifying a single occurrence of an element.

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

To select the links inside this div, we could use both the ID and tag selector by writing

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

