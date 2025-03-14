// Task 1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically & Task 3: Removing Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskDashboard = document.getElementById("riskDashboard")
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    
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
