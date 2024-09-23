// challenge.ts
const prettyPrintWilder = (users: Array<User>) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
interface User {
        name: string;
        age: number;
}

  const wilders: Array<User> = [];
  const user1: User = { name: "Pierre", age: 23 };
  const user2: User = { name: "Paul", age: 34 };
  const user3: User = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);