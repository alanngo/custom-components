
import React from 'react'; 
export const RenderIf = (
    {
        condition = false,
        children = <></>,
        fallback = <>fallback jsx goes here</>
    }) =>
(
    <>
        {(condition ? children : fallback)}
    </>
)

export default RenderIf
