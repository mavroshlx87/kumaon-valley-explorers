import React from 'react';

interface SchemaLDProps {
  /** JSON-LD object to serialize */
  data: Record<string, unknown>;
}

/**
 * Renders a <script type="application/ld+json"> with the provided data.
 * The component does not affect visual layout and is safe for static export.
 */
export const SchemaLD: React.FC<SchemaLDProps> = ({ data }) => {
  const json = JSON.stringify(data, null, 2);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
};
