const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

// Would remove in new version (here now to pass Cypress tests)
User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });

// New version will create junction/join table 'UserConvo' to break up the many to many relationship b/t User and Conversation into two one to many relationships.
User.belongsToMany(Conversation, { through: 'UserConvo' });
Conversation.belongsToMany(User, { through: 'UserConvo' });

Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message
};
