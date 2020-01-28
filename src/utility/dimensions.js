export const windowWidth = window.innerWidth - 30;
export const windowHeight = window.innerHeight;
export const buttonWidth = window.innerWidth > 600 ? 100 : 50;
export const featureWidth = windowWidth - buttonWidth * 2;
export const offSetButtonWidth = buttonWidth;
// export const buttonRowWidth = featureWidth * 0.6;
export const column60Width = featureWidth * 0.6;
export const column40Width = featureWidth * 0.4;
// export const headerHeightOffset = 
export const column60FSWidth =
  windowWidth > 600 ? featureWidth * 0.6 : featureWidth;
export const column40FSWidth =
  windowWidth > 600 ? featureWidth * 0.4 : featureWidth;
  export const scrollbarWidth = window.outerWidth - window.innerWidth;