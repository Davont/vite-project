import React from 'react';

export interface HelloProps {
  className?: string;
  name: string;
}

export function Hello({ className, name }: HelloProps) {
  return <div>Hasdasellos {name}</div>;
}
