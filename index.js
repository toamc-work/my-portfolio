const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'dist')));


app.get("*", (req, res) => {
    res.redirect("/");
    res.end();
})

const PORT = process.env.PORT || 8010;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));