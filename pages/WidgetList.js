import React, { useState } from 'react';
import EditModal from './components/Modals/EditModal';

const WidgetList = ({ widgets, removeWidget, editText }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <div className="md:flex md:flex-wrap md:-mr-4">
            {widgets.map((card) => (
                <div key={card.id} className="md:inner md:w-1/2 pb-4 md:pr-4">
                    <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
                        <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                            {card.name}
                        </h2>
                        <div className="absolute top-5 right-5">
                            {card.name === 'JustSay' && (
                                <button
                                    className="text-lg text-gray-600 focus:outline-none mr-2"
                                    onClick={() => setShowEditModal(true)}
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                                    </svg>
                                </button>
                            )}
                            <button className="text-lg text-gray-600 focus:outline-none undefined" 
                            onClick={()=>removeWidget(card.id)}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </button>
                        </div>
                        {card.widget}
                        <div className="mt-6 "></div>
                    </div>
                    <EditModal
                        id={card.id}
                        name={card.name}
                        showEditModal={showEditModal}
                        setShowEditModal={setShowEditModal}
                        editText={editText}
                    />
                </div>
            ))}
        </div>
    );
};

export default WidgetList;
