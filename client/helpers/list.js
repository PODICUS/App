if (Meteor.isClient) {
	Template.listOrganisations.helpers({
		organisations: [{
			id: "55158a82a64a921c65cf9558",
			name: "HEIG-VD",
			projects: [{
				name: "HEIG-VD BitCoin Minner",
				description: "Show your support!\nGive us money by minning BitCoins!",
				hidden: false
			}, {
				name: "HEIGre-doux Ultra",
				description: "Distributed Cafeteria Engine",
				hidden: false
			}]
		}, {
			id: "2109bc9a64a921c6a82a64a9",
			name: "EPFL",
			projects: [{
				name: "EPFL BitCoin Minner",
				description: "Show your support!\nGive us money by minning BitCoins!",
				hidden: false
			}, {
				name: "TOP SECRET PROJECT",
				description: "I should be hidden in the list.",
				hidden: true
			}]
		}]
	});

	Template.listProjects.helpers({
		projects: [{
			name: "HEIG-VD BitCoin Minner",
			description: "Show your support!\nGive us money by minning BitCoins!",
			hidden: false
		}, {
			name: "HEIGre-doux Ultra",
			description: "Distributed Cafeteria Engine",
			hidden: false
		}]
	});
}
