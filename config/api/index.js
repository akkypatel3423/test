// ALL API END POINTS OBJECT SET-UP

const API = {
  // DEFINE AUTHENTICATION API ROUTE
  auth: {
    login: "users",
    fergotPassword: "admin/forgot-password",
    resetPassword: "admin/reset-password",
    storeResetPassword: "teams/update-password",
  },
};

// EXPORT API ROUTES OBJECT DEFINE
export { API };
