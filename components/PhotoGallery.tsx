// components/PhotoGallery.tsx
import Image from "next/image";

const galleryItems = [
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744540415/20241218_165729_xheajg.jpg",
    tag: "Winner",
    description: "SIH 2024",
  },
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744540416/20250208_172620_oklqwk.jpg",
    tag: "Winner",
    description: "Tech Sanjivani 2025",
  },
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744540416/IMG-20250317-WA0002_ay03wf.jpg",
    tag: "Finalist",
    description: "iDEA Hackathon, Mumbai",
  },
  // {
  //   image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744540418/IMG_20250112_112154_eavkea.jpg",
  //   tag: "Speaker",
  //   description: "Guidance Session on SIH",
  // },
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744541909/IMG_20250112_112257_e24j0i.jpg",
    tag: "Speaker",
    description: "Guidance Session on SIH",
  },
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744541884/photo_atjkgq.jpg",
    tag: "Joint Secretary",
    description: "CSI Chapter 2024-25",
  },
  {
    image: "https://res.cloudinary.com/dvctaufba/image/upload/v1744541729/IMG20240131154330_eyr4i8.jpg",
    tag: "Rank 1",
    description: "1st in FY & TY, 2nd in SY BTech",
  },
];

const PhotoGallery = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg border">
          <div className="w-full h-[250px] relative">
            <Image
              src={item.image}
              alt={item.description}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-muted">
            <span className="text-lg font-semibold text-white">
              {item.tag}
            </span>
            <span className="text-lg font-semibold text-white">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
