import { permanentRedirect } from "next/navigation";

// The content of this page now lives on /about ("How we work"); keep old links working.
export default function WhyChooseUsPage() {
  permanentRedirect("/about");
}
