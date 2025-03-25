import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Redirecting to Neusym documentation...',
};

export default async function DocsPage() {
  try {
    redirect('http://docs.neusym.com/');
  } catch (error) {
    console.error('Redirect failed:', error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting to documentation...</h1>
          <p>If you are not redirected automatically, please click the link below:</p>
          <a 
            href="http://docs.neusym.com/" 
            className="text-blue-500 hover:text-blue-700 underline mt-2 inline-block"
          >
            Go to Documentation
          </a>
        </div>
      </div>
    );
  }
}
