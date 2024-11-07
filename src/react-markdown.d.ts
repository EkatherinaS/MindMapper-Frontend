declare module 'react-markdown' {
    import { ComponentType } from 'react';
  
    export interface ReactMarkdownProps {
      children?: string;
      remarkPlugins?: any[];
      rehypePlugins?: any[];
    }
  
    const ReactMarkdown: ComponentType<ReactMarkdownProps>;
    export default ReactMarkdown;
  }