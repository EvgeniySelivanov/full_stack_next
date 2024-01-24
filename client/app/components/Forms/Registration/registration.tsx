'use server';

import { getSession } from 'next-auth/react';

export const registration = async (formData) => {
  const session = await getSession();
  try {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    if (response.ok) {

      session.data =response;
      console.log('Data updated successfully:', result);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
