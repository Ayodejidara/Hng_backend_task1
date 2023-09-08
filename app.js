const express = require('express');

const app = express();


app.get('/api', (req,res) =>{
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const current_day= daysOfWeek[date.getDay()];

    const currentDate = new Date();
    const utc_time = currentDate.toISOString().slice(0,19) + 'Z';

    res.status(200).json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url: 'https://github.com/Ayodejidara/Hng_backend_task1/blob/main/index.js',
        github_repo_url: 'https://github.com/Ayodejidara/Hng_backend_task1',
        status_code: 200
    });
});

module.exports = app;