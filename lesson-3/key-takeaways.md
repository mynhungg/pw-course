# Git
## Git undo
- **Change commit message**:
    - i: insert
    - esc: quit
    - :wq: write and quit
    
    ```csharp
    git commit --amend
    ```
    

- **Move file from staging to working directory:**
    
    ```csharp
    git restore --staged <file>
    ```
    
- **Move commit from repo to working directory**
    ```csharp
    git reset HEAD~<number of commit>
    ```
## Git Branch

- **Definition: *a separate workspace where can make changes*** and try new ideas without affecting the main project.
- **git branch <branch_name>**: create a branch
- **git checkout <branch_name>**: change to branch
    - **git checkout -b <branch_name>**: create + checkout to created branch
- **git checkout <revision>:**  check out a prior commit in Git
- **Note:**
    - Before creating a branch, check which branch you're currently on. Because  when you create a new branch in Git, it **copies everything from your current branch,** the branch you’re currently on. So if you’re on the *wrong* branch, your new branch will include the *wrong* code base. ⇒ **Checkout main before create a new branch**
    - Create a new branch before copy from internet

![image.png](https://docs.wavemaker.com/learn/assets/images/branching-model-121bd320dd2f5972a5f6ce2fb19a3f4e.png)

## Gitignore

- **Definition:** Git ignore file/folder
- **ignore file:** <file_name>
- **ignore folder:** <folder-name>/

# Javascript basic
## Convention

- **kebab-case:** file name
- **camelCase:** variable name
- **PascalCase:** class name

## Console.log

```csharp
console.log(‘Toi la Nga’);

console.log(“Toi la Phong”);

console.log(${variable_name});
let name = “Nga”;

console.log(`Toi la ${name}`);
console.log(“Toi ten la” + name + “”)
```

## Object

- **Definition:** a variable that can hold many variables. Objects are collections of **key-value pairs**, where each key (known as **property names**) has a value.
    
    ```csharp
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    ```
    
- **Access object properties**
    
    ```csharp
    #1
    objectName.propertyName
    #2
    objectName["propertyName"]
    ```
    
- **Add property in object:** using . or []
    
    ```csharp
    let bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
    };
    **bike.color = “Blue”;
    bike[“price new”] = 100;**
    console.log(bike);
    {make: 'Yamaha', model: 'YZF-R3', **color**: 'Blue', **‘price new’** : 100}
    ```
    
- **Delete property in object:** using delete method
    
    ```csharp
    let employee = {
    name: 'Le Van C',
    age: 30,
    department: 'HR'
    };
    **delete employee.age;**
    console.log(employee);
    
    //result
    {name: 'Le Van C', department: 'HR'}
    ```
    
- **For loops in object:** using const to declare → don’t want to change the object value in for loops.
    
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
    
- **Note:**
    - Key can use “” or without this, use “” when key: contain space, special character, using json file
    - Can change value in const object, cannot assign a const object to another object
        
        ```csharp
        const a = 10;
        a = 15; // error
        
        const student = {“name”: “alex”, “age”: 20}
        student.name = “Nagi”; // accepted
        ```
        

## Array

- **Definition:** is an object type designed for storing data collections.
- Key characteristics of JavaScript arrays are:
    - **Elements**: An array is a list of values, known as elements.
    - **Ordered**: Array elements are ordered based on their index.
    - **Zero indexed**: The first element is at index 0, the second at index 1, and so on.
    - **Dynamic size**: Arrays can grow or shrink as elements are added or removed.
    - **Heterogeneous**: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
- **Create:**
    
    ```csharp
    const cars = ["Saab", "Volvo", "BMW"];
    ```
    
- **Access:**
    
    ```csharp
    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];
    ```
    
- **forEach():** call a function for each element in an array
    
    Syntax: `array.forEach(function(currentValue, index, arr), thisValue)`
    
    **Parameters**
    
    | function() | Required. A function to run for each array element. |
    | currentValue | Required. The value of the current element. |
    | index | Optional. The index of the current element. |
    | arr | Optional. The array of the current element. |
    | thisValue | Optional. Default `undefined`. A value passed to the function as its `this` value. |

    
    ```csharp
    let sum = 0;
    const numbers = [65, 44, 12, 4];
    numbers.forEach(myFunction);
    
    function myFunction(item) {
      sum += item;
    }
    ```
    
- **filter():** creates a new array filled with elements that pass a test provided by a function.
    
    ```csharp
    const ages = [32, 33, 16, 40];
    
    const result = ages.filter(checkAdult);
    
    function checkAdult(age) {
    
    return age >= 18;
    
    }
    ```
    
- **every():** Checks if every element in an array pass a test
    
    ```csharp
    // Create an Array
    const ages = [32, 33, 16, 40];
    
    // Create a Test Function
    function checkAge(age) {
      return age > 18;
    }
    
    // Are all ages over 18?
    ages.every(checkAge);
    ```
    
- **Array of Object vs Object of array**
    - Array of Object: multiple similar items, and each item has the same set of properties.
    
    ```csharp
    const students = [
      { name: "Nhung", age: 23 },
      { name: "Minh", age: 22 },
      { name: "Ha", age: 24 }
    ];
    ```
    
    - Object of array: group data by category or property, rather than by individual item.
    
    ```csharp
    const classroom = {
      names: ["Nhung", "Minh", "Ha"],
      ages: [23, 22, 24]
    };
    ```
    
- **push:** add element into array
    
    ```csharp
    const arr = [1,2];
    arr.push(3);
    console.log(arr);
    // Output
    [1, 2, 3]
    ```
    
- **Note:**  Declare arrays with the **const** keyword ⇒ can change contents, not reassign

## Function

- **Definition:**  Block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).
- **Create**:
    
    ```csharp
    function myFunction(a, b) {
      return a * b;
    }
    ```
    
- **Function expression:** Create a function and assign it to a variable.
    
    ```csharp
    // Traditional function expression
    const greet = function() {
      console.log("Hello!");
    };
    
    // Arrow function (same with traditional but shorter)
    const greet = (name) => {
      return "Hello " + name;
    };
    const multiply = (a, b) => a * b;
    
    greet(); // Output: Hello!
    ```