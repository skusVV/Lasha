export const validateForm = (
  personPhone,
  personPassword,
  personRepeatPassword
) => {
  const messages = [];

  if (personPhone.length !== 9) {
    messages.push("Provide a valid number");
  }

  if (personPassword.length < 8) {
    messages.push("password should be 8 characters or more");
  }
  if (personPassword !== personRepeatPassword) {
    messages.push("Passwords don't match");
  }

  return messages;
};
