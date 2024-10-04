import React from 'react'
import Facebookicon from "../assets/images/Facebookicon.svg";
import Instagram from "../assets/images/Instagram.svg"
export const SocialMedia = () => {
  return (
   <>
   <div className='w-full h-full bg-white'>
   <div class="w-[40%] bg-white  px-4 py-6">
    <h2 class="text-[2rem] font-bold mb-4">Social Media Details</h2>

    <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-semibold">Added Social Platforms</h3>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-8 rounded">
            Add
        </button>
    </div>

    <div class="space-y-4">
       
        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div class="flex items-center">
                <img src={Facebookicon} alt="Facebook" class="w-8 h-8 mr-3"/>
                <span class="text-lg font-medium">Facebook</span>
            </div>
            <div class="flex space-x-4">
                <button class="text-blue-500 hover:underline">Edit</button>
                <button class="text-red-500 hover:underline">Remove</button>
            </div>
        </div>

       
        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <div class="flex items-center">
                <img src={Instagram} alt="Instagram" class="w-8 h-8 mr-3"/>
                <span class="text-lg font-medium">Instagram</span>
            </div>
            <div class="flex space-x-4">
                <button class="text-blue-500 hover:underline">Edit</button>
                <button class="text-red-500 hover:underline">Remove</button>
            </div>
        </div>
    </div>
</div>

</div>

   </>
  )
}
