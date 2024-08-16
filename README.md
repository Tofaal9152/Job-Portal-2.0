This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
<!-- notes -->

# Important Concepts and Code Snippets

This document serves as a reference for key concepts and code snippets that are useful in various web development scenarios, particularly when working with Next.js, JWTs, and handling requests.

## 1. **Setting Headers**

To set a custom header in a response:

```javascript
res.headers.set('xUserId', payload.userId);
```

### Explanation:
- **`xUserId`**: A custom header that stores the user ID from the JWT payload.
- **`payload.userId`**: The user ID extracted from the JWT payload.

## 2. **JWT Verification**

To verify a JWT using the `jwtVerify` function:

```javascript
const secret = new TextEncoder().encode(process.env.JWT_TOKEN);
const { payload } = await jwtVerify(token, secret);
```

### Explanation:
- **`secret`**: The encoded JWT secret from the environment variable `JWT_TOKEN`.
- **`jwtVerify`**: Verifies the provided `token` using the `secret` and returns the decoded payload.

## 3. **Getting Token from Cookies**

To retrieve a token from the request cookies:

```javascript
const token = req.cookies.get('token')?.value;
```

### Explanation:
- **`req.cookies.get('token')`**: Retrieves the cookie named `token`.
- **`?.value`**: Safely accesses the value of the cookie if it exists.

## 4. **Getting the User ID from Headers**

To extract a custom user ID from the request headers:

```javascript
const userId = req.headers.get("xUserId");
```

### Explanation:
- **`xUserId`**: The custom header containing the user ID.

## 5. **Handling Dynamic Routing in Next.js**

To get the dynamic `[id]` parameter from the URL:

```javascript
const _id = req.nextUrl.pathname.split('/').pop();
```

### Explanation:
- **`req.nextUrl.pathname`**: The full path of the current URL.
- **`.split('/').pop();`**: Splits the path into segments and retrieves the last segment, which is typically the dynamic ID.

## 6. **Extracting Keywords from the URL**

To extract query parameters (e.g., keywords) from the request URL:

```javascript
const { searchParams } = new URL(req.url);
const keyword = searchParams.get('keyword') || "";
```

### Explanation:
- **`new URL(req.url)`**: Parses the request URL.
- **`searchParams.get('keyword')`**: Retrieves the value of the `keyword` query parameter.
- **`|| ""`**: Provides a default empty string if the keyword is not present.
