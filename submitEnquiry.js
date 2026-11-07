import { siteConfig } from '../config/site.js'

/**
 * Sends the enquiry to the endpoint configured in src/config/site.js.
 *
 * Returns:
 *  - { status: 'unconfigured' }  no endpoint configured, NOTHING was sent
 *  - { status: 'sent' }          the endpoint accepted the request (HTTP 2xx)
 * Throws on network / server errors.
 */
export async function submitEnquiry(values) {
  if (!siteConfig.formEndpoint) {
    return { status: 'unconfigured' }
  }

  const response = await fetch(siteConfig.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    throw new Error(`Submission failed with status ${response.status}`)
  }
  return { status: 'sent' }
}
