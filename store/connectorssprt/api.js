import axios from "axios"
import {
  CONNECTORS_SPRT36_USERNAME,
  CONNECTORS_SPRT36_PASSWORD
} from "react-native-dotenv"
const connectorssprt = axios.create({
  baseURL: "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/",
  auth: {
    username: CONNECTORS_SPRT36_USERNAME,
    password: CONNECTORS_SPRT36_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
