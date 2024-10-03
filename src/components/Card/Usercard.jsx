import React from 'react'

export const Usercard = ({
    CustomClass,
    Heading,
    Text,
    Icon
}) => {
  return (
   <>
    <div class={`relative bg-white shadow-md rounded-lg p-4 ${CustomClass}`}>
            <div class="text-[1rem] .poppins font-[600] text-black ">
              {Heading}
            </div>

            <div class="text-[6rem] smooch-sans font-[600] text-black mt-2">
              {Text}
            </div>

            <div class="absolute top-0 right-0  p-2 rounded">
              <img src={Icon} alt="User Icon" class="w-12 h-12" />
            </div>
          </div>
   </>
  )
}
