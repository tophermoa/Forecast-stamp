var API_KEY = "your_api_key"

async function getData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=${API_KEY}&units=metric`);
        const data = await response.json();   

        // get today weather (based on example output)
        const today = data.list[0];

        // only filter by day on free account
        const next5Days = await data.list.filter(item => 
            item.dt_txt.includes("00:00:00")
        );

        const filterByDay = [today, ...next5Days];

        document.getElementById("output-forecast").innerHTML = `
            Weather Forecast:<br>
            <ul style="list-style-type: none;padding:0;margin:0;">
            ${
                filterByDay.map((item, idx) => {
                    const dt = item.dt_txt;
                    const date = new Date(dt.replace(" ", "T"));

                    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
                    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
                    const month = date.toLocaleDateString("en-US", { month: "short" });
                    const year = date.getFullYear();

                    const formattedDate = `${weekday}, ${day} ${month} ${year}`;

                    return `
                        <li>
                            ${formattedDate}: ${item.main.temp}&deg;C ${idx === 0 ? "(Today)" : ""}
                        </li>
                    `
                }).join("")
            }
            </ul>
        `;
    } catch (error) {
        console.log(error)
        document.getElementById("output-forecast").innerHTML = "Error!"
    } finally {
        console.log("Success!")
    }

  
}


getData();
