import React, { ReactElement } from 'react'

import HeadShot from './headShot'

const HeroImage = (): ReactElement => {
    return (
        <div className={'heroImage'}>
            <HeadShot />
            <div className={'heroTitle'}>
               <div className={'fluxName'}>Dean McHugh</div> 
               <div className={'fluxTitle'}>Web Developer</div>
            </div>
        </div>
    )
}

export default HeroImage