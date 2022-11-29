# **2. Number System and Conservation Boolean Logic**

## **2.1 Number System and Conversion**

A numeral system (or system of numeration) is a writing system for expressing numbers; that is, a mathematical notation for representing numbers of a given set, using digits or other symbols in a consistent manner.

The same sequence of symbols may represent different numbers in different numeral systems. For example, "11" represents the number eleven in the decimal numeral system (used in common life), the number three in the binary numeral system (used in computers), and the number two in the unary numeral system (e.g. used in tallying scores).

The number the numeral represents is called its value. Not all number systems can represent all numbers that are considered in the modern days; for example, Roman numerals have no zero.

Ideally, a numeral system will:

- Represent a useful set of numbers (e.g. all integers, or rational numbers)
- Give every number represented a unique representation (or at least a standard representation)
- Reflect the algebraic and arithmetic structure of the numbers.

For example, the usual decimal representation gives every nonzero natural number a unique representation as a finite sequence of digits, beginning with a non-zero digit.

Numeral systems are sometimes called number systems, but that name is ambiguous, as it could refer to different systems of numbers, such as the system of real numbers, the system of complex numbers, the system of p-adic numbers, etc. Such systems are, however, not the topic of this article.

## **2.1.1 Decimal, Binary, Octal, Hexadecimal Number system and Conversion**

### **Binary Number System**

A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).

The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit, or binary digit. Because of its straightforward implementation in digital electronic circuitry using logic gates, the binary system is used by almost all modern computers and computer-based devices, as a preferred system of use, over various other human techniques of communication, because of the simplicity of the language and the noise immunity in physical implementation.

### **Counting in binary**

Counting in binary is similar to counting in any other number system. Beginning with a single digit, counting proceeds through each symbol, in increasing order. Before examining binary counting, it is useful to briefly discuss the more familiar decimal counting system as a frame of reference.

### **Decimal counting**

Decimal counting uses the ten symbols 0 through 9. Counting begins with the incremental substitution of the least significant digit (rightmost digit) which is often called the first digit. When the available symbols for this position are exhausted, the least significant digit is reset to 0, and the next digit of higher significance (one position to the left) is incremented (overflow), and incremental substitution of the low-order digit resumes. This method of reset and overflow is repeated for each digit of significance. Counting progresses as follows:

  >000, 001, 002, ... 007, 008, 009, (rightmost digit is reset to zero, and the digit to its left is incremented)
  010, 011, 012, ...
     ...
  090, 091, 092, ... 097, 098, 099, (rightmost two digits are reset to zeroes, and next digit is incremented)
  100, 101, 102, ...

### **Binary counting**

Binary counting follows the exact same procedure, and again the incremental substitution begins with the least significant digit, or bit (the rightmost one, also called the first bit), except that only the two symbols 0 and 1 are available. Thus, after a bit reaches 1 in binary, an increment resets it to 0 but also causes an increment of the next bit to the left:

>0000, 0001, (rightmost bit starts over, and next digit is incremented)
0010, 0011, (rightmost two bits start over, and next bit is incremented)
0100, 0101, 0110, 0111, (rightmost three bits start over, and the next bit is incremented)
1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111 ...

### **Binary Number Conversion**

#### **Binary to Decimal**

In the binary system, each bit represents an increasing power of 2, with the rightmost bit representing 2<sup>0</sup>, the next representing 2<sup>1</sup>, then 2<sup>2</sup>, and so on. The value of a binary number is the sum of the powers of 2 represented by each "1" bit. For example, the binary number 100101 is converted to decimal form as follows:

>(100101)<sub>2</sub> = (1 x 2<sup>5</sup> + 0 x 2<sup>4</sup> + 0 x 2<sup>3</sup> + 1 x 2<sup>2</sup> + 0 x 2<sup>1</sup> + 1 x 2<sup>0</sup>)<sub>10</sub>

>(100101)<sub>2</sub> = (1 × 32 + 0 × 16 + 0 × 8 + 1 × 4 + 0 × 2 + 1 × 1)<sub>10</sub>

>(100101)<sub>2</sub> = (3710)<sub>10</sub>

| Decimal number | Binary number |
|-------------|---------------|
| 0  | 0 |
| 1 | 1  |
| 2 | 10  |
| 3 | 11  |
| 4 | 100  |
| 5 | 101  |
| 6 | 110  |
| 7 | 111  |
| 8 | 1000  |
| 9 | 1001  |
| 10 | 1010  |
| 11 | 1011  |
| 12 | 1100  |
| 13 | 1101  |
| 14 | 1110  |
| 15 | 1111  |

#### **Binary to Decimal of Fraction**

So far we have only looked at whole numbers (integers), we need to understand how computers represent fractions.

You should have learned at Primary School how a decimal fraction works:

| $10^{1}$ | $10^{0}$ |  | $10^{-1}$ | $10^{-2}$ |
|------|:-----:|:-----:|:-----:|------:|
|10 | 1 |  | ${\frac {1}{10}}$ | ${\frac {1}{100}}$ |
|1 | 2 | . | 7 | 5 |

As you can see, the column headings have been extended to ${\displaystyle 10^{-1}={\frac {1}{10}}}$ and ${\displaystyle 10^{-2}={\frac {1}{100}}}$. We can do the same thing in binary with the column headings ${\displaystyle 2^{-1}={\frac {1}{2}}}$, ${\displaystyle 2^{-2}={\frac {1}{4}}}$, and so on. The number 12.75 in 8 bit binary with 4 bits after the binary point is therefore $8 + 4 + 0.5 + 0.25$:

### **Decimal to Binary Conversion**

An easy method of converting decimal to binary number equivalents is to write down the decimal number and to continually divide-by-2 (two) to give a result and a remainder of either a “1” or a “0” until the final result equals zero.

#### Steps to convert the decimal to binary equivalent

- Divide the decimal number by 2 and store remainders in array.
- Divide the quotient by 2.
- Repeat step 2 until we get the quotient equal to zero.
- Equivalent binary number would be reverse of all remainders of step 1.

>So for example.  Convert the decimal number $294_{10}$ into its binary number equivalent.

>Number is $294$

>divide by 2

>result	147	remainder	**0**  (LSB)

>divide by 2

>result	73	remainder	**1**

>divide by 2

>result	36	remainder	**1**

>divide by 2

>result	18	remainder	**0**

>divide by 2

>result	9	remainder	**0**

>divide by 2

>result	4	remainder	**1**

>divide by 2

>result	2	remainder	**0**

>divide by 2

>result	1	remainder	**0**

>divide by 2

>result	0	remainder	**1**  (MSB)

This divide-by-2 decimal to binary conversion technique gives the decimal number $294_{10}$ an equivalent of $100100110_2$ in binary, reading from right to left. This divide-by-2 method will also work for conversion to other number bases.

#### **Decimal to binary of Fraction**

You can convert the decimal number in to binary with the similar process done before but with an extra work for the fractional part of the given number. Repeat the process done before for the integer part of the given number and follow these extra step to convert the fraction part:

- Multiply the fractional decimal number by 2.
- Integral part of resultant decimal number will be first digit of fraction binary number.
- Repeat step 1 using only fractional part of decimal number and then step 2.
- And finally combine both integral and fractional part of binary number.

>Let's take an example for n = 4.47 <br>
Step 1: Conversion of 4 to binary

|  |  | |
|----------|--------|----------|
| $4/2$ | Remainder = 0 | Quotient = 2 |
| $2/2$ | Remainder = 0 | Quotient = 1 |
| $1/2$ | Remainder = 1 | Quotient = 0 |

>So equivalent binary of integral part of decimal is $100$. <br>
Step 2: Conversion of .47 to binary

|  |  | |
|----------|--------|----------|
| $0.47 * 2$ | $0.94$ | Integral part: $0$ |
| $0.94 * 2$ | $1.88$ | Integral part: $1$ |
| $0.88 * 2$ | $1.76$ | Integral part: $1$ |

>So equivalent binary of fractional part of decimal is $.011$. <br>
Step 3: Combined the result of step 1 and 2.<br>
Final answer can be written as:<br>
$100 + .011 = 100.011$
