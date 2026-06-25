'use client';

import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div
        className="grid min-h-[480px] place-items-center rounded-[24px] border border-emerald-200 bg-emerald-50 p-8 text-center"
        role="status"
      >
        <div className="max-w-md">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-600 text-white">
            <CheckCircle2 className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-foreground">Your prototype enquiry is ready.</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            This is a demonstration success state. No message has been sent, and the production contact
            destination still needs to be configured.
          </p>
          <Button className="mt-6" onClick={() => setSubmitted(false)} variant="outline">
            Submit another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Full name" required />
        <Field label="Organization" name="organization" placeholder="Business or organization" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Work email" name="email" placeholder="name@company.com" required type="email" />
        <Field label="Phone number" name="phone" placeholder="+265 ..." type="tel" />
      </div>

      <label className="grid gap-2 text-sm font-semibold text-foreground">
        What can we help with?
        <select
          className="h-12 rounded-xl border border-input bg-background px-3.5 text-sm font-normal text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
          defaultValue=""
          name="service"
          required
        >
          <option disabled value="">
            Select a solution or service
          </option>
          <option>POS software and card machines</option>
          <option>MRA EIS workflow</option>
          <option>Enterprise software</option>
          <option>UX/UI design</option>
          <option>Website development</option>
          <option>Full-stack application</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-foreground">
        Tell us about the business need
        <textarea
          className="min-h-36 resize-y rounded-xl border border-input bg-background px-3.5 py-3 text-sm font-normal leading-6 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          name="message"
          placeholder="What are you trying to improve, replace, connect, or launch?"
          required
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
        <input
          className="mt-1 size-4 rounded border-input accent-[#1652A6]"
          name="consent"
          required
          type="checkbox"
        />
        <span>
          I agree that these details may be used to respond to this enquiry. Production privacy terms are
          still pending legal review.
        </span>
      </label>

      <Button className="w-full sm:w-fit" disabled={loading} size="lg" type="submit">
        {loading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
        {loading ? 'Preparing enquiry…' : 'Request a consultation'}
      </Button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel';
}

function Field({ label, name, placeholder, required = false, type = 'text' }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label}
      <input
        className="h-12 rounded-xl border border-input bg-background px-3.5 text-sm font-normal text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
