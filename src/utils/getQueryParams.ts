export const getQueryParams = (
    paramsString: string,
    requiredKey: string
): string | null => {
    try {
        const searchParams: any = new URLSearchParams(paramsString)
        // const params: any = Object.fromEntries(searchParams.entries());
        // console.log("paramsString", paramsString)
        // console.log("searchParams", searchParams.get(requiredKey))
        // console.log("params", params)
        console.log("requiredKey", requiredKey)
        console.log("searchParams.get(requiredKey)", searchParams.get(requiredKey))
        if (searchParams && searchParams.get(requiredKey)) {
            console.log("jhere")
            return searchParams.get(requiredKey)
        }
        return ''
    } catch (e) {
        console.log("catch", e)
        return ''
    }
}
