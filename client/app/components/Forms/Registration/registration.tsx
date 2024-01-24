'use server';
export const registration = async (formData, updateData, user) => {
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
    updateData({
      ...user,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
    });
    console.log('Data updated successfully:', result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
