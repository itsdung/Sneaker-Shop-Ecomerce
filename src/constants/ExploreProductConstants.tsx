import { StaticImageData } from "next/image";
import am1 from '@/assets/images/sneaker/air-max-01.jpg'
import am10 from '@/assets/images/sneaker/air-max-10.jpg'
import am15 from '@/assets/images/sneaker/air-max-15.jpg'
import am180 from '@/assets/images/sneaker/air-max-180.jpg'
import am27 from '@/assets/images/sneaker/air-max-27.jpg'
import am43 from '@/assets/images/sneaker/air-max-43.jpg'
import am50 from '@/assets/images/sneaker/air-max-50.jpg'
import am90 from '@/assets/images/sneaker/air-max-90.jpg'

interface IExploreProduct{
    name: string;
    img: StaticImageData;
    link: string;
}
  
  export const exploreProductData: IExploreProduct[] = [
    {
      name: 'Air Max 1',
      img: am1,
      link: '/'
    },
    {
      name: 'Air Max 10',
      img: am10,
      link: '/'
    },
    {
      name: 'Air Max 27',
      img: am27,
      link: '/'
    },
    {
        name: 'Air Max 43',
        img: am43,
        link: '/'
      },
      {
        name: 'Air Max 50',
        img: am50,
        link: '/'
      },
      {
        name: 'Air Max 90',
        img: am90,
        link: '/'
      },
      {
        name: 'Air Max 15',
        img: am15,
        link: '/'
      },
      {
        name: 'Air Max 180',
        img: am180,
        link: '/'
      }
  ];