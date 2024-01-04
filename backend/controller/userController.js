import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid User or password");
  }
  res.send("Auth user");
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc    Get user profile
// @route   POST /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
});

// @desc    Get users
// @route   Get /api/users
// @access  Private/admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

// @desc    Get user by ID
// @route   Get /api/users/:id
// @access  Private/admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get Users by ID");
});

// @desc    Delete users
// @route   POST /api/users/profile
// @access  Private/admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete Users");
});

// @desc    Update users
// @route   PUT /api/users/:id
// @access  Private/admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("Update Users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
