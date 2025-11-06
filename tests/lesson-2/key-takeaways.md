# Version control system
- System manage all version:
    - Local
    - Centralize
    - Distributed
# Git
## Overview

- Git was written by Linus Tovalds who create Linux
- Git was ideal from get
- Purpose: Manage versions and work with many people
- The most popular VCS

## Git vs Github

- Git: Software, on local, comamndline tool, tool manage version
- Github: web service, host on website, UI tool, upload Git repo

## Git State

![Git Stage](https://scaler.com/topics/images/stages-in-git.webp)

## Git Command

- **git init**: Initialize empty Git repo
- **git add**
    - **git add <file_name>:** add one file to git repo
        
        *add many file:* **git add <file_name1> <file_name2>**
        
    - **git add .**: add all file to git repo
- **git config**:
    - use --global to config for all repo
        
        git config --global user.name “user”
        git config --global user.email “email”
        
    - use to config on 1 repo ⇒ When work in outsourcing or specific project require
        
        git config user.name “user”
        git config user.email “email”
        
- **git status:** check status file
    - green file: file on staging, already added using *git add*
    - red file: file on working directory, haven’t added
- **git commit:** Save point in project, create a version
    - `git commit -m "message"` - Commit staged changes with a message
    - `git commit -a -m "message"` - Commit all tracked changes (skip staging, not work for untracked file)
    - **git log:** check commit history, git log will show:
        - commit id (branch)
        - author
        - date
        - message

## Git workflow

- Not using global config: init → config → add → commit → push

- Using global config: init → add → commit → push

## Git convention

### E101 Course

In class, use the following convention: <type>: <short_description>

Where:

- type: commit type
    - chore: minor fixes, typos, delete unused files
    - feat: add new feature or new test case
    - fix: fix previous test errors
- short_description: brief description (maximum 50 characters), written in English or Vietnamese without diacritics
- Examples:
    - "chore: remove unused file"
    - "feat: add code for exercises 2"

# Javascript basic
## Overview

- How to run:
    - Browser engine support
    - Using Node JS run-time → don’t need browser engine

## Variable

### Declaration

- Var: old Javascript version
    - Local variable
    - Can be re-declared, declared multiple times
    - Can be assigned different values
    - Function scope
    - Global leak
- Let:
    - Global variable
    - Cannot be re-declared
    - Can be assigned different values
    - Block scope (limited on {} like if, for, function,..)
    - Not global leak
    - ⇒ ***should use let***
- Const:
    - Declares a value that cannot be changed
    - Constant
    - Cannot be assigned different values

### Data type

- String
- Number: float
- Bigint: integer unlimited, used for big integer like ID, blockchain, hashed,…
- Boolean
- Undefined
- Null
- Symbol
- Object

### Comparison

- Equality comparison
    - == compares value
    - === compares data type & value
    - != compares value
    - !== compares data type & value

### Operator

- i++
- i--
- Ternary operator: condition ? trueExpression : falseExpression

    Ex: let canVote = (age >= 18) ? “Yes” : “No”;

    

### Conditional


if (condition) {//code}:  executes a block of code only if a given condition is true

    let age = 20;
    if (age >= 18) {
      console.log("You are an adult.");
    }


### Loops

**For loops**

for (init; condition; afterthough){//code}: iterating a predefined number of times


Ex:
  for (let i = 0; i < 5; i++) {
        console.log("Iteration:", i);
    }

# Knowledge
- Website for understand git workflow and command: [Learn git branching](https://learngitbranching.js.org/)