'use server';
export const handleSubmit=(formData)=>{
  console.log(formData);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users',{
       method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Дополнительные заголовки, если необходимо
      },
      body: JSON.stringify(formData),
    });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}