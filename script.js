
const exercisePlan = {
    "2024-08-05": "Rest",
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
    "2024-08-19": "Rest",
    "2024-08-20": "6M (1M jog, 9 x 2 mins uphill, jog back down, 1M jog)",
    "2024-08-21": "9M (81 mins) easy",
    "2024-08-22": "6M (1M jog, 4M tempo, 1M jog)",
    "2024-08-23": "Rest",
    "2024-08-24": "4M (36 mins) easy or parkrun",
    "2024-08-25": "18M (2hrs 42 mins) long",
    "2024-08-26": "Rest",
    "2024-08-27": "6M (1M jog, 10 x 400m @ 5K pace, 200m jog rec., 1M jog)",
    "2024-08-28": "10M (90 mins) slow",
    "2024-08-29": "7M (56 mins) marathon pace",
    "2024-08-30": "Rest",
    "2024-08-31": "4M (36 mins) easy or parkrun",
    "2024-09-01": "20M (3hrs) long",
    "2024-09-02": "Rest",
    "2024-09-03": "7M (1M jog, 10 x 2 mins uphill, jog back, 1M jog)",
    "2024-09-04": "8M (72 mins) easy",
    "2024-09-05": "9M (72 mins) marathon pace",
    "2024-09-06": "Rest",
    "2024-09-07": "4M (36 mins) easy or parkrun",
    "2024-09-08": "20M (3hrs) long",
    "2024-09-09": "Rest",
    "2024-09-10": "7M (1M jog, 3 x 1.5M tempo, 400m jog rec., 1M jog)",
    "2024-09-11": "9M (80 mins) easy",
    "2024-09-12": "5M (1M jog, 3M tempo, 1M jog)",
    "2024-09-13": "Rest",
    "2024-09-14": "3M (27 mins) easy",
    "2024-09-15": "Race or 15M (sub-1:37 half)",
    "2024-09-16": "Rest",
    "2024-09-17": "7M (1M jog, 5M fartlek, 1M jog)",
    "2024-09-18": "6M (54 mins) easy",
    "2024-09-19": "9M (72 mins) marathon pace",
    "2024-09-20": "Rest",
    "2024-09-21": "4M (36 mins) easy or parkrun",
    "2024-09-22": "20M (3hrs) long",
    "2024-09-23": "Rest",
    "2024-09-24": "8M (1M jog, 5 x 1M @ 7:30 pace, 200m jog rec., 1M jog)",
    "2024-09-25": "9M (80 mins) easy",
    "2024-09-26": "5M (1M jog, 3M tempo, 1M jog)",
    "2024-09-27": "Rest",
    "2024-09-28": "4M (36 mins) easy or parkrun",
    "2024-09-29": "22M (3hrs 18 mins) long",
    "2024-09-30": "Rest",
    "2024-10-01": "8M (1M jog, 12 x 2 mins uphill, jog back, 1M jog)",
    "2024-10-02": "7M (63 mins) slow",
    "2024-10-03": "6M (1M jog, 4M brisk, 1M jog)",
    "2024-10-04": "Rest",
    "2024-10-05": "4M (36 mins) easy or parkrun",
    "2024-10-06": "20M (3hrs) slow",
    "2024-10-07": "Rest",
    "2024-10-08": "6M (1M jog, 6 x 800m @ 3 mins, 100m jog rec., 1M jog)",
    "2024-10-09": "6M (54 mins) easy",
    "2024-10-10": "8M (64 mins) marathon pace",
    "2024-10-11": "Rest",
    "2024-10-12": "4M (36 mins) easy",
    "2024-10-13": "13M (approx 2hrs) easy",
    "2024-10-14": "Rest",
    "2024-10-15": "6M (1M jog, 9 x 400m @ 90 secs, 200m jog rec., 1M jog)",
    "2024-10-16": "5M (45 mins) easy",
    "2024-10-17": "5M (1M jog, 3M tempo, 1M jog)",
    "2024-10-18": "Rest",
    "2024-10-19": "3M (27 mins) easy",
    "2024-10-20": "6M (54 mins) easy",
    "2024-10-21": "Rest",
    "2024-10-22": "4M (1M jog, 10 x 200m @ 5K pace, 100m jog rec., 1M jog)",
    "2024-10-23": "Rest",
    "2024-10-24": "3M (27 mins) easy + strides",
    "2024-10-25": "Rest",
    "2024-10-26": "2M (20 mins) easy",
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
