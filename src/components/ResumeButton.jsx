import React from 'react';

const ResumeButton = ({ resumeUrl }) => {
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
    >
      View Resume
    </a>
  );
};

export default ResumeButton;