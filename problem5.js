/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeesSalary(employees){
    let totalSalaryIs = 0;
    for (const employee of employees) {
        const incrementSalary = employee.experience * employee.increment;
        console.log("total Increment salary is:", incrementSalary);
        const totalSalary = employee.starting + incrementSalary;
        console.log("total salary is:", totalSalary);
        totalSalaryIs = totalSalaryIs + totalSalary;
    }
    return totalSalaryIs;
}
const output = employeesSalary(employees);
console.log(output);