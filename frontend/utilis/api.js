// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
    const global = await fetchAPI('/global')
    return global
  }