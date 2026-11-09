# Type Narrowing in TypeScript: A Practical Guide

A TypeScript variable can hold multiple types. Before using an operation that is valid for only one type, TypeScript must know which type the value has. This process is called type narrowing.

## What Is Type Narrowing?

Type narrowing reduces a variable's possible types through conditions or checks. For example, a `string | number` value must be checked before using a string-only method.

## Common Type Narrowing Techniques

### 1. typeof Type Guard

The `typeof` operator checks primitive types at runtime. TypeScript uses the result to narrow the value inside each condition.

```typescript
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }
}
```

Common results include `"string"`, `"number"`, `"boolean"`, and `"undefined"`. Note that `typeof null` returns `"object"` in JavaScript.

### 2. in Operator Narrowing

The `in` operator checks whether an object contains a particular property. It helps distinguish object types with different properties.

```typescript
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  permissions: string[];
}

function displayInfo(person: User | Admin) {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.email);
  }
}
```

TypeScript uses this check to narrow the object to the matching type.

### 3. instanceof Narrowing

The `instanceof` operator checks whether an object belongs to a class or its constructor's prototype chain. It is useful for class instances and built-in objects such as `Date`.

```typescript
function processValue(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}
```

If the check is true, TypeScript treats the value as that class; otherwise, it follows the other branch.

## Conclusion and Final Thoughts

Type narrowing makes TypeScript code safer by ensuring operations match a value's type.

Use `typeof` for primitive values, `in` for checking object properties, and `instanceof` for identifying class instances. Choose the technique that fits the data. Type narrowing is not only about satisfying the compiler; it helps code handle different values safely at runtime.