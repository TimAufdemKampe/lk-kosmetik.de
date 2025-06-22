import path from 'path';
import fs from 'fs';
import { getHtmlFromMarkdown } from '@/lib/getHtmlFromMarkdown';
import { Container } from '@/components/Container';

export default async function PrivacyPolicyPage() {
  const filePath = path.join(
    process.cwd(),
    './src/markdownContent/privacy-policy.md'
  );
  const content = fs.readFileSync(filePath, 'utf-8');
  const markdownHtml = await getHtmlFromMarkdown(content);

  return (
    <Container withMarginTop withMarginBottom>
      <div
        className='text-foreground prose mx-4 max-w-full'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: markdownHtml }}
      ></div>
    </Container>
  );
}
