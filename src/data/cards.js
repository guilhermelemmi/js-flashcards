export default {
  cards: [
    {
      tags: ['null', 'undefined'],
      difficulty: 3,
      upVotes: 10,
      downVotes: 2,
      question: "### Which JavaScript values don't have properties?",
      answer: "Almost all JavaScript values have properties. The exceptions are null and undefined."
    },
    {
      question: "### What is meant by the statement \"some functions have side effects\"?",
      answer: "In computer science, a function or expression is said to have a side effect if, in addition to returning a value, it also modifies some state or has an observable interaction with calling functions or the outside world. For example, a function might modify a global variable or static variable, modify one of its arguments, raise an exception, write data to a display or file, read data, or call other side-effecting functions. In the presence of side effects, a program's behavior may depend on history; that is, the order of evaluation matters. Understanding and debugging a function with side effects requires knowledge about the context and its possible histories."
    },
    {
      question: "### What is a common disadvantage when using recursion?",
      answer: "It can result in slower code. Running through a simple loop is a lot cheaper than calling a function multiple times. The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer must decide on an appropriate balance."
    },
    {
      question: "### How can you test whether a variable has a real value instead of `null` or `undefined`?",
      answer: "You can simply compare it to `null` with the == (or !=) operator"
    },
    {
      question: "### Why is the `void` used as a prefix on Immediately Invoked Function Expressions?",
      answer: "When using an immediately-invoked function expression, `void` can be used to force the function keyword to be treated as an expression instead of a declaration.\n\n    void function iife() {\n      var bar = function () {};\n      var baz = function () {};\n      var foo = function () {\n        bar();\n        baz();\n        };\n      var biz = function () {};\n\n      foo();\n      biz();\n    }();"
    },
    {
      question: "### Tell me about the void in JavaScript",
      answer: "The void operator evaluates the given expression and then returns undefined. This operator allows inserting expressions that produce side effects into places where an expression that evaluates to undefined is desired. When using an immediately-invoked function expression, void can be used to force the function keyword to be treated as an expression instead of a declaration."
    },
    {
      question: "### Who wrote this book?\n![book image](images/javascript-the-good-parts.png \"JavaScript book\")",
      answer: "Douglas Crockford. Mr. Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language, for having popularized the data format JSON (JavaScript Object Notation), and for developing various JavaScript related tools such as JSLint and JSMin. He is currently a senior JavaScript architect at PayPal, and is also a writer and speaker on JavaScript, JSON, and related web technologies such as the Yahoo! User Interface Library (YUI)."
    },
    {
      question: "### Name the JavaScript primitive types.",
      answer: "`Boolean`, `Number`, `String`."
    },
    {
      question: "### What can you tell me about the JavaScript `this` keyword?",
      answer: "Generally it refers to the object which owns the method in which the `this` keyword is referenced.\n\nHowever, it depends on how a function is called. If called from a global scope then `this` refers to the window object. If referenced within a constructor function than `this` refers to the newly created object. When referenced within an event handler then the `this` keyword refers to the object which called the event."
    },
    {
      question: "### Name the JavaScript special types.",
      answer: "`null` and `unassigned`."
    },
    {
      question: "### Tell me about numbers in JavaScript.",
      answer: "Number is a 64-bit floating point value, similar to Java's double. There is no integer type."
    },
    {
      question: "### How are `undefined` and `null` different?",
      answer: "Variables which have not been initialized are `undefined`, while variables which have an empty value are set to `null`."
    },
    {
      question: "### Tell me about strings in JavaScript.",
      answer: "`String` is a sequence of zero or more Unicode characters. There is no separate character type. A character is represented as a string length 1."
    },
    {
      question: "### People say that almost everything in JavaScript is an object. What things are not objects?",
      answer: "Primitive types such as boolean, number and string. Also, special types as `null` and `unassigned`."
    },
    {
      question: "### How can errors be handled in JavaScript?",
      answer: "Using `try`/`catch`/`finally` blocks."
    },
    {
      question: "### What is meant by the statement: JavaScript is loosely typed?",
      answer: "It means that we don't use type names in declarations. Types are inferred by JavaScript. Also, over the course of a run-time a variable's type may change."
    },
    {
      question: "### What are some of the differences between subscript notation and dot notation?",
      answer: "Subscript notation allows the use of keys with spaces, dot notation does not. Because of an error in JS, reserved words can be used in subscripts but not with dot notation."
    },
    {
      question: "### Who is this guy?\n![person](images/BrendanEich.jpg \"JavaScript personality\")",
      answer: "Brendan Eich, the creator of JavaScript."
    },
    {
      question: "### Which of these best describes the `void` keyword?\n1. A method\n2. A function\n3. An operator\n4. A statement",
      answer: "Number #3, An operator"
    },
    {
      question: "### How do you find the largest number of 6 and 8?\n1. Math.max(6,8)\n2. top(6,8)\n3. ceil(6,8)\n4. Math.ceil(6,8)",
      answer: "Number #1, Math.max(6,8)"
    },
    {
      question: "### What are the nine native object constructors in JavaScript?",
      answer: "`Number`, `String`, `Boolean`, `Object`, `Array`, `Function`, `Date`, `Regex`, `Error`."
    },
    {
      question: "### Why can you `new Date` but can't `new Math`?",
      answer: "`Date` has a built-in object constructor but `Math` is just an object namespace setup by JavaScript to house math functions."
    },
    {
      question: "### How are global variables created?",
      answer: "Global variables are created when you create one outside an object and don't use the `var` keyword."
    },
    {
      question: "### How does JavaScript implement inheritance?",
      answer: "JavaScript implements inheritance by allowing you to associate a prototypical object with any constructor function.\n\n[Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FDetails_of_the_Object_Model)"
    },
    {
      question: "### How can you use primitive types to create objects?",
      answer: "Using the `new` operator:\n\n    var numObject = new Number(10);\n    console.log(typeOf numObject);\n    > \"object\""
    },
    {
      question: "### What was JavaScript called before it was first released?",
      answer: "JavaScript was called Mocha before it was officially released as LiveScript. The language was later renamed to JavaScript when it was released as part of Netscape version 2.0B3 in September of 1995."
    },
    {
      question: "### What was the first use of server-side JavaScript?",
      answer: "Netscape introduced an implementation of the language for server-side scripting (SSJS) with Netscape Enterprise Server, first released in December, 1994 (soon after releasing JavaScript for browsers). Since the mid-2000s, there has been a proliferation of server-side JavaScript implementations.\n\nNode.js is one recent notable example of server-side JavaScript being used in real-world applications."
    },
    {
      question: "### Originally considered a language for web authors and \"amateurs\" JavaScript was taken more seriously during what pivotal event?",
      answer: "The advent of Ajax returned JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive frameworks and libraries, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers, as seen by the proliferation of server-side JavaScript platforms."
    },
    {
      question: "### Who owns the 'JavaScript' trademark?",
      answer: "Today, \"JavaScript\" is a trademark of Oracle Corporation. It is used under license for technology invented and implemented by Netscape Communications and current entities such as the Mozilla Foundation."
    },
    {
      question: "### How does scoping in JavaScript differ from other programming languages?",
      answer: "JavaScript has function scoping (although, block scoping using the `let` keyword was added in JavaScript 1.7). Most other programming languages support block scoping."
    },
    {
      question: "### Describe JavaScript objects.",
      answer: "JavaScript objects are associative arrays, augmented with prototypes. Object property names are string keys. They support two equivalent syntaxes: dot notation (obj.x = 10) and bracket notation (obj['x'] = 10).\n\nProperties and their values can be added, changed, or deleted at run-time.\n\nMost properties of an object (and those on its prototype inheritance chain) can be enumerated using a for...in loop.\n\nJavaScript has a small number of built-in objects such as Function and Date."
    },
    {
      question: "### Which of the following is not a JavaScript engine:\n\n1. SpiderMonkey\n2. V8\n3. Rhino\n4. Harmony",
      answer: "Number 4. Harmony."
    },
    {
      question: "### Using a variable without prefixing it with the `var` keyword causes which of the following:\n\n1. Creates a local variable\n2. Generates and error.\n3. Creates and array\n4. Creates a global variable.",
      answer: "Number 4. Creates a global variable."
    },
    {
      question: "### What is the recommended way to create an array?",
      answer: "You can create an array using the `Array` constructor or the array literial notation []. Literals are preferred to the Array constructor. They are shorter, have a clearer syntax, and increase code readability:\n\n    [1, 2, 3]; // Result: [1, 2, 3]\nThe behavior of `Array` can lead to unexpected results.\n\n    new Array(1, 2, 3); // Result: [1, 2, 3]\n    [3]; // Result: [3]\n    new Array(3); // Result: []\n    new Array('3') // Result: ['3']\n\nIn cases when there is only one argument passed to the `Array` constructor and when that argument is a `Number`, the constructor will return a new *sparse* array with the `length` property set to the value of the argument. It should be noted that **only** the `length` property of the new array will be set this way; the actual indexes of the array will not be initialized.\n\n    var arr = new Array(3);\n    arr[1]; // undefined\n    1 in arr; // false, the index was not set."
    },
    {
      question: "### What can you tell me about the use of the `for in` loop construct?",
      answer: "Although arrays in JavaScript are objects, there are no good reasons to use the `for in` loop. In fact, there are a number of good reasons **against** the use of `for in` on arrays.\n\n> **Note:** JavaScript arrays are **not** *associative arrays*. JavaScript only\n> has [objects](#object.general) for mapping keys to values. And while associative\n> arrays **preserve** order, objects **do not**.\n\nBecause the `for in` loop enumerates all the properties that are on the prototype chain and because the only way to exclude those properties is to use `hasOwnProperty`, it is already up to **twenty times** slower than a normal `for` loop."
    },
    {
      question: "### What's the best way to iterate over arrays?",
      answer: "In order to achieve the best performance when iterating over arrays, it is best to use the classic `for` loop.\n\n    var list = [1, 2, 3, 4, 5, ...... 100000000];\n    for(var i = 0, l = list.length; i < l; i++) {\n        console.log(list[i]);\n    }\n\nThere is one extra catch in the above example, which is the caching of the length of the array via `l = list.length`.\n\nAlthough the `length` property is defined on the array itself, there is still an overhead for doing the lookup on each iteration of the loop. And while recent JavaScript engines **may** apply optimization in this case, there is no way of telling whether the code will run on one of these newer engines or not.\n\nIn fact, leaving out the caching may result in the loop being only **half as fast** as with the cached length."
    },
    {
      question: "### What happens when you set the value of an array's length property?",
      answer: "While the *getter* of the `length` property simply returns the number of elements that are contained in the array, the *setter* can be used to **truncate** the array.\n\n    var foo = [1, 2, 3, 4, 5, 6];\n    foo.length = 3;\n    foo; // [1, 2, 3]\n\n    foo.length = 6;\n    foo.push(4);\n    foo; // [1, 2, 3, undefined, undefined, undefined, 4]\n\nAssigning a smaller length truncates the array. Increasing it creates a sparse array."
    },
    {
      question: "### In this code what is the resulting value of 'a'?\n\n    var a=1;\n    delete a;\n",
      answer: "The value of 'a' remains 1 after the delete call. Such properties have a set of attributes, one of which is`DontDelete`. Variable and function declarations in global and function code always create properties with `DontDelete`, and therefore cannot be deleted."
    },
    {
      question: "### In this code what is the resulting value of 'obj.x'?\n\n    var obj = {x: 1};\n    delete obj.x;",
      answer: "The result is that obj.x is now removed from obj."
    },
    {
      question: "### Which functions execute `eval` in disguise?",
      answer: "The timeout functions `setTimeout` and `setInterval` can both take a string as their first argument. This string will **always** get executed in the global scope since `eval` is not being called directly in that case."
    },
    {
      question: "### Why are there potential security issues with the use of `eval`?",
      answer: "`eval` is a security problem, because it executes **any** code given to it. It should **never** be used with strings of unknown or untrusted origins."
    },
    {
      question: "### How does scoping work with `eval`?",
      answer: "The `eval` function will execute a string of JavaScript code in the local scope.\n\n    var foo = 1;\n    function test() {\n        var foo = 2;\n        eval('foo = 3');\n        return foo;\n    }\n    test(); // 3\n    foo; // 1\n\nHowever, `eval` only executes in the local scope when it is being called directly *and* when the name of the called function is actually `eval`.\n\n    var foo = 1;\n    function test() {\n        var foo = 2;\n        var bar = eval;\n        bar('foo = 3');\n        return foo;\n    }\n    test(); // 2\n    foo; // 3"
    },
    {
      question: "### How does JavaScript handle semicolons?",
      answer: "Although JavaScript has C style syntax, it does **not** enforce the use of semicolons in the source code, so it is possible to omit them.\nJavaScript is not a semicolon-less language. In fact, it needs the semicolons in order to understand the source code. Therefore, the JavaScript parser **automatically** inserts them whenever it encounters a parse error due to a missing semicolon.\n\n    var foo = function() {\n    } // parse error, semicolon expected\n    test()\n\nInsertion happens, and the parser tries again.\n\n    var foo = function() {\n    }; // no error, parser continues\n    test()\n\nThe automatic insertion of semicolon is considered to be one of **biggest** design flaws in the language because it *can* change the behavior of code.\n\n> **Note:** The JavaScript parser does not \"correctly\" handle return statements \n> that are followed by a new line. While this is not necessarily the fault of \n> the automatic semicolon insertion, it can still be an unwanted side-effect."
    },
    {
      question: "### What are some ways in which you can organize your JS code?",
      answer: "With inheritance and composition using mixins and JavaScript objects. Additionally, using MVC frameworks can help organize your code."
    },
    {
      question: "### What are some of the benefits of using namespaces?",
      answer: "Helps minimize polluting the global namespace. Simulates modules."
    },
    {
      question: "### What is an object literal?",
      answer: "An object created using the object literal syntax { } \n\n An object created using the object literial syntax."
    },
    {
      question: "### What is a JavaScript namespace?",
      answer: "A named object created using an object literal and which has variables and methods attached to it."
    },
    {
      question: "### Why use object prototypes?",
      answer: "Prototypes allow object instances to be extended at runtime by adding behaviors to their share prototype. Object prototypes are shared between all instances of an object and thus help reduce memory requirements."
    },
    {
      question: "### What are some examples of creational design patterns?",
      answer: "Constructor, factory, abstract, prototype, singleton, builder."
    },
    {
      question: "### What are some of the new features introduced in ES5?",
      answer: "Object.create, Object.defineProperty, Object.defineProperties"
    },
    {
      question: "### When were `Object.create`, `Object.defineProperty`, `Object.defineProperties` introduced into JavaScript?",
      answer: "ES5"
    },
    {
      question: "### Does JavaScript have object methods?",
      answer: "Technically, no. JavaScript has properties which contain functions."
    },
    {
      question: "### When were `Object.create`, `Object.defineProperty`, `Object.defineProperties` introduced into JavaScript?",
      answer: "ES5"
    },
    {
      question: "### What is the outcome of the following statements and why?\n\n    console.log(\"5\" - 1);\n    console.log(\"5\" + 1);",
      answer: "The first statement produces `4` and the second returns `51`. Not at all what might be expected. The reason for this is that in the second statement JavaScript attempts string concatenation before numeric addition due to the presence of the plus operator. This is a consequence of JavaScripts type coercion rules."
    },
    {
      question: "### Explain the following results\n\n    console.log(null == undefined);\n true\n\n    console.log(null == 0);\n  false",
      answer: "JavaScript uses a complicated and confusing set of rules to determine what to do. In most cases, it just tries to convert one of the values to the other value's type. However, when null or undefined occurs on either side of the operator, it produces `true` only if both sides are one of `null` or `undefined`."
    }
  ]
};
