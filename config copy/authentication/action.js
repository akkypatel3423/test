import { DataService } from "../../config/dataService/dataService";
import { API } from "../../config/api/index";

export const login = async (payloads) => {
  try {
    const response = await DataService.get(
      API.auth.login + "?page=" + payloads
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// // GET PROFILE DATA
// export const getProfileData = () => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.get(API.auth.profile);
//       if (response.data.success) {
//         // dispatch({
//         //   type: API.auth.profile,
//         //   userProfileData: response.data.data,
//         // });
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // CHANGE PASSWORD FUNCTION
// export const changePassword = (payload, status) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(
//         status ? API.auth.update_adult_password : API.auth.change_pwd,
//         payload
//       );
//       if (response.data.success) {
//         // message.success(response.data.message);
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // LOG OUT FUNCTION
// export const checkPassword = (payload, status) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(
//         status
//           ? API.auth.verify_adult_password
//           : API.auth.create_adult_password,
//         payload
//       );
//       if (response.data.success) {
//         // if (!status) {
//         //   setItem("adult_password_created_status", true);
//         // }
//         // message.success(response.data.message);
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // UPDATE LANGUAGE API CALL
// export const updateLanguage = (payload) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(API.auth.updateLanguage, payload);
//       if (response.data.success) {
//         // setItem(
//         //   "adult_password_created_status",
//         //   response?.data?.data?.is_adult_password_created
//         // );
//         // setItem(
//         //   "LanguageSelections",
//         //   response?.data?.data?.default_language == "spanish" ? "es" : "en"
//         // );
//         return true;
//       } else {
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // foget password email
// export const forgetPasswordEmail = (payload) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(API.auth.forgetPassword, payload);
//       if (response.data.success) {
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // foget password otp verify
// export const otpVerify = (payload) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(API.auth.verifyOtp, payload);
//       if (response.data.success) {
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // foget password verify
// export const passwordVerify = (payload) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.post(API.auth.resetPassword, payload);
//       if (response.data.success) {
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };

// // LOG OUT FUNCTION
// export const logOut = () => {
//   return async (dispatch) => {
//     try {
//       // Cookies.remove("logedIn");
//       // localStorage.clear();
//       // dispatch({
//       //   type: API.auth.login,
//       //   userData: {},
//       //   login: false,
//       //   loading: false,
//       // });
//       // dispatch({
//       //   type: API.dashboard.allMedia,
//       //   mediaList: {},
//       // });
//       // message.success(t("Logout Successfully"));
//       return true;
//     } catch (err) {
//       return false;
//     }
//   };
// };

// export const updateUserPreference = (payload) => {
//   return async (dispatch) => {
//     try {
//       const response = await DataService.get(
//         API.dashboard.userPreference + "?user_preference=" + `${payload}`
//       );
//       if (response.data.success) {
//         return true;
//       } else {
//         // message.error(response.data.message);
//         return false;
//       }
//     } catch (err) {
//       return false;
//     }
//   };
// };
