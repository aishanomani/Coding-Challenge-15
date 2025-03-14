// Task 1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskDashboard = document.getElementById("riskDashboard")
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}<p>
        <p>Department: ${department}</p>
    `;
    
    riskDashboard.appendChild(riskCard);
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

// Test Case For Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");




