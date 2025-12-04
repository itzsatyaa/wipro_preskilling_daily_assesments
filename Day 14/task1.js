
async function fetchData() {
   
    const url = "https://dummy.restapiexample.com/api/v1/employees";

    try {
        
        const response = await fetch(url);

        if (!response.ok) {
            
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        
        const data = await response.json();

        
        console.log("Fetched Data:", data);

    } catch (error) {
        
        console.error("Fetch Error:", error.message);
    }
}


fetchData();