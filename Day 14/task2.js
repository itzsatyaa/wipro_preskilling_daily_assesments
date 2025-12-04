// URL for the random user API
const API_URL = "https://randomuser.me/api/";

// Get the display elements from the HTML
const nameElement = document.getElementById("userName");
const emailElement = document.getElementById("userEmail");
const pictureElement = document.getElementById("userPicture");
const button = document.getElementById("fetchUserButton");


async function fetchRandomUser() {
    
    button.disabled = true;
    button.textContent = "Loading...";
    
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        const user = data.results[0];
        
        
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const pictureUrl = user.picture.large;

        
        nameElement.textContent = `Name: ${fullName}`;
        emailElement.textContent = `Email: ${email}`;
        pictureElement.src = pictureUrl;
        pictureElement.alt = fullName;

    } catch (error) {
        console.error("Fetch Error:", error.message);
        nameElement.textContent = "Error loading user data.";
        emailElement.textContent = "";
        pictureElement.src = "";
    } finally {
       
        button.disabled = false;
        button.textContent = "Fetch New User";
    }
}


document.getElementById("fetchUserButton").addEventListener("click", fetchRandomUser);


fetchRandomUser();