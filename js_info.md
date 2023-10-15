### Arithmetic Operators:
```
+  Addition or unary plus
-  Subtraction or unary negation
*  Multiplication
/  Division
%  Modulus (Remainder)
++  Increment
--  Decrement
**  Exponentiation (ES6)
//  BigInt division (for BigInt data type in ES2020)
```


### Comparison Operators:
```
==  Equal to
=== Strict equal to
!=  Not equal to
!== Strict not equal to
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
?   Ternary (as part of ? :)
```

### Logical Operators:
```
&&  Logical AND
||  Logical OR
!   Logical NOT
??  Nullish Coalescing Operator (ES2020)
```


### Bitwise Operators:
```
&   AND
|   OR
^   XOR
~   NOT
<<  Left Shift
>>  Right Shift
>>> Zero fill right shift
```


### Assignment Operators:
```
=    Assignment
+=   Addition assignment
-=   Subtraction assignment
*=   Multiplication assignment
/=   Division assignment
%=   Remainder assignment
**=  Exponentiation assignment (ES6)
<<=  Left shift assignment
>>=  Right shift assignment
>>>= Zero fill right shift assignment
&=   Bitwise AND assignment
^=   Bitwise XOR assignment
|=   Bitwise OR assignment
```


### Other Operators:

*typeof* – Returns a string indicating the type of the unevaluated operand</br>
*instanceof* – Tests whether an object is an instance of a constructor</br>
*in* – Tests for the existence of a property in an object</br>
*delete* – Deletes an object's property</br>
*void* – Evaluates the given expression and then returns undefined</br>
*new* – Creates an instance of a user-defined object type or of one of the built-in object types</br>
*this* – Refers to a special property of an execution context</br>
... – Spread/rest operator (ES6)

#### The term ***dynamic typing*** means that a compiler or an interpreter assigns a type to all the variables at run-time. The type of a variable is decided based on its value.

#### The programs written using dynamic-typed languages are more flexible but will compile even if they contain errors.

### Example:
In the code below, c is inferred as a number type.

```let c = 10;```

We can change variable c type some where down the road.

```c = "I want to break free!"```