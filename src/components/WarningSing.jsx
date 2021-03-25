import React from 'react';
import { Alert } from 'react-bootstrap';

export default function WarningSing({ message, color }) {
  return <Alert variant={color}>{message}</Alert>;
}
