import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "プライバシーポリシー", href: "/privacy" },
  { name: "免責事項", href: "/disclaimer" },
  { name: "お問い合わせ", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <Link href="/">
            <Image
              src="/logo-header@2x.png"
              alt="Ketolier"
              width={112}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-center text-xs text-muted-foreground">
            <p className="mb-2">
              当サイトの情報は医療的助言ではありません。
              体調に不安がある場合は医師にご相談ください。
            </p>
            <p>
              &copy; {new Date().getFullYear()} Ketolier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
