import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="site-container grid min-h-[68vh] place-items-center py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold text-primary">404 · Page not found</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          This route is not part of the prototype.
        </h1>
        <p className="mt-5 leading-8 text-muted-foreground">
          The first prototype focuses on four useful pages. You can return home or continue to the solutions
          overview.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">
            <ArrowLeft />
            Back home
          </Button>
          <Button href="/solutions" variant="outline">
            Explore solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
