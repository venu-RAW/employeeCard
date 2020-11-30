// has the function where employee card will render

export const employeeDiv = (employee) => {
	let { id, imageUrl, firstName, lastName, company } = employee;

	const empCard = document.createElement("div");
	empCard.className = "card-container";

	empCard.innerHTML = `
      <div class="employee-card">
         <div class="employee-image">
            <img src="${imageUrl}" alt="">
         </div>
         <p id="${id}" class="employee-fullname">${firstName} ${lastName}</p>
         <p>${company}</p>  
      </div>
   `;

	return empCard;
};
