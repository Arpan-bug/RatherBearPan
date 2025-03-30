import { useState } from 'react';

export default function RatherBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('🧠 Thinking...');

    try {
      const res = await fetch('/api/deepseek', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.reply || '🤯 Bear forgot what it was thinking.');
    } catch (err) {
      console.error('❌ DeepSeek error:', err);
      setResponse('🐻 Server went hiking. Try again.');
    }

    setLoading(false);
    setInput('');
  };

  return (
    <div className="fixed bottom-35 left-3/4 sm:left-[22%] md:left-[18%] lg:left-[15%] z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#8B5E3C] text-white px-4 py-2 rounded-full shadow hover:bg-[#73492C] transition"
        >
          🐻 Talk to RatherBot
        </button>
      ) : (
        <div className="w-80 bg-[#FEF7EC] border border-[#F9C06B] rounded-xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold text-[#4B4032]">RatherBot 🤖</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500 text-lg font-bold"
            >
              ×
            </button>
          </div>

          <p className="text-xs text-gray-600 italic mb-3">
            Sarcasm powered by DeepSeek. Blame Arpan.
          </p>

          {response && (
            <div className="text-sm text-gray-800 mb-3 border rounded p-2 bg-white">
              <strong>RatherBot:</strong> {response}
            </div>
          )}

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something dumb"
            className="w-full px-3 py-2 border border-[#F9C06B] rounded mb-2 text-sm"
          />

          <button
            onClick={handleSend}
            className="w-full bg-[#8B5E3C] text-white py-1.5 rounded-md hover:bg-[#73492C] transition"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      )}
    </div>
  );
}
