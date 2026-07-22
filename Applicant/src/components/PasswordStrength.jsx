import React from "react";

const PasswordStrength = ({ password }) => {
  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getPasswordStrength(password);

  const labels = [
    "Very Weak",
    "Weak",
    "Moderate",
    "Strong",
    "Very Strong",
  ];

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  return (
    <div className="mt-2 flex gap-1 items-center">
      {[1, 2, 3, 4].map((level) => (
        <div
          key={level}
          className={`h-1 flex-1 rounded-full ${
            strength >= level ? colors[strength - 1] : "bg-gray-200"
          }`}
        />
      ))}

      <span className="text-[10px] ml-2 font-medium uppercase">
        {labels[strength]}
      </span>
    </div>
  );
};

export default PasswordStrength;