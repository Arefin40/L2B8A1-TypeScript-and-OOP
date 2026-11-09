# Type vs Interface in TypeScript: Key Differences & When to Use

TypeScript provides two common ways to describe data structures: type aliases and interfaces. Both can define object shapes and help the compiler check whether values follow a required structure. However, they are not interchangeable in every situation.

## 1. Defining Object Structures

Both can describe the same object shape.

**Using Interface:**

```typescript
interface User {
  id: number;
  name: string;
}

const firstUser: User = {
  id: 1,
  name: "Shahriar",
};
```

**Using Type:**

```typescript
type UserAlias = {
  id: number;
  name: string;
};

const secondUser: UserAlias = {
  id: 2,
  name: "Arefin",
};
```

## 2. Union, Primitive, and Tuple Types

A type alias can represent more than object structures. It can define primitive aliases, unions, and tuples. An interface cannot directly represent these forms.

```typescript
type ID = string | number;

type Status = "pending" | "success" | "failed";

type Coordinates = [number, number];

const userId: ID = 101;
const currentStatus: Status = "success";
const location: Coordinates = [23.81, 90.41];
```

## 3. Extending Existing Structures

Both approaches support combining object structures. Interfaces use `extends`, while type aliases commonly use the intersection operator (`&`).

**Using Interface:**

```typescript
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Shahriar",
  permissions: ["read", "write"],
};
```

**Using Type:**

```typescript
type UserRecord = {
  id: number;
  name: string;
};

type AdminRecord = UserRecord & {
  permissions: string[];
};

const adminRecord: AdminRecord = {
  id: 2,
  name: "Arefin",
  permissions: ["read", "write"],
};
```

## 4. Declaration Merging

Interfaces support declaration merging. When an interface with the same name is declared more than once, TypeScript combines their properties into a single interface. Type aliases do not support this feature.

```typescript
interface User {
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  name: "Shahriar",
  email: "shahriar@example.com",
};
```

Here, TypeScript combines both `User` declarations. As a result, the object must contain both `name` and `email` properties.

## 5. Function Types

Both can describe function signatures. Choose whichever style fits your codebase.

```typescript
type Add = (a: number, b: number) => number;

interface Multiply {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;

const multiply: Multiply = (a, b) => a * b;
```

## When Should You Use Each?

Use `interface` for object contracts, class structures, and structures that may need extension or declaration merging. Use `type` for unions, primitives, tuples, intersections, and more complex type expressions.

## Conclusion

There is no universal rule that requires choosing one over the other. Both are useful, and the best choice depends on the situation. Remember that neither provides runtime validation because TypeScript removes type information during compilation. Validate external data separately when necessary.