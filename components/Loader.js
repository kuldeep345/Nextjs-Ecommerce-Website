import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="absolute top-10 left-[50%]">
            <Circles
                height="80"
                width="80"
                color="#00bbff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader