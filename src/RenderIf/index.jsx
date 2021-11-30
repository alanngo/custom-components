
import React from 'react'; 
export const RenderIf = (
    {
        condition = false,
        children = <></>,
        fallback = <></>
    }) =>
(
    <>
        {(condition ? children : fallback)}
    </>
)

export default RenderIf
