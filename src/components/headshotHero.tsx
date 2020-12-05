import React, { ReactElement } from 'react'

import Headshot from './headshot'

const HeadshotHero = (): ReactElement => {
    return (
        <div className={'headshotImage'}>
            <Headshot />
            <div className={'headshotTitle'}>
               <div className={'fluxName'}>Dean McHugh</div> 
               <div className={'fluxTitle'}>Web Developer</div>
            </div>
        </div>
    )
}

export default HeadshotHero