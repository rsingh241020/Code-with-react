import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-=[]{}';

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Auto-generate password on every change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-center text-white mt-4">Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        
        {/* Password Input and Button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            onClick={passwordGenerator}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Generate
          </button>
        </div>

        {/* Length Slider */}
        <div className="flex text-sm gap-x-2 mb-4 items-center">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        {/* Number & Character Checkboxes */}
        <div className="flex gap-x-4 text-sm">
          <label className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
