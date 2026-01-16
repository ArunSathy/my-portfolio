import React from 'react';

const Notification = ({ message, type, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] flex items-center justify-center z-modal opacity-0 animate-fade-in" onClick={onClose}>
            <div className={`bg-container p-[1.5rem_2rem] rounded-[1.5rem] shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col items-center gap-6 min-w-[300px] max-w-[90%] border-t-[6px] border-title transform scale-80 animate-pop-in relative text-center ${type}`} onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col items-center gap-2">
                    <p className={`text-normal text-title font-medium`}>{message}</p>
                </div>
                <button className="inline-block bg-title text-container font-medium hover:bg-title-dark transition-colors p-[0.75rem_2rem] rounded-xl text-small shadow-[0_4px_8px_rgba(0,0,0,0.1)] duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]" onClick={onClose}>OK</button>
                <i className="bx bx-x absolute top-4 right-4 cursor-pointer text-[1.5rem] text-text opacity-60 transition-all duration-300 hover:opacity-100 m-0" onClick={onClose}></i>
            </div>
        </div>
    );
};

export default Notification;
