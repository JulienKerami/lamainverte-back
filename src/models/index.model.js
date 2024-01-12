const User = require('./user.model');
const Zone = require('./zone.model');


/**** User <> Zone One-to-Many ****/

User.hasMany(Zone, {
  as: 'zone'
}),

Zone.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {User, Zone};