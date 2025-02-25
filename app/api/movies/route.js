// app/api/movies/route.js

import fetch from 'node-fetch';

async function POST(request, response) {
    try {
        const { inputValue } = await request.json();

        const apiResponse = await fetch('https://api.langflow.astra.datastax.com/lf/4f986ddb-cef3-4502-be4e-095c5f8f4bcf/api/v1/run/c3447f71-1507-478f-97ba-430a20fc11db?stream=false', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.EXTERNAL_API_TOKEN}`,
                'Content-Type': 'application/json',
                'x-api-key': process.env.EXTERNAL_API_KEY,
            },
            body: JSON.stringify({
                input_value: inputValue,
                // Add other necessary fields here
            }),
        });

        if (!apiResponse.ok) {
            return response.status(apiResponse.status).json({ error: 'Failed to fetch data from external API' });
        }

        const data = await apiResponse.json();
        return response.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return response.status(500).json({ error: 'An error occurred while fetching data' });
    }
}

export default { POST };
