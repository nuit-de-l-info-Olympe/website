export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: any) => {
  // @ts-ignore
  if (window.dataLayer) {
    // @ts-ignore
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};
