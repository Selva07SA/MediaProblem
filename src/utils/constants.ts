// Application constants

export const COMPANY_NAME = 'MediaProblem';
export const COMPANY_EMAIL = 'info@mediaproblem.com';
export const COMPANY_PHONE = '+1 (555) 123-4567';

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/mediaproblem',
  instagram: 'https://instagram.com/mediaproblem',
  twitter: 'https://twitter.com/mediaproblem',
  linkedin: 'https://linkedin.com/company/mediaproblem',
};

export const ANIMATIONS = {
  duration: 0.6,
  easing: [0.4, 0, 0.2, 1],
};

export const BREAKPOINTS = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const ROUTES = {
  home: '/',
  services: '/#services',
  portfolio: '/#portfolio',
  contact: '/contact',
};

export const SERVICES_LIST = [
  'SaaS Explanation videos',
  'Short Form videos',
  'long form videos',
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: ANIMATIONS.duration },
  },
  slideIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATIONS.duration },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: ANIMATIONS.duration },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: ANIMATIONS.duration },
  },
};
