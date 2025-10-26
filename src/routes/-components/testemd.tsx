import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import './md.css';

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="markdown-container">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          code(props: any) {
            const { node, inline, className, children, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <pre className="code-block">
                <code className={className} {...rest}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="inline-code" {...rest}>
                {children}
              </code>
            );
          },
          h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
          h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
          h3: ({ children }) => <h3 className="markdown-h3">{children}</h3>,
        }}
      />
    </div>
  );
}