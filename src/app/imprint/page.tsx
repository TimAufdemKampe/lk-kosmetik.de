import path from 'path';
import fs from 'fs';
import { getHtmlFromMarkdown } from '@/lib/getHtmlFromMarkdown';
import { Container } from '@/components/Container';

export default async function ImprintPage() {
  const filePath = path.join(process.cwd(), './src/markdownContent/imprint.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  const markdownHtml = await getHtmlFromMarkdown(content);

  return (
    <Container withMarginTop withMarginBottom className='mx-0 w-[800px]'>
      <div
        className='text-foreground prose mx-4 max-w-full'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: markdownHtml }}
      ></div>
    </Container>
  );
}
