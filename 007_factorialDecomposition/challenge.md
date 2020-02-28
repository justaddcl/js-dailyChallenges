The aim of the kata is to decompose n! (factorial n) into its prime factors.

## Examples:

```
n = 12; decomp(12) -> "2^10 _ 3^5 _ 5^2 _ 7 _ 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 _ 3^9 _ 5^4 _ 7^3 _ 11^2 _ 13 _ 17 \* 19"

n = 25; decomp(25) -> 2^22 _ 3^10 _ 5^6 _ 7^3 _ 11^2 _ 13 _ 17 _ 19 _ 23
```

Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

## Notes

the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n will go from 300 to 4000).
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

[Challenge by @g964 on CodeWars](https://www.codewars.com/kata/5a045fee46d843effa000070)
