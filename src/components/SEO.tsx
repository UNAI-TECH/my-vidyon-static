import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    imageAlt?: string;
    article?: boolean;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

const SEO = ({
    title,
    description,
    keywords = "school ERP, educational institution management, student management system, attendance tracking, school administration software",
    image = '/og-image.png',
    imageAlt = "My Vidyon - School ERP Platform",
    article = false,
    author,
    publishedTime,
    modifiedTime
}: SEOProps) => {
    const location = useLocation();
    const siteUrl = 'https://www.myvidyon.com';
    const currentUrl = `${siteUrl}${location.pathname}`;
    const fullTitle = `${title} | MyVidyon (Vidyon)`;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={`${title} | My Vidyon`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
            <meta property="og:site_name" content="My Vidyon" />
            <meta property="og:locale" content="en_US" />
            {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {article && author && <meta property="article:author" content={author} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={`${title} | My Vidyon`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
            <meta name="twitter:site" content="@MyVidyon" />
            <meta name="twitter:creator" content="@MyVidyon" />

            {/* Structured Data (BreadcrumbList) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": siteUrl
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": currentUrl
                        }
                    ]
                })}
            </script>

            {/* WebPage Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": title,
                    "description": description,
                    "url": currentUrl,
                    "inLanguage": "en-US",
                    "isPartOf": {
                        "@type": "WebSite",
                        "name": "My Vidyon",
                        "url": siteUrl
                    },
                    "breadcrumb": {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": siteUrl
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": title,
                                "item": currentUrl
                            }
                        ]
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
