# Google OAuth Setup Guide - Step by Step

Follow these steps to enable "Sign in with Google" for your users.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click the project dropdown at the top (next to "Google Cloud")
4. Click **"New Project"**
5. Fill in:
   - **Project name**: `AI-gorithms` (or any name you prefer)
   - **Organization**: Leave as default (or select if you have one)
6. Click **"Create"**
7. Wait for the project to be created (takes a few seconds)
8. Select your new project from the dropdown

## Step 2: Enable Google+ API

1. In the Google Cloud Console, click the **☰ (hamburger menu)** in the top left
2. Go to **"APIs & Services"** → **"Library"**
3. In the search bar, type: `Google+ API`
4. Click on **"Google+ API"** from the results
5. Click the **"Enable"** button
6. Wait for it to enable (usually instant)

> **Note**: Google+ API is used for OAuth authentication. Even though Google+ is deprecated, this API is still needed for OAuth.

## Step 3: Configure OAuth Consent Screen

1. In the Google Cloud Console, go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** user type (unless you have a Google Workspace)
3. Click **"Create"**

### Fill in the OAuth Consent Screen:

**App information:**

- **App name**: `AI-gorithms` (or your preferred name)
- **User support email**: Select your email from the dropdown
- **App logo**: (Optional) Upload a logo if you have one
- **App domain**: (Optional) Leave blank for now
- **Application home page**: `https://your-domain.com` (or `http://localhost:3000` for testing)
- **Application privacy policy link**: (Optional) Leave blank for now
- **Application terms of service link**: (Optional) Leave blank for now
- **Authorized domains**: Leave blank for now

**Developer contact information:**

- **Email addresses**: Your email (should be pre-filled)

4. Click **"Save and Continue"**

**Scopes:**

- Click **"Add or Remove Scopes"**
- Check the box for:
  - `.../auth/userinfo.email`
  - `.../auth/userinfo.profile`
- Click **"Update"**
- Click **"Save and Continue"**

**Test users:**

- For testing, you can add your own email address
- Click **"Add Users"**
- Enter your email and click **"Add"**
- Click **"Save and Continue"**

**Summary:**

- Review everything
- Click **"Back to Dashboard"**

## Step 4: Create OAuth 2.0 Credentials

1. In Google Cloud Console, go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"OAuth client ID"**

### Configure OAuth Client:

**Application type**: Select **"Web application"**

**Name**: `AI-gorithms Web Client` (or any name)

**Authorized JavaScript origins:**

- Click **"+ ADD URI"**
- For local development: `http://localhost:3000`
- For production: `https://your-domain.com`
- Add both if you want to test locally and in production

**Authorized redirect URIs:**

- Click **"+ ADD URI"**
- You need to add your Supabase callback URL:
  - Format: `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`
  - To find your project ref:
    1. Go to your Supabase dashboard
    2. Go to **Settings** → **API**
    3. Look at your **Project URL**: `https://xxxxx.supabase.co`
    4. The `xxxxx` part is your project ref
  - Example: `https://abcdefghijklmnop.supabase.co/auth/v1/callback`

4. Click **"Create"**

## Step 5: Copy Your Credentials

After creating the OAuth client:

1. A popup will appear with your credentials
2. **IMPORTANT**: Copy these now (you won't see them again!)
   - **Client ID**: (starts with something like `123456789-abc...`)
   - **Client Secret**: (starts with something like `GOCSPX-...`)
3. If you missed them, you can find them later:
   - Go to **"Credentials"** in Google Cloud Console
   - Click on your OAuth 2.0 Client ID
   - You'll see the Client ID (but not the secret - you'll need to create a new one if lost)

## Step 6: Add Credentials to Supabase

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your **AI-gorithms** project
3. Go to **"Authentication"** → **"Providers"** in the left sidebar
4. Find **"Google"** in the list
5. Click the toggle to **Enable** Google provider
6. Fill in:
   - **Client ID (for OAuth)**: Paste your Google Client ID
   - **Client Secret (for OAuth)**: Paste your Google Client Secret
7. Click **"Save"**

## Step 7: Test Google OAuth

1. Make sure your dev server is running:

   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/login`

3. Click **"Continue with Google"**

4. You should be redirected to Google's sign-in page

5. Sign in with your Google account

6. You should be redirected back to your app at `/profile`

## Troubleshooting

### "Error 400: redirect_uri_mismatch"

- **Problem**: The redirect URI in Google Cloud doesn't match Supabase's callback URL
- **Solution**:
  1. Go to Google Cloud Console → Credentials
  2. Click on your OAuth 2.0 Client ID
  3. Make sure the redirect URI is exactly: `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`
  4. Save and wait a few minutes for changes to propagate

### "Access blocked: This app's request is invalid"

- **Problem**: OAuth consent screen not properly configured
- **Solution**:
  1. Go to OAuth consent screen in Google Cloud Console
  2. Make sure you've completed all steps (especially adding test users if in testing mode)
  3. Make sure the app is published (if you want public access)

### "Error: invalid_client"

- **Problem**: Client ID or Client Secret is incorrect in Supabase
- **Solution**:
  1. Double-check the credentials in Supabase
  2. Make sure there are no extra spaces
  3. Regenerate credentials in Google Cloud if needed

### Google Sign-in button not working

- **Problem**: Google provider not enabled in Supabase
- **Solution**:
  1. Go to Supabase → Authentication → Providers
  2. Make sure Google is enabled (toggle is ON)
  3. Make sure credentials are saved

## Production Checklist

Before going to production:

- [ ] Add your production domain to **Authorized JavaScript origins** in Google Cloud
- [ ] Add your production domain to **Authorized redirect URIs** in Google Cloud
- [ ] Update **Application home page** in OAuth consent screen
- [ ] Add **Privacy Policy** and **Terms of Service** URLs (required for production)
- [ ] Publish your OAuth app (if you want public access)
- [ ] Test with a non-test user account

## Next Steps

Once Google OAuth is working:

- Users can sign in with their Google accounts
- Profile information (name, email) will be automatically synced
- No password needed!
