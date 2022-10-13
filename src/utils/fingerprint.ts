import Fingerprint from "@fingerprintjs/fingerprintjs";

let visitorId = ''

getFingerprint()

export function getFingerprint() {
    if (visitorId) return Promise.resolve(visitorId)
    return Fingerprint.load().then(fp => fp.get()).then(result => {
        return visitorId = result.visitorId
    })
}