function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    if (length <= 0) {
      throw new Error('Password length must be greater than 0.');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  }
  
  const password = generateRandomPassword(8);
  console.log(password);
  