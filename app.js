const express = require('express');

const app = express();

const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const currentDayStr = daysOfWeek[date.getDay()];


function getCurrentUTC() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toISOString();

    return currentUTCTime;
};

const utc_time = getCurrentUTC();

app.get('/api', (req,res) =>{
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    res.status(200).json({
        slack_name,
        current_day: currentDayStr,
        utc_time,
        track,
        github_file_url: 'https://github.com/Ayodejidara/Hng_backend_task1/blob/main/index.js',
        github_repo_url: 'https://github.com/Ayodejidara/Hng_backend_task1',
        status_code: 200
    });
});

module.exports = app;