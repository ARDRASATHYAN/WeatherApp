const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation
const User = require('../models/UserModel');

class AuthService {
  async signup(username, email, phone, password) {
    // Hash the password
    console.log('hello',username);
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt round

    // Create a new user document
    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword // Save the hashed password
    });

    // Save the user document to the database
    await newUser.save();

    return newUser;
  }

  async login(email, password) {
    // Find the user by email in the database
    console.log("hello",email)
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' }); // Change 'your-secret-key' with your actual secret key

    return token;
  }
}

module.exports = AuthService;