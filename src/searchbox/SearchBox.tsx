import { useState } from "react";
import type { ChangeEvent, FC } from "react";

const SearchBox: FC = () => {
  // Example data — replace with your own
  const data: string[] = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Cherry",
    "Coconut",
    "Grapes",
    "Guava",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Papaya",
    "Peach",
    "Pear",
    "Pineapple",
    "Plum",
    "Strawberry",
    "Watermelon",
  ];

  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (value: string): void => {
    setInputValue(value);
    setShowSuggestions(false);
  };

  return (
    <div style={{ width: "250px", margin: "50px auto", position: "relative" }}>
      <input
        type="text"
        placeholder="Search fruit..."
        value={inputValue}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        onFocus={() => inputValue && setShowSuggestions(true)}
        style={{
          width: "100%",
          padding: "8px",
          // boxSizing: "border-box",
        }}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            borderTop: "none",
            maxHeight: "150px",
            overflowY: "auto",
            position: "absolute",
            width: "100%",
            background: "green",
            zIndex: 1000,
          }}
        >
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && suggestions.length === 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            borderTop: "none",
            background: "#cd1313ff",
            padding: "8px",
            position: "absolute",
            width: "100%",
          }}
        >
          No results found
        </div>
      )}
    </div>
  );
};

export default SearchBox;
