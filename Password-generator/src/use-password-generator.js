import react, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const generatePassword = (checkboxData, length) => {
    let charset = "",
      generatedPass = "";

    if (checkboxData.upperCase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkboxData.lowerCase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkboxData.numbers) {
      charset += "0123456789";
    }
    if (checkboxData.symbols) {
      charset += "!@#$%^&*()";
    }

    for (let i = 0; i < length; i++) {
      //math.floor removes decimal
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPass += charset.charAt(randomIndex);
    }

    setPassword(generatedPass);
  };
  return { password, generatePassword };
};

export default usePasswordGenerator;
