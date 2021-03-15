const generateEmployee = (employee) => {
    let employeeGenerate = `


<div class='container'>
<div class='row m-3'>
    <div class='employee-container'>
        <div class="card shadow-sm" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-text">${employee.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employee.getID()}</li>
                <li class="list-group-item">Email: ${employee.getEmail()}</li>
           `
    if (employee.getRole() === "Manager") {
        employeeGenerate += `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`

    }
    else if (employee.getRole() === "Intern") {
        employeeGenerate += `<li class="list-group-item">Office Number: ${employee.schoolName}</li>`
    }
    else if (employee.getRole() === "Engineer") {
        employeeGenerate += `<li class="list-group-item">Office Number: ${employee.github}</li>`
    }



    employeeGenerate += `
            </ul >
        </div >
    </div >
</div >

`

    return employeeGenerate;

}

module.exports = generateEmployee;
