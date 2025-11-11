import { type FC } from "react";

const ApiCall: FC = () => {
  const fetchWithTimeout = async (url: string, timeout: number) => {
    const controller = new AbortController();
    const id = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      await fetch(url, { signal: controller.signal });
      clearTimeout(id);
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.error("Request timed out");
      } else if (error instanceof Error) {
        console.log("error.message", error.message);
      } else {
        console.log("error", error);
      }
    }
  };

  return (
    <div>
      <button
        onClick={() => fetchWithTimeout("http://localhost:3000/posts", 100)}
      >
        Timeout feature
      </button>

      <button>Abort feature</button>
    </div>
  );
};

export default ApiCall;
