const getProfile = (username) => `https://plug.dj/@/${username.replace(/\s+/g, '-').toLowerCase()}`;
const getBadge = (badge) => `https://rcs.radiant.dj/img/plugdj/badges/bdg-${badge}.png`;
const getAvatar = (avatarID) => `https://rcs.radiant.dj/img/plugdj/avatars/all/${avatarID}b.png`;
const getPeasant = () => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeN9jjHv5Y_W7EnzwUac-AAZmDrSrk7iiJEGZIMsUcHOQ94y6';

module.exports = {
    getProfile,
    getBadge,
    getAvatar,
    getPeasant
}