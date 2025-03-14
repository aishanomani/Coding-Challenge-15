// Task 1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically, Task 3: Removing Risk Items, & Task 4: Categorizing Risks by Level
function addRiskItem(riskName, riskLevel, department) {
    const riskDashboard = document.getElementById("riskDashboard")
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    
    let bgColor;
    switch (riskLevel) {
        case "Low":
            bgColor = "#90EE90"; // Green
            break;
        case "Medium":
            bgColor = "#FFD700"; // Yellow
            break;
        case "High":
            bgColor = "#FF6347"; // Red
            break;
    }
    riskCard.style.backgroundColor = bgColor;

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}<p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button> 
    `;

    riskDashboard.appendChild(riskCard);  

    riskCard.querySelector(".resolveButton").addEventListener("click", function() {
        riskDashboard.removeChild(riskCard);
    });
}

document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const riskName = document.getElementById("risk").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("riskDepartment").value;
   
    addRiskItem(riskName, riskLevel, department);
    
    document.getElementById("risk").value = "";
    document.getElementById("riskDepartment").value = "";
});

// Test Case For Tasks 2 & 3
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");