import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface TransformationCase {
  id: number;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});

  const cases: TransformationCase[] = [
    {
      id: 1,
      treatment: "Teeth Whitening",
      duration: "1 Session",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1581585828929-ebc61a190102?w=600&h=400&fit=crop",
      description: "Professional whitening treatment achieving 8 shades brighter in just one visit.",
    },
    {
      id: 2,
      treatment: "Dental Veneers",
      duration: "2 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
      description: "Complete smile makeover with custom porcelain veneers for a natural, beautiful result.",
    },
    {
      id: 3,
      treatment: "Invisalign",
      duration: "6 Months",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
      description: "Invisible aligners straightened teeth discreetly, creating a perfectly aligned smile.",
    },
    {
      id: 4,
      treatment: "Dental Implants",
      duration: "3 Months",
      beforeImage: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      description: "Single tooth implant restored full function and aesthetics with a natural-looking crown.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>, caseId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [caseId]: percentage }));
  };

  const handleSliderTouch = (e: React.TouchEvent<HTMLDivElement>, caseId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [caseId]: percentage }));
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Smile Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the incredible before and after results from our patients. 
            Drag the slider to reveal the transformation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-2xl shadow-card bg-surface-elevated">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Before/After Slider */}
              <div
                className="relative aspect-[3/2] cursor-ew-resize select-none overflow-hidden"
                onMouseMove={(e) => handleSliderMove(e, cases[currentSlide].id)}
                onTouchMove={(e) => handleSliderTouch(e, cases[currentSlide].id)}
              >
                {/* After Image (Background) */}
                <img
                  src={cases[currentSlide].afterImage}
                  alt={`After ${cases[currentSlide].treatment}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - (sliderPositions[cases[currentSlide].id] ?? 50)}% 0 0)`,
                  }}
                >
                  <img
                    src={cases[currentSlide].beforeImage}
                    alt={`Before ${cases[currentSlide].treatment}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                  style={{ left: `${sliderPositions[cases[currentSlide].id] ?? 50}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/80 text-primary-foreground text-sm font-medium rounded-full">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  After
                </div>
              </div>

              {/* Info Panel */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                    {cases[currentSlide].treatment}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {cases[currentSlide].duration}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {cases[currentSlide].treatment} Transformation
                </h3>
                <p className="text-muted-foreground mb-6">
                  {cases[currentSlide].description}
                </p>

                {/* Navigation Dots */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {cases.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentSlide
                            ? "bg-primary w-8"
                            : "bg-border hover:bg-muted-foreground"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {currentSlide + 1} / {cases.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-elevated rounded-full shadow-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-elevated rounded-full shadow-card flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          {cases.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                index === currentSlide
                  ? "ring-2 ring-primary ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.afterImage}
                alt={item.treatment}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
