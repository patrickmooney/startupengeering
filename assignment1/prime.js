#!/usr/bin/env node
/* Startup Engineering - Week 1 - Assignment 2 
 * Print the first 100 prime numbers */

var fs = require('fs');

var outfile = "prime.txt";
var results = ["2"];
var startingNumber = 2;

/* This function will check for a prime */
function checkForPrime (n)
{
    if (n < 2) return false;
    var q = Math.sqrt (n);
    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

/* Find the first 100 */
while(results.length<100)
{
	//Increment the Starting Number
	++startingNumber;
	if(checkForPrime(startingNumber))
		results.push(startingNumber);
}

/* Join and print the results */
var output = results.join(",");

fs.writeFileSync(outfile, output);  
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + outfile);