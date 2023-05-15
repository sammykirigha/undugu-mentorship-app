import {createClient} from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!; //"4cu9frce"
export const dataset = process.env.NEXT_PUBLIC_DATASET!; //"production"
export const apiVersion = process.env.NEXT_PUBLIC_API_VERSION!; //"2022-11-15"

export const client = createClient({
    projectId: "4cu9frce",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: false
})