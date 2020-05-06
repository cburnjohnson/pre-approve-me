const getEmployees = async () => {
    const employeeData = await getEmployeeData();
    renderEmployees(employeeData.data);
};

const getEmployeeData = async () => {
    const req = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const data = await req.json();
    return data;
};

const renderEmployees = (employees) => {
    const employeesGrid = document.querySelector('.employees-grid');
    console.log(employeesGrid);

    employees.forEach((employee) => {
        console.log(employee);
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';

        const name = document.createElement('p');
        name.className = 'name';
        name.innerHTML = `Name: ${employee.employee_name}`;

        const age = document.createElement('p');
        age.className = 'age';
        age.innerHTML = `Age: ${employee.employee_age}`;

        const salary = document.createElement('p');
        salary.className = 'salary';
        salary.innerHTML = `Salary: $${employee.employee_salary}`;

        employeeCard.appendChild(name);
        employeeCard.appendChild(age);
        employeeCard.appendChild(salary);

        employeesGrid.appendChild(employeeCard);
    });
};

getEmployees();
