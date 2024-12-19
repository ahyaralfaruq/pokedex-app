export const DataMetaData = {
  title: "Pokedex App",
  applicationName: "Pokedex App",
  description: "Create simple app pokedex app",
  keywords: "pokedex app, example app, practice app, next js app, next js project, nextjs app, nextjs project, mini app",
  category: "web app, website, simple app",
  publisher: "Muhammad Ahyar",
  creator: "Muhammad Ahyar",
  generator: "Pokedex App",
  referrer: "origin",
  abstract: "Create simple app pokedex app",
  metadataBase: new URL('https://acme.com'),
  archives: ['https://nextjs.org/13'],
  assets: ['https://nextjs.org/assets'],
  bookmarks: ['https://nextjs.org/13'],
  manifest: 'https://nextjs.org/manifest.json',
  classification: "pokedex app, example app, practice app, next js app, next js project, nextjs app, nextjs project, mini app",
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', 'https://example.com'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { 
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
    types: {
      'application/rss+xml': [
        { url: 'blog.rss', title: 'rss' },
        { url: 'blog/js.rss', title: 'js title' },
      ],
    }
  },
  appleWebApp: {
    title: "Pokedex App",
    capable: true,
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
    statusBarStyle: "black-translucent",
  },
  appLinks: {
    android: {
      package: "com.example.android/package",
      app_name: "Pokedex App",
      class: "pokedex",
      url: "/",
    },
    ios: {
      url: "https://nextjs.org/ios",
      app_name: "Pokedex App",
      app_store_id: "12345"
    },
    ipad: {
      url: "https://nextjs.org/ipad",
      app_name: "Pokedex App",
      app_store_id: "12345"
    },
    iphone: {
      url: "https://nextjs.org/iphone",
      app_name: "Pokedex App",
      app_store_id: "12345"
    },
    web: [
      {
        url: "https://nextjs.org/web",
        should_fallback: true,
      },
    ],
    windows: {
      url: "https://nextjs.org/windows",
      app_id: "123456",
      app_name: "Pokedex App"
    },
    windows_phone: {
      url: "https://nextjs.org/phone",
      app_id: "123456",
      app_name: "Pokedex App"
    },
    windows_universal: {
      url: "https://nextjs.org/windows_universal",
      app_id: "123456",
      app_name: "Pokedex App"
    }
  },
  facebook: {
    admins: "12345678",
    // appId: "12345678",
  },
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false
  },
  itunes: {
    appId: "1234567",
    appArgument: "1234567"
  },
  authors: [
    {
      name: "John Doe"
    },
    {
      name: "Muhammad Ahyar",
      url: "https://github.com/ahyaralfaruq"
    },
    {
      name: "Ahyar Alfaruq",
      url: "https://github.com/booyars"
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    title: "Pokedex App",
    description: "Create simple app pokedex app",
    images: "https://example.com/images/twitter-image.jpg",
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  openGraph: {
    title: "Pokedex App",
    description: "Create simple app pokedex app",
    siteName: "Pokedex App",
    url: "https://nextjs.org",
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    type: "website",
    countryName: "Indonesia",
    emails: "ahyaralfaruq97@gmail.com",
    locale: "id_ID",
    alternateLocale: ["id_ID", "en_En"],
    determiner: "auto",
    ttl: 0,
    phoneNumbers: "09876543210",
    faxNumbers: "09876543210",
  },
  other: {
    instagram: ['https://instagram.com/ayar.js', 'https://instagram.com/booyar'],
    "theme-color": '#000000',
  },
};