const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Define the Student schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    dob: Date,
    college: String,
    department: String,
    gender: String,  // Ensure gender is included here
    username: { type: String, unique: true },
    password: String, // The password will be hashed
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

// Define the Admin schema
const adminSchema = new mongoose.Schema({
    name: String,
    position: String,
    email: String,
    phone: String,
    username: { type: String, unique: true },
    password: String, // The password will be hashed
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Define the Announcement schema
const announcementSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
});

// Create the Announcement model
const Announcement = mongoose.model('Announcement', announcementSchema);

// Define the Company schema
const companySchema = new mongoose.Schema({
    name: String,
    email: String,
    company_add: String,
    phone: String,
    username: { type: String, unique: true },
    password: String, // The password will be hashed
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

// Create an announcement (Admin only)
app.post('/announcements', async (req, res) => {
    try {
        const { title, content } = req.body;
        const newAnnouncement = new Announcement({ title, content });
        await newAnnouncement.save();
        res.status(201).json({ message: 'Announcement created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating announcement', error });
    }
});

// Get all announcements for students and admins
app.get('/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching announcements', error });
    }
});

// DELETE an announcement by ID (Admin only)
app.delete('/announcements/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

        if (!deletedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }

        res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting announcement', error });
    }
});

// Student Registration Route
app.post('/register', async (req, res) => {
    try {
        const { name, email, phone, dob, college, department, gender, username, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new Student({
            name,
            email,
            phone,
            dob,
            college,
            department,
            gender,  // Make sure gender is included in the body
            username,
            password: hashedPassword, // Save the hashed password
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registration successful' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username already exists' });
        } else {
            res.status(500).json({ message: 'Error during registration', error });
        }
    }
});

// Student Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Student.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: {
                name: user.name,
                department: user.department,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
});

// Admin Registration Route
app.post('/admin/register', async (req, res) => {
    try {
        const { name, position, email, phone, username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            name,
            position,
            email,
            phone,
            username,
            password: hashedPassword,
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registration successful' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username already exists' });
        } else {
            res.status(500).json({ message: 'Error during registration', error });
        }
    }
});

// Admin Login Route
app.post('/admin/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({
            message: 'Admin login successful',
            admin: {
                name: admin.name,
                position: admin.position,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
});

// Admin Profile Route
app.get('/admin/profile', async (req, res) => {
    try {
        const { username } = req.query; // Expect username in query parameters
        
        // Find the admin by username
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Return admin profile details (excluding password)
        res.status(200).json({
            username: admin.username,
            email: admin.email,
            position: admin.position
        });

    } catch (error) {
        res.status(500).json({ message: 'Error fetching admin profile', error });
    }
});

// Get total count of students route
app.get('/students/count', async (req, res) => {
    try {
        const count = await Student.countDocuments(); // Get the count of documents in the collection
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student count', error });
    }
});

// Get all students route (if you still want to display details later)
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
});

// DELETE a student by username
app.delete('/students/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const deletedStudent = await Student.findOneAndDelete({ username });
        if (deletedStudent) {
            res.json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update student details
app.put('/students/:username', async (req, res) => {
    const username = req.params.username;
    const { name, email, phone, gender } = req.body; // Ensure these fields exist in the request

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields (name, email, phone) are required' });
    }

    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { username },
            { name, email, phone, gender },  // Include gender here
            { new: true }
        );

        if (updatedStudent) {
            res.json(updatedStudent); // Respond with updated student details
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error during student update', error: err.message });
    }
});

// Company Registration Route
app.post('/company/register', async (req, res) => {
    try {
        const { name, email, company_add, phone, username, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newCompany = new Company({
            name,
            email,
            company_add,
            phone,
            username,
            password: hashedPassword,
        });

        await newCompany.save();
        res.status(201).json({ message: 'Company registration successful' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username already exists' });
        } else {
            res.status(500).json({ message: 'Error during registration', error });
        }
    }
});

// Company Login Route
app.post('/company/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const company = await Company.findOne({ username });

        if (!company) {
            return res.status(401).json({ message: 'Invalid usernames or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, company.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({
            message: 'Company login successful',
            company: {
                name: company.name,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
});

// Company Announcement Route
app.post('/company/announcements', async (req, res) => {
    try {
        const { title, content } = req.body;

        // Assuming company should be authenticated to create an announcement
        const newAnnouncement = new Announcement({ title, content });
        await newAnnouncement.save();
        res.status(201).json({ message: 'Announcement created successfully by company' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating announcement', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
