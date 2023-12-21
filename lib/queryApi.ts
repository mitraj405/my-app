// queryApi.ts in the lib folder

const LONGSHOT_API_KEY = 'd0f6b79813d7aa5bc697841df8cdbdc1906cf527'; // Replace with your actual secret token
const LONGSHOT_ENDPOINT = 'https://api-v2.longshot.ai/custom/api/generate/instruct';
//const LONGSHOT_API_KEY = process.env.LONGSHOT_API_KEY;

interface LongshotResponse {
  copies: { content: string }[];
  citations: string[];
  status: string;
  message: string;
  credits_used: number;
}

async function query(prompt: string): Promise<LongshotResponse> {
    //console.log('API Key:', LONGSHOT_API_KEY);

  try {
    const response = await fetch(LONGSHOT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LONGSHOT_API_KEY}`
      },
      
      body: JSON.stringify({
        text: prompt // Your prompt text
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: LongshotResponse = await response.json();
   // console.log(data);
    return data; // The response data from LongShot AI
  } catch (error) {
    console.error('Error querying LongShot AI:', error);
    throw error; // Rethrow to handle it in the calling function
  }
}

export { query };
