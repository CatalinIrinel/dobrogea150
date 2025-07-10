import { ContactPage } from '@/components/pages/Contact';

const api =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_LINK
    : 'http://localhost:5000';

const titluPagina = process.env.NEXT_PUBLIC_NUME;
const link = process.env.NEXT_PUBLIC_LINK;

export async function generateMetadata({ params }) {
  const { categorie } = params;

  const currentUrl = `${process.env.NEXT_PUBLIC_LINK}/contact`;
  const descriereSeo = ` ${process.env.NEXT_PUBLIC_DESCRIERE}`;
  const pozaSeo = process.env.NEXT_PUBLIC_IMG;

  return {
    icons: {
      icon: process.env.NEXT_PUBLIC_ICON,
    },
    title: `${titluPagina} - Contact`,
    description: descriereSeo,
    keywords: ['dezvoltare web', ' online', ' romania', titluPagina],
    authors: [{ name: 'Catalin Istratoae' }],
    publisher: 'Catalin Istratoae',
    creator: 'Catalin Istratoae',
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      siteName: titluPagina,
      url: currentUrl,
      type: 'website',
      title: `${titluPagina} - Contact`,
      images: [{ url: link + pozaSeo }],
      description: descriereSeo,
      hashtag: `#${categorie}`,
      locale: 'ro_RO',
    },
    twitter: {
      card: 'summary',
      site: currentUrl,
      title: `${titluPagina} - Contact`,
      description: descriereSeo,
      images: [{ url: link + pozaSeo }],
      domain: process.env.NEXT_PUBLIC_LINK,
    },
  };
}

const Contact = async () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;
