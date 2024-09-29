import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-3 md:py-12 lg:grid-cols-3 sm:gap-1">
          {/* 1st block - Product */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Pricing &amp; Plans
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block - Contact Us */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="mailto:support@stunity.com"
                >
                  Email: support@stunity.com
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="tel:+123456789"
                >
                  Phone: +1 (234) 567-89
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://chatgpt.com/"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block - Social Media */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Follow Us</h3>
            <ul className="flex space-x-3">
              <li>
                <a
                  className="text-indigo-500 hover:text-indigo-400"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-500 hover:text-indigo-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-6">
          <Logo />
          <p className="text-sm text-indigo-200/65 mt-2">
            © 2024 Stunity. All rights reserved.{" "}
            <a className="text-indigo-200/65 hover:text-indigo-500" href="#0">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}