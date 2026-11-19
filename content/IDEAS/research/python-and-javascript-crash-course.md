🚀 JavaScript + Python Crash Course: Beginner to Advanced

If you want to learn JavaScript and Python together, side by side, from absolute beginner to advanced, we'll approach them as two versions of the same programming concepts.

The goal isn't just to memorize syntax. You'll learn how to think like a programmer, understand why code works, build real projects, debug errors, and eventually write professional-quality applications.

We'll cover the fundamentals, data structures, functions, object-oriented programming, asynchronous programming, APIs, testing, algorithms, and advanced language features.

One important note: No single crash course can literally cover every detail of both languages, every library, and every specialized use case. But we can build a comprehensive roadmap that covers the essential language features and the major topics you need to progress from beginner to advanced, without skipping foundational steps.

PART 1 — Your Learning Roadmap

We'll divide the course into 20 modules.

Stage	Module	What you'll learn

🟢 Beginner	1. Setup and first program	Runtimes, editors, syntax, execution
🟢 Beginner	2. Variables and data types	Values, types, constants, dynamic typing
🟢 Beginner	3. Operators	Arithmetic, comparison, logical operators
🟢 Beginner	4. Conditions	if, else, elif, else if, switch
🟢 Beginner	5. Loops	for, while, iteration, loop control
🟢 Beginner	6. Strings	Formatting, slicing, searching, manipulation
🟢 Beginner	7. Data structures	Lists, arrays, tuples, sets, dictionaries, objects, maps
🟢 Beginner	8. Functions	Parameters, return values, scope, closures
🟡 Intermediate	9. Error handling	Exceptions, debugging, defensive programming
🟡 Intermediate	10. Modules and packages	Imports, exports, package management
🟡 Intermediate	11. File handling	Reading and writing files, JSON, CSV
🟡 Intermediate	12. Comprehensions and functional programming	Mapping, filtering, reducing, lambdas
🟡 Intermediate	13. Object-oriented programming	Classes, objects, inheritance, composition
🟡 Intermediate	14. Iterators and generators	Lazy evaluation, iteration protocols
🟡 Intermediate	15. Asynchronous programming	Promises, async/await, asyncio
🔴 Advanced	16. Advanced language features	Closures, decorators, prototypes, descriptors, metaprogramming
🔴 Advanced	17. Networking and APIs	HTTP, REST APIs, JSON, clients and servers
🔴 Advanced	18. Testing and code quality	Unit tests, mocks, type checking, linting
🔴 Advanced	19. Algorithms and performance	Big O, searching, sorting, optimization
🔴 Advanced	20. Real-world projects	CLI tools, web applications, automation, APIs


We'll also cover browser JavaScript, Node.js, Python environments, databases, security, concurrency, deployment, and common interview questions.

Let's begin.


---

MODULE 1 — Understanding JavaScript and Python

1.1 What is programming?

Programming means giving a computer instructions to perform a task.

For example, suppose you want a computer to calculate the total cost of three products.

The instructions are:

1. Store the price of each product.


2. Add the prices together.


3. Display the result.



JavaScript and Python can both do this.

Python:

price1 = 10
price2 = 20
price3 = 30

total = price1 + price2 + price3

print(total)

Output:

60

JavaScript:

const price1 = 10;
const price2 = 20;
const price3 = 30;

const total = price1 + price2 + price3;

console.log(total);

Output:

60

Notice the similarities:

Both use variables.

Both use + for addition.

Both calculate the same result.

Both execute instructions in sequence.


The differences are mostly in syntax and language behavior.

Python uses print() to display output. JavaScript commonly uses console.log().

Python normally doesn't require semicolons at the end of statements. JavaScript often uses them by convention.

These are small differences. The underlying programming concepts are largely shared.

1.2 Where do these languages run?

Understanding this distinction is important.

Python

Python commonly runs in:

Your computer's terminal.

Backend web servers.

Automation scripts.

Data analysis environments.

Scientific computing tools.

Machine learning applications.


JavaScript

JavaScript commonly runs in:

Web browsers.

Node.js applications.

Backend web servers.

Desktop applications built with JavaScript frameworks.

Mobile applications built with JavaScript-based technologies.


A crucial distinction:

JavaScript and Java are different programming languages. Despite their similar names, their syntax, runtime behavior, and ecosystems differ considerably.

1.3 Your first programs

Python

print("Hello, World!")
print("I am learning Python.")
print(10 + 5)

JavaScript

console.log("Hello, World!");
console.log("I am learning JavaScript.");
console.log(10 + 5);

Output in both cases:

Hello, World!
I am learning Python.
15

The second line differs because we deliberately wrote different messages.

What does each part mean?

Consider this Python statement:

print("Hello, World!")

print is a built-in function.

() contains the information passed to the function.

"Hello, World!" is a string.

The statement tells Python to display that string.


Now JavaScript:

console.log("Hello, World!");

console provides access to a console interface.

log is a method that displays information.

() contains the argument.

"Hello, World!" is a string.

; terminates the statement by convention.


Practice 1

Write a program in both languages that displays:

My name is Alex.
I am learning two programming languages.
The answer is 100.

Try to write it yourself before looking at the solution.

Python solution:

print("My name is Alex.")
print("I am learning two programming languages.")
print(50 + 50)

JavaScript solution:

console.log("My name is Alex.");
console.log("I am learning two programming languages.");
console.log(50 + 50);

You now understand your first programming concept: output.


---

MODULE 2 — Variables and Data Types

Variables let you store and reuse information.

Imagine a variable as a labeled container that gives you access to a value.

2.1 Creating variables

Python

name = "Alex"
age = 25
height = 1.75
is_learning = True

JavaScript

let name = "Alex";
let age = 25;
let height = 1.75;
let isLearning = true;

The variables store four different kinds of information.

Concept	Python	JavaScript

Text	str	string
Integer	int	number
Decimal number	float	number
Boolean	bool	boolean


Python distinguishes integers from floating-point numbers.

JavaScript's ordinary numeric type, number, represents both integer and floating-point values. JavaScript also has a separate bigint type for large integers.

Notice the naming convention:

is_learning = True

Python conventionally uses snake_case.

let isLearning = true;

JavaScript conventionally uses camelCase.

Both styles are valid ways of naming variables in their respective languages.

2.2 Changing variables

Python:

score = 10
score = 20

print(score)

JavaScript:

let score = 10;
score = 20;

console.log(score);

Output:

20

The second assignment replaces the value previously stored in the variable.

let, const, and var in JavaScript

JavaScript has three familiar variable declarations.

let score = 10;
const country = "Thailand";
var oldStyleVariable = 100;

Here's the important distinction:

Declaration	Can be reassigned?	Scope

let	Yes	Block scope
const	No	Block scope
var	Yes	Function scope, or global scope in certain contexts


For modern JavaScript, prefer const by default and use let when reassignment is needed.

Avoid using var in most new code unless you specifically need to understand or work with its older behavior.

For example:

const name = "Alex";
name = "Sam"; // TypeError

That fails because const prevents reassignment.

However, const does not make an object or array immutable.

const scores = [10, 20];

scores.push(30);

console.log(scores);

Output:

[10, 20, 30]

The variable still references the same array, but the array's contents have changed.

In Python, assigning a name to a value doesn't require declaring it with let or const.

name = "Alex"
name = "Sam"

Python allows the name to be rebound.

Important: Python also supports constants by convention, commonly written in uppercase, but does not have a direct equivalent of JavaScript's const declaration.

MAX_USERS = 100

This communicates that the value should be treated as a constant. It doesn't prevent reassignment.

2.3 Checking data types

Python:

print(type("Hello"))
print(type(25))
print(type(3.14))
print(type(True))

Output:

<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>

JavaScript:

console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof 3.14);
console.log(typeof true);

Output:

string
number
number
boolean

One unusual JavaScript detail:

console.log(typeof null);

Output:

object

This is a longstanding JavaScript quirk. It does not mean null is actually an ordinary object.

Python doesn't have this particular behavior:

print(type(None))

Output:

<class 'NoneType'>

Python's None and JavaScript's null both represent an absence of a value, although their language semantics differ.

JavaScript also has undefined, which frequently indicates that a value hasn't been assigned or provided.

let result;

console.log(result);
console.log(typeof result);

Output:

undefined
undefined

Python has no direct undefined value equivalent.

2.4 Strings, numbers, and booleans

Let's compare common values.

Meaning	Python	JavaScript

Text	"Hello"	"Hello"
Integer	42	42
Decimal	3.14	3.14
True	True	true
False	False	false
No value	None	null
Missing/uninitialized value	No direct equivalent	undefined


Be careful with capitalization.

Python:

is_active = True

JavaScript:

let isActive = true;

Python uses True and False, while JavaScript uses true and false.

Writing the wrong capitalization in Python causes an error unless you have separately defined a name with that spelling.

2.5 Dynamic typing

Both languages are dynamically typed.

This means you don't ordinarily need to declare a variable's type in advance.

Python:

value = 100
value = "Hello"
value = True

JavaScript:

let value = 100;
value = "Hello";
value = true;

Both allow the variable name to refer to values of different types over time.

This is different from statically typed languages such as Java or C# in their conventional usage.

However, dynamic typing does not mean that values have no types. The values still have types, and those types influence which operations are valid.

2.6 Converting between types

Suppose you receive a number as text.

Python:

age_text = "25"

age = int(age_text)

print(age + 5)

Output:

30

JavaScript:

const ageText = "25";

const age = Number(ageText);

console.log(age + 5);

Output:

30

Common conversions:

Conversion	Python	JavaScript

Text	str(value)	String(value)
Number	int(value)	Number(value)
Decimal	float(value)	Number(value)
Boolean	bool(value)	Boolean(value)


Be careful: these conversions don't always behave the same way.

For example:

print(bool(""))
print(bool("False"))
print(bool(0))

Output:

False
True
False

An empty string is false-like, but a nonempty string such as "False" is truthy.

JavaScript:

console.log(Boolean(""));
console.log(Boolean("False"));
console.log(Boolean(0));

Output:

false
true
false

The results are similar here, but Python and JavaScript differ in other important ways, especially around arrays, objects, and equality.

2.7 The dangerous + operator

Python:

print(5 + 5)
print("5" + "5")

Output:

10
55

JavaScript:

console.log(5 + 5);
console.log("5" + "5");
console.log("5" + 5);

Output:

10
55
55

JavaScript's + operator can perform numeric addition or string concatenation.

This is one reason to be careful about implicit type conversion.

Prefer explicit conversion when working with user input.


---

MODULE 3 — Operators

Operators allow you to calculate values and compare data.

3.1 Arithmetic operators

Operation	Python	JavaScript

Addition	a + b	a + b
Subtraction	a - b	a - b
Multiplication	a * b	a * b
Division	a / b	a / b
Floor division	a // b	Math.floor(a / b) for ordinary finite values
Remainder	a % b	a % b
Exponentiation	a ** b	a ** b


Example:

Python:

a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)

JavaScript:

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(Math.floor(a / b));
console.log(a % b);
console.log(a ** b);

Output in both examples:

13
7
30
3.3333333333333335
3
1
1000

Important difference: floor division

Python's // performs floor division, rounding toward negative infinity.

JavaScript's Math.floor(a / b) does the same for ordinary finite numeric values.

However, JavaScript's % is a remainder operator, not a mathematical modulo operator in every sign-related case.

For example:

print(-7 // 3)
print(-7 % 3)

Output:

-3
2

JavaScript:

console.log(Math.floor(-7 / 3));
console.log(-7 % 3);

Output:

-3
-1

Remember this distinction when porting algorithms between languages.

3.2 Comparison operators

Both languages support these comparisons:

==    Equal in value
!=    Not equal
>     Greater than
<     Less than
>=    Greater than or equal
<=    Less than or equal

Python:

print(10 > 5)
print(10 == 10)
print(10 != 5)

JavaScript:

console.log(10 > 5);
console.log(10 === 10);
console.log(10 !== 5);

The main difference is the equality operator.

In Python, == compares values according to the types' equality rules.

In JavaScript, prefer === for strict equality and !== for strict inequality.

For example:

console.log(5 == "5");
console.log(5 === "5");

Output:

true
false

JavaScript's loose equality operator == can convert types before comparing them.

Strict equality === avoids that particular implicit conversion.

Python doesn't have JavaScript's === operator.

3.3 Logical operators

Meaning	Python	JavaScript

AND	and	&&
OR	or	`
NOT	not	!


Python:

age = 25
has_id = True

print(age >= 18 and has_id)
print(age < 18 or has_id)
print(not has_id)

JavaScript:

const age = 25;
const hasId = true;

console.log(age >= 18 && hasId);
console.log(age < 18 || hasId);
console.log(!hasId);

Output:

True
true
false

Python prints True and False; JavaScript prints true and false.

3.4 Short-circuit evaluation

Consider:

Python:

age = 16

result = age >= 18 and expensive_check()

print(result)

If age >= 18 is false, Python doesn't call expensive_check().

JavaScript behaves similarly:

const age = 16;

const result = age >= 18 && expensiveCheck();

console.log(result);

This behavior is called short-circuit evaluation.

It's useful when the second expression should only execute if the first expression passes.

The and/or operators in Python and &&/|| in JavaScript can also return operands rather than only Boolean values.

3.5 Assignment operators

Both languages support:

=     Assignment
+=    Add and assign
-=    Subtract and assign
*=    Multiply and assign
/=    Divide and assign

Example:

Python:

score = 10
score += 5
score *= 2

print(score)

JavaScript:

let score = 10;
score += 5;
score *= 2;

console.log(score);

Output:

30

Checkpoint 1

Predict the output before reading the answers.

Question A

x = 10
x += 5
x *= 2
print(x)

Question B

const x = "5";
console.log(x + 2);

Question C

print(7 // 2)
print(7 % 2)

Answers:

A: 30

B: 52

C: 3, followed by 1


If you understood these examples, you're ready to make your programs choose between different actions.


---

MODULE 4 — Conditions and Decision-Making

Programs become useful when they can make decisions.

For example:

Is a user old enough to register?

Is a password valid?

Is a product in stock?

Is a student passing an exam?

Should an application show an error?


4.1 The if statement

Python:

age = 20

if age >= 18:
    print("You are an adult.")

JavaScript:

const age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}

Both programs check whether age is greater than or equal to 18.

If the condition is true, the message is displayed.

Important syntax difference

Python uses indentation to define blocks.

if age >= 18:
    print("Adult")
    print("Eligible")

JavaScript commonly uses braces.

if (age >= 18) {
    console.log("Adult");
    console.log("Eligible");
}

Indentation also matters in JavaScript for readability, but braces define the block structure.

4.2 The if-else statement

Python:

age = 16

if age >= 18:
    print("You can register.")
else:
    print("You are too young.")

JavaScript:

const age = 16;

if (age >= 18) {
    console.log("You can register.");
} else {
    console.log("You are too young.");
}

Only one branch executes.

4.3 Multiple conditions

Python uses elif.

score = 75

if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
else:
    print("Needs improvement")

JavaScript uses else if.

const score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Needs improvement");
}

Output:

Grade C

The order matters. Once a matching branch executes, the remaining branches are skipped.

4.4 Combining conditions

Python:

age = 25
has_license = True

if age >= 18 and has_license:
    print("You may drive.")
else:
    print("You may not drive.")

JavaScript:

const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You may drive.");
} else {
    console.log("You may not drive.");
}

Both conditions must be true.

4.5 Truthy and falsy values

Python:

name = ""

if name:
    print("Name exists")
else:
    print("Name is empty")

JavaScript:

const name = "";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");
}

Both print the message indicating that the name is empty.

But not all truthiness rules are identical.

Value	Python truthiness	JavaScript truthiness

0	False	False
Empty string	False	False
None / null	False	False
Empty list / array	False	True
Empty dictionary / object	False	True
"hello"	True	True


This is a major difference.

Python:

items = []

if items:
    print("Has items")
else:
    print("Empty")

Output:

Empty

JavaScript:

const items = [];

if (items) {
    console.log("Has items");
} else {
    console.log("Empty");
}

Output:

Has items

In JavaScript, an empty array is truthy.

To check whether the array has elements, use:

if (items.length > 0) {
    console.log("Has items");
}

4.6 Ternary expressions

A ternary expression is a compact way to choose between two values.

Python:

age = 20

status = "Adult" if age >= 18 else "Minor"

print(status)

JavaScript:

const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);

Output:

Adult

Use ternary expressions for simple decisions. If the logic becomes complicated, a normal if-else statement is easier to read.

4.7 Switch statements and match statements

JavaScript supports switch:

const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

Output:

Tuesday

The break statements prevent execution from falling through to the next case.

Python 3.10 and later support structural pattern matching with match:

day = 2

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Unknown day")

Python's match statement is more powerful than a basic switch because it can match structural patterns. The two constructs are useful for similar tasks but aren't exact equivalents.


---

MODULE 5 — Loops

Loops repeat instructions.

Without loops, printing numbers from 1 to 100 would require writing 100 separate statements.

With loops, it takes a few lines.

5.1 The for loop

Python:

for number in range(1, 6):
    print(number)

JavaScript:

for (let number = 1; number <= 5; number++) {
    console.log(number);
}

Output:

1
2
3
4
5

Python's range(1, 6) includes 1 but excludes 6.

JavaScript's loop begins at 1 and continues while number <= 5.

These loops perform the same task but use different mechanisms.

Understanding JavaScript's loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

The three components are:

1. let i = 0: initialize the counter.


2. i < 5: continue while the condition is true.


3. i++: increment the counter after each iteration.



Output:

0
1
2
3
4

5.2 Iterating over collections

Python:

fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)

JavaScript:

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

Output:

apple
banana
orange

Python's for loop iterates over an iterable.

JavaScript's for...of loop iterates over iterable values, including array elements.

For JavaScript arrays, you can also use:

fruits.forEach((fruit) => {
    console.log(fruit);
});

This uses a callback function rather than a traditional loop statement.

5.3 The while loop

A while loop repeats while a condition remains true.

Python:

count = 1

while count <= 3:
    print(count)
    count += 1

JavaScript:

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}

Output:

1
2
3

Be careful: if the condition never becomes false, you may create an infinite loop.

For example:

while True:
    print("This repeats forever")

Use an infinite loop only when you have a deliberate exit strategy, such as break.

5.4 break and continue

break exits a loop.

continue skips the remainder of the current iteration and moves to the next one.

Python:

for number in range(1, 6):
    if number == 3:
        continue

    if number == 5:
        break

    print(number)

JavaScript:

for (let number = 1; number <= 5; number++) {
    if (number === 3) {
        continue;
    }

    if (number === 5) {
        break;
    }

    console.log(number);
}

Output:

1
2
4

5.5 Nested loops

A nested loop is a loop inside another loop.

Python:

for row in range(3):
    for column in range(3):
        print(row, column)

JavaScript:

for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
        console.log(row, column);
    }
}

The inner loop completes all its iterations for each iteration of the outer loop.

Nested loops are useful for:

Tables.

Grids.

Matrices.

Pairwise comparisons.

Certain algorithms.


But they can also become expensive when processing large amounts of data.

Checkpoint 2

Write programs in both languages to:

1. Print numbers from 1 through 10.


2. Print only even numbers from 1 through 20.


3. Calculate the sum of numbers from 1 through 100.


4. Print every item in a list or array.


5. Stop a loop when a number reaches 7.



Try solving these without looking back at the examples.


---

MODULE 6 — Strings

Strings represent text.

They're used for usernames, messages, passwords, filenames, API responses, and much more.

6.1 Creating strings

Python:

name = "Alex"
message = 'Hello'
multiline = """This is
multiple lines."""

JavaScript:

const name = "Alex";
const message = 'Hello';
const multiline = `This is
multiple lines.`;

Both languages support single- and double-quoted strings.

Python also supports triple-quoted strings for multiline text.

JavaScript uses template literals, enclosed in backticks, for convenient multiline strings and interpolation.

6.2 String concatenation

Python:

first = "Hello"
second = "World"

message = first + " " + second

print(message)

JavaScript:

const first = "Hello";
const second = "World";

const message = first + " " + second;

console.log(message);

Output:

Hello World

6.3 String interpolation

String interpolation allows you to insert values into text.

Python uses f-strings:

name = "Alex"
age = 25

message = f"My name is {name} and I am {age}."

print(message)

JavaScript uses template literals:

const name = "Alex";
const age = 25;

const message = `My name is ${name} and I am ${age}.`;

console.log(message);

Output:

My name is Alex and I am 25.

These are usually more readable than combining many strings with +.

6.4 String length

Python:

text = "Hello"

print(len(text))

JavaScript:

const text = "Hello";

console.log(text.length);

Output:

5

Python uses the len() function.

JavaScript strings have a .length property.

A subtle distinction: Python counts Unicode code points in a string, while JavaScript's .length counts UTF-16 code units. For ordinary English text, the results generally match. Some emoji and other Unicode characters require extra care.

6.5 Changing case

Python:

text = "Hello World"

print(text.upper())
print(text.lower())
print(text.title())

JavaScript:

const text = "Hello World";

console.log(text.toUpperCase());
console.log(text.toLowerCase());

Python has a built-in .title() method. JavaScript does not have an exact built-in equivalent for title-casing arbitrary text.

6.6 Removing whitespace

Python:

text = "  hello  "

print(text.strip())

JavaScript:

const text = "  hello  ";

console.log(text.trim());

Output:

hello

6.7 Searching strings

Python:

text = "I love programming"

print("love" in text)
print(text.find("programming"))

JavaScript:

const text = "I love programming";

console.log(text.includes("love"));
console.log(text.indexOf("programming"));

Both can search for substrings.

Python's find() returns -1 when a substring isn't found.

JavaScript's indexOf() also returns -1 when a substring isn't found.

6.8 Replacing text

Python:

text = "I like Java"

print(text.replace("Java", "Python"))

JavaScript:

const text = "I like Java";

console.log(text.replace("Java", "Python"));

Output:

I like Python

One important difference: Python's string .replace() replaces all matching occurrences by default.

JavaScript's string .replace() generally replaces only the first matching substring when given a string search argument. Use .replaceAll() or an appropriate global regular expression to replace all occurrences.

6.9 Slicing strings

Slicing extracts part of a string.

Python:

text = "JavaScript"

print(text[0:4])
print(text[:4])
print(text[4:])
print(text[-6:])

Output:

Java
Java
Script
Script

Python slicing follows the pattern:

text[start:stop:step]

The stop index is excluded.

JavaScript doesn't have the same slicing syntax, but strings provide .slice():

const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(0, 4));
console.log(text.slice(4));
console.log(text.slice(-6));

The results are the same.

Checkpoint 3

Given:

"  Learn Programming  "

Write code in both languages to:

1. Remove surrounding whitespace.


2. Convert the text to lowercase.


3. Find its length.


4. Check whether it contains "programming".


5. Extract "Learn".




---

MODULE 7 — Data Structures

Data structures help you organize information.

This is one of the most important topics in programming because real applications rarely work with isolated values.

They work with collections of users, products, transactions, messages, and other data.

7.1 Lists and arrays

Python has lists.

fruits = ["apple", "banana", "orange"]

print(fruits[0])
print(fruits[1])
print(len(fruits))

JavaScript has arrays.

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

Output:

apple
banana
3

Both use zero-based indexing.

That means the first element has index 0, the second has index 1, and so on.

Python lists and JavaScript arrays are both mutable, ordered collections, but they differ in implementation and behavior.

For example, Python lists can directly contain a mixture of types:

items = [10, "hello", True]

JavaScript arrays can do the same:

const items = [10, "hello", true];

7.2 Adding elements

Python:

fruits = ["apple", "banana"]

fruits.append("orange")

print(fruits)

JavaScript:

const fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits);

Output:

["apple", "banana", "orange"]

Python uses .append() to add one element to the end of a list.

JavaScript uses .push().

7.3 Removing elements

Python:

fruits = ["apple", "banana", "orange"]

fruits.remove("banana")

print(fruits)

JavaScript:

const fruits = ["apple", "banana", "orange"];

fruits.splice(1, 1);

console.log(fruits);

Output:

["apple", "orange"]

Python's .remove(value) removes the first matching value and raises an error if the value is absent.

JavaScript's .splice(start, deleteCount) removes elements by position and modifies the original array.

These methods aren't identical, so choose the operation that matches your intent.

7.4 Tuples in Python

Python has tuples, which are ordered collections commonly used for fixed groups of values.

coordinates = (10, 20)

print(coordinates[0])
print(coordinates[1])

JavaScript has no dedicated built-in tuple type.

A JavaScript array can represent a similar pair:

const coordinates = [10, 20];

console.log(coordinates[0]);
console.log(coordinates[1]);

However, JavaScript arrays are mutable and don't provide the same guarantees as immutable Python tuples.

7.5 Dictionaries and objects

Python dictionaries associate keys with values.

person = {
    "name": "Alex",
    "age": 25,
    "city": "Bangkok"
}

print(person["name"])
print(person["age"])

JavaScript objects commonly serve a similar role.

const person = {
    name: "Alex",
    age: 25,
    city: "Bangkok"
};

console.log(person.name);
console.log(person.age);

Both allow you to organize related information.

Python commonly accesses dictionary values using bracket notation:

person["name"]

JavaScript supports both dot notation and bracket notation:

person.name
person["name"]

7.6 Adding and updating properties

Python:

person = {"name": "Alex"}

person["age"] = 25
person["name"] = "Sam"

print(person)

JavaScript:

const person = { name: "Alex" };

person.age = 25;
person.name = "Sam";

console.log(person);

Both allow the collection to be updated.

7.7 Handling missing keys

Python:

person = {"name": "Alex"}

print(person.get("age"))
print(person.get("age", 0))

Output:

None
0

JavaScript:

const person = { name: "Alex" };

console.log(person.age);
console.log(person.age ?? 0);

Output:

undefined
0

Python's .get() returns None by default when a key is missing.

JavaScript returns undefined for an absent ordinary object property.

JavaScript's nullish coalescing operator ?? provides a default when the value is null or undefined.

It does not replace every falsy value:

console.log(0 ?? 10);  // 0
console.log("" ?? 10); // ""
console.log(null ?? 10); // 10

Python doesn't have a direct ?? operator, although the same logic can be expressed explicitly.

7.8 Sets

A set stores unique elements.

Python:

numbers = {1, 2, 2, 3, 3, 3}

print(numbers)

The set contains only the unique values 1, 2, and 3.

JavaScript:

const numbers = new Set([1, 2, 2, 3, 3, 3]);

console.log(numbers);

JavaScript's Set is a dedicated collection type.

Sets are useful for removing duplicates and testing membership.

Python:

numbers = [1, 2, 2, 3, 3]

unique_numbers = set(numbers)

print(unique_numbers)

JavaScript:

const numbers = [1, 2, 2, 3, 3];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

Both approaches eliminate duplicate values according to their respective equality rules.

7.9 Maps

Python dictionaries and JavaScript Map objects are both key-value collections.

JavaScript:

const scores = new Map();

scores.set("Alex", 90);
scores.set("Sam", 85);

console.log(scores.get("Alex"));
console.log(scores.has("Sam"));

Output:

90
true

Python dictionaries can represent the same simple example:

scores = {}

scores["Alex"] = 90
scores["Sam"] = 85

print(scores["Alex"])
print("Sam" in scores)

Output:

90
True

JavaScript Map supports keys of many different types and has its own iteration and size semantics.

Python dictionaries also support many hashable key types, with different rules and implementation details.

7.10 Choosing the right data structure

Need	Python	JavaScript

Ordered collection	list	Array
Fixed group of values	tuple	Often an array
Key-value data	dict	Object or Map
Unique values	set	Set
Key-value map with arbitrary supported keys	dict	Map
Immutable set	frozenset	No direct built-in equivalent


Practice project: Student records

Create a collection containing three students.

Each student should have:

A name.

An age.

A score.


Then write code to:

1. Display every student.


2. Calculate the average score.


3. Find the student with the highest score.


4. Display only students who scored at least 80.


5. Store the unique student ages in a set.



Try implementing the project in both languages.

This exercise combines variables, arrays or lists, objects or dictionaries, loops, and conditions.


---

MODULE 8 — Functions

Functions are reusable blocks of code.

They help you avoid repetition, organize logic, and build larger applications from smaller components.

8.1 Defining a function

Python:

def greet():
    print("Hello!")

JavaScript:

function greet() {
    console.log("Hello!");
}

Defining a function doesn't necessarily execute it.

To execute it, call it:

Python:

greet()

JavaScript:

greet();

Output:

Hello!

8.2 Parameters and arguments

A parameter is a variable defined by the function.

An argument is a value passed to the function when it is called.

Python:

def greet(name):
    print(f"Hello, {name}!")

greet("Alex")
greet("Sam")

JavaScript:

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alex");
greet("Sam");

Output:

Hello, Alex!
Hello, Sam!

8.3 Return values

Functions can return results instead of printing them.

Python:

def add(a, b):
    return a + b

result = add(10, 20)

print(result)

JavaScript:

function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);

Output:

30

The return statement sends a result back to the caller.

This makes the function reusable in calculations and other expressions.

8.4 Default parameters

Python:

def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet())
print(greet("Alex"))

JavaScript:

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alex"));

Output:

Hello, Guest!
Hello, Alex!

Default parameters are useful when an argument is optional.

8.5 Keyword arguments in Python

Python supports calling functions with named arguments.

def describe_person(name, age):
    return f"{name} is {age} years old."

print(describe_person(age=25, name="Alex"))

Output:

Alex is 25 years old.

JavaScript doesn't have direct Python-style keyword arguments in ordinary function calls.

A common alternative is to pass an object:

function describePerson({ name, age }) {
    return `${name} is ${age} years old.`;
}

console.log(describePerson({
    age: 25,
    name: "Alex"
}));

This pattern is especially common when a function has multiple optional settings.

8.6 Variable numbers of arguments

Python supports *args:

def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3, 4))

JavaScript supports rest parameters:

function addAll(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(addAll(1, 2, 3, 4));

Output:

10

Python's **kwargs also allows functions to collect arbitrary keyword arguments into a dictionary.

JavaScript commonly handles flexible named options with an object parameter.

8.7 Lambda functions and arrow functions

Python:

square = lambda x: x * x

print(square(5))

JavaScript:

const square = (x) => x * x;

console.log(square(5));

Output:

25

Python lambdas are restricted to a single expression.

JavaScript arrow functions can contain either an expression or a block of statements.

Python also supports ordinary nested functions and many other functional programming patterns.

8.8 Scope

Scope determines where a variable can be accessed.

Python:

def example():
    message = "Hello"
    print(message)

example()

JavaScript:

function example() {
    const message = "Hello";
    console.log(message);
}

example();

The variable message is local to the function.

Trying to access it outside the function raises an error or otherwise fails, depending on the exact code and execution environment.

JavaScript also has block scope with let and const.

if (true) {
    const message = "Hello";
}

console.log(message); // ReferenceError

Python doesn't create a new local variable scope for ordinary if blocks.

if True:
    message = "Hello"

print(message)

Output:

Hello

This is an important difference when translating code between the languages.

8.9 Closures

A closure occurs when a function retains access to variables from its surrounding lexical environment.

JavaScript:

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

Output:

1
2
3

The inner function continues to access count after makeCounter() has finished executing.

Python supports the same concept, with nonlocal useful when a nested function needs to reassign a variable in its enclosing function scope.

def make_counter():
    count = 0

    def counter():
        nonlocal count
        count += 1
        return count

    return counter

counter = make_counter()

print(counter())
print(counter())
print(counter())

Output:

1
2
3

Closures are important for callbacks, state management, decorators, and many advanced programming patterns.

Checkpoint 4

Write functions in both languages that:

1. Add two numbers.


2. Determine whether a number is even.


3. Calculate the factorial of a number.


4. Return the largest number in a collection.


5. Count how many times a word appears in a sentence.



Don't simply copy the examples. Try to write each function from memory.


---

MODULE 9 — Error Handling and Debugging

Every programmer encounters errors.

The goal isn't to eliminate every error in advance. It's to understand errors, find their causes, and handle expected failures correctly.

9.1 Common types of errors

Syntax errors

Python:

if True
    print("Hello")

This is invalid because the if statement is missing a colon.

JavaScript:

if (true {
    console.log("Hello");
}

This is invalid because the opening parenthesis isn't properly matched.

Runtime errors

Python:

print(10 / 0)

This raises ZeroDivisionError.

JavaScript:

console.log(10 / 0);

This prints:

Infinity

This is a notable language difference: JavaScript generally produces Infinity for ordinary numeric division by zero, while Python raises an exception.

Logic errors

price = 100
discount = 20

final_price = price + discount

The program runs, but the calculation is wrong if discount is meant to reduce the price.

The correct calculation would be:

final_price = price - discount

JavaScript uses the same arithmetic correction.

9.2 Try-except and try-catch

Python:

try:
    number = int("hello")
    print(number)
except ValueError:
    print("Invalid number")

JavaScript:

try {
    const number = Number("hello");

    if (Number.isNaN(number)) {
        throw new Error("Invalid number");
    }

    console.log(number);
} catch (error) {
    console.log("Invalid number");
}

Output:

Invalid number

These examples deliberately handle invalid numeric input.

The conversion mechanisms differ, so the JavaScript example checks for NaN explicitly.

9.3 Raising and throwing errors

Python:

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")

    return a / b

JavaScript:

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

Both examples reject an invalid operation by raising an error.

9.4 Finally blocks

Python:

try:
    print("Working")
finally:
    print("Cleanup")

JavaScript:

try {
    console.log("Working");
} finally {
    console.log("Cleanup");
}

The finally block executes when control leaves the try statement, including when an exception is raised.

It's useful for cleanup, although resource-specific context managers in Python and resource-management patterns in JavaScript may be more appropriate for particular tasks.

9.5 Debugging checklist

When your program fails:

1. Read the error message.


2. Identify the line where the problem occurs.


3. Inspect the values of relevant variables.


4. Check types and assumptions.


5. Reproduce the error with a small example.


6. Fix the underlying cause.


7. Test both the expected result and edge cases.



Learn to use breakpoints and debuggers in addition to printing variables.


---

MODULE 10 — Modules and Packages

As programs grow, putting everything into one file becomes difficult.

Modules let you organize code into reusable files.

10.1 Importing built-in functionality

Python:

import math

print(math.sqrt(25))
print(math.pi)

JavaScript:

console.log(Math.sqrt(25));
console.log(Math.PI);

Both languages provide built-in mathematical functionality.

Python imports the math module in this example.

JavaScript's Math object is available without importing a package.

10.2 Creating a Python module

Create a file named math_tools.py:

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

Then create another file:

import math_tools

print(math_tools.add(10, 5))
print(math_tools.multiply(10, 5))

Output:

15
50

The second file imports and uses the first file.

10.3 Creating a JavaScript module

Create a file named mathTools.js:

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

Then import the functions:

import { add, multiply } from "./mathTools.js";

console.log(add(10, 5));
console.log(multiply(10, 5));

In Node.js, configure the project to use ECMAScript modules, for example by using a suitable .mjs file or a package configuration that sets "type": "module".

Browser JavaScript can use modules through <script type="module">.

10.4 Package managers

Python commonly uses:

pip to install packages.

venv to create virtual environments.

pyproject.toml for modern project configuration and packaging.


JavaScript commonly uses:

npm, pnpm, or yarn for package management.

package.json for project metadata and dependencies.

Lockfiles to record dependency resolutions.


A basic Python virtual environment workflow:

python -m venv .venv

Activate the environment using the command appropriate for your operating system, then install packages:

python -m pip install requests

A basic Node.js project workflow:

npm init -y
npm install

When a project needs dependencies, declare them in its project configuration rather than relying on undocumented global installations.


---

MODULE 11 — File Handling and JSON

Programs often need to save information beyond a single execution.

Files let you store logs, configuration, user data, reports, and other information.

11.1 Writing a file

Python:

with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Hello from Python!")

JavaScript using Node.js:

import { writeFile } from "node:fs/promises";

await writeFile(
    "notes.txt",
    "Hello from JavaScript!",
    "utf8"
);

These examples write text to a file.

Python's with statement manages the file's lifetime.

The JavaScript example uses Node.js's promise-based filesystem API.

Browser JavaScript doesn't ordinarily have unrestricted access to the user's filesystem, so file operations depend on browser APIs and user permissions.

11.2 Reading a file

Python:

with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)

JavaScript using Node.js:

import { readFile } from "node:fs/promises";

const content = await readFile("notes.txt", "utf8");

console.log(content);

These examples use await at the top level, which works in an appropriate asynchronous JavaScript module.

11.3 JSON

JSON is a common data-interchange format used by APIs and configuration files.

Python:

import json

person = {
    "name": "Alex",
    "age": 25,
    "active": True
}

json_text = json.dumps(person)

print(json_text)

JavaScript:

const person = {
    name: "Alex",
    age: 25,
    active: true
};

const jsonText = JSON.stringify(person);

console.log(jsonText);

Both produce JSON text similar to:

{"name": "Alex", "age": 25, "active": true}

The exact formatting can differ depending on the serialization options.

11.4 Parsing JSON

Python:

import json

json_text = '{"name": "Alex", "age": 25}'

person = json.loads(json_text)

print(person["name"])

JavaScript:

const jsonText = '{"name": "Alex", "age": 25}';

const person = JSON.parse(jsonText);

console.log(person.name);

Output:

Alex

JSON supports objects, arrays, strings, numbers, booleans, and null.

It does not directly represent functions, arbitrary class instances, or every special value in either language.

For example, Python's None and JavaScript's undefined aren't both serialized identically: JavaScript generally omits undefined object properties during JSON serialization, while Python's standard JSON encoder rejects unsupported values such as functions.


---

MODULE 12 — Functional Programming and Comprehensions

Functional programming emphasizes transforming data with functions.

You don't need to use a purely functional style to benefit from these techniques.

12.1 Mapping

Mapping transforms each element of a collection.

Python:

numbers = [1, 2, 3, 4]

squares = list(map(lambda x: x * x, numbers))

print(squares)

JavaScript:

const numbers = [1, 2, 3, 4];

const squares = numbers.map((x) => x * x);

console.log(squares);

Output:

[1, 4, 9, 16]

JavaScript's .map() returns a new array.

Python's map() returns an iterator, so list() is used to materialize the results.

Python also supports list comprehensions, which are often more readable.

numbers = [1, 2, 3, 4]

squares = [x * x for x in numbers]

print(squares)

12.2 Filtering

Filtering selects elements that satisfy a condition.

Python:

numbers = [1, 2, 3, 4, 5, 6]

evens = [number for number in numbers if number % 2 == 0]

print(evens)

JavaScript:

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((number) => number % 2 === 0);

console.log(evens);

Output:

[2, 4, 6]

12.3 Reducing

Reduction combines multiple values into one result.

Python:

from functools import reduce

numbers = [1, 2, 3, 4]

total = reduce(lambda a, b: a + b, numbers, 0)

print(total)

JavaScript:

const numbers = [1, 2, 3, 4];

const total = numbers.reduce((a, b) => a + b, 0);

console.log(total);

Output:

10

For simple sums in Python, prefer:

total = sum(numbers)

Choose the clearest tool for the problem rather than forcing every operation into a functional pattern.

12.4 Sorting

Python:

numbers = [5, 2, 8, 1, 3]

ascending = sorted(numbers)

print(ascending)

JavaScript:

const numbers = [5, 2, 8, 1, 3];

const ascending = [...numbers].sort((a, b) => a - b);

console.log(ascending);

Output:

[1, 2, 3, 5, 8]

Important differences:

Python's sorted() returns a new list.

JavaScript's .sort() modifies the original array.

JavaScript sorts elements lexicographically by default, so numeric sorting usually requires a comparator.


For example:

console.log([10, 2, 30].sort());

Output:

[10, 2, 30]

That's the default lexicographic order, not numeric ascending order.

Use:

console.log([10, 2, 30].sort((a, b) => a - b));

Output:

[2, 10, 30]


---

MODULE 13 — Object-Oriented Programming

Object-oriented programming, or OOP, organizes code around objects that combine data and behavior.

It is useful for modeling entities such as:

Users.

Bank accounts.

Products.

Employees.

Vehicles.

Orders.


13.1 Classes and objects

Python:

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"My name is {self.name} and I am {self.age}."

person = Person("Alex", 25)

print(person.introduce())

JavaScript:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name} and I am ${this.age}.`;
    }
}

const person = new Person("Alex", 25);

console.log(person.introduce());

Output:

My name is Alex and I am 25.

A class defines how objects of a particular kind are constructed and what behavior they provide.

An object is an instance of that class.

13.2 Constructors

Python uses __init__() to initialize a newly created instance.

JavaScript uses constructor() in class syntax.

Python's self explicitly refers to the instance.

JavaScript's this generally refers to the receiver associated with a method call, although its behavior depends on how the function is invoked. Arrow functions capture this lexically rather than binding their own this.

These distinctions matter when methods are passed around as callbacks.

13.3 Inheritance

Inheritance allows one class to extend another.

Python:

class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

dog = Dog()

print(dog.speak())

JavaScript:

class Animal {
    speak() {
        return "Some sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

const dog = new Dog();

console.log(dog.speak());

Output:

Woof!

The Dog class inherits from Animal and overrides the speak() method.

13.4 Encapsulation

Encapsulation involves controlling how internal state is accessed and modified.

Python conventionally uses a leading underscore to indicate an internal implementation detail.

class BankAccount:
    def __init__(self, balance=0):
        self._balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self._balance += amount

    def get_balance(self):
        return self._balance

The underscore is a convention, not an access restriction.

JavaScript supports private class fields using #.

class BankAccount {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive");
        }

        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

The private field #balance cannot be accessed directly from outside the class.

13.5 Composition

Composition builds complex objects from smaller components rather than relying entirely on inheritance.

For example, a car may contain an engine object.

Python:

class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        return self.engine.start()

car = Car()

print(car.start())

JavaScript can express the same design with classes and object composition.

Composition is often preferable when one class needs to use another component's functionality without being a specialized version of that component.


---

MODULE 14 — Iterators and Generators

These concepts become important when processing large amounts of data or building custom collections.

14.1 Iterators

An iterator provides values one at a time.

Python:

numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
print(next(iterator))

Output:

10
20
30

Calling next() again after the iterator is exhausted raises StopIteration.

JavaScript:

const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

Output:

{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }

JavaScript iterators typically return objects containing value and done.

Python and JavaScript have different iterator protocols, but both support sequential consumption of data.

14.2 Generators in Python

A generator function uses yield to produce values incrementally.

def count_up_to(limit):
    number = 1

    while number <= limit:
        yield number
        number += 1

for value in count_up_to(3):
    print(value)

Output:

1
2
3

The generator doesn't need to construct an entire list before producing its values.

14.3 Generators in JavaScript

JavaScript supports generator functions using function*.

function* countUpTo(limit) {
    let number = 1;

    while (number <= limit) {
        yield number;
        number++;
    }
}

for (const value of countUpTo(3)) {
    console.log(value);
}

Output:

1
2
3

Generators are useful for:

Large datasets.

Streaming results.

Custom iteration.

Lazy computation.

Memory-efficient processing.



---

MODULE 15 — Asynchronous Programming

Asynchronous programming allows a program to coordinate operations that may take time, such as network requests, database queries, and file operations.

This is especially important in JavaScript and Python backend development.

15.1 Synchronous execution

Consider:

print("First")
print("Second")
print("Third")

The statements execute in sequence.

JavaScript behaves the same way:

console.log("First");
console.log("Second");
console.log("Third");

Output:

First
Second
Third

15.2 JavaScript promises

A promise represents the eventual completion or failure of an asynchronous operation.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
});

promise.then((result) => {
    console.log(result);
});

After approximately one second, the message appears.

The promise itself doesn't guarantee that the operation will succeed. A promise can be fulfilled or rejected.

15.3 Async and await in JavaScript

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function main() {
    console.log("Starting");

    await wait(1000);

    console.log("Finished");
}

main();

Output:

Starting
Finished

The await expression pauses the execution of main() until the awaited promise settles. It doesn't block the entire JavaScript runtime while waiting.

15.4 Async and await in Python

Python provides asyncio for asynchronous programming.

import asyncio

async def wait():
    await asyncio.sleep(1)

async def main():
    print("Starting")

    await wait()

    print("Finished")

asyncio.run(main())

Output:

Starting
Finished

Python's async def defines a coroutine function.

await suspends the coroutine until the awaited operation completes.

15.5 Making HTTP requests

JavaScript provides fetch() in modern browsers and supported Node.js environments.

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();

    console.log(user.name);
}

getUser().catch(console.error);

This example requests a user record from a public demonstration API.

Python can use the third-party requests library for synchronous requests:

import requests

response = requests.get(
    "https://jsonplaceholder.typicode.com/users/1",
    timeout=10
)

response.raise_for_status()

user = response.json()

print(user["name"])

For asynchronous Python HTTP requests, libraries such as httpx can be used:

import asyncio
import httpx

async def get_user():
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://jsonplaceholder.typicode.com/users/1"
        )

        response.raise_for_status()

        user = response.json()

        print(user["name"])

asyncio.run(get_user())

Install the necessary Python packages in your environment before running the examples.

Important concept: concurrency versus parallelism

These terms are related but different.

Concurrency means making progress on multiple tasks during overlapping periods.

Parallelism means executing multiple operations at the same instant, often on multiple CPU cores.


Asynchronous I/O is useful for managing many waiting operations efficiently.

CPU-intensive workloads may require multiprocessing, worker threads, native code, or other techniques depending on the language and workload.

Neither async nor await automatically makes CPU-heavy code execute in parallel.


---

MODULE 16 — Advanced Language Features

Now we move beyond everyday syntax.

16.1 Python decorators

A decorator modifies or wraps a function or class.

def log_call(function):
    def wrapper(*args, **kwargs):
        print("Function called")
        return function(*args, **kwargs)

    return wrapper

@log_call
def greet(name):
    return f"Hello, {name}!"

print(greet("Alex"))

Output:

Function called
Hello, Alex!

Decorators are frequently used for logging, authorization, caching, validation, and framework functionality.

For production-quality decorators, you should also learn functools.wraps, which preserves important metadata from the wrapped function.

16.2 JavaScript prototypes

JavaScript objects can inherit properties and methods through a prototype chain.

const animal = {
    speak() {
        return "Some sound";
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    return "Woof!";
};

console.log(dog.speak());
console.log(dog.bark());

Output:

Some sound
Woof!

JavaScript's class syntax is built on its prototype-based object model.

Understanding prototypes helps explain inheritance, property lookup, and some common JavaScript bugs.

16.3 Python comprehensions

Python comprehensions provide compact syntax for constructing collections.

List comprehension:

squares = [x * x for x in range(10)]

Dictionary comprehension:

squares = {x: x * x for x in range(5)}

Set comprehension:

unique_lengths = {len(word) for word in ["cat", "dog", "apple"]}

Generator expression:

squares = (x * x for x in range(10))

These constructs can make data transformations concise, although overly complicated comprehensions are difficult to maintain.

16.4 JavaScript destructuring

Destructuring extracts values from arrays or objects.

const person = {
    name: "Alex",
    age: 25
};

const { name, age } = person;

console.log(name);
console.log(age);

Array destructuring:

const coordinates = [10, 20];

const [x, y] = coordinates;

console.log(x);
console.log(y);

Python supports unpacking, which serves a similar purpose.

coordinates = (10, 20)

x, y = coordinates

print(x)
print(y)

Python also supports dictionary unpacking and other iterable-unpacking patterns.

16.5 Type annotations and static analysis

Python supports type hints:

def add(a: int, b: int) -> int:
    return a + b

Type hints help tools analyze code, improve editor assistance, and document interfaces.

Python generally does not enforce these annotations automatically at runtime.

JavaScript developers can use TypeScript to add static types to JavaScript code.

A TypeScript example:

function add(a: number, b: number): number {
    return a + b;
}

TypeScript checks types during development and compilation, but JavaScript remains the runtime language for the resulting application in ordinary TypeScript workflows.

To become advanced in both ecosystems, learn:

Python type hints and tools such as mypy or Pyright.

TypeScript types, interfaces, generics, unions, and narrowing.

Runtime validation for untrusted input, since static type checks alone don't validate external data.



---

MODULE 17 — APIs and Web Development

An API defines how software components communicate.

HTTP APIs are particularly important because they allow applications to exchange information over a network.

17.1 What is an HTTP request?

An HTTP request typically contains:

A method, such as GET or POST.

A URL.

Headers.

Optionally, a request body.


An HTTP response typically contains:

A status code.

Headers.

Optionally, a response body.


Common HTTP methods include:

Method	Typical purpose

GET	Retrieve a resource
POST	Submit data or request creation
PUT	Replace a resource
PATCH	Partially update a resource
DELETE	Delete a resource


These are conventions, and the exact behavior depends on the API.

17.2 Building a simple Python API

One popular Python web framework is FastAPI.

Install it:

python -m pip install fastapi uvicorn

Create main.py:

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello from Python"}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {
        "user_id": user_id,
        "name": "Alex"
    }

Run the application:

uvicorn main:app --reload

The application defines a home endpoint and a user endpoint.

FastAPI can also generate interactive API documentation for the application.

17.3 Building a simple JavaScript server

Node.js provides a runtime for running JavaScript outside the browser.

Using its built-in HTTP module:

import { createServer } from "node:http";

const server = createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    if (request.url === "/") {
        response.end(JSON.stringify({
            message: "Hello from JavaScript"
        }));

        return;
    }

    response.statusCode = 404;

    response.end(JSON.stringify({
        error: "Not found"
    }));
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});

This is a minimal server. A production application also needs careful request handling, input validation, security controls, logging, and appropriate error responses.

17.4 Browser JavaScript and the DOM

The Document Object Model, or DOM, represents the structure of a web page.

Browser JavaScript can read and modify it.

HTML:

<h1 id="title">Original title</h1>

<button id="change-button">Change title</button>

JavaScript:

const title = document.querySelector("#title");
const button = document.querySelector("#change-button");

button.addEventListener("click", () => {
    title.textContent = "Updated title!";
});

Clicking the button changes the heading.

Python doesn't natively run inside a typical browser page or manipulate its DOM directly in the same way. Python is more commonly used on the server or for automation and data processing, although specialized browser-based Python environments also exist.


---

MODULE 18 — Testing and Code Quality

Working code isn't necessarily reliable code.

Testing helps establish that the program behaves as intended.

18.1 Python unit tests

Python's standard library includes unittest.

import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == "__main__":
    unittest.main()

Save the file and run it with Python.

The test checks that adding 2 and 3 returns 5.

18.2 JavaScript tests

Node.js includes a built-in test runner in modern versions.

import test from "node:test";
import assert from "node:assert/strict";

function add(a, b) {
    return a + b;
}

test("add returns the sum", () => {
    assert.equal(add(2, 3), 5);
});

Run it with a compatible Node.js version.

The test checks the same behavior.

18.3 What should you test?

Consider a function that divides two numbers.

Test:

1. A normal division.


2. Division involving negative values.


3. A zero numerator.


4. A zero denominator.


5. Invalid inputs if the function accepts untrusted data.


6. Very large or very small numbers if those cases matter.



Also learn:

Unit testing.

Integration testing.

End-to-end testing.

Mocking.

Test fixtures.

Regression testing.

Property-based testing.

Code coverage.

Continuous integration.


A good test suite should check meaningful behavior rather than merely maximize the number of tests.

18.4 Code quality tools

Python developers commonly use tools such as:

Ruff for linting and formatting.

Black for formatting.

mypy or Pyright for static type checking.

pytest for testing.


JavaScript developers commonly use:

ESLint for linting.

Prettier for formatting.

TypeScript for static type checking.

Jest or Vitest for testing, depending on the project.

Node.js's built-in test runner for supported projects.


You don't need every tool in every project. Select a small, consistent set and configure it for the codebase.


---

MODULE 19 — Algorithms and Performance

An algorithm is a sequence of steps for solving a problem.

Data structures determine how information is stored; algorithms determine how it is processed.

19.1 Linear search

Linear search checks each element until it finds the target.

Python:

def linear_search(items, target):
    for index, item in enumerate(items):
        if item == target:
            return index

    return -1

print(linear_search([10, 20, 30, 40], 30))

JavaScript:

function linearSearch(items, target) {
    for (let index = 0; index < items.length; index++) {
        if (items[index] === target) {
            return index;
        }
    }

    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30));

Output:

2

The algorithm returns the index of the first matching element or -1 when the target isn't found.

19.2 Big O notation

Big O describes how an algorithm's resource requirements grow as input size increases.

Common complexity classes include:

Complexity	Name	Example

O(1)	Constant	Accessing an array element by index
O(log n)	Logarithmic	Binary search on sorted data
O(n)	Linear	Linear search
O(n log n)	Linearithmic	Typical efficient comparison sorting
O(n²)	Quadratic	Comparing every pair in a collection
O(2ⁿ)	Exponential	Some brute-force combinatorial algorithms


These are general patterns, not guarantees for every implementation.

For example, accessing an array element by index is typically constant-time, while searching for an arbitrary value may require examining many elements.

19.3 Binary search

Binary search repeatedly halves the search space.

It requires sorted input.

Python:

def binary_search(items, target):
    left = 0
    right = len(items) - 1

    while left <= right:
        middle = (left + right) // 2

        if items[middle] == target:
            return middle

        if items[middle] < target:
            left = middle + 1
        else:
            right = middle - 1

    return -1

print(binary_search([10, 20, 30, 40, 50], 40))

JavaScript:

function binarySearch(items, target) {
    let left = 0;
    let right = items.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (items[middle] === target) {
            return middle;
        }

        if (items[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 40));

Output:

3

The search takes logarithmic time in the number of elements in the worst case, assuming random-access indexing and an appropriate comparison operation.

19.4 What else should you learn?

To become advanced, study:

Arrays and linked lists.

Stacks and queues.

Hash tables.

Trees and binary search trees.

Heaps and priority queues.

Graphs.

Breadth-first search.

Depth-first search.

Merge sort.

Quick sort.

Recursion.

Dynamic programming.

Greedy algorithms.

Backtracking.

Memoization.

Time and space complexity.


You should also understand the practical performance characteristics of each language's built-in collections.

For most application development, using the right built-in data structure is more important than implementing every data structure from scratch.


---

MODULE 20 — Real-World Projects

You now have a broad view of the core concepts.

The next step is to combine them into projects.

Don't skip this part. Reading code is useful, but writing your own code is what turns knowledge into skill.

Project 1: Beginner — Calculator

Build the same calculator in Python and JavaScript.

Requirements:

Accept two numbers.

Accept an operator.

Support addition, subtraction, multiplication, and division.

Reject invalid operators.

Handle division by zero appropriately.

Display the result.


Example:

First number: 10
Operator: *
Second number: 5
Result: 50

Concepts practiced:

Variables.

Input and output.

Type conversion.

Conditions.

Functions.

Error handling.


Python's terminal input function is input().

In a Node.js terminal application, you can use readline to collect input.

In browser JavaScript, prompt() is a simple demonstration option, although it isn't generally the preferred approach for a polished application.

Project 2: Beginner to intermediate — To-do list

Create an application that lets users:

Add tasks.

List tasks.

Mark tasks as completed.

Delete tasks.

Save tasks to a file.

Load saved tasks when the program starts.


Implement the Python version as a command-line program.

Implement the JavaScript version as either a command-line program or a browser application.

Concepts practiced:

Lists and arrays.

Objects and dictionaries.

Loops.

Functions.

File handling.

JSON.

Input validation.


Project 3: Intermediate — Expense tracker

Build an application that records:

Expense description.

Amount.

Category.

Date.


Add features to:

List all expenses.

Calculate total expenses.

Filter by category.

Find the most expensive item.

Group expenses by month.

Export the data as JSON or CSV.


Then improve it by adding a database.

Concepts practiced:

Data structures.

Functions.

Date handling.

File operations.

Sorting and filtering.

Testing.

Data validation.


Project 4: Intermediate to advanced — REST API

Build an API that manages users or products.

Include:

Creating records.

Retrieving records.

Updating records.

Deleting records.

Validating requests.

Returning appropriate HTTP status codes.

Handling errors.

Writing automated tests.

Connecting to a database.


Use FastAPI for the Python version.

For the JavaScript version, use Node.js and a framework such as Express or Fastify.

Concepts practiced:

Modules.

HTTP.

JSON.

Async programming.

Routing.

Database access.

Testing.

Security.


Project 5: Advanced — Full-stack application

Build a complete application with:

A browser-based interface.

A JavaScript frontend.

An API backend.

A database.

Authentication.

Authorization.

Input validation.

Automated tests.

Deployment.


You can build the backend in Python or JavaScript.

If your goal is to master both languages, implement the backend twice while keeping the frontend and the API contract consistent.

This helps you compare the strengths of each ecosystem without needing to rebuild every part of the project.


---

BONUS MODULE — Concepts You Must Understand Before Calling Yourself Advanced

The previous modules introduce the major topics. This section fills in additional concepts that are essential for working professionally with both languages.

1. Mutability and references

Consider:

a = [1, 2]
b = a

b.append(3)

print(a)

Output:

[1, 2, 3]

The names a and b refer to the same list object.

JavaScript behaves similarly:

const a = [1, 2];
const b = a;

b.push(3);

console.log(a);

Output:

[1, 2, 3]

This explains why changing a mutable object through one reference can affect what you observe through another.

Learn the difference between:

Mutability.

Assignment.

Shallow copying.

Deep copying.

Object identity.

Value equality.

Aliasing.


These concepts are particularly important when working with nested data structures.

2. Copying collections

Python:

original = [1, 2, 3]
copy = original.copy()

copy.append(4)

print(original)
print(copy)

Output:

[1, 2, 3]
[1, 2, 3, 4]

JavaScript:

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original);
console.log(copy);

These examples create shallow copies.

If the collection contains nested mutable objects, those nested objects may still be shared between the original and the copy.

3. Recursion

Recursion occurs when a function calls itself.

Python:

def factorial(n):
    if n < 0:
        raise ValueError("n must be nonnegative")

    if n <= 1:
        return 1

    return n * factorial(n - 1)

print(factorial(5))

JavaScript:

function factorial(n) {
    if (n < 0) {
        throw new Error("n must be nonnegative");
    }

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

Output:

120

Every recursive function needs a base case to stop the recursion.

Recursion is useful for tree traversal, divide-and-conquer algorithms, and certain mathematical problems. Deep recursion can exceed the available call stack, so an iterative solution may be preferable in some cases.

4. Regular expressions

Regular expressions describe patterns used to search, match, or replace text.

Python:

import re

text = "Order number: 12345"

match = re.search(r"\d+", text)

if match:
    print(match.group())

JavaScript:

const text = "Order number: 12345";

const match = text.match(/\d+/);

if (match) {
    console.log(match[0]);
}

Output:

12345

Here, \d+ matches one or more digits.

Regular expressions are useful for extracting structured information from text, but complicated patterns can become hard to maintain. Use dedicated parsers when working with complex structured formats.

5. Dates and time

Python has standard-library date and time functionality through the datetime module.

JavaScript provides Date and, in supported environments, newer date/time APIs and libraries for more specialized needs.

You should learn:

Parsing dates.

Formatting dates.

Time zones.

UTC.

Durations.

Date arithmetic.

Daylight saving time.

ISO 8601 representations.


Date and time handling can be surprisingly complex, especially when an application operates across multiple countries.

6. Database fundamentals

Most real applications eventually need persistent structured data.

Learn:

Tables and records.

Primary keys.

Foreign keys.

Relationships.

SQL.

Joins.

Indexes.

Transactions.

Constraints.

Migrations.

Connection pooling.

Database security.


You can access databases from both languages using appropriate drivers and libraries.

Learn relational databases before assuming every application needs a specialized database technology.

7. Security fundamentals

Professional code must handle untrusted data safely.

Learn:

Input validation.

Output encoding.

SQL injection prevention.

Cross-site scripting.

Cross-site request forgery.

Authentication.

Authorization.

Password hashing.

Secure session management.

Secrets management.

Dependency updates.

Rate limiting.

Safe error handling.


Never store passwords as plain text.

Never assume that frontend validation alone makes an API secure.

Never embed private API keys or database credentials in publicly distributed browser code.

8. Concurrency and the runtime

For Python, learn:

The Global Interpreter Lock and its implications for common CPython builds.

Threads.

Multiprocessing.

Asyncio.

Race conditions.

Locks.

Queues.

Process communication.


For JavaScript, learn:

The event loop.

Tasks and microtasks.

Promises.

Timers.

Worker threads.

Web Workers.

Race conditions in asynchronous workflows.

Shared memory and synchronization where applicable.


Neither language has only one concurrency mechanism. Choose the appropriate approach for the workload.

9. Deployment and operations

A program that runs on your computer isn't necessarily ready for production.

Learn:

Environment variables.

Configuration management.

Logging.

Monitoring.

Dependency pinning.

Virtual environments.

Containers.

Continuous integration.

Continuous deployment.

Reverse proxies.

HTTPS.

Database migrations.

Backups.

Production error handling.


These topics turn a working program into a maintainable application.


---

Your Side-by-Side Cheat Sheet

Keep this table for quick reference.

Task	Python	JavaScript

Display output	print(x)	console.log(x)
Create a variable	x = 10	let x = 10;
Create a constant by convention	MAX = 100	const MAX = 100;
Get type	type(x)	typeof x
Convert to string	str(x)	String(x)
Convert to number	int(x) or float(x)	Number(x)
Compare equality	a == b	a === b
Logical AND	a and b	a && b
Logical OR	a or b	`a
Logical NOT	not a	!a
Conditional	if condition:	if (condition) {}
Else-if	elif condition:	else if (condition) {}
Loop over a range	range()	Traditional for loop
Loop over values	for x in items:	for (const x of items)
While loop	while condition:	while (condition) {}
Define function	def f():	function f() {}
Return a value	return x	return x;
Anonymous function	lambda x: x * 2	(x) => x * 2
List or array	[1, 2, 3]	[1, 2, 3]
Dictionary or object	{"name": "Alex"}	{ name: "Alex" }
Unique collection	set()	new Set()
Length of a collection	len(items)	items.length for arrays
Add to list or array	items.append(x)	items.push(x)
Handle exceptions	try / except	try / catch
Import functionality	import module	import ... from ...
JSON serialization	json.dumps(x)	JSON.stringify(x)
JSON parsing	json.loads(x)	JSON.parse(x)
Asynchronous function	async def	async function
Await a result	await operation()	await operation()
Create a class	class Name:	class Name {}
Inheritance	class Dog(Animal):	class Dog extends Animal {}
Generate values lazily	yield	function* and yield
Type annotations	def f(x: int) -> int:	TypeScript: function f(x: number): number


Remember that the table shows common equivalents, not that every feature has exactly the same semantics in both languages.


---

How to Study This Course Effectively

You will learn faster if you practice the same concept in both languages.

Use this four-step process for every module:

Step 1: Understand the concept.

Read the explanation and make sure you understand what the code is trying to do.

Step 2: Type the code yourself.

Don't just read the examples. Type them into an editor and run them.

Step 3: Change something.

Modify the inputs, add conditions, remove lines, or introduce an edge case. Predict what will happen before running the program.

Step 4: Rebuild the solution from memory.

Close the example and write the solution again. If you get stuck, revisit the relevant section.

For every topic, write one small program in Python and then recreate it in JavaScript.

That approach helps you separate the programming concept from the syntax of the language.

Recommended learning schedule

If you can study for approximately 1–2 hours each day, use this plan:

Week	Focus

1	Variables, data types, operators, conditions
2	Loops, strings, lists, arrays, dictionaries, objects
3	Functions, scope, closures, exceptions
4	Modules, files, JSON, comprehensions
5	Classes, inheritance, iterators, generators
6	Async programming, APIs, HTTP
7	Testing, algorithms, databases, security
8	Build and deploy a complete project


Eight weeks is an ambitious introduction, not a guarantee of advanced proficiency. Your progress will depend on your starting point, practice time, and the complexity of the projects you build.


---

Final Challenge: Test Your Understanding

Try solving these problems in both Python and JavaScript without looking at the examples above.

Beginner

1. Print your name, age, and country.


2. Calculate the area of a rectangle.


3. Determine whether a number is positive, negative, or zero.


4. Print the multiplication table of a number.


5. Count the characters in a string.



Intermediate

6. Find the largest number in an array or list.


7. Remove duplicate values from a collection.


8. Count the frequency of each word in a sentence.


9. Write a function that checks whether a string is a palindrome.


10. Read a JSON file and calculate the average of a collection of scores.



Advanced

11. Implement binary search.


12. Create a generator that produces Fibonacci numbers.


13. Write an asynchronous function that retrieves data from an API.


14. Build a REST API with input validation and automated tests.


15. Build an application that stores data in a database and supports creating, reading, updating, and deleting records.



For the advanced problems, don't stop when the basic version works. Add tests, handle invalid inputs, document the code, and consider performance.


---

What I recommend next

We've established the roadmap and introduced the major concepts, but a real crash course should be taught progressively rather than consumed like a long reference document.

The best next step is to work through each lesson in order, with exercises and solutions before moving forward.

I recommend this sequence:

1. Lesson 1: Variables, data types, input/output, and type conversion.


2. Lesson 2: Operators and expressions.


3. Lesson 3: Conditions and Boolean logic.


4. Lesson 4: Loops and iteration.


5. Lesson 5: Strings and text processing.


6. Lesson 6: Lists, arrays, dictionaries, objects, sets, and maps.


7. Lesson 7: Functions, scope, closures, and recursion.


8. Continue through the intermediate and advanced topics.



For each lesson, we'll use the same structure:

Concept explained from scratch.

Python and JavaScript code side by side.

Line-by-line explanations.

Common mistakes and language differences.

Small exercises.

Answers with explanations.

A practical mini-project.

A quiz before moving to the next lesson.


Start with Lesson 1 and master it before moving on. Once the fundamentals become second nature, the advanced topics will be much easier to understand.