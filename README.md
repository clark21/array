#Array

DESCRIPTION

[![Build Status](https://api.travis-ci.org/edenjs/array.png)](https://travis-ci.org/edenjs/array)

## General

### Installation

```
npm install eden-array
```

### Usage

```
var array = require('eden-array');
```

## Methods

  * [clone](#clone)

  * [combine](#combine)

  * [concat](#concat)

  * [each](#each)

  * [implode](#implode)

  * [isEmpty](#isEmpty)

  * [keys](#keys)

  * [lastIndexOf](#lastIndexOf)

  * [map](#map)

  * [natsort](#natsort)

  * [pop](#pop)

  * [push](#push)

  * [reverse](#reverse)

  * [splice](#splice)

  * [sort](#sort)

  * [size](#size)

  * [toQuery](#toQuery)

  * [toString](#toString)

  * [unshift](#unshift)

  * [values](#values)

---

<a name="clone"></a>

### clone

```
 array clone(Array);
```

Clones an array

#### Parameters

  1. array

#### Returns

 array

#### Example

##### Code

```
var list = [2, 3, 4, 5];

array().clone(list);
```

##### Outputs

```
'2, 3, 4, 5'
```

---

<a name="combine"></a>

### combine

```
 object combine(Array, Array);
```

Combines a list of keys and values into an object

#### Parameters

  1. array

  2. array

#### Returns

 object

#### Example

##### Code

``` 
var keys = ['key2', 'key3', 'key1', 'key5'], values = [1, 2, 3, 4];

array().combine(keys, values);
```

##### Outputs

```
key2, 1
key3, 2
key1, 3
key5, 4
```

---

<a name="concat"></a>

### concat

```
 this concat(Array[,array..]);
```

Concats arrays into one

#### Parameters

  1. array[,array..]

#### Returns

 this

#### Example

##### Code

```
var list = [1,2,3,4], argument = [5, 6];

array().concat(list, argument);
```

##### Outputs

```
'1,2,3,4,5,6'
```

---

<a name="each"></a>

### each

```
 bool each(Array, Function);
```

Custom for each loop that handles scopes and extra arguments

#### Parameters

  1. array

  2. function

#### Returns

 bool

#### Example

##### Code

```
var list = [3, 4, 5, 6]

array().each(list.hasOwnProperty(key));
```

##### Outputs

```
true
```

---

<a name="implode"></a>

### implode

```
 string implode(Array, Mixed, Boolis.has, Array, String);
```

Returns true if the array has given value

#### Parameters

  1. array

  2. mixed

  3. boolis.has - = function(data, value) {Argument Testingis.argument()est(1, 'array')est(1, 'mixed');turn data.indexOf(value) !== -1;*Join array elements with a string

  4. array

  5. string

#### Returns

 string

#### Example

##### Code

```
var list = ['z','x','c'], delimeter = ('-')

array().implode(list, delimeter);
```

##### Outputs

```
'z-x-c'
```

---

<a name="isEmpty"></a>

### isEmpty

```
 bool isEmpty(Array);
```

Check if data is array @param array @return bool 

#### Parameters

  1. array

#### Returns

 bool

#### Example

##### Code

```
var list = [3, 4, 5, 6]

array().isEmpty(list);
```

##### Outputs

```
false
```

---

<a name="keys"></a>

### keys

```
 array keys(Array);
```

Returns a list of keys

#### Parameters

  1. array

#### Returns

 array

#### Example

##### Code

```
var list = [3, 4, 5, 6];

array().keys(list);
```

##### Outputs

```
4
```

---

<a name="lastIndexOf"></a>

### lastIndexOf

```
 number lastIndexOf(Array, Mixed);
```

Returns the last index of where in the array the value is found

#### Parameters

  1. array

  2. mixed

#### Returns

 number

#### Example

##### Code

```
array().lastIndexOf();
```

##### Outputs

```
RESULTS
```

---

<a name="map"></a>

### map

```
 array map(Array, Function, [mixed[,mixed..]]);
```

Custom map loop that handles scopes and extra arguments

#### Parameters

  1. array

  2. function

  3. [mixed[,mixed..]]

#### Returns

 array

#### Example

##### Code

``` 
var list = [3, 4, 5, 6];

array().map(list, function(key, value));
return value + 1;
```

##### Outputs

```
list = [4, 5, 6, 7];

```

---

<a name="natsort"></a>

### natsort

```
 object natsort(Object);
```

Sorts array by natural sort

#### Parameters

  1. object

#### Returns

 object

#### Example

##### Code

```
var list = ['a', 'b', 'c'];

array().natsort(list);
```

##### Outputs

```
'a,b,c'
```

---

<a name="pop"></a>

### pop

```
 mixed pop(Array);
```

Pops array from the stack

#### Parameters

  1. array

#### Returns

 mixed

#### Example

##### Code

```
var list = [1, 2, 3, 4];

array().pop(list);
```

##### Outputs

```
4
```

---

<a name="push"></a>

### push

```
 array push(Array, Mixed[,mixed..]);
```

Pushes array into the stack

#### Parameters

  1. array

  2. mixed[,mixed..]

#### Returns

 array

#### Example

##### Code

```
var list = [1, 2, 3, 4], argument = [5, 6]

array().push(list, argument);
```

##### Outputs

```
'1,2,3,4,5,6'
```

---

<a name="reverse"></a>

### reverse

```
 array reverse(Array);
```

Reverses the array

#### Parameters

  1. array

#### Returns

 array

#### Example

##### Code

```
var list = ['a','b','c'];

array().reverse(list);
```

##### Outputs

```
'c,b,a'
```

---

<a name="splice"></a>

### splice

```
 array splice(Array, Num, Num, Mixed[,mixed..]);
```

Picks from chosen slice and rconturns a new array @param array @param num @param [num] @return array  is.slice = function(data) { Argument Testing is.argument() est(1, 'array') est(2, 'int') est(3, 'int', 'undefined');  r args = Array.prototype.slice.apply(arguments); gs.shift(); turn data.slice.apply(data, args);   * Adds/removes items to/from an array, and returns the removed item(s)

#### Parameters

  1. array

  2. num

  3. num

  4. mixed[,mixed..]

#### Returns

 array

#### Example

##### Code

```
var list = [1,2,3,4], argument = (2, 3)

array().splice(list, argument);
```

##### Outputs

```
4
```

---

<a name="sort"></a>

### sort

```
 array sort(Array, [function]);
```

Sorts an array

#### Parameters

  1. array

  2. [function]

#### Returns

 array

#### Example

##### Code

```
var list = ['c','b','a'];

array().sort(list);
```

##### Outputs

```
'a,b,c'
```

---

<a name="size"></a>

### size

```
 number size(Array);
```

Returns the array size

#### Parameters

  1. array

#### Returns

 number

#### Example

##### Code

```
var list = [2, 3, 4, 5];

array().size(list);
```

##### Outputs

```
4
```

---

<a name="toQuery"></a>

### toQuery

```
 string toQuery(String, [string]);
```

Converts array to query string

#### Parameters

  1. string

  2. [string]

#### Returns

 string

#### Example

##### Code

```
var list = [2,3,4,5];

array().toQuery(list);
```

##### Outputs

```
'0=2&1=3&2=4&3=5'
```

---

<a name="toString"></a>

### toString

```
 string toString();
```

Converts array to string

#### Parameters

#### Returns

 string

#### Example

##### Code

```
var list = [2,3,4,5];

array().toString(list);
```

##### Outputs

```
'[2,3,4,5]'
```

---

<a name="unshift"></a>

### unshift

```
 array unshift(Array, Mixed[,mixed..]);
```

Unshifts array into the stack

#### Parameters

  1. array

  2. mixed[,mixed..]

#### Returns

 array

#### Example

##### Code

```
var list = [1, 2, 3, 4, 5];
newList = array().unshift(list, 7, 6);
newList.shift();
```

##### Outputs

```
6
```

---

<a name="values"></a>

### values

```
 array values(Array);
```

Returns a list of values

#### Parameters

  1. array

#### Returns

 array

#### Example

##### Code

```
var list = [2, 3, 4, 5]

array().values(list);
```

##### Outputs

```
2, 3, 4, 5
```
