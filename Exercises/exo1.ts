/*
Welcome to:

    ................................................................
    .                                                              .
    .     ####################    ####################      E      .
    .     ####################    ####################      X      .
    .             ####            ####                      E      .
    .             ####            ####                      R      .
    .             ####            ####################      C      .
    .             ####                            ####      I      .
    .             ####                            ####      S      .
    .             ####            ####################      E      .
    .             ####            ####################      S      .
    .                                                              .
    ................................................................

    The goal: Let everyone play with many different TypeScript features
    and get an overview of TypeScript capabilities and principles.

    Things to cover:

        1. Basic typing.
        2. Refining types.
        3. Union types.
        4. Merged types.
        5. Generics.
        6. Type declarations.
        7. Module augmentation.
        8. Advanced type mapping.

    Rules and principles:

        1. Avoid using "any" type at all costs.
        2. Difficulty quickly grows one exercise after another.
        3. Enjoy.
Intro:

    We are going to create a small community of users. 
    For performance reasons, we decided to store 
    all users directly in the code.

    In this way, we can offer our developers more opportunities 
    for interaction with users. At least with user data.

    This would be the basis of our exercises.

Exercise 1:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = unknown;

export const users: unknown[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

/* In case if you are stuck:
help : https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
*/
