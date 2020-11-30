import { getUsers } from "./dataSource.js";
import { employeeDiv } from "./components/employeeDiv.js";

const rootDiv = document.getElementById("root");

getUsers()
	.then((employees) => {
		employees.forEach((employee) => {
			rootDiv.appendChild(employeeDiv(employee));
		});
	})
	.catch((error) => console.error(error));
