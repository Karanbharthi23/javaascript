const mongoose = require('mongoose');

// Validation schemas for registration
const registerValidation = async (userData) => {
    // Name validation
    if (!userData.name || userData.name.length < 3) {
        throw new Error('Name must be at least 3 characters long');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        throw new Error('Please provide a valid email address');
    }

    // Password validation
    if (!userData.password || userData.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    // Password strength check
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(userData.password)) {
        throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    }

    // Check if email already exists
    const User = mongoose.model('User');
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error('Email already exists');
    }

    return true;
};

// Validation schema for login
const loginValidation = async (loginData) => {
    // Email validation
    if (!loginData.email) {
        throw new Error('Email is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
        throw new Error('Please provide a valid email address');
    }

    // Password validation
    if (!loginData.password) {
        throw new Error('Password is required');
    }

    // Check if user exists
    const User = mongoose.model('User');
    const user = await User.findOne({ email: loginData.email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    return true;
};

// Password reset validation
const resetPasswordValidation = (passwordData) => {
    if (!passwordData.password || passwordData.password.length < 8) {
        throw new Error('New password must be at least 8 characters long');
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(passwordData.password)) {
        throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    }

    if (passwordData.password !== passwordData.confirmPassword) {
        throw new Error('Passwords do not match');
    }

    return true;
};

// Helper function to validate ObjectId
const validateObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
    registerValidation,
    loginValidation,
    resetPasswordValidation,
    validateObjectId
};
