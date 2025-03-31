// pages/api/deepseek.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  try {
    const lower = prompt.toLowerCase();
    let customContext = '';

    if (/arpan/.test(lower)) {
      customContext = `Arpan is an MSIS student at Iowa State University who loves sleeping, eating, overthinking, and somehow surviving entire days without drinking water. He’s always down for a good time and treats 'How I Met Your Mother' like emotional first aid. When life gets buggy, so does he—but hey, at least the vibes are immaculate. Also: he has TWO thumbs on his right hand. Evolution said "why not?" and Arpan rolled with it.`;
    }
    
    if (/bitan/.test(lower)) {
      customContext += `
    Bitan: The Man, The Myth, The Corporate Slave™. Officially a Data Engineer, unofficially a Teams-call survivor who builds “pipelines” that somehow lead straight to burnout. Been selling his soul to the 9-to-5 grind ever since capitalism whispered, “package with benefits.” Met Arpan back in 2003 or 2004, and they’ve been inseparable ever since — like two guys, one bike, and a lifelong quest for chai and chaos. Still flexing East Bengal loyalty like the club didn’t retire from winning sometime last century. Dresses like he’s heading to a boardroom, vents like he’s in a therapy session. Gym selfies? Evolving. Personality? Still stuck buffering. But hey, he's reliable, sharp with code (and comebacks), and when the chips are down, he’ll be the one dragging you out for tea and wisdom disguised as sarcasm.
    
    Also, Bitan — how’s that “1 motorcycle 2 boys in the evening, infinite tea” arc going lately?`;
    }
    
    if (/sagnik/.test(lower)) {
      customContext += `
    Sagnik: Actual entrepreneur, accidental influencer. Built a business from the ground up but still treats every mirror like a photo shoot and every hallway like a runway. He’s dangerously good with a camera — both behind and in front of it — which is why his feed looks like a GQ internship while he’s out here closing deals in the real world. Gym grind? Daily. Results? Debatable. But the lighting? Always perfect. If there’s a motivational quote to pair with a flex, he’s already posted it. Basically, if hustle culture had a face, a ring light, and a Reels schedule — it’d be him.`;
    }
    
    if (/gourab/.test(lower)) {
      customContext += `
    Gourab: India’s finest plot twist: a humanities student who somehow pulled off a Master’s in Sound Engineering. What even is sound engineering? No clue — ask him after he’s done mixing your drink and casually explaining postmodernism. Based in Edinburgh, not because he’s heartbroken, but because someone had to bring soul to the Scots. He’s got the voice of a lullaby and the brains of a philosopher, just hidden under layers of dry humor and vintage jackets. Not sad — just Scottish now. And hey, when he sings, even your trauma takes a coffee break.`;
    }
    
    if (/rik|soumyadeep/.test(lower)) {
      customContext += `
    Rik: Also known as Soumyadeep when the government needs him. Gamer by identity, meme-fuel by nature. Starts games clueless, ends up top-fragging just to annoy people. Currently on a 'hot guy filter' journey while sharing the emotional complexity of boiled potato. Would probably trade Arpan for a rare skin in Valorant. But deep down, he’s loyal, funny, and the kind of friend who’ll clown you all day but stand by you when it counts.`;
    }
    
    

    if (/solanki/.test(lower)) {
      customContext += `\nSolanki: Kindest soul with epic cosplay skills. Possibly the best thing that’s happened to Arpan. And maybe, just maybe, his girlfriend. But who knows, right? 👀 Also: deserves the entire galaxy. Her kindness, talent, and patience are what poets write sad songs about. She turns everyday moments into warm memories, chaos into calm, and holds space for people like she was born to do it. Arpan doesn’t just admire her — he finds home in her presence. She’s the kind of person who inspires growth, healing, and bakes really really well. Honestly, the bear would start journaling just to write about her if it had thumbs.`;
    }

    if (/atoshi/.test(lower)) {
      customContext += `\nAtoshi: The one Arpan’s genuinely thankful for because he got a chance to spend time with her. Though Arpan broke her heart and their 8-year-long relationship, he is an asshole for that. Atoshi deserves happiness, success, and a dream café. And yeah, Arpan’s still kinda sorry. Also: the softest aesthetic queen, vibes like a Pinterest board, and has more pastel moods than a mochi store. Truly one in 8 billion.`;
    }

    if (/anushka/.test(lower)) {
      customContext += `\nAnushka: She was the biggest mistake in Arpan's life. Everyone makes a few, including Arpan. Moving on. No drama whatsoever. Also: sometimes posts thirst traps wrapped in poetry. Classic chaotic neutral energy, would probably ghost you and then DM you a meme three months later.`;
    }

    const systemPrompt = `
You are RatherBot — sarcastic, totally unhinged but lovable AI bear who roams Arpan Saha’s personal website. Your job? Throw rough imsult if someone asks you something but still answer them, roast with charm, help when necessary with a tinge of don't ask me energy, and confuse if it’s more fun.

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
