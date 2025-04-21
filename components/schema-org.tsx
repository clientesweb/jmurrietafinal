"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

interface SchemaOrgProps {
  title?: string
  description?: string
  canonicalUrl?: string
  imageUrl?: string
  type?: "WebPage" | "Product" | "Article" | "Organization" | "BreadcrumbList" | "FAQPage" | "ItemList"
  productData?: {
    name: string
    description: string
    price: number
    currency: string
    sku: string
    availability: string
    brand: string
    imageUrl: string
    ratingValue?: number
    reviewCount?: number
    category?: string
    offers?: Array<{
      price: number
      priceCurrency: string
      availability: string
      url: string
      priceValidUntil?: string
    }>
  }
  articleData?: {
    datePublished: string
    dateModified: string
    author: string
    category?: string
  }
  breadcrumbData?: Array<{
    name: string
    item: string
  }>
  faqData?: Array<{
    question: string
    answer: string
  }>
  itemListData?: {
    itemListOrder?: "Ascending" | "Descending" | "Unordered"
    numberOfItems?: number
    itemListElement: Array<{
      "@type": "ListItem"
      position: number
      url: string
      name: string
      image?: string
      description?: string
    }>
  }
}

export function SchemaOrg({
  title,
  description,
  canonicalUrl,
  imageUrl,
  type = "WebPage",
  productData,
  articleData,
  breadcrumbData,
  faqData,
  itemListData,
}: SchemaOrgProps) {
  const pathname = usePathname()
  const baseUrl = "https://jmurrietapcp.com"
  const currentUrl = canonicalUrl || `${baseUrl}${pathname}`

  // Datos básicos para todas las páginas
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: currentUrl,
    ...(imageUrl && { image: imageUrl }),
  }

  // Datos específicos según el tipo
  let schemaData = { ...baseSchema }

  if (type === "Product" && productData) {
    schemaData = {
      ...baseSchema,
      sku: productData.sku,
      brand: {
        "@type": "Brand",
        name: productData.brand,
      },
      ...(productData.category && { category: productData.category }),
      offers: productData.offers
        ? productData.offers.map((offer) => ({
            "@type": "Offer",
            price: offer.price,
            priceCurrency: offer.priceCurrency,
            availability: offer.availability,
            url: offer.url,
            ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
          }))
        : {
            "@type": "Offer",
            price: productData.price,
            priceCurrency: productData.currency,
            availability: productData.availability,
            url: currentUrl,
          },
      ...(productData.ratingValue && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: productData.ratingValue,
          reviewCount: productData.reviewCount || 0,
          bestRating: 5,
          worstRating: 1,
        },
      }),
    }
  } else if (type === "Article" && articleData) {
    schemaData = {
      ...baseSchema,
      headline: title,
      datePublished: articleData.datePublished,
      dateModified: articleData.dateModified,
      author: {
        "@type": "Person",
        name: articleData.author,
      },
      ...(articleData.category && { articleSection: articleData.category }),
      publisher: {
        "@type": "Organization",
        name: "J. Murrieta",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo-murrieta.png`,
          width: 600,
          height: 60,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": currentUrl,
      },
    }
  } else if (type === "BreadcrumbList" && breadcrumbData) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbData.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item.startsWith("http") ? item.item : `${baseUrl}${item.item}`,
      })),
    }
  } else if (type === "FAQPage" && faqData) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }
  } else if (type === "ItemList" && itemListData) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      ...(itemListData.itemListOrder && { itemListOrder: itemListData.itemListOrder }),
      ...(itemListData.numberOfItems && { numberOfItems: itemListData.numberOfItems }),
      itemListElement: itemListData.itemListElement,
    }
  } else if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "J. Murrieta",
      url: baseUrl,
      logo: `${baseUrl}/images/logo-murrieta.png`,
      sameAs: [
        "https://www.facebook.com/jmurrietapcp",
        "https://www.instagram.com/jmurrietapcp",
        "https://www.youtube.com/jmurrietapcp",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-9-351-537-1671",
        contactType: "customer service",
        areaServed: "AR",
        availableLanguage: "Spanish",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "La Sierrita 191",
        addressLocality: "Villa del Dique",
        addressRegion: "Córdoba",
        postalCode: "5862",
        addressCountry: "AR",
      },
    }
  }

  return (
    <Script
      id={`schema-org-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  )
}

export default SchemaOrg
