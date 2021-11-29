
import React from 'react';
import { createBreak } from './helper';
export const Break = ({ number = 1 }) =>(<>{createBreak(number).map(e => <br key={e} />)}</>)
export default Break

