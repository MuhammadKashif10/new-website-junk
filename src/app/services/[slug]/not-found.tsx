import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <div className="container-x py-24 text-center">
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>Service not found</h1>
      <Link href="/services" className="link-underline mt-6 inline-block text-sm">Back to all services</Link>
    </div>
  );
}
