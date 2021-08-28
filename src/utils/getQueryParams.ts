export const getQueryParams = (
    paramsString: string,
    requiredKey: string
): string | null => {
    try {
        const searchParams: any = new URLSearchParams(paramsString)
        if (searchParams && searchParams.get(requiredKey)) {
            return searchParams.get(requiredKey)
        }
        return ''
    } catch (e) {
        console.log("catch", e)
        return ''
    }
}
