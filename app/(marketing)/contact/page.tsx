import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { title: 'Contact — intelliprop' };

export default function ContactPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">contact us</h1>
        <p className="lead mt-4 max-w-2xl mx-auto">get in touch with our team for support, sales inquiries, or general questions.</p>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-bgAlt p-8 md:p-12 text-center">
            <h2 className="h2 mb-4">email us</h2>
            <p className="text-muted mb-6">for support, sales inquiries, or general questions, reach out to:</p>
            <a 
              href="mailto:admin@intelliprop.com.au" 
              className="text-primary text-xl font-semibold hover:underline inline-block mb-8"
            >
              admin@intelliprop.com.au
            </a>
            <div className="mt-8">
              <Button href="mailto:admin@intelliprop.com.au">send email</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

