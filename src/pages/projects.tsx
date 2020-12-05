import React, { ReactElement } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Projects = (): ReactElement => {
    return (
        <Layout>
            <>
                <SEO title={'projects'} />
                <p>projects</p>
            </>
        </Layout>
    )
}

export default Projects