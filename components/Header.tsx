import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';
import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

function Headers() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 dark:bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className="cursor-pointer dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Headers;
