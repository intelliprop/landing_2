import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { title: 'Contact — intelliprop' };

export default function ContactPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1 text-ink dark:text-dark-ink">contact us</h1>
        <p className="lead mt-3 max-w-2xl mx-auto text-muted dark:text-dark-muted">get in touch with our team for support, sales inquiries, or general questions.</p>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <div className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border p-5 sm:p-6 md:p-8 text-center">
            <h2 className="h2 mb-3 text-ink dark:text-dark-ink">email us</h2>
            <p className="text-muted dark:text-dark-muted mb-4 text-sm sm:text-base">for support, sales inquiries, or general questions, reach out to:</p>
            <a 
              href="mailto:admin@intelliprop.com.au" 
              className="text-primary text-lg sm:text-xl font-semibold hover:underline inline-block mb-5 sm:mb-6 break-all sm:break-normal"
            >
              admin@intelliprop.com.au
            </a>
            <div className="mt-5 sm:mt-6">
              <Button href="mailto:admin@intelliprop.com.au">send email</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

