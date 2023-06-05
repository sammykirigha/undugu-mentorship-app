import { metadata } from 'next-sanity/studio/metadata'
import Head from 'next/head'

export default function CustomStudioHead() {
    return (
        <>
            <Head>
                {Object.entries(metadata).map(([key, value]) => (
                    <meta key={key} name={key} content={value} />
                ))}
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
                />
            </Head>
        </>
    )
}
