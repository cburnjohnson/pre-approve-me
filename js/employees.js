const getEmployees = async () => {
    const employeeData = await getEmployeeData();
    renderEmployees(employeeData.data);
};

const getEmployeeData = async () => {
    const req = await fetch('https://reqres.in/api/users?page=2');
    const data = await req.json();
    return data;
};

const renderEmployees = (employees) => {
    const employeesGrid = document.querySelector('.employees-grid');

    employees.forEach((employee) => {
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';

        const name = document.createElement('p');
        name.innerHTML = `Name: ${employee.first_name} ${employee.last_name}`;

        const email = document.createElement('p');
        email.innerHTML = `Email: ${employee.email}`;

        employeeCard.appendChild(name);
        employeeCard.appendChild(email);

        employeesGrid.appendChild(employeeCard);
    });
};

getEmployees();
