// Set Custom Component Styles
export const windowWidth = window.innerWidth;
export const windowHeight = window.innerHeight;
export const buttonWidth = window.innerWidth > 600 ? 100 : 50;
export const featureWidth = windowWidth - buttonWidth * 2;
export const offSetButtonWidth = buttonWidth;
export const buttonRowWidth = featureWidth * 0.6;
export const headerWidth =
         windowWidth > 600 ? featureWidth * 0.6 : featureWidth;
export const searchWidth =
         windowWidth > 600 ? featureWidth * 0.4 : featureWidth;