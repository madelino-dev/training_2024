const exercisePlan = {
    "2024-07-23": "Rest",
    "2024-08-06": "7M (1M jog, 4 x 1M fast, 400m jog rec., 1M jog)",
    "2024-08-07": "7M (63 mins) easy",
    "2024-08-08": "4M (32 mins) marathon pace",
    "2024-08-09": "Rest",
    "2024-08-10": "4M (36 mins) easy or parkrun",
    "2024-08-11": "13M (1hr 57 mins) long",
    "2024-08-12": "Rest",
    "2024-08-13": "7M (1M jog, 5M fartlek, 1M jog)",
    "2024-08-14": "8M (73 mins) slow",
    "2024-08-15": "5M (40 mins) marathon pace",
    "2024-08-16": "Rest",
    "2024-08-17": "4M (36 mins) easy or parkrun",
    "2024-08-18": "15M (2hrs 15 mins) long",
    // Add the remaining dates and exercises
    "2024-10-27": "Race day"
};

function getFormattedDate() {
    const date = new Date();
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function showExerciseForToday() {
    const today = getFormattedDate();
    const exercise = exercisePlan[today] || "No exercise plan for today.";
    document.getElementById('exercise-plan').innerText = exercise;
}

window.onload = showExerciseForToday;
