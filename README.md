# NextAuth Authentication App

A modern authentication system built with Next.js 14, NextAuth.js, and Tailwind CSS featuring GitHub and Google OAuth providers with a sleek dark theme and smooth animations.

## ✨ Features

- 🔐 **Secure Authentication** - OAuth 2.0 with GitHub and Google
- 🎨 **Modern Dark UI** - Beautiful glassmorphism design with Tailwind CSS
- ⚡ **Smooth Animations** - Framer Motion powered interactions
- 📱 **Responsive Design** - Works perfectly on all devices
- 🛡️ **Session Management** - Secure session handling with NextAuth.js
- 🎯 **User Dashboard** - Comprehensive user profile and session details

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GitHub OAuth App
- Google OAuth App

### Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo>
cd nextauth-app
npm install
```

2. **Install required packages:**
```bash
npm install next-auth framer-motion lucide-react
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

4. **Configure OAuth providers:**

#### GitHub OAuth:
- Go to [GitHub Settings](https://github.com/settings/developers) > OAuth Apps
- Create new OAuth App
- Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
- Copy Client ID and Client Secret to `.env.local`

#### Google OAuth:
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create/select project > Credentials > OAuth 2.0 Client IDs
- Set Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
- Copy Client ID and Client Secret to `.env.local`

5. **Run the development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 🎨 UI Components

### Sign In Page
- Interactive GitHub and Google login buttons
- Smooth hover animations and transitions
- Security badges and feature highlights
- Responsive design with mobile optimization

### User Dashboard
- User profile with avatar display
- Account details and session information
- Provider identification (GitHub/Google)
- Real-time session status
- Secure logout functionality

## 🔧 Environment Variables

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Authentication:** NextAuth.js v5
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📝 Usage

1. **Sign In:** Users can authenticate using GitHub or Google
2. **Dashboard:** View user profile, account details, and session info
3. **Sign Out:** Secure logout with redirect to sign-in page


**Happy coding!** �