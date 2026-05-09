# Form Email Guide

This project uses a shared server-side lead form flow for:

- Book a Demo
- Contact forms
- Whitepaper / newsletter request forms

The current implementation is temporary but production-suitable for Azure deployment.

## How the form works

### 1. Frontend form submission

Frontend pages submit through:

- `src/lib/leadApi.ts`

That helper posts JSON to:

- `/api/leads`

### 2. API route

The shared handler is:

- `src/app/api/leads/route.ts`

It does the following:

1. Validates the payload with `zod`
2. Checks the honeypot field `website`
3. Applies a basic in-memory rate limit
4. Optionally forwards the lead to a webhook
5. Sends an email using SMTP via `nodemailer`

### 3. Mail delivery

The API route sends mail server-side only.

Credentials must never be stored in the frontend.

## Current form payload

The route accepts:

- `type` = `demo | contact | newsletter`
- `firstName`
- `lastName`
- `email`
- `company`
- `role`
- `phone`
- `message`
- `interests`
- `locale`
- `sourcePath`
- `website` (honeypot)

## Current email structure

Each form sends:

- subject based on lead type
- structured text body
- structured HTML body
- `replyTo` set to the submitter email

### Current subjects

- `Book a Demo Request - Euroland IR`
- `Contact Form Enquiry - Euroland IR`
- `Whitepaper / Newsletter Request - Euroland IR`

## Locale-based recipient routing

Recipient routing is handled in:

- `src/app/api/leads/route.ts`

### Current defaults

#### English

- `uk_office@euroland.com`
- `Sweden_Office@euroland.com`
- `Dubai_Office@euroland.com`

#### Japanese

- `japan.office@euroland.com`

#### Simplified Chinese

- `ShanghaiOffice@euroland.com`

#### Traditional Chinese

- `HongKongOffice@euroland.com`

#### Spanish

- `Argentina_Office@azureeuroland.onmicrosoft.com`
- `Sweden_Office@euroland.com`

#### French

- `uk_office@euroland.com`
- `Sweden_Office@euroland.com`

#### Portuguese

- `Argentina_Office@azureeuroland.onmicrosoft.com`
- `Sweden_Office@euroland.com`
- `uk_office@euroland.com`

### Optional Azure overrides

If you want to override routing without editing code, set these environment variables:

- `LEAD_TO_EMAIL`
- `LEAD_TO_EMAIL_EN`
- `LEAD_TO_EMAIL_JA`
- `LEAD_TO_EMAIL_ZH`
- `LEAD_TO_EMAIL_ZH_TW`
- `LEAD_TO_EMAIL_ES`
- `LEAD_TO_EMAIL_FR`
- `LEAD_TO_EMAIL_PT`
- `LEAD_TO_EMAIL_KO`
- `LEAD_TO_EMAIL_AR`

If an override exists, it takes precedence over the hardcoded defaults.

## Azure environment variables

These must be added in Azure App Settings:

```env
SMTP_HOST=your.smtp.host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=info@euroland.com
```

Optional:

```env
LEAD_TO_EMAIL=info@euroland.com
LEAD_TO_EMAIL_EN=...
LEAD_TO_EMAIL_JA=...
LEAD_TO_EMAIL_ZH=...
LEAD_TO_EMAIL_ZH_TW=...
LEAD_TO_EMAIL_ES=...
LEAD_TO_EMAIL_FR=...
LEAD_TO_EMAIL_PT=...
LEAD_TO_EMAIL_KO=...
LEAD_TO_EMAIL_AR=...
```

Optional webhook support:

```env
LEAD_WEBHOOK_URL=...
LEAD_WEBHOOK_TOKEN=...
```

## How to connect a new form

### Option A: Use the shared helper

Import:

- `submitLead` from `src/lib/leadApi.ts`

Then submit:

```ts
await submitLead({
  type: "demo",
  firstName,
  lastName,
  email,
  company,
  role,
  phone,
  message,
  interests: [],
  locale: lang,
  sourcePath: pathname,
  website: "",
});
```

### Option B: Post directly to the API

POST JSON to:

- `/api/leads`

with the same payload shape.

## Spam protection in place

The route currently includes:

- honeypot field: `website`
- in-memory rate limiting

This is acceptable for temporary launch use, but stronger protection can be added later:

- CAPTCHA
- persistent rate limiting
- CRM integration

## Deployment notes

This is suitable for Azure deployment as long as:

1. SMTP settings are configured in App Settings
2. secrets are server-side only
3. forms are tested after deployment

## Recommended post-deploy test

After deployment, test at least:

1. English Book Demo form
2. Japanese Book Demo form
3. Simplified Chinese form
4. Traditional Chinese form
5. Spanish / French / Portuguese form

Verify:

- the submission succeeds in the UI
- the correct office inbox receives the email
- `Reply-To` is set correctly

