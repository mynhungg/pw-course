# Conditional

```csharp
if (condition) {//code}:  executes a block of code only if a given condition is true

    let age = 20;
    if (age >= 18) {
      console.log("You are an adult.");
    }
```

- else if: specify a **new condition** if the first is `false`.

```csharp
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

# Loops

## For loops

```csharp
for (init; condition; afterthough){//code}: iterating a predefined number of times
```

```csharp
Ex:
  for (let i = 0; i < 5; i++) {
        console.log("Iteration:", i);
    }
```

- **For loops in object:** using const to declare → don’t want to change the object value in for loops.
    - use `object[property]` , used when the property name is **stored in a variable**.
    - not use `object.property` , used when know the property name in advance.
    
    ```csharp
    const object = { a: 1, b: 2, c: 3 };
    
    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
    
    // Expected output:
    // "a: 1"
    // "b: 2"
    // "c: 3"
    ```
    
- **For…of:** iterate over the values of an iterable object (e.g., Arrays, Strings, Maps, Sets, NodeLists).
    
    ```csharp
    const array = ["a", "b", "c"];
    
    for (const element of array) {
      console.log(element);
    }
    
    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
    ```
    
## Break and Continue

- **Break:**  Immediately exits the nearest enclosing loop
    
    ```csharp
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("Breaking the loop at", i);
            break;
        }
        console.log(i);
    }
    ```
    
- **Continue:**  Skips the rest of the current loop iteration and moves to the next iteration.
    
    ```csharp
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // Skips even numbers
        }
        console.log(i);
    }
    ```