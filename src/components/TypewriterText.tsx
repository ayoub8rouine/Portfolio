import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;