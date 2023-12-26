import { getDiscoverMovies } from '@/lib/getMovies';
import CarouselBanner from '@/components/CarouselBanner';

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
