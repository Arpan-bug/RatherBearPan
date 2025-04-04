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
    <div className="fixed bottom-28 left-12 sm:left-16 md:left-32 lg:left-36 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#8B5E3C] text-white px-4 py-2 rounded-full shadow hover:bg-[#73492C] transition"
        >
          🐻 Talk to RatherBot
        </button>
      ) : (
        <div className="w-80 max-h-[70vh] bg-[#FEF7EC] dark:bg-[#2C2113] border border-[#F9C06B] dark:border-yellow-700 rounded-xl shadow-lg p-4 flex flex-col justify-between overflow-hidden transition-colors duration-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-bold text-[#4B4032] dark:text-[#FFD39F]">RatherBot 🐻</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-lg font-bold"
            >
              ×
            </button>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-400 italic mb-3">
            Sarcasm: 100%. Accuracy: Arpan-ish.
          </p>

          {response && (
            <div className="text-sm text-gray-800 dark:text-gray-200 mb-3 border border-[#F9C06B] dark:border-yellow-700 rounded p-2 bg-white dark:bg-[#1F1B16] overflow-y-auto max-h-40">
              <strong className="text-[#8B5E3C] dark:text-yellow-500">RatherBot:</strong>{' '}
              <span>{loading ? '...' : response}</span>
            </div>
          )}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask Anything"
            className="w-full px-3 py-2 border border-[#F9C06B] dark:border-yellow-700 rounded mb-2 text-sm resize-none bg-white dark:bg-[#1F1B16] text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
            rows={2}
          />

          <button
            onClick={handleSend}
            className="w-full bg-[#8B5E3C] text-white py-1.5 rounded-md hover:bg-[#73492C] transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      )}
    </div>
  );
}
