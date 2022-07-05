import UserModel from "../models/UserModel";
// import { Role, RoutePaths } from "./enum";

export default class Shared {

  public static messages = {
     USER_DELETE: "Are you sure you want to delete this user?",
     UPDATED_SUCCESS: "Record updated successfully",
     DELETE_SUCCESS: "Record deleted successfully"
  }

  public static LocalStorageKeys = {
    USER: "user",
  };
}
