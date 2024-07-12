/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

interface User {
  name: string;
  password: string;
}

interface AdminUser extends User {
  role: "Admin";
}

interface RegularUser extends User {
  role: "Member";
}

/* The "asserts" keyword makes this function an assertion functon. Note that it's using
   a type predicate (the "is" keyword). Assertion functions have to be declared using
   the function keyword.
*/
function isAdminUser(user: AdminUser | RegularUser): asserts user is AdminUser {
  if (user.role !== "Admin") {
    throw new Error("The given user is not an admins user.");
  }
}

// Let's test the assertion function
const foo = (user: AdminUser | RegularUser) => {
  isAdminUser(user);

  /* Note that AFTER calling the assertion function, typescript automatically
     narrows the type of user down to AdminUser.
  */
  type userType = typeof user;
};
