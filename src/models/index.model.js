const User = require('./user.model');
const Zone = require('./zone.model');


/**** User <> Zone One-to-Many ****/

User.hasMany(Zone, {
  as: 'zone',
  foreignKey: 'user_id'
}),

Zone.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {User, Zone};