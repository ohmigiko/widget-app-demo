import React, { useState } from 'react';
import SelectedWidgetModal from './SelectedWidgetModal';
import WidgetCard from '../../WidgetList';
import Timer from '../Widgets/Timer';

const AddWidgetModal = ({
    showAddWidgetModal,
    setShowAddWidgetModal,
    addWidget
}) => {
    const [showSelectedModal, setShowSelectedModal] = useState(false);
    const [selectedWidget, setSelectedWidget] = useState('');
    const [placeholderText, setPlaceholderText] = useState('');

    const closeAddWidgetModal = () => {
        setShowAddWidgetModal(false);
    };

    const openSelectedWidgetModal = (widgetName, text) => {
        setShowAddWidgetModal(false);
        setShowSelectedModal(true);
        setSelectedWidget(widgetName);
        setPlaceholderText(text);
    };

    const addTimer = () => {
        const randomID = Math.floor(Math.random() * 10000);
        setShowAddWidgetModal(false);
        addWidget({
            id: randomID,
            name: 'Timer',
            widget: <Timer />
        });
    };

    return (
        <div>
            {showAddWidgetModal ? (
                <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
                    <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
                        <button
                            className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
                            onClick={closeAddWidgetModal}
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
                            <h2 className="text-xl undefined">Add widget</h2>
                            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div
                                        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        onClick={() =>
                                            openSelectedWidgetModal(
                                                'JustSay',
                                                'Enter text'
                                            )
                                        }
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            JustSay
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                            ></path>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            JustShout
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div
                                        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        onClick={() =>
                                            openSelectedWidgetModal(
                                                'Counter',
                                                'Enter the initial value'
                                            )
                                        }
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                ></path>
                                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm5 6h2v2H9v2H7v-2H5v-2h2V9h2v2zm4 0h6v2h-6v-2z"></path>
                                            </g>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            Counter
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div
                                        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        onClick={addTimer}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="32"
                                                d="M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152"
                                            ></path>
                                            <path d="M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z"></path>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            Timer
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            version="1.2"
                                            baseProfile="tiny"
                                            viewBox="0 0 24 24"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path d="M14.5 3l-1 3-1-3c-.184-.553.114-1.149.666-1.333.553-.185 1.15.114 1.334.666.075.226.07.458 0 .667zM19.864 6.05l-2.829 1.415 1.415-2.829c.261-.521.894-.731 1.414-.472.521.261.731.894.472 1.415-.107.212-.274.372-.472.471zM21.5 12l-3-1 3-1c.553-.185 1.149.114 1.334.667.184.552-.115 1.148-.668 1.333-.225.075-.457.069-.666 0zM8.55 4.636l1.415 2.829-2.829-1.415c-.521-.261-.732-.894-.472-1.414.261-.521.895-.731 1.414-.472.213.107.373.274.472.472zM17.776 12.342c.139-.424.224-.871.224-1.342 0-2.481-2.019-4.5-4.5-4.5-1.34 0-2.537.594-3.357 1.528l-.143-.028c-1.776 0-3.369.78-4.469 2.011-.24-.08-.472-.086-.697-.011-.553.185-.852.781-.668 1.333.057.167.158.299.277.411-.283.697-.443 1.458-.443 2.256l.002.126c-1.725.445-3.002 2.013-3.002 3.874 0 2.206 1.795 4 4 4h11c2.757 0 5-2.243 5-5 0-2.129-1.344-3.939-3.224-4.658zm-4.276-3.842c1.379 0 2.5 1.121 2.5 2.5 0 .366-.096.706-.238 1.019-.354.021-.72.074-1.118.188-.521-1.353-1.604-2.415-2.967-2.905.456-.49 1.102-.802 1.823-.802zm2.5 11.5h-11c-1.104 0-2-.897-2-2s.896-2 1.908-2.006l1.422.016-.248-1.202c-.055-.263-.082-.536-.082-.808 0-2.206 1.795-4 4-4l.069-.014c1.904.055 3.495 1.406 3.847 3.27l.038.186c.123.436.517.706.946.712l.289-.023c.312-.09.569-.131.811-.131 1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path>
                                            </g>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            Weather
                                        </h3>
                                    </div>
                                </div>
                                <div className="w-1/3 pt-1.5 pl-1.5">
                                    <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="mx-auto text-4xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M169.344 35.844A9.5 9.5 0 0 0 160 45.47v117.343H45.5a9.5 9.5 0 1 0 0 19H160v151H45.5a9.5 9.5 0 1 0 0 19H160V466.5a9.5 9.5 0 1 0 19 0V351.812h151V466.5a9.5 9.5 0 1 0 19 0V351.812h117.406a9.5 9.5 0 1 0 0-19H349v-151h115.563a9.5 9.5 0 1 0 0-19H349V45.47a9.5 9.5 0 0 0-9.656-9.626A9.5 9.5 0 0 0 330 45.47v117.343H179V45.47a9.5 9.5 0 0 0-9.656-9.626zM86 35.97c-13.07 0-25.77 4.94-35.156 13.843C41.458 58.715 36 71.06 36 83.874c0 12.814 5.458 25.16 14.844 34.063C60.23 126.84 72.93 131.81 86 131.81c13.07 0 25.77-4.97 35.156-13.875C130.542 109.034 136 96.69 136 83.876c0-12.814-5.458-25.16-14.844-34.063C111.77 40.91 99.07 35.97 86 35.97zm170 0c-13.07 0-25.77 4.94-35.156 13.843C211.458 58.715 206 71.06 206 83.874c0 12.814 5.458 25.16 14.844 34.063C230.23 126.84 242.93 131.81 256 131.81c13.07 0 25.77-4.97 35.156-13.875C300.542 109.034 306 96.69 306 83.876c0-12.814-5.458-25.16-14.844-34.063C281.77 40.91 269.07 35.97 256 35.97zm138.844 9.218A9.5 9.5 0 0 0 388.25 61.5l22.375 22.375L389 105.5a9.502 9.502 0 1 0 13.438 13.438l21.625-21.626 22.375 22.407a9.502 9.502 0 1 0 13.437-13.44L437.5 83.876l21.625-21.625a9.5 9.5 0 0 0-6.906-16.313 9.5 9.5 0 0 0-6.533 2.876l-21.625 21.624-22.375-22.374a9.5 9.5 0 0 0-6.843-2.876zM86 54.968c8.137 0 16.485 3.337 22.094 8.657 5.608 5.32 8.937 12.95 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.304-22.094-8.624c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.302 3.328-14.93 8.936-20.25 5.61-5.32 13.957-8.657 22.094-8.657zm170 0c8.137 0 16.485 3.337 22.094 8.657 5.608 5.32 8.937 12.95 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.304-22.094-8.624c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.302 3.328-14.93 8.936-20.25 5.61-5.32 13.957-8.657 22.094-8.657zm-77 126.844h151v151H179v-151zm245.063 26.282c-13.07 0-25.77 4.94-35.157 13.844-9.386 8.903-14.844 21.248-14.844 34.062 0 12.814 5.458 25.16 14.844 34.063 9.386 8.903 22.087 13.875 35.156 13.875 13.07 0 25.77-4.972 35.157-13.875 9.385-8.904 14.842-21.25 14.842-34.063 0-12.814-5.457-25.16-14.843-34.063-9.387-8.903-22.088-13.843-35.158-13.843zm-197.25 9.22a9.5 9.5 0 0 0-6.625 16.31L242.563 256l-21.625 21.625a9.502 9.502 0 1 0 13.437 13.438L256 269.438l22.375 22.375a9.502 9.502 0 1 0 13.438-13.438L269.438 256l21.625-21.625a9.5 9.5 0 0 0-6.907-16.313 9.5 9.5 0 0 0-6.53 2.875L256 242.563l-22.375-22.375a9.5 9.5 0 0 0-6.813-2.875zm197.25 9.78c8.136 0 16.485 3.305 22.093 8.625 5.61 5.32 8.938 12.98 8.938 20.28 0 7.3-3.33 14.93-8.938 20.25-5.608 5.32-13.957 8.656-22.094 8.656-8.136 0-16.485-3.336-22.093-8.656-5.61-5.32-8.94-12.95-8.94-20.25 0-7.3 3.33-14.96 8.94-20.28 5.607-5.32 13.956-8.626 22.092-8.626zM256 380.156c-13.07 0-25.77 4.94-35.156 13.844-9.386 8.903-14.844 21.25-14.844 34.063 0 12.813 5.458 25.19 14.844 34.093C230.23 471.06 242.93 476.03 256 476.03c13.07 0 25.77-4.97 35.156-13.874 9.386-8.903 14.844-21.28 14.844-34.094 0-12.813-5.458-25.16-14.844-34.062-9.386-8.903-22.087-13.844-35.156-13.844zm-199.188 9.22a9.5 9.5 0 0 0-6.624 16.312l22.374 22.406L50.94 449.72a9.502 9.502 0 1 0 13.437 13.436L86 441.53l22.375 22.376a9.502 9.502 0 1 0 13.438-13.437l-22.376-22.376 21.626-21.625a9.5 9.5 0 0 0-6.907-16.314 9.5 9.5 0 0 0-6.53 2.875L86 414.657 63.625 392.25a9.5 9.5 0 0 0-6.813-2.875zM256 399.187c8.137 0 16.485 3.304 22.094 8.625 5.608 5.32 8.937 12.948 8.937 20.25 0 7.3-3.328 14.96-8.936 20.28-5.61 5.32-13.957 8.626-22.094 8.626s-16.485-3.306-22.094-8.626c-5.608-5.32-8.937-12.98-8.937-20.28 0-7.303 3.328-14.93 8.936-20.252 5.61-5.32 13.957-8.625 22.094-8.625z"></path>
                                        </svg>
                                        <h3 className="mt-1 font-semibold text-sm ">
                                            TicTacToe
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <SelectedWidgetModal
                showSelectedModal={showSelectedModal}
                setShowSelectedModal={setShowSelectedModal}
                selectedWidget={selectedWidget}
                placeholderText={placeholderText}
                addWidget={addWidget}
            />
        </div>
    );
};

export default AddWidgetModal;
