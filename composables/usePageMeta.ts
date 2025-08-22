export const usePageMeta = ({
  title,
  description,
  img,
}: {
  title?: string;
  description?: string;
  img?: string;
}) => {
  const { t } = useI18n();
  const metaTitle = `${title ? title + ' | ' : ''} ${t('metaTitle')}`;
  const metaDescription = `${description ? description + '. ' : ''} ${t('metaDescription')}`;
  const route = useRoute();
  const ogImage = img || 'http://alixan.kz/icons/icon-512.png';

  useSeoMeta({
    title: metaTitle,
    description: metaDescription,
    ogTitle: metaTitle,
    ogDescription: metaDescription,
    ogUrl: `https://takta.kz${route.path}`,
    ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: metaTitle,
    twitterDescription: metaDescription,
    twitterImage: ogImage,
  });
};
