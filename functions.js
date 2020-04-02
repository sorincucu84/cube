module.exports = {
  getMember: function(message, toFind = "") {
    toFind = toFind.toLowerCase();

    let target = message.guild.members.get(toFind);

    if (!target && message.mentions.members)
      target = message.mentions.members.first();

    if (!target && toFind) {
      target = message.guild.members.find(member => {
        return (
          member.displayName.toLowerCase().includes(toFind) ||
          member.user.tag.toLowerCase().includes(toFind)
        );
      });
    }

    if (!target) target = message.member;

    return target;
  },
  
    getRole: function(message, toFind = "") {
    toFind = toFind.toLowerCase();

    let target = message.guild.roles.get(toFind);

    if (!target && message.mentions.roles)
      target = message.mentions.roles.first();

    if (!target && toFind) {
      target = message.guild.roles.find
    }
    

    if (!target) target = message.roles;

    return target;
  },

  formatDate: function(date) {
    return new Intl.DateTimeFormat("native").format(date);
  }
};
