export const createEmployee = (employee) => {
    return fetch(`http://localhost:3001/api/employee/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const getAllEmployee = () => {
    return fetch(`http://localhost:3001/api/employee/list`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const deleteEmployee = (id) => {
    return fetch(`http://localhost:3001/api/employee/delete/${id}`, {
        method: "GET"
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err))
}

export const getEmployeeById = (id) => {
    return fetch(`http://localhost:3001/api/employee/find/${id}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const updateEmployee = (id, employee) => {
    return fetch(`http://localhost:3001/api/employee/update/${id}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
}