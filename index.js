require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/connection");
const { WorkExperienceItem, EducationItem } = require("./ResumeItem");
const cors = require("cors");
const app = express()
const port = process.env.PORT || 3001;

// Connecting Database:
db();

// Enable CORS for all routes
app.use(cors());

// Middlewares:
app.use(bodyParser.json());

// Sample data based on the JSON structure you provided
const sampleData = {
  resume: {
    sections: [
      {
        title: "Work Experience",
        items: [
          new WorkExperienceItem(
            "Intern",
            "XYZ Corporation",
            "San Francisco, USA",
            "May 2019",
            "Aug 2019",
            "Assisted with frontend development and bug fixing."
          ),
          new WorkExperienceItem(
            "Software Developer",
            "ABC Tech",
            "New York, USA",
            "Jan 2020",
            "Present",
            "Developed web applications using React and Node.js."
          ),
        ],
      },
      {
        title: "Education",
        items: [
          new EducationItem(
            "Bachelor of Science in Computer Science",
            "University of ABC",
            "Chicago, USA",
            "May 2019"
          ),
          new EducationItem(
            "High School Diploma",
            "High School XYZ",
            "Los Angeles, USA",
            "Jun 2015"
          ),
        ],
      },
    ],
  },
};
  
console.log("sampleData:", sampleData);
// Define API endpoints
app.get("/api/resume/work-experience", (req, res) => {
  try {
    if (
      sampleData &&
      sampleData.resume &&
      sampleData.resume.sections[0] &&
      sampleData.resume.sections[0].items
    ) {
      res.json(sampleData.resume.sections[0].items);
    } else {
      console.error(
        "sampleData does not have the expected structure:",
        sampleData
      );
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.error("Error in /api/resume/work-experience route:", error);
    res.status(500).send("Internal Server Error");
  }
});



app.get("/api/resume/education", (req, res) => {
  try {
    if (
      sampleData &&
      sampleData.resume &&
      sampleData.resume.sections[1] &&
      sampleData.resume.sections[1].items
    ) {
      res.json(sampleData.resume.sections[1].items);
    } else {
      console.error(
        "sampleData does not have the expected structure:",
        sampleData
      );
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.error("Error in /api/resume/education route:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
