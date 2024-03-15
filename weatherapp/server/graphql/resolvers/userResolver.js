const User = require("../../models/UserModel");


const userResolver = {
  Query: {
    user: async (parent, { id }) => {
      return await User.findById(id);
    },
    allUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (parent, { username, email }) => {
      const user = new User({ username, email });
      await user.save();
      return user;
    },
  },
};

module.exports = userResolver;
