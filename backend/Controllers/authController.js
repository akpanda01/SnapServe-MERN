import User from '../models/UserSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Simple token generator
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
};

export const register = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    // Basic validation
    if (!email || !password || !name || !phone) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide all required fields' 
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'User already exists' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      phone,
      photo: req.body.photo || 'default.jpg'
    });

    // Generate token
    const token = generateToken(user._id);

    // Return response without password
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Registration failed. Please try again.' 
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide email and password' 
      });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Return response without password
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Login failed. Please try again.' 
    });
  }
};