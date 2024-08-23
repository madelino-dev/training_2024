
const exercisePlan = {
    "2024-08-05": "Mon, Rest",
    "2024-08-06": "Tue, 7M (11.3 km) (1M jog, 4 x 1M fast, 400m jog rec., 1M jog)",
    "2024-08-07": "Wed, 7M (11.3 km) (63 mins) easy",
    "2024-08-08": "Thu, 4M (6.4 km) (32 mins) marathon pace",
    "2024-08-09": "Fri, Rest",
    "2024-08-10": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-08-11": "Sun, 13M (20.9 km) (1hr 57 mins) long",
    "2024-08-12": "Mon, Rest",
    "2024-08-13": "Tue, 7M (11.3 km) (1M jog, 5M fartlek, 1M jog)",
    "2024-08-14": "Wed, 8M (12.9 km) (73 mins) slow",
    "2024-08-15": "Thu, 5M (8 km) (40 mins) marathon pace",
    "2024-08-16": "Fri, Rest",
    "2024-08-17": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-08-18": "Sun, 15M (24.1 km) (2hrs 15 mins) long",
    "2024-08-19": "Mon, Rest",
    "2024-08-20": "Tue, 6M (9.7 km) (1M jog, 9 x 2 mins uphill, jog back down, 1M jog)",
    "2024-08-21": "Wed, 9M (14.5 km) (81 mins) easy",
    "2024-08-22": "Thu, 6M (9.7 km) (1M jog, 4M tempo, 1M jog)",
    "2024-08-23": "Fri, Rest",
    "2024-08-24": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-08-25": "Sun, 18M (29 km) (2hrs 42 mins) long",
    "2024-08-26": "Mon, Rest",
    "2024-08-27": "Tue, 6M (9.7 km) (1M jog, 10 x 400m @ 5K pace, 200m jog rec., 1M jog)",
    "2024-08-28": "Wed, 10M (16.1 km) (90 mins) slow",
    "2024-08-29": "Thu, 7M (11.3 km) (56 mins) marathon pace",
    "2024-08-30": "Fri, Rest",
    "2024-08-31": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-09-01": "Sun, 20M (32.2 km) (3hrs) long",
    "2024-09-02": "Mon, Rest",
    "2024-09-03": "Tue, 7M (11.3 km) (1M jog, 10 x 2 mins uphill, jog back, 1M jog)",
    "2024-09-04": "Wed, 8M (12.9 km) (72 mins) easy",
    "2024-09-05": "Thu, 9M (14.5 km) (72 mins) marathon pace",
    "2024-09-06": "Fri, Rest",
    "2024-09-07": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-09-08": "Sun, 20M (32.2 km) (3hrs) long",
    "2024-09-09": "Mon, Rest",
    "2024-09-10": "Tue, 7M (11.3 km) (1M jog, 3 x 1.5M tempo, 400m jog rec., 1M jog)",
    "2024-09-11": "Wed, 9M (14.5 km) (80 mins) easy",
    "2024-09-12": "Thu, 5M (8 km) (1M jog, 3M tempo, 1M jog)",
    "2024-09-13": "Fri, Rest",
    "2024-09-14": "Sat, 3M (4.8 km) (27 mins) easy",
    "2024-09-15": "Sun, Race or 15M (24.1 km) (sub-1:37 half)",
    "2024-09-16": "Mon, Rest",
    "2024-09-17": "Tue, 7M (11.3 km) (1M jog, 5M fartlek, 1M jog)",
    "2024-09-18": "Wed, 6M (9.7 km) (54 mins) easy",
    "2024-09-19": "Thu, 9M (14.5 km) (72 mins) marathon pace",
    "2024-09-20": "Fri, Rest",
    "2024-09-21": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-09-22": "Sun, 20M (32.2 km) (3hrs) long",
    "2024-09-23": "Mon, Rest",
    "2024-09-24": "Tue, 8M (12.9 km) (1M jog, 5 x 1M @ 7:30 pace, 200m jog rec., 1M jog)",
    "2024-09-25": "Wed, 9M (14.5 km) (80 mins) easy",
    "2024-09-26": "Thu, 5M (8 km) (1M jog, 3M tempo, 1M jog)",
    "2024-09-27": "Fri, Rest",
    "2024-09-28": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-09-29": "Sun, 22M (35.4 km) (3hrs 18 mins) long",
    "2024-09-30": "Mon, Rest",
    "2024-10-01": "Tue, 8M (12.9 km) (1M jog, 12 x 2 mins uphill, jog back, 1M jog)",
    "2024-10-02": "Wed, 7M (11.3 km) (63 mins) slow",
    "2024-10-03": "Thu, 6M (9.7 km) (1M jog, 4M brisk, 1M jog)",
    "2024-10-04": "Fri, Rest",
    "2024-10-05": "Sat, 4M (6.4 km) (36 mins) easy or parkrun",
    "2024-10-06": "Sun, 20M (32.2 km) (3hrs) slow",
    "2024-10-07": "Mon, Rest",
    "2024-10-08": "Tue, 6M (9.7 km) (1M jog, 6 x 800m @ 3 mins, 100m jog rec., 1M jog)",
    "2024-10-09": "Wed, 6M (9.7 km) (54 mins) easy",
    "2024-10-10": "Thu, 8M (12.9 km) (64 mins) marathon pace",
    "2024-10-11": "Fri, Rest",
    "2024-10-12": "Sat, 4M (6.4 km) (36 mins) easy",
    "2024-10-13": "Sun, 13M (20.9 km) (approx 2hrs) easy",
    "2024-10-14": "Mon, Rest",
    "2024-10-15": "Tue, 6M (9.7 km) (1M jog, 9 x 400m @ 90 secs, 200m jog rec., 1M jog)",
    "2024-10-16": "Wed, 5M (8 km) (45 mins) easy",
    "2024-10-17": "Thu, 5M (8 km) (1M jog, 3M tempo, 1M jog)",
    "2024-10-18": "Fri, Rest",
    "2024-10-19": "Sat, 3M (4.8 km) (27 mins) easy",
    "2024-10-20": "Sun, 6M (9.7 km) (54 mins) easy",
    "2024-10-21": "Mon, Rest",
    "2024-10-22": "Tue, 4M (6.4 km) (1M jog, 10 x 200m @ 5K pace, 100m jog rec., 1M jog)",
    "2024-10-23": "Wed, Rest",
    "2024-10-24": "Thu, 3M (4.8 km) (27 mins) easy + strides",
    "2024-10-25": "Fri, Rest",
    "2024-10-26": "Sat, 2M (3.2 km) (20 mins) easy",
    "2024-10-27": "Sun, RACE DAY!",
};

function getFormattedDate(offset = 0) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
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
    const exerciseToday = exercisePlan[today] || "No exercise plan for today.";
    document.getElementById('exercise-plan-today').innerText = `Today: ${exerciseToday}`;

    const upcomingExercises = document.getElementById('upcoming-exercises');
    upcomingExercises.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= 3; i++) {
        const nextDate = getFormattedDate(i);
        const exercise = exercisePlan[nextDate] || "Rest";
        const listItem = document.createElement('li');
        listItem.innerText = `${nextDate}: ${exercise}`;
        upcomingExercises.appendChild(listItem);
    }
}

window.onload = showExerciseForToday;
