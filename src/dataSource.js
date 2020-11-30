// fetch data and export the object

const url =
	"https://niravkpatel28.github.io/json-data-server/employees/employees.json";

export const getUsers = async () => {
	try {
		let users = await axios(url);

      return users.data;
	} catch (error) {
		console.log(error);
	}
};
