import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Genres } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
async function GenreDropdown() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map(genre => (
          <DropdownMenuItem key={genre.id} className="cursor-pointer">
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;
