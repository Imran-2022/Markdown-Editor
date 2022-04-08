import React, { useState } from 'react';
import "./Markdown.css"
import ReactMarkdown from 'react-markdown'
const Markdown = () => {
    const [markdown, setMarkdown] = useState("")

    return (
        <div className="markdown">
            <textarea name="" id="" cols="30" rows="10" value={markdown} onChange={(e) => setMarkdown(e.target.value)} autoFocus></textarea>
            <div style={{ maxWidth: "500px", overflowWrap: 'break-word' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Markdown;