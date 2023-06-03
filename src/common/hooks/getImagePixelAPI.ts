import React from "react";

const getImagePixelAPI = async () => {
  if (process.env.NEXT_PUBLIC_ACCESS_KEY_IMG_PIXEL !== "") {
    return false;
  }
  try {
    const response = await fetch("https://api.pexels.com/v1/", {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ACCESS_KEY_IMG_PIXEL,
      },
    });
    if (response.ok) {
      const data = await response.json();
      // Process the data here
      console.log(data);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export default getImagePixelAPI;
