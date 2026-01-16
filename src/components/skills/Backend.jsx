import React from 'react'

const Backend = () => {
    return (
        <div className="bg-container border border-[rgba(0,0,0,0.1)] p-[1rem_1.25rem] rounded-[1.25rem] lg:p-[1rem_1rem] sm:p-4 xs:p-2">
            <h3 className="text-normal font-medium text-center mb-6">Backend</h3>

            <div className="flex justify-center gap-x-8 lg:gap-x-12 sm:gap-x-4 xs:gap-x-2">
                <div className="grid items-start gap-y-4">

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Node js</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Express js</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">MongoDB</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                </div>

                <div className="grid items-start gap-y-4">

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Python</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">MySQL</h3>
                            <span className="text-tiny">Intermediate</span>
                        </div>

                    </div>

                    <div className="flex gap-x-2">
                        <i class='bx bx-badge-check text-[1rem] text-title' ></i>

                        <div>
                            <h3 className="text-normal font-medium leading-[18px] xs:text-small">Firebase</h3>
                            <span className="text-tiny">Basic</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend
