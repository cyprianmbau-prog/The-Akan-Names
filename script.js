//script for akan name generator
function generateName() {
    const dateInput = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");

    //alert if all the fields are not filled
    if (!dateInput || !gender) {
        result.textContent = "you must fill in all fields first.";
        result.style.color = "red";
        return;
    }

    const date = new Date(dateInput);
    const day = date.getDay();

    //the male names arranged due to the day of the week they were born. 
    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];

    //the female names arranged due to the day of the week they were born.
    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

    let akanName;

    //if statement to select name according to gender
    if (gender === "male") {
        akanName = maleNames[day];
    } else {
        akanName = femaleNames[day];
    }

    //days of the week from 1-sunday to 7-saturday
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    //the output/display message
    result.textContent = `You were born on a ${days[day]} and Your Akan name is ${akanName}.`;
    result.style.color = "white";
    result.style.backgroundColor = "black";
}
