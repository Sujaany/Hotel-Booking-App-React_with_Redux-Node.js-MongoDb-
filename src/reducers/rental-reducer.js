const rentals =[{
	
			id: "1",
			title: "Nice view on ocean",
			city: "Jaffna",
			street: "Thirunelvely",
			catergory: "Condo",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 4,
			description: "very nice apartment",
			dailyRate: 43
            },
		{
			id: "2",
			title: "Nice house",
			city: "Vavuniya",
			street: "School street",
			catergory: "Small",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 5,
			description: "very nice apartment",
			dailyRate: 43
            },
		{
			id: "3",
			title: "Nice Place",
			city: "Jaffna",
			street: "School street",
			catergory: "Small",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 5,
			description: "very nice apartment",
			dailyRate: 43
            }];


export const rentalReducer = (state = rentals, action) => {
	switch (action.type) {
		default:
			return state;
	}
}