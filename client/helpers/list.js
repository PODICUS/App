if (Meteor.isClient) {
	Template.listOrganisations.helpers({
		organisations: [{
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
}
