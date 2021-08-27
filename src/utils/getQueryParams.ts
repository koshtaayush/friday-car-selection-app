export const getQueryParams = (
    paramsString: string,
    requiredKey: string
): string | null => {
    try {
        const searchParams = new URLSearchParams(paramsString)

        if (searchParams && searchParams.has(requiredKey)) {
            return searchParams.get(requiredKey)
        }
        return ''
    } catch (e) {
        return ''
    }
}
