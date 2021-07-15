import "./styles.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  const markPrev =
    "![gif](https://media.giphy.com/media/3ohs7Ns2UQYJWPi9WM/giphy.gif)";
  const onChange = (e) => {
    setMarkDown(e.target.value);
  };
  const [markDown, setMarkDown] = useState(markPrev);
  return (
    <main>
      <section className="markdown-area">
        <textarea className="input" value={markDown} onChange={onChange} />
        <article className="result">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
