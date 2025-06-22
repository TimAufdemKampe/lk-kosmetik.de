import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getHtmlFromMarkdown(markdown: string): Promise<string> {
  const { content: rawContent } = matter(markdown);

  const processedContent = await remark().use(html).process(rawContent);
  return processedContent.toString();
}
