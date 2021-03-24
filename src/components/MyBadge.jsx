import React from 'react';
import { Badge } from 'react-bootstrap';

export default function MyBadge({ text, color }) {
  return (
    <Badge variant={color ?? 'secondary'}>{text ?? 'no text inserted'}</Badge>
  );
}
