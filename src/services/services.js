import axios from "axios";

export const callMeBaby = async (url) => {
  try {
      const response = await axios(url)
      return response;
  } catch(err) {
      console.log(err)
      return err;
  }
};