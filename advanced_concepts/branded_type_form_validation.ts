/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We can use branding types as a method for form validation. This
   can be useful for security critical applications.
*/

// We're creating a branding type as usual
declare const brand: unique symbol;

type Brand<T, TBrand> = T & { [brand]: TBrand };

// Now, we'll create an email and password branding type
type Email = Brand<string, "Email">;
type Password = Brand<string, "Password">;

/* Now, we'll create a form validator function that will return
   take normal string types as input, verify them and if verified successfully,
   it will output them as the Email and Password brand type.
*/
const validateForm = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): { email: Email; password: Password } => {
  // Do necessary validation

  // Mark the data to be of verified branded types
  const verifiedEmail = email as Email;
  const verifiedPassword = password as Password;

  return {
    email: verifiedEmail,
    password: verifiedPassword,
  };
};

/* Note that email an password is returned as a branded type. We can use this as
   an indication that these fields are indeed verified.
*/
const validationResult = validateForm({
  email: "bob@gmail.com",
  password: "123",
});
