const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  },
};

export default fakeAuth;
