const express = require("express");
const router = express.Router();
const Profile = require("../Model/Profile");
const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");

const multer = require("multer");

