const axios = require('axios'); // For Node.js, you may need to install axios using npm or yarn.
require('dotenv').config();

const GITHUB_API_URL = process.env.GITHUB_BASE_URL;
const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const PROJECT_NUMBER = 1; // The project number where you want to create an issue.
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// Data for creating a new issue
const issueData = {
  title:"Found a bug",
  body:"I\'m having a problem with this.",
  labels:["bug"]
};

const createIssue = async () => {
  try {
    const response = await axios.post(`${GITHUB_API_URL}/repos/${OWNER}/${REPO}/issues`, issueData, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    });

    if (response.status === 201) {
      console.log('Issue created successfully.');
    } else {
      console.error('Failed to create issue:', response.status, response.data);
    }
  } catch (error) {
    console.error('Error creating issue:', error);
  }
};

createIssue();
