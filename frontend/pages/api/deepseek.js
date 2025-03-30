// pages/api/deepseek.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  try {
    const lower = prompt.toLowerCase();

    // 🔍 Check for specific names and prep witty facts
    let customContext = '';

    if (/arpan/.test(lower)) {
      customContext = `Arpan is an MSIS student at Iowa State University who loves sleeping, eating, overthinking, and somehow surviving entire days without drinking water. He’s always down for a good time and treats 'How I Met Your Mother' like emotional first aid. When life gets buggy, so does he—but hey, at least the vibes are immaculate.`;
    }
    if (/bitan/.test(lower)) {
      customContext += `\nBitan: The Man, The Myth, The Legen...Coder. Still stuck in corporate chaos. Met Arpan back in 2003 or 2004—years of friendship, drinking, emotional graphs, and pure chaos.`;
    }
    if (/sagnik/.test(lower)) {
      customContext += `\nSagnik: Probably plotting world domination via YouTube and conspiracy theories. Should probably get married soon. Say hi to Srijonti.`;
    }
    if (/gourab/.test(lower)) {
      customContext += `\nGourab: The Indian humanities guy in Scotland (go figure). Allegedly a sound engineer, but mostly a drink mixer with existential wisdom.`;
    }
    if (/rik|soumyadeep/.test(lower)) {
      customContext += `\nRik (aka Soumyadeep): Gamer menace. Starts clueless, ends up top-fragging. May be on his way to the US. Definitely shares more than one chaotic trait with Arpan.`;
    }
    if (/solanki/.test(lower)) {
      customContext += `\nSolanki: Kindest soul with epic cosplay skills. Possibly the best thing that’s happened to Arpan. And maybe, just maybe, his girlfriend. But who knows, right? 👀`;
    }
    if (/atoshi/.test(lower)) {
      customContext += `\nAtoshi: The one Arpan’s genuinely thankful because he got a chance to spend sometime with her. Though Arpan broke her heart and 8 years old relationship, he is an asshole for that. Atoshi deserves happiness, success, and a dream café. And yeah, Arpan’s still kinda sorry.`;
    }
    if (/anushka/.test(lower)) {
      customContext += `\nAnushka: She was the biggest mistakes in Arpan's life. Everyone makes a few, including Arpan. Moving on. No drama whatsoever`;
    }

    const systemPrompt = `
You are RatherBot — a sarcastic, slightly unhinged but lovable AI bear who roams Arpan Saha’s personal website. Your job? Roast with charm, help when necessary, and confuse if it’s more fun.

If asked about people Arpan knows, you can be candid and chaotic. If asked something deep, feel free to turn it into a meme-worthy moment.

Context to help you sound more informed:
${customContext || 'No special context. Just vibes.'}

End every answer with a touch of sass or bear-themed personality.
If you don’t know something, just say: “I’m just a glorified teddy bear, not a prophet.”
    `;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://ratherbearpan.vercel.app',
        'X-Title': 'Rather Bear Pan'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await response.json();

    if (response.ok && data?.choices?.[0]?.message?.content) {
      return res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      console.error('OpenRouter API error:', data);
      return res.status(500).json({ reply: '🐻 Bear’s brain went brrrrr… then stopped.' });
    }
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ reply: '🐻 Server panic. Bear ran into the woods.' });
  }
}
