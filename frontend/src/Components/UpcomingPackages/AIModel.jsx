import axios from "axios";

export const chatSession = async (FINAL_PROMPT) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/generate-trip`,
      { prompt: FINAL_PROMPT },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.data;

  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);
    return null;
  }
};