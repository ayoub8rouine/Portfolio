export interface ChatbotResponse {
  text: string;
  suggestions?: string[];
}

export async function getChatbotResponse(userInput: string): Promise<ChatbotResponse> {
  try {
    const response = await fetch('http://localhost:8080/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput }),
    });

    if (!response.ok) {
      throw new Error('Server error');
    }

    const data = await response.json();
    return {
      text: data.text,
      suggestions: data.suggestions,
    };
  } catch (error) {
    return {
      text: 'Sorry, there was a problem connecting to the server. Please try again later.',
      suggestions: [],
    };
  }
}