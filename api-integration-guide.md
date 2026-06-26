# UniMarket Technologies API Integration Guide

This guide defines the integration baseline for the marketing website and future lead-generation, support, POS, MRA EIS, and enterprise-product connections.

## Contents

- [UniMarket Technologies API Integration Guide](#unimarket-technologies-api-integration-guide)
  - [Contents](#contents)
  - [Environment variables](#environment-variables)
  - [Server-first client](#server-first-client)
  - [Recommended initial integrations](#recommended-initial-integrations)
  - [Contact submission flow](#contact-submission-flow)
  - [CORS](#cors)
  - [MRA EIS and payment integrations](#mra-eis-and-payment-integrations)
  - [Error model](#error-model)
  - [Security and privacy checklist](#security-and-privacy-checklist)
  - [Deployment checklist](#deployment-checklist)

---

## Environment variables

Keep server secrets unprefixed. Use `NEXT_PUBLIC_` only when a value must be present in browser JavaScript.

```env
API_BASE_URL=https://api.example.com/v1
NEXT_PUBLIC_SITE_URL=https://www.example.com
CONTACT_FORM_API_KEY=server-only-secret
```

Provide `.env.example` with names and safe placeholders; never commit real credentials.

## Server-first client

```ts
const API_BASE_URL = process.env.API_BASE_URL;

interface ApiOptions extends RequestInit {
  data?: unknown;
}

export async function apiFetch<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not configured');
  }

  const { data, headers, ...init } = options;
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...init,
    body: data === undefined ? init.body : JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
```

Keep this helper server-only when it attaches credentials. If browser requests are required, expose a narrow route handler rather than shipping privileged API keys.

## Recommended initial integrations

1. Consultation/contact form.
2. Newsletter or business-updates opt-in.
3. CRM lead creation.
4. Support enquiry or ticket handoff.
5. Case-study/content source.
6. Product demo request.

For each integration, define ownership, retention, consent, retry behavior, duplicate handling, and failure messaging before launch.

## Contact submission flow

The preferred pattern is:

```text
Browser form
  → Next.js server action or route handler
  → schema validation and spam/rate-limit checks
  → CRM/email/help-desk API
  → structured success or recoverable error
```

Do not expose vendor credentials in the browser. Log a correlation ID rather than sensitive form content. Give users a useful confirmation and an alternate phone/email route if submission fails.

## CORS

Avoid cross-origin browser requests where a same-origin Next.js route handler can proxy safely. If direct browser access is necessary, allow only explicit production and preview origins, required methods, and required headers. Never use wildcard origins with credentials.

## MRA EIS and payment integrations

Treat MRA EIS, payment-terminal, and financial integrations as regulated/high-trust boundaries:

- Confirm current requirements with official MRA and provider documentation.
- Keep credentials, certificates, signing material, and webhooks server-side.
- Verify webhook signatures and make handlers idempotent.
- Record audit events without logging full financial or personal payloads.
- Define reconciliation, retry, outage, and manual-recovery procedures.
- Do not claim certification or compliance until formally verified.

## Error model

Normalize expected errors:

```ts
interface ApiError {
  code: string;
  message: string;
  fieldErrors?: Record<string, string[]>;
  correlationId?: string;
}
```

User-facing messages should explain the next action. Detailed provider errors belong in secure observability, not the interface.

## Security and privacy checklist

- Validate and sanitize all external input.
- Add rate limiting and bot protection to public forms.
- Use least-privilege service credentials.
- Encrypt transport with HTTPS.
- Minimize collected personal information.
- Define retention and deletion rules.
- Redact secrets and sensitive values from logs.
- Review applicable Malawi data-protection and sector requirements before production.

## Deployment checklist

- Configure development, preview, and production variables separately.
- Verify allowed origins and callback URLs.
- Test successful, validation-error, timeout, duplicate, and provider-outage paths.
- Confirm observability and alert ownership.
- Rotate any credential exposed during development.
