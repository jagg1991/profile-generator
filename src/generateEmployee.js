const generateEmployee = (employee) => {
    let employeeGenerate = `


<div class='container'>
<div class='row m-3'>
    <div id='manager-container'>
        <div class="card manager-card shadow-sm" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-text">${employee.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
           `
    if (employee.getRole() === "Manager") {
        employeeGenerate += `<li class="list-group-item">Office Number: ${employee.office}</li>`
    }


    employeeGenerate += `
            </ul >
        </div >
    </div >
</div >

    `



}

// switch (employee.getRole()) {
//     case "Manager":
//         employeeGenerate += `<li class="list-group-item">Office Number: ${employee.office}</li>`
//         break;
//     case "Intern":
//         employeeGenerate += `<li class="list-group-item">Office Number: ${employee.schoolName}</li>`
//         break;
//     case "Engineer":
//         employeeGenerate += `<li class="list-group-item">Office Number: ${employee.github}</li>`
//     default:
//         break;
// }