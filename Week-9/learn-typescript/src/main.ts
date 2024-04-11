// types for variables
const a: number = 1;
const b: number = 3;
const user: string = "Ram";
console.log(a);
console.log(user);

// types for functions
function greet(name: string) {
    console.log("Hello " + name);
}
greet("Ram");

// types for functions with return type
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(1, 2));

// types for function with argument as function
function after1s(fun: () => void): void {
    setTimeout(fun, 1000);
}
after1s(() => console.log("Inside after1s function"));

// ### Interface
interface UserInterface {
    name: string,
    lastName: string,
    age: number
}

const user1: UserInterface = {
    name: "user1",
    lastName: "lastname1",
    age: 45,
};
function isLegal(user: UserInterface): boolean {
    return user.age >= 18;
}
console.log(isLegal(user1));

// ### types
type NumorString = number | string;
type A = { name: string };
type B = { age: number };
type UserType = A & B;
function numandstring(numwithstring: NumorString) {
    console.log(numwithstring);
}
function greetUnion(user: UserType) {
    console.log("Hello " + user.name);
}
numandstring(2);
const user2: UserType = { name: "sadsa", age: 5 };
greetUnion(user2);

// ### Enums
enum Directions {
    up = "1000",
    down="2",
    left="443",
    right="232",
}
function printDirection(dir: Directions) {
    if(dir==Directions.left) console.log("Left")
    console.log(dir);
}
printDirection(Directions.left);