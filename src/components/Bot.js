import React from "react";

const Bot = () => {
  const handleGmailClick = () => {
    window.location.href = "mailto:stha07ashok@gmail.com";
  };

  return (
    <div
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
      onClick={handleGmailClick}
    >
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  );
};

export default Bot;
