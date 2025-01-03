/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

// ----------------------------------------------------------------------
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';



// ----------------------------------------------------------------------

export const metadata = {
  title: 'Zone UI Kit',
  description:
    'The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.',
  keywords: 'react,material,kit,application,dashboard,admin,template',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
       <head>
        {/* 구글 폰트 링크 추가 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
         {/* Google Material Icons 링크 추가 */}
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'default', // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
