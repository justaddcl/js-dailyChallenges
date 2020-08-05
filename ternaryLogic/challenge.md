# Ternary Logic

## Challenge

Little Petya very much likes computers. Recently he has received a new "Ternatron IV" as a gift from his mother. Unlike other modern computers, "Ternatron IV" operates with ternary and not binary logic. Petya immediately wondered how the xor operation is performed on this computer (and whether there is anything like it).

It turned out that the operation does exist (however, it is called tor) and it works like this. Suppose that we need to calculate the value of the expression A tor B. Both numbers A and B are written in the ternary notation one under the other one (B under A). If they have a different number of digits, then leading zeroes are added to the shorter number until the lengths are the same. Then the numbers are summed together digit by digit. The result of summing each two digits is calculated modulo 3. Note that there is no carry between digits (i. e. during this operation the digits aren't transferred).
For example:

`14`<sub>10 </sub>`tor 50`<sub>10 </sub>`== 0112`<sub>3 </sub>`tor 1212`<sub>3 </sub>`== 1021`<sub>3 </sub>`== 34`<sub>10 </sub>.

Petya wrote numbers A and C on a piece of paper. Help him find such number B, that A tor B = C. If there are several such numbers, print the smallest one.

#### Input:

Input contains two integers A and C. Both numbers are written in decimal notation.

#### Output:

Return the single integer B, such that A tor B = C. If there are several possible numbers B, print the smallest one. You should print the number in decimal notation.

## Examples:

```js
(14, 34)                =>  50
(50, 34)                =>  14
(387420489, 225159023)  =>  1000000001
(5, 5)                  =>  0
```

NOTE:
You need to find B!

```js
`A tor ??? = C`;
```

[Challenge by @arhigod on CodeWars](https://www.codewars.com/kata/598d79f7b1954bc4cc000028)
