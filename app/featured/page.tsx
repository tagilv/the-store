import { redirect } from "next/navigation";

export default function FeaturedPage() {
  // Redirect /featured to home page since featured items are displayed there
  redirect("/");
}

