import axios from "axios";
import { BASE_URL } from "../services/utils";

const validateToken = async (cardId, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Customers/Card/Validate`,
      {
        cardId,
        token,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default validateToken;
