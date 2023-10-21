const VALUE1 = 15;
let value2 = Math.floor(Math.random()*100);

let result = VALUE1 + value2/5 + 17; 

console.log(result);

```
Приоритет операторов в JavaScript определяет порядок, в котором операции выполняются в выражении. Например, умножение имеет более высокий приоритет, чем сложение, поэтому в выражении 1 + 2 * 3 сначала выполняется умножение, а потом сложение.

Основные операторы в JavaScript, начиная с наивысшего приоритета:

Круглые скобки ( ... ): Группировка.
Обращение к членам . []: Например, obj.property или array[index].
Новые вызовы и создание new (без аргументов), new (с аргументами), (): Например, new Date().
Унарные операторы: !, ~, +, -, ++, --, typeof, void, delete.
Арифметические операции: ** (возведение в степень), *, /, % (умножение, деление, остаток от деления), +, - (сложение, вычитание).
Смещение (shift): <<, >>, >>>.
Отношение: <, <=, >, >=, in, instanceof.
Равенство: ==, !=, ===, !==.
Битовые операции: & (AND), ^ (XOR), | (OR).
Логические операции: && (логическое И), || (логическое ИЛИ).
Условный (тернарный) оператор: ? :.
Присваивание: =, +=, -=, *=, %=, и так далее.
Операторы запятой: ,.
```