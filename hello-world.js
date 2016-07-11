/* First program

Create a file called hello-world.js . In it, write a simple node program that outputs 
"Hello World!" to the console.

Add an instruction to your program that will output "Hello World Again!!" 10 seconds after 
the program was run.

Save, commit and push. */


// console.log('hello world');

// setTimeout(function() {
//     console.log("hello world");
// }, 10000);


/* A wild interval has appeared!

If you never tried setInterval, give it a try first. It works the same way as setTimeout, 
takes a callback function and a time in milliseconds. But instead of calling your callback 
once, it calls it once every x milliseconds. In this exercise, you’ll have to mimic what 
setInterval is doing but only with setTimeout!

Your exercise: Write a piece of code using setTimeout that prints “Hello World!” every 
10 seconds forever. */


// setInterval(function() {
//     console.log("hello world!");     WHAT WE WANT IT TO DO BUT WITH SETTIMEOUT;
// }, 10000);

function wildInterval () {
    setTimeout(function() {
        console.log("hello world!");
        wildInterval();
    }, 1000);
}

wildInterval();



