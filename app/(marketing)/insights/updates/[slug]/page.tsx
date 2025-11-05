type Params = { params: { slug: string } };

export default function UpdatePost({ params }: Params) {
  return (
    <section className="container-page py-16">
      <h1 className="h1 mb-4">update: {params.slug}</h1>
      <p className="text-muted">this is a placeholder for the “{params.slug}” update. replace with CMS-backed content later.</p>
    </section>
  );
}


