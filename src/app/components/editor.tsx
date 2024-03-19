"use client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { abcdef } from "@uiw/codemirror-themes-all";

const languages = {
  javascript: javascript(),
  python: python(),
  java: java(),
  c: cpp(), // Use clike for both C and C++
  cpp: cpp(),
};

import React, { useState } from "react";

const Editor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const extensions = (languages as any)[selectedLanguage];
  console.log(code);
  return (
    <div>
      {selectedLanguage && ( // Optional: Render selection only if a language is chosen
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-[yellow] text-black"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
        </select>
      )}
      <CodeMirror
        value={code}
        onChange={(value: any) => setCode(value)}
        extensions={[extensions]} // Use the appropriate language extension
        theme={abcdef} // Optional: Set a theme (see available themes)
        height="400px" // Optional: Set height
      />
    </div>
  );
};

export default Editor;
