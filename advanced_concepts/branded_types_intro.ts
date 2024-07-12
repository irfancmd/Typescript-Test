/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* In ES6 a new primitive was added called "Symbols" that are used to
   create unique object keys. Two symbols are guaranteed to be unique even
   if they have the same name. They can be used for encapsulation and
   information hiding. We can leverage the uniqueness of symbols in Typescript
   to create "branded types" that will force any object, for instance a string
   literal to fall under a certain pre-defined type instread of just "string".
   That way we can create types for necessary business terminologies that will
   help us write safe code and prevent typos.
*/

/* At first, we're creating a symbol "brand". This will be used as key for
   our composite type.
*/
declare const brand: unique symbol;

// Then we're creating a generic type that creates a brand type using that symbol
type Brand<T, TBrand> = T & { [brand]: TBrand };

/* Now, we'll create a AdminUserName brand type. Here, brand="Admin" will be a hidden
   property of this brand type that will help Typescript to idenfity objects of type
   type "AdminUserName".
*/
type AdminUserName = Brand<string, "Admin">;

const printAdminUserName = (userName: AdminUserName) => {
  console.log(userName);
};

/* Now, if we want to pass any object to printAdminUserName, we have to explicitly
   tell typescript that we're indeed passing an AdminUserName object, not just any
   random object. Thus we're creating a robust codebase.
*/
printAdminUserName("primary_admin" as AdminUserName);
// printAdminUserName("primary_admin"); // Will cause error
printAdminUserName("secondary_admin" as AdminUserName);
