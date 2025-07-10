'use client';
import { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import Underline from '@editorjs/underline';
import ChangeCase from 'editorjs-change-case';
import AlignmentBlockTune from 'editorjs-text-alignment-blocktune';
import Image from '@editorjs/image'

export default function Editor({ data, onChange }) {
  const editorRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        data: data || {},
        autofocus: true,
        onReady: () => setIsReady(true),
        onChange: async () => {
          const content = await editor.save();
          onChange(content); // send content to parent
        },
        tools: {
          header: Header,
          list: List,
          textAlignment: AlignmentBlockTune,
          paragraph: Paragraph,
          changeCase: ChangeCase,
          underline: Underline,
          image: Image,
          // Add other tools here
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return <div id="editorjs" className="border p-4 rounded-md" />;
}
