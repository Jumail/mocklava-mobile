const SERVER = "http://192.168.100.28/";
const PORT = "3000";

const URL = SERVER + PORT;

export const ROUTES = {
  login: URL + "/users/login",
  register: URL + "/users/register",
  addProduct: URL + "/products/addProduct",
  addShop: URL + "/shops/addShop",
};
