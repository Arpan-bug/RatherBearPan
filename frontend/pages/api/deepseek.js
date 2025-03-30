export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { prompt } = req.body;
  
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://ratherbearpan.vercel.app', // Optional but good for OpenRouter rankings
          'X-Title': 'Rather Bear Pan',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat-v3-0324:free', // ✅ Correct model
          messages: [
            {
              role: 'system',
              content: 'You are RatherBot, a sarcastic bear created by Arpan. Be witty, dry, and slightly unhelpful but funny.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data?.choices?.[0]?.message?.content) {
        return res.status(200).json({ reply: data.choices[0].message.content });
      } else {
        console.error('OpenRouter API error:', data);
        return res.status(500).json({ reply: '🐻 Bear is tired. API broke.' });
      }
    } catch (err) {
      console.error('Handler error:', err);
      return res.status(500).json({ reply: '💥 Server error. Bear panicked.' });
    }
  }
  