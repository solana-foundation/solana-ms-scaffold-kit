# Environment Variables Documentation

This project uses [@t3-oss/env-nextjs](https://github.com/t3-oss/t3-env) for type-safe environment variables and [Zod](https://zod.dev/) for runtime validation.

## Structure

The environment variables are divided into two categories:

- **Server-side**: Only available on the server
- **Client-side**: Available both on client and server (must be prefixed with `NEXT_PUBLIC_`)

## Variables Reference

### Server-side Variables

| Variable              | Purpose                                                          | Required |
| --------------------- | ---------------------------------------------------------------- | -------- |
| `NODE_ENV`            | Defines the environment ('development', 'production', or 'test') | Yes      |
| `SANITY_VIEWER_TOKEN` | Authentication token for Sanity CMS viewer                       | No       |

### Client-side Variables

| Variable                        | Purpose                               | Required |
| ------------------------------- | ------------------------------------- | -------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity CMS project identifier         | Yes      |
| `NEXT_PUBLIC_SANITY_DATASET`    | Sanity CMS dataset name               | Yes      |
| `NEXT_PUBLIC_APP_URL`           | Base URL of the application           | Yes      |
| `NEXT_PUBLIC_APP_NAME`          | Full name of the application          | Yes      |
| `NEXT_PUBLIC_APP_SHORT_NAME`    | Short name/acronym of the application | Yes      |
| `NEXT_PUBLIC_APP_DESCRIPTION`   | Brief description of the application  | Yes      |
| `NEXT_PUBLIC_APP_START_URL`     | Initial URL path for the application  | Yes      |
| `NEXT_PUBLIC_GA_ID`             | Google Analytics identifier           | No       |
| `NEXT_PUBLIC_GTM_ID`            | Google Tag Manager identifier         | No       |
| `DEBUG`                         | Enables debug mode when set           | No       |

## Setup Instructions

1. Create a `.env` file in the root directory
2. Copy the contents of `.env.example` (if available) to start with a template
3. Fill in the required variables according to your environment

## Maintenance Guidelines

1. **Adding New Variables**:

   - Server-only variables go in the `server` object
   - Client-accessible variables go in the `client` object (prefix with `NEXT_PUBLIC_`)
   - Add validation schema using Zod
   - Include the variable in the `runtimeEnv` object

2. **Validation**:
   - All variables are validated at runtime using Zod schemas
   - Required variables will throw an error if not provided
   - Optional variables should use `z.string().optional()`

## Related Libraries

- [T3 Env](https://github.com/t3-oss/t3-env) - Type-safe environment variables
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Sanity CMS](https://www.sanity.io/docs) - For CMS-related environment variables
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

## Security Considerations

1. Never commit `.env` files to version control
2. Use different values for different environments
3. Regularly rotate sensitive tokens
4. Keep the number of client-exposed variables to a minimum
