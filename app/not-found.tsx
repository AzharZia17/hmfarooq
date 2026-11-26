import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-ink pb-28 pt-44 text-white sm:pt-56">
      <Container>
        <p className="label text-gold">Error 404</p>
        <h1 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)] text-ember">This page is not on the drawings.</h1>
        <p className="prose-lead mt-6 max-w-md text-white/70">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className={`${buttonVariants({ size: "lg" })} mt-10`}>Back to home</Link>
      </Container>
    </section>
  );
}
