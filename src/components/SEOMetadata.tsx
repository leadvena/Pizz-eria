import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOMetadataProps {
  title: string;
  description: string;
}

export default function SEOMetadata({ title, description }: SEOMetadataProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Pizzeria - Artisanal Wood-fired Pizza`;
    
    // Simple meta description update
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description, location]);

  return null;
}
