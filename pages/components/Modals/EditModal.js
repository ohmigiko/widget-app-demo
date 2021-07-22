import React, { useState } from 'react';

const EditModal = ({ id, name, showEditModal, setShowEditModal, editText }) => {
    const [newText, setNewText] = useState('');
    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const handleInput = (e) => {
        const { value } = e.target;
        setNewText(value);
    };

    const edit = () => {
        setShowEditModal(false);
        editText(id,newText);
        setNewText('')
    };

    return (
        <div>
            {showEditModal ? (
                <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
                    <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
                        <button
                            className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
                            onClick={closeEditModal}
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                            </svg>
                        </button>
                        <div>
                            <fieldset>
                                <h2 className="text-xl mb-2">Edit {name}</h2>
                                <form className="flex" onSubmit={edit}>
                                    <div className="flex-1 mr-1">
                                        <input
                                            type="text"
                                            className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                                            placeholder="Enter Text"
                                            value={newText}
                                            onChange={(e) => handleInput(e)}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                                            type="submit"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default EditModal;
