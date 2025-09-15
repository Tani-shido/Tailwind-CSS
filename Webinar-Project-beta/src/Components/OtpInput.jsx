import React, { useState, useRef } from 'react';

export const OtpInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when all fields are filled
    if (newOtp.every((digit) => digit !== '') && onComplete) {
      onComplete(newOtp.join('')); // 👉 returns "123456"
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');

    if (pasteData) {
      const newOtp = [...otp];
      for (let i = 0; i < Math.min(pasteData.length, length); i++) {
        newOtp[i] = pasteData[i];
      }
      setOtp(newOtp);

      const focusIndex = Math.min(pasteData.length - 1, length - 1);
      inputRefs.current[focusIndex]?.focus();

      if (newOtp.every((digit) => digit !== '') && onComplete) {
        onComplete(newOtp.join('')); // 👉 returns "123456"
      }
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-16 text-center text-lg font-medium border border-gray-400 rounded-xl focus:border-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
};
