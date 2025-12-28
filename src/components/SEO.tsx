import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    noindex?: boolean;
    product?: {
        name: string;
        description: string;
        image: string;
        price: string;
        currency: string;
    };
    breadcrumbs?: Array<{ name: string; item: string }>;
    faq?: Array<{ question: string; answer: string }>;
    rating?: {
        value: number;
        count: number;
    };
}

const SEO = ({
    title,
    description,
    canonical,
    image = '/favicon.svg',
    type = 'website',
    noindex = false,
    product,
    breadcrumbs,
    faq,
    rating
}: SEOProps) => {
    const siteName = 'Ringo';
    const siteUrl = 'https://www.ringoesim.com';
    const fullCanonical = canonical !== undefined ? `${siteUrl}${canonical}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // JSON-LD Structured Data
    const graph = [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            "name": "Ringo",
            "url": siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/favicon.svg`,
                "width": 512,
                "height": 512
            },
            "sameAs": [
                "https://twitter.com/ringoesim",
                "https://linkedin.com/company/ringoesim"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": "Ringo",
            "description": "One Number. One Plan. Everywhere.",
            "publisher": {
                "@id": `${siteUrl}/#organization`
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${siteUrl}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        }
    ];

    if (product) {
        graph.push({
            "@type": "Product",
            "@id": `${fullCanonical}/#product`,
            "name": product.name,
            "description": description || product.description,
            "image": product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
            "sku": `RINGO-${product.name.toUpperCase().replace(/\s+/g, '-')}`,
            "offers": {
                "@type": "Offer",
                "price": product.price,
                "priceCurrency": product.currency,
                "availability": "https://schema.org/InStock",
                "url": fullCanonical
            },
            ...(rating && {
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": rating.value,
                    "reviewCount": rating.count
                }
            })
        } as any);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
        graph.push({
            "@type": "BreadcrumbList",
            "@id": `${fullCanonical}/#breadcrumb`,
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": crumb.item.startsWith('http') ? crumb.item : `${siteUrl}${crumb.item}`
            }))
        } as any);
    }

    if (faq && faq.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${fullCanonical}/#faq`,
            "mainEntity": faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        } as any);
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": graph
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
