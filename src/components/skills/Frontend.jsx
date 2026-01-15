import React from 'react'

const Frontend = () => {
    return (
        <div className="bg-container border border-[rgba(0,0,0,0.1)] p-[2rem_4rem] rounded-[1.25rem] sm:p-6 xs:p-4">
            <h3 className="text-normal font-medium text-center mb-6">Frontend</h3>

            <div className="flex justify-center gap-x-10 xs:gap-x-5">
                <div className="grid items-start gap-y-4">

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">React js</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Next js</h3>
                            <span className="text-tiny">Basic</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Tailwind CSS</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                </div>

                <div className="grid items-start gap-y-4">

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Javascript</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">TypeScript</h3>
                            <span className="text-tiny">Basic</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">GIT</h3>
                            <span className="text-tiny">Advanced</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Frontend
