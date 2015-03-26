if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    organisations: function () {
      return Organisations.find({});
    }
  });
}
