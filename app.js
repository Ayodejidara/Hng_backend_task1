const express = require('express');

const app = express();

function getCurrentday() {
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    return daysOfWeek[date.getDay()];
}

function getCurrentUTC() {
    const currentDate = new Date();
    return currentDate.toISOString().slice(0,19) + 'Z';
};

const utc_time = getCurrentUTC();
const current_day = getCurrentday();

app.get('/api', (req,res) =>{
    const slack_name = req.query.slack_name;
    const track = req.query.track;

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