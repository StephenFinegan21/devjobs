import React from 'react'

const Filter = () => {
    return (
        <div class="w-4/5 mx-auto h-20 bg-white relative -translate-y-7	grid grid-cols-3">
            <div class="w-full border border-gray-100 p-6">
                <p class='text-gray-400'>Filter by title, companies, expertise</p>
            </div>
            <div class="w-full border border-gray-100 p-6" >
                <p class='text-gray-400'>Filter by Location</p>
            </div>
            <div class="w-full border border-gray-100 p-6">
                <p class='text-gray-400'>3</p>
            </div>
        </div>
    )
}

export default Filter
