// SolarAim - Solar Panel Positioning App
// Global constants for SEO and branding

export const SITE_TITLE = 'SolarAim - Solar Panel Angle Calculator';
export const SITE_DESCRIPTION = 'Free app that calculates your solar panel tilt angle. Uses your location, shows seasonal adjustments, works with bifacial panels. Point your phone camera at your panels to see the target angle.';

export const SITE_KEYWORDS = 'solar panel angle calculator, solar panel tilt calculator, best angle for solar panels, bifacial solar panel, solar panel positioning app, seasonal solar panel adjustment';

// Brand colors from CLAUDE.md
export const BRAND_COLORS = {
  primary: {
    sunshineYellow: '#F9A825',
    softGold: '#FFD54F',
    lightGold: '#FFECB3',
  },
  secondary: {
    grassGreen: '#2E7D32',
    freshGreen: '#81C784',
    softSage: '#C5E1A5',
    earthBrown: '#8D6E63',
  },
  backgrounds: {
    pureWhite: '#FFFFFF',
    softCream: '#FFFDF7',
    warmGray: '#F5F5F5',
  },
  accents: {
    skyBlue: '#4FC3F7',
    lightSky: '#B3E5FC',
  },
  text: {
    dark: '#212121',
    muted: '#757575',
  },
};

// Download page anchors
export const APP_STORE_URL = '/sunseeker/download#ios';
export const PLAY_STORE_URL = '/sunseeker/download#android';

// Direct Android beta APK. The app source repo is private, so the APK is published
// as a public GitHub Release asset on this (public) sunseeker repo.
// `releases/latest/download/...` always resolves to the newest published release.
export const ANDROID_APK_URL =
  'https://github.com/BlaineHeffron/sunseeker/releases/latest/download/SolarAim-android-universal.apk';

// iOS beta is not yet available (no free public sideload path; TestFlight pending).
export const IOS_BETA_AVAILABLE = false;
export const IOS_TESTFLIGHT_URL = '';

// Social links. GITHUB_URL is the public repo that also hosts releases + the public
// issue tracker for beta feedback (the app source repo is private).
export const GITHUB_URL = 'https://github.com/BlaineHeffron/sunseeker';
