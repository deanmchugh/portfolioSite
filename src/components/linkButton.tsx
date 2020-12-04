import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core'

interface Props {
    link: string,
    label: string
}

const LinkButton = ({label, link}: Props): ReactElement => {
    return (
        <a href={link}>
            <Button>
                {label}
            </Button>
        </a>
    )
}

export default LinkButton