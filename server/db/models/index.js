const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

// Create junction/join table 'UserConvo' to break up the many to many relationship b/t User and Conversation into two one to many relationships.
User.belongsToMany(Conversation, { through: 'UserConvo' });
Conversation.belongsToMany(User, { through: 'UserConvo' });

Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message
};
