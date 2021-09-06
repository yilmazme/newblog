import sanityClient  from "@sanity/client";

export default sanityClient({
    projectId:"t8moewut",
    dataset:"production",
    apiVersion: '2021-08-31', // 
    useCdn: true, // `false` if you want to ensure fresh data
})