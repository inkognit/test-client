import { useState } from "react";
import { TSignUpFormData } from "../payloads/types";
import { axiosInstance } from "../utils/axion.util";

export const useSignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resposeData, setResponseData] = useState();

  const sendRequest = async (data: TSignUpFormData) => {
    setLoading(true);
    try {

      const result = await axiosInstance.post("api/sign-up", data);
      setResponseData(result.data);
    } catch (err) {
      setError((err as Error).message || "Чтото пошло не так");
    } finally {
      setLoading(false);
    }
  };
  return { sendRequest, error, isLoading, resposeData };
};

