/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

interface User {
  name: string;
  password: string;
}

class UserService {
  constructor(public user?: User) {}

  /* We know when isUserLoggedIn is true, the "user" property should be of type User,
     not User | undefined. So, we can use "this is" type predicate to tell TypeScript
     that this functions is a boolean function which determines whether the
     current object (this) has user property set or not. First this is the predicate and
     the second this refers to the object itself. We could also write "this is UserService..."
     as well.
  */
  isUserLoggedIn(): this is this & { user: User } {
    if (this.user) {
      /* Whenever isUserLoggedIn returns true, Typescript will infer the type of the
             user property as "User", not "User | undefined" because that's what the predicate
             defined in the function signature says.
          */
      return true;
    } else {
      return false;
    }
  }
}

const u1: User = { name: "Bob", password: "123" };

const uService = new UserService(u1);

if (uService.isUserLoggedIn()) {
  // Here, userFromService is of type "User"
  const userFromService = uService.user;
} else {
  // Here, userFromService is of type "User | undefined"
  const userFromService = uService.user;
}
