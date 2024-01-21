const express = require("express"); // the express and path are installed and mentioned below 
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // 3000 is port, you can modify it for your own use

// they ask to access public folder for html output so, we create public and add html, css, js folders and files in it
app.use(express.static(path.join(__dirname, "public")));

// this will access the html file in for output in nodejs 
app.get('/', (req, res) => {
    // Use path.join to get the correct file path
    const filePath = path.join(__dirname, "public", "outpwd.html");

    // Send the file as the response
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
