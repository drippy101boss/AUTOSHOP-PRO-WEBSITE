"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">AutoShop Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="/#roi-calculator" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Calculate ROI
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/results" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Results
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-slate-900 font-black px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all tracking-wide">
            <Link href="/contact">BOOK DEMO</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#roi-calculator"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculate ROI
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/results"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-black text-lg shadow-lg tracking-wide">
              <Link href="/contact">BOOK DEMO</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
