// All validation logic will go here.
export const checkValidData = (email, password, name, isSignIn) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters with uppercase, lowercase, and number";
    if (!name && !isSignIn) return "Name is required";

    return null;
}