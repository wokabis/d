'use client';

import React, { useState } from 'react';
import { NavigationItem } from '@/lib/payload/types';
import { Sidebar } from './Sidebar';
import { MobileMenu } from './MobileMenu';
import { TabBar } from './TabBar';
import { NavigationButtons } from './NavigationButtons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SearchTrigger } from '@/components/search/SearchTrigger';

/**
 * Props for the PageLayout component
 */
interface PageLayoutProps {
  /** Array of top-level navigation items */
  navigation: NavigationItem[];
  /** Source repository, linked from the sidebar when configured */
  repoUrl?: string;
  /** Page content to render in the main area */
  children: React.ReactNode;
}

/**
 * Main page layout wrapper with responsive navigation
 * Manages the mobile menu open/close state internally.
 *
 * @param props - Component props
 * @param props.navigation - Array of navigation items to display in sidebar/menu
 * @param props.repoUrl - Source repository, linked from the sidebar when set
 * @param props.children - Page content to render in the main content area
 *
 */
export function PageLayout({ navigation, repoUrl, children }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1020]">
      <header className="md:hidden sticky top-0 z-30 bg-[#121936]/80 backdrop-blur border-b border-[#1a2246] px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleMobileMenu}
            className="p-2 -ml-2 text-[#e6e9f5] hover:bg-[#1a2246] rounded-md transition-colors active:bg-[#232c5a] touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <SearchTrigger className="mx-3 min-w-0 flex-1" />
          <ThemeToggle />
        </div>
      </header>

      <MobileMenu
        navigation={navigation}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        repoUrl={repoUrl}
      />

      <div className="flex">
        <Sidebar navigation={navigation} repoUrl={repoUrl} />

        <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-20 bg-[#121936]/80 backdrop-blur border-b border-[#1a2246]">
            <TabBar />
            <NavigationButtons navigation={navigation} />
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-16">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
