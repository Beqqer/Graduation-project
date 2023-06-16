export function* getToken (): any {
    const accessToken = localStorage.access

    const verifyResp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/verify/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'token': accessToken,
        })
    })
    if (verifyResp.status !== 200) {
        const refreshResp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'refresh': localStorage.refresh,
            })
        })

        const data: { access: string } = yield refreshResp.json()
        const { access } = data
        localStorage.setItem('access', access)
        return access
    }
    return accessToken
}