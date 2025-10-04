export function WhyChooseUs() {
  return (
    <section className="px-6 py-16 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We are passionate about connecting art lovers with exceptional
            pieces that resonate with their personal style and vision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-sans text-xl font-medium mb-3">
              Carefully Curated
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every piece in our collection is hand-selected for its quality,
              uniqueness, and artistic merit.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-xl font-medium mb-3">
              Independent & Personal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As an independent seller, we offer personalized service and expert
              guidance to help you find the perfect piece.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-xl font-medium mb-3">
              Netherlands Based
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Located in the Netherlands, we have access to exceptional European
              art and emerging artists from the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
