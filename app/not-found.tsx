import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-navy-deep pt-40 pb-24 text-white">
      <Container>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-white/75">The page you are looking for does not exist.</p>
        <Link href="/" className={`${buttonVariants()} mt-8`}>Back to Home</Link>
      </Container>
    </section>
  );
}
