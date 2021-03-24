import React from 'react';
import { Alert } from 'react-bootstrap';

export default function WarningSing({ message }) {
  return <Alert variant='danger'>{message ?? 'No message'}</Alert>;
}
