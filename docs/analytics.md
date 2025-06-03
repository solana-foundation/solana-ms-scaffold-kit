# Analytics

## Overview

This project uses [@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries) for integrating Google Analytics and Google Tag Manager in a Next.js optimized way.

## Implemented Services

### Google Analytics

- **Package**: `@next/third-parties/google`
- **Component**: `GoogleAnalytics`
- **Documentation**: [Next.js Google Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics)

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// Usage in layout.tsx
{env.NEXT_PUBLIC_GA_ID && isProduction && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
```

### Google Tag Manager

- **Package**: `@next/third-parties/google`
- **Component**: `GoogleTagManager`
- **Documentation**: [Next.js Google Tag Manager](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager)

```typescript
import { GoogleTagManager } from '@next/third-parties/google'

// Usage in layout.tsx
{env.NEXT_PUBLIC_GTM_ID && isProduction && <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />}
```

## Configuration

### Environment Variables

Required environment variables for analytics setup (optional features):

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | No |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager Container ID | No |

For detailed environment variable setup, refer to [Environment Variables Documentation](docs/env.md).

## Related Resources

- [Next.js Third Parties Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
